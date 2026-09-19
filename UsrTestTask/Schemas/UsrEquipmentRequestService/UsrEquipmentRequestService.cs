namespace Terrasoft.Configuration{
	using System;
	using System.Collections.Generic;
	using System.Runtime.Serialization;
	using System.ServiceModel;
	using System.ServiceModel.Activation;
	using System.ServiceModel.Web;
	using Terrasoft.Core.Entities;
	using Terrasoft.Web.Common;

	[DataContract]
	public class EquipmentRequestDto
	{
		[DataMember(Name = "name")]
		public string Name {get; set;}
	
		[DataMember(Name = "priority")]
		public string Priority {get; set;}
	
		[DataMember(Name = "totalAmount")]
		public decimal TotalAmount {get; set;}
	
		[DataMember(Name = "executionDate")]
		public DateTime? ExecutionDate{get; set;}
	}

	[ServiceContract]
	[AspNetCompatibilityRequirements(
		RequirementsMode = AspNetCompatibilityRequirementsMode.Required
	)]
	public class UsrEquipmentRequestService : BaseService
	{
		[OperationContract]
		[WebInvoke(
			Method = "GET",
			RequestFormat = WebMessageFormat.Json,
			ResponseFormat = WebMessageFormat.Json,
			BodyStyle = WebMessageBodyStyle.Bare
		)]
		public List<EquipmentRequestDto> GetRequestsByContact(Guid contactId){
			var result = new List<EquipmentRequestDto>();

			var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager,
				"UsrEquipmentRequest"); //офіційний приклад також будує ESQ через UserConnection.EntitySchemaManager

			var nameColumn = esq.AddColumn("UsrName");

			var priorityColumn = esq.AddColumn("UsrPriority.Name");

			var totalAmountColumn = esq.AddColumn("UsrTotalAmount");

			var executionDateColumn = esq.AddColumn("UsrExecutionDate");

			executionDateColumn.OrderByAsc();

			esq.Filters.Add(
				esq.CreateFilterWithParameters(
					FilterComparisonType.Equal,
					"UsrContact",
					contactId));
			var entities = esq.GetEntityCollection(UserConnection);

			foreach(var entity in entities){
				var executionDateValue = entity.GetColumnValue(executionDateColumn.Name);

				result.Add(new EquipmentRequestDto{
					Name = entity.GetTypedColumnValue<string>(nameColumn.Name),

					Priority = entity.GetTypedColumnValue<string>(priorityColumn.Name),

					TotalAmount = entity.GetTypedColumnValue<decimal>(totalAmountColumn.Name),

					ExecutionDate = executionDateValue == null
					? (DateTime?)null
					: Convert.ToDateTime(
						executionDateValue
					)
				});
			}
			
			return result;
		}
	}
}



