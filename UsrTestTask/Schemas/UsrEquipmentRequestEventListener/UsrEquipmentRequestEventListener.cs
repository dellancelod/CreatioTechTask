 namespace Terrasoft.Configuration
{
	using System;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Entities.Events;

	
	[EntityEventListener(SchemaName = "UsrEquipmentRequest")]
	public class UsrEquipmentRequestEventListener : BaseEntityEventListener {
		public override void OnSaving(
			object sender,
			EntityBeforeEventArgs e
		)
		{
			base.OnSaving(sender, e);
			
			var entity = (Entity)sender;

			int quantity = entity.GetTypedColumnValue<int>("UsrQuantity");

			decimal unitPrice = entity.GetTypedColumnValue<decimal>("UsrUnitPrice");

			DateTime executionDate = entity.GetTypedColumnValue<DateTime>("UsrExecutionDate");

			if (quantity <= 0){
				throw new InvalidOperationException(
					"Кількість має бути більше нуля!"
				);
			}
			if(executionDate != default(DateTime) &&
				executionDate.Date < DateTime.Today){
				throw new InvalidOperationException(
					"Дата виконання не може бути в минулому!"
				);
			}
			decimal totalAmount = quantity * unitPrice;
			
			entity.SetColumnValue(
				"UsrTotalAmount",
				totalAmount
			);
			
		}
		
	}
}