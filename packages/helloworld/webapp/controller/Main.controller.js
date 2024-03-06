sap.ui.define(
  [
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "helloworld/nodesAPI/NodesUI5/chains/LLMChain",
    "helloworld/nodesAPI/NodesUI5/chatmodels/LLMModel",
  ],
  function (BaseController, JSONModel, LLMChain, LLMModel) {
    "use strict";

    return BaseController.extend("helloworld.controller.Main", {
      onInit: function () {
        var oModel = new JSONModel({ count: 0 });
        this.getView().setModel(oModel);
        var oModel = this.getView().getModel();
        oModel.setProperty(
          "/generatingConfig",
          this.generatingConfig.bind(this)
        );
        oModel.setProperty("/config", "ahhahha");
        oModel.setProperty("/nodeData", this.getNodeData());
      },
      getNodeData: function () {
        const nodeData = [new LLMChain(), new LLMModel()];
        return nodeData;
      },
      generatingConfig: function (callbackFn) {
        //call POST endpoint
        // .then(()=>{
        // ...
        // callbackFn(resp)
        // })
      },
      onIncrement: function () {
        var oModel = this.getView().getModel();
        var iCount = oModel.getProperty("/count");
        oModel.setProperty("/count", iCount + 1);
      },
    });
  }
);
