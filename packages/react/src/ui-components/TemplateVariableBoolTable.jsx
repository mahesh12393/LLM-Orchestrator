import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
const TemplateVariableBoolTable = ({
  show,
  onCancel,
  dialogProp,
  onChange,
}) => {
  const [variables, setVariables] = useState({});
  useEffect(() => {
    setVariables(dialogProp.value ? JSON.parse(dialogProp.value) : {});
  }, [dialogProp]);

  const onClose = () => {
    onChange(variables);
    onCancel(false);
  };

  const toggleVariableRequired = (v) => {
    setVariables((prevState) => {
      return {
        ...prevState,
        [v]: !prevState[v],
      };
    });
  };

  const portalElement = document.getElementById("portal-root");
  const component = show ? (
    <>
      {show && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: "auto",
            width: "100%",
            height: "100%",
            backgroundColor: "#f0f0f0",
            opacity: 0.8,
            zIndex: 1500,
          }}
        ></div>
      )}
      {show && (
        <div
          style={{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: "auto",
            position: "fixed",
            zIndex: 2000,
            width: "50%",
            boxShadow:
              "0 14px 28px rgba(0,0,0,0.05), 0 10px 10px rgba(0,0,0,0.05)",
            backgroundColor: "white",
            border: "1px solid #f0f0f0",
            padding: 36,
            borderRadius: "8px",
            height: "50%",
          }}
        >
          <Button design="Negative"  onClick={onClose} icon="decline"></Button>
          <div>
            {Object.keys(variables).map((v, i) => {
              return (
                <div key={i}>
                  {v} : {variables[v] ? "Required" : "Not Required"}{" "}
                  <Button design="Emphasized"
                    onClick={() => {
                      toggleVariableRequired(v);
                    }}
                  >
                    Toggle
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  ) : null;
  return createPortal(component, document.body);
};

export default TemplateVariableBoolTable;
