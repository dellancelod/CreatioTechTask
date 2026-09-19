namespace Terrasoft.Configuration
{
    using System;
    using System.Collections.Generic;
    using Terrasoft.Core;
    using Terrasoft.Core.Entities;

    public class EquipmentRequestQueryService
    {
        private readonly UserConnection _userConnection;

        public EquipmentRequestQueryService(
            UserConnection userConnection)
        {
            _userConnection = userConnection;
        }

        public List<EquipmentRequestDto> GetByContact(Guid contactId)
        {
            var result = new List<EquipmentRequestDto>();

            var esq = new EntitySchemaQuery(
                _userConnection.EntitySchemaManager,
                "UsrEquipmentRequest"); //офіційний приклад також будує ESQ через UserConnection.EntitySchemaManager

            var nameColumn =
                esq.AddColumn("UsrName");

            var priorityColumn =
                esq.AddColumn("UsrPriority.Name");

            var totalAmountColumn =
                esq.AddColumn("UsrTotalAmount");

            var executionDateColumn =
                esq.AddColumn("UsrExecutionDate");

            // Сортування по даті виконання ASC
            executionDateColumn.OrderByAsc();

            // WHERE UsrContact = contactId
            esq.Filters.Add(
                esq.CreateFilterWithParameters(
                    FilterComparisonType.Equal,
                    "UsrContact",
                    contactId));

            var entities =
                esq.GetEntityCollection(_userConnection);

            foreach (var entity in entities)
            {
                result.Add(new EquipmentRequestDto
                {
                    Name =
                        entity.GetTypedColumnValue<string>(
                            nameColumn.Name),

                    Priority =
                        entity.GetTypedColumnValue<string>(
                            priorityColumn.Name),

                    TotalAmount =
                        entity.GetTypedColumnValue<decimal>(
                            totalAmountColumn.Name),

                    ExecutionDate =
                        GetNullableDateTime(
                            entity,
                            executionDateColumn.Name)
                });
            }

            return result;
        }

        private static DateTime? GetNullableDateTime(
            Entity entity,
            string columnName)
        {
            var value = entity.GetColumnValue(columnName);

            if (value == null || value == DBNull.Value)
            {
                return null;
            }

            return Convert.ToDateTime(value);
        }
    }
}