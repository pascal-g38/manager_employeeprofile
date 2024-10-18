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
            }
           }      
          });
        });  
    