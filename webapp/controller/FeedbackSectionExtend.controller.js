sap.ui.define([
    "sap/ui/core/mvc/ControllerExtension"
    ], (ControllerExtension) => {
	"use strict";

return ControllerExtension.extend("manageremployeeprofile.controller.FeedbackSectionExtend", {
    _sectionPrefix: "fe::CustomSubSection::FeedbackSection--",
    override: {   
        onInit() { 
             this.getView().byId(this._sectionPrefix + "multilineTextCustomerFeedbackId").attachReady(function(){
                this.getView().byId(this._sectionPrefix + "multilineTextCustomerFeedbackId")
            }.bind(this))            
          }
        }      
      });
    });  
