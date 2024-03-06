import React, { useContext } from "react";
import { flowContext } from "../context/ReactFlowContext";
import NodeInputHandler from "./NodeInputHandler";
import NodeOutputHandler from "./NodeOutputHandler";

export const contentStyle = {
  contentHeader: {
    padding: "8px 4px",
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#fafafa",
    borderTop: "1px solid #f0f0f0",
    borderBottom: "1px solid #f0f0f0",
    fontWeight: 500,
    color: "#616161",
    fontSize: "12px",
  },
  io: {
    position: "relative",
    padding: "8px 16px",
    flexGrow: 1,
    color: "#616161",
  },
  left: { left: "-8px" },
  textLeft: { textAlign: "left" },
  right: { right: "-8px" },
  textRight: { textAlign: "right" },
};

export const style = {
  body: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    // boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    minWidth: "250px",
    borderRadius: "8px",
    border: "1px solid #9e9e9e",
    fontSize: "10pt",
  },
  selected: {
    border: "1px solid rgb(33, 150, 243)",
    boxShadow: "0 14px 28px rgba(0,0,0,0.05), 0 10px 10px rgba(0,0,0,0.05)",
  },
  title: {
    position: "relative",
    padding: "8px 32px",
    flexGrow: 1,
    borderRadius: "8px",
    color: "#616161",
    fontWeight: 600,
    fontSize: "12px",
  },
  contentWrapper: {
    padding: "8px 0px",
  },
};

const CanvasNode = ({ data }) => {
  const { deleteNode, duplicateNode } = useContext(flowContext);
  return (
    <div style={{ ...style.body, ...(data.selected ? style.selected : []) }}>
      <div style={{ ...style.title }}>{data.label}</div>
      {(data.inputAnchors.length > 0 || data.inputParams.length > 0) && (
        <div style={{ ...style.contentWrapper }}>
          <div style={{ ...contentStyle.contentHeader }}>Inputs</div>
        </div>
      )}
      {data.inputAnchors.map((inputAnchor, index) => (
        <NodeInputHandler key={index} inputAnchor={inputAnchor} data={data} />
      ))}
      {data.inputParams
        .filter((inputParam) => !inputParam.hidden)
        .map((inputParam, index) => (
          <NodeInputHandler key={index} inputParam={inputParam} data={data} />
        ))}

      {data.inputParams.find((param) => param.additionalParams) && (
        <div
          style={{
            padding: "8px 16px",
            textAlign: "center",
            marginTop:
              data.inputParams.filter((param) => param.additionalParams)
                .length ===
              data.inputParams.length + data.inputAnchors.length
                ? 20
                : 0,
          }}
        >
          <button
            style={{
              padding: "8px 16px",
              fontSize: "12px",
              background: "transparent",
              width: "100%",
              justifyContent: "center",
              display: "flex",
              borderRadius: "30px",
              border: "1px solid #a4c9f5",
              fontWeight: 600,
              color: "#4994ec",
              cursor: "pointer",
              marginBottom: "2px",
            }}
            onClick={() => {}}
          >
            Additional Parameters
          </button>
        </div>
      )}
      {(data.inputAnchors.length > 0 || data.inputParams.length > 0) && (
        <div style={{ ...style.contentWrapper }}>
          <div style={{ ...contentStyle.contentHeader }}>Output</div>
        </div>
      )}

      {data.outputAnchors.map((outputAnchor, index) => (
        <NodeOutputHandler
          key={index}
          outputAnchor={outputAnchor}
          data={data}
        />
      ))}
    </div>
  );
};

export default CanvasNode;
