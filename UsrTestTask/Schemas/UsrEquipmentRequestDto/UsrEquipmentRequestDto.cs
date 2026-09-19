 namespace Terrasoft.Configuration
{
    using System;
    using System.Runtime.Serialization;

    [DataContract]
    public class EquipmentRequestDto
    {
        [DataMember(Name = "name")]
        public string Name { get; set; }

        [DataMember(Name = "priority")]
        public string Priority { get; set; }

        [DataMember(Name = "totalAmount")]
        public decimal TotalAmount { get; set; }

        [DataMember(Name = "executionDate")]
        public DateTime? ExecutionDate { get; set; }
    }
}