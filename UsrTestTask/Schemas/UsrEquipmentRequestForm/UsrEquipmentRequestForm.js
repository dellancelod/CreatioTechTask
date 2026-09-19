define("UsrEquipmentRequestForm", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "Button_hn47qwv",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_hn47qwv_caption)#",
					"color": "warn",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"menuItems": [],
					"clickMode": "default",
					"clicked": {
						"request": "crt.ClosePageRequest"
					}
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_tccxoap",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrEquipmentRequestDS_UsrName_fpmr2b7",
					"control": "$UsrEquipmentRequestDS_UsrName_fpmr2b7",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_qhbipog",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrEquipmentRequestDS_UsrContact_55xniin",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrEquipmentRequestDS_UsrContact_55xniin"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_w4mzhof",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_w4mzhof_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_qhbipog",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_ik7owo4",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrEquipmentRequestDS_UsrPriority_l1eh7wd",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrEquipmentRequestDS_UsrPriority_l1eh7wd"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_myi3nr1",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_myi3nr1_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ik7owo4",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_gzq62s1",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.UsrEquipmentRequestDS_UsrExecutionDate_fpli6oh",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "date",
					"control": "$UsrEquipmentRequestDS_UsrExecutionDate_fpli6oh"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "NumberInput_5l5awhn",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrEquipmentRequestDS_UsrQuantity_r22m533",
					"control": "$UsrEquipmentRequestDS_UsrQuantity_r22m533",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "NumberInput_crngng7",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrEquipmentRequestDS_UsrUnitPrice_k9kwig0",
					"control": "$UsrEquipmentRequestDS_UsrUnitPrice_k9kwig0",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "NumberInput_f1y8ver",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrEquipmentRequestDS_UsrTotalAmount_19nvkwg",
					"control": "$UsrEquipmentRequestDS_UsrTotalAmount_19nvkwg",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Button_vadn57r",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_vadn57r_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.SaveRecordRequest",
						"params": {
							"showSuccessMessage": true
						}
					},
					"clickMode": "default"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 8
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"attributes": {
						"UsrEquipmentRequestDS_UsrName_fpmr2b7": {
							"modelConfig": {
								"path": "UsrEquipmentRequestDS.UsrName"
							}
						},
						"UsrEquipmentRequestDS_UsrContact_55xniin": {
							"modelConfig": {
								"path": "UsrEquipmentRequestDS.UsrContact"
							}
						},
						"UsrEquipmentRequestDS_UsrContact_55xniin_List": {
							"isCollection": true,
							"modelConfig": {
								"sortingConfig": {
									"default": [
										{
											"columnName": "Name",
											"direction": "asc"
										}
									]
								}
							}
						},
						"UsrEquipmentRequestDS_UsrPriority_l1eh7wd": {
							"modelConfig": {
								"path": "UsrEquipmentRequestDS.UsrPriority"
							}
						},
						"UsrEquipmentRequestDS_UsrPriority_l1eh7wd_List": {
							"isCollection": true,
							"modelConfig": {
								"sortingConfig": {
									"default": [
										{
											"columnName": "Name",
											"direction": "asc"
										}
									]
								}
							}
						},
						"UsrEquipmentRequestDS_UsrQuantity_r22m533": {
							"modelConfig": {
								"path": "UsrEquipmentRequestDS.UsrQuantity"
							}
						},
						"UsrEquipmentRequestDS_UsrUnitPrice_k9kwig0": {
							"modelConfig": {
								"path": "UsrEquipmentRequestDS.UsrUnitPrice"
							}
						},
						"UsrEquipmentRequestDS_UsrExecutionDate_fpli6oh": {
							"modelConfig": {
								"path": "UsrEquipmentRequestDS.UsrExecutionDate"
							}
						},
						"UsrEquipmentRequestDS_UsrTotalAmount_19nvkwg": {
							"modelConfig": {
								"path": "UsrEquipmentRequestDS.UsrTotalAmount"
							}
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
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
					},
					"primaryDataSourceName": "UsrEquipmentRequestDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});