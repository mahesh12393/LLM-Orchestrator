import React, { useContext, useEffect, useRef, useState } from "react";
import { Handle, Position, useUpdateNodeInternals } from "reactflow";
import { flowContext } from "../context/ReactFlowContext";
import { contentStyle } from "./CanvasNode";
import { isValidConnection } from "../utils/genericHelper";

const NodeOutputHandler = ({ outputAnchor, data, disabled = false }) => {
  const ref = useRef(null);
  const updateNodeInternals = useUpdateNodeInternals();
  const [position, setPosition] = useState(0);
  const [dropdownValue, setDropdownValue] = useState(null);
  const { reactFlowInstance } = useContext(flowContext);

  useEffect(() => {
    if (ref.current && ref.current?.offsetTop && ref.current?.clientHeight) {
      setTimeout(() => {
        setPosition(ref.current?.offsetTop + ref.current?.clientHeight / 2);
        updateNodeInternals(data.id);
      }, 0);
    }
  }, [data.id, ref, updateNodeInternals]);

  useEffect(() => {
    setTimeout(() => {
      updateNodeInternals(data.id);
    }, 0);
  }, [data.id, position, updateNodeInternals]);

  useEffect(() => {
    if (dropdownValue) {
      setTimeout(() => {
        updateNodeInternals(data.id);
      }, 0);
    }
  }, [data.id, dropdownValue, updateNodeInternals]);

  return (
    <div ref={ref}>
      {outputAnchor.type !== "options" && !outputAnchor.options && (
        <div
          style={{
            ...contentStyle.io,
            ...contentStyle.textRight,
            fontSize: "12px",
          }}
        >
          <Handle
            type="source"
            position={Position.Right}
            key={outputAnchor.id}
            id={outputAnchor.id}
            isValidConnection={(connection) =>
              isValidConnection(connection, reactFlowInstance)
            }
            style={{
              height: 10,
              width: 10,
              backgroundColor: data.selected ? "rgb(33, 150, 243)" : "#9e9e9e",
              top: position,
            }}
          />
          <div style={{ padding: "2px" }}>
            <div>{outputAnchor.label}</div>
          </div>
        </div>
      )}
      {data.name !== "ifElseFunction" &&
        outputAnchor.type === "options" &&
        outputAnchor.options &&
        outputAnchor.options.length > 0 && (
          <div
            style={{
              ...contentStyle.io,
              ...contentStyle.textRight,
              fontSize: "12px",
            }}
          >
            <Handle
              type="source"
              position={Position.Right}
              key={outputAnchor.id}
              id={outputAnchor.id}
              isValidConnection={(connection) =>
                isValidConnection(connection, reactFlowInstance)
              }
              style={{
                height: 10,
                width: 10,
                backgroundColor: data.selected
                  ? "rgb(33, 150, 243)"
                  : "#9e9e9e",
                top: position,
              }}
            />
            <select
              onChange={(event) =>
                (data.outputs[outputAnchor.name] = event.target.value)
              }
              style={{
                fontFamily:
                  "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
                fontSize: "12px",
                padding: "8px",
                width: "100%",
                boxSizing: "border-box",
                borderRadius: "8px",
                backgroundColor: "#fafafa",
                border: "1px solid #f0f0f0",
                fontWeight: 600,
              }}
            >
              {outputAnchor.options.map((option, id) => (
                <option key={id} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          // <Box sx={{ p: 2, textAlign: 'end' }}>
          //     <Dropdown
          //         disabled={disabled}
          //         disableClearable={true}
          //         name={outputAnchor.name}
          //         options={outputAnchor.options}
          //         onSelect={(newValue) => {
          //             setDropdownValue(newValue)
          //             data.outputs[outputAnchor.name] = newValue
          //         }}
          //         value={data.outputs[outputAnchor.name] ?? outputAnchor.default ?? 'choose an option'}
          //     />
          // </Box>
        )}
    </div>
  );
};

export default NodeOutputHandler;
