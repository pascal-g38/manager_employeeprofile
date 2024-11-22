sap.ui.define([
    "sap/ui/core/mvc/ControllerExtension"
    ], (ControllerExtension) => {
	"use strict";

return ControllerExtension.extend("manageremployeeprofile.controller.FeedbackSectionExtend", {
    _sectionPrefix: "fe::CustomSubSection::FeedbackSection--",
    override: {   
        onInit() { 
             this.getView().byId(this._sectionPrefix + "richTextEditorCustomerFeedbackId").attachReady(function(){
                this.getView().byId(this._sectionPrefix + "richTextEditorCustomerFeedbackId")
            }.bind(this))            
          }
        }      
      });
    });  
