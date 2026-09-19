namespace Terrasoft.Configuration{
	using System;
	using System.Collections.Generic;
	using System.Runtime.Serialization;
	using System.ServiceModel;
	using System.ServiceModel.Activation;
	using System.ServiceModel.Web;
	using Terrasoft.Core.Entities;
	using Terrasoft.Web.Common;


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
		public List<EquipmentRequestDto>
            GetRequestsByContact(Guid contactId)
        {
            var queryService =
                new EquipmentRequestQueryService(
                    UserConnection);

            return queryService.GetByContact(contactId);
        }
	}
}



