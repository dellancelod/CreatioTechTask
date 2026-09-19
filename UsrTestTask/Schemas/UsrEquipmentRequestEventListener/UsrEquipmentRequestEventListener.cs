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

			decimal totalAmount = EquipmentRequestRules.CalculateTotal(quantity, unitPrice);

			EquipmentRequestRules.Validate(quantity, executionDate);
			
			entity.SetColumnValue(
				"UsrTotalAmount",
				totalAmount
			);
			
		}
		
	}
}