  namespace Terrasoft.Configuration
{
	using System;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Entities.Events;

	public static class EquipmentRequestRules
	{
	    public static decimal CalculateTotal(
	        int quantity,
	        decimal unitPrice)
	    {
	        return quantity * unitPrice;
	    }
	
	    public static void Validate(
	        int quantity,
	        DateTime? executionDate)
	    {
	        if (quantity <= 0){
				throw new InvalidOperationException(
					"Кількість має бути більше нуля!"
				);
			}
			if (executionDate.HasValue &&
	            executionDate.Value.Date < DateTime.Today)
			{
				throw new InvalidOperationException(
					"Дата виконання не може бути в минулому!"
				);
			}
	    }
	}
}