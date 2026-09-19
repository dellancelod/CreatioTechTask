define("UsrEquipmentRequestListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "PageTitle",
				"values": {
					"caption": "#MacrosTemplateString(#ResourceString(PageTitle_caption)#)#",
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "LookupQuickFilterByTag",
				"values": {
					"config": {
						"caption": "#ResourceString(LookupQuickFilterByTag_config_caption)#",
						"hint": "#ResourceString(LookupQuickFilterByTag_config_hint)#",
						"icon": "tag-icon",
						"iconPosition": "left-icon",
						"entitySchemaName": null,
						"defaultValue": []
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "LookupQuickFilterByTag_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "LookupQuickFilterByTag_Value"
					}
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "14f0e47c-2e6e-fc08-2dbb-a2bef9413561",
							"code": "PDS_UsrName",
							"caption": "#ResourceString(PDS_UsrName)#",
							"dataValueType": 28
						},
						{
							"id": "0867553b-4be8-f859-8b2d-13a116a7ef6b",
							"code": "PDS_UsrUnitPrice",
							"caption": "#ResourceString(PDS_UsrUnitPrice)#",
							"dataValueType": 32
						},
						{
							"id": "8bc23629-23d2-c3d1-a178-2914fcf32ae0",
							"code": "PDS_UsrPriority",
							"caption": "#ResourceString(PDS_UsrPriority)#",
							"dataValueType": 10
						},
						{
							"id": "b28b35bb-a101-8655-058e-f321e55a0fb8",
							"code": "PDS_UsrName",
							"caption": "#ResourceString(PDS_UsrName)#",
							"dataValueType": 28
						},
						{
							"id": "b21802b7-d209-3b81-0707-322381e6107d",
							"code": "PDS_UsrContact",
							"caption": "#ResourceString(PDS_UsrContact)#",
							"dataValueType": 10
						},
						{
							"id": "eaf952b1-ca28-2474-b54d-075e1f236da8",
							"code": "PDS_UsrQuantity",
							"caption": "#ResourceString(PDS_UsrQuantity)#",
							"dataValueType": 4
						},
						{
							"id": "a658eeee-ff8f-7393-aa38-8ad1920becb9",
							"code": "PDS_UsrTotalAmount",
							"caption": "#ResourceString(PDS_UsrTotalAmount)#",
							"dataValueType": 47
						},
						{
							"id": "610c17ec-6bbb-2454-30a2-239450efa4bd",
							"code": "PDS_UsrExecutionDate",
							"caption": "#ResourceString(PDS_UsrExecutionDate)#",
							"dataValueType": 8
						}
					],
					"placeholder": false
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrUnitPrice": {
						"modelConfig": {
							"path": "PDS.UsrUnitPrice"
						}
					},
					"PDS_UsrPriority": {
						"modelConfig": {
							"path": "PDS.UsrPriority"
						}
					},
					"PDS_UsrContact": {
						"modelConfig": {
							"path": "PDS.UsrContact"
						}
					},
					"PDS_UsrQuantity": {
						"modelConfig": {
							"path": "PDS.UsrQuantity"
						}
					},
					"PDS_UsrTotalAmount": {
						"modelConfig": {
							"path": "PDS.UsrTotalAmount"
						}
					},
					"PDS_UsrExecutionDate": {
						"modelConfig": {
							"path": "PDS.UsrExecutionDate"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "Items_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "LookupQuickFilterByTag_Items",
							"loadOnChange": true
						},
						{
							"name": "SearchFilter_Items",
							"loadOnChange": true
						},
						{
							"name": "Filters_Filter",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig",
					"sortingConfig"
				],
				"values": {
					"default": [
						{
							"direction": "desc",
							"columnName": "UsrName"
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "UsrEquipmentRequestDS"
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"UsrEquipmentRequestDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "UsrEquipmentRequest",
							"loadParameters": {
								"options": {
									"pagingConfig": {
										"rowCount": 1,
										"rowsOffset": -1
									},
									"sortingConfig": {
										"columns": []
									}
								}
							},
							"allowCopyingRecords": false
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"attributes": {
						"UsrName": {
							"path": "UsrName"
						},
						"UsrUnitPrice": {
							"path": "UsrUnitPrice"
						},
						"UsrPriority": {
							"path": "UsrPriority"
						},
						"UsrContact": {
							"path": "UsrContact"
						},
						"UsrQuantity": {
							"path": "UsrQuantity"
						},
						"UsrTotalAmount": {
							"path": "UsrTotalAmount"
						},
						"UsrExecutionDate": {
							"path": "UsrExecutionDate"
						}
					},
					"entitySchemaName": "UsrEquipmentRequest"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});