sap.ui.define([
    "sap/ui/core/mvc/ControllerExtension",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/json/JSONModel"
    ], (ControllerExtension, Filter, FilterOperator, JSONModel) => {
	"use strict";
    
        return ControllerExtension.extend("manageremployeeprofile.controller.SkillSectionExtend", {
        _sectionPrefix: "fe::CustomSubSection::SkillSection--",
        override: {   
            onInit() { 
                this.getView().byId(this._sectionPrefix + "gridListId");
                this.getView().setModel(
                    new JSONModel({
                        id: null,
                    }),
                    "customView"
                )
            },
            routing: {
                async onAfterBinding() {
                    this.getView().getModel("customView").setProperty("/id", (await this.getView().getBindingContext().requestProperty("EmployeeId")) )
                    const SkillsView = this.getView().byId(this._sectionPrefix + "gridListId");
                    const ItemsBinding = SkillsView.getBinding("items");
                    const id = this.getView().getModel("customView").getProperty("/id")
//                    ItemsBinding.filter(new Filter({ path: 'EmployeeId', operator: FilterOperator.EQ , value1: id }));
                }
            }
           }      
          });
        });  
    