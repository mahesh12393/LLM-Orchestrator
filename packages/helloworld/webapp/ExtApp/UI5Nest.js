sap.ui.define(["sap/ui/core/Control"], function (Control) {
  "use strict";

  return Control.extend("helloworld.ExtApp", {
    metadata: {
      properties: {
        id: { type: "string", defaultValue: "" },
      },
    },

    init: function () {
      Control.prototype.init.apply(this, arguments);

      sap.ui.getCore().attachThemeChanged(this.onThemeChanged, this);
      sap.ui
        .getCore()
        .attachLocalizationChanged(this.onLocalizationChanged, this);
    },

    onThemeChanged: function (oEvent) {
      window["react_onThemeChanged"](
        sap.ui.getCore().getConfiguration().getTheme()
      );
    },

    onLocalizationChanged: function (oEvent) {
      window["react_onLocalizationChanged"](
        sap.ui.getCore().getConfiguration().getLanguage()
      );
    },

    renderer: {
      render: function (oRm, oControl) {
        oRm.write("<div");
        oRm.writeControlData(oControl);
        oRm.writeAttribute("id", oControl.getId());
        oRm.writeAttribute("style", "height: 100%; width: 100%;");
        oRm.write("></div>");
        oControl.reactId = oControl.getId();
        debugger;
      },
    },

    onAfterRendering: function () {
      // debugger
      var param = {
        CurrentLocale: sap.ui.getCore().getConfiguration().getLanguage(),
        Theme: sap.ui.getCore().getConfiguration().getTheme(),
        AnimationMode: sap.ui.getCore().getConfiguration().getAnimationMode(),
        ReactDivName: this.reactId,
        generateConfig: this.getModel().oData.generatingConfig,
        nodeData: this.getModel().oData.nodeData,
      };
      console.log(param);
      this.unloadApp = window["react"](param);
    },

    destroy: function () {
      Control.prototype.destroy.apply(this, arguments);
      this.unloadApp();
      sap.ui.getCore().detachThemeChanged(this.onThemeChanged, this);
      sap.ui
        .getCore()
        .detachLocalizationChanged(this.onLocalizationChanged, this);
    },
  });
});
