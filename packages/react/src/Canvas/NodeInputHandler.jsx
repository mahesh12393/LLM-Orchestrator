import React, { useContext, useEffect, useRef, useState } from "react";
import { flowContext } from "../context/ReactFlowContext";
import { Handle, Position, useUpdateNodeInternals } from "reactflow";
import { getInputVariables, isValidConnection } from "../utils/genericHelper";
import { contentStyle } from "./CanvasNode";
import TemplateVariableBoolTable from "../ui-components/TemplateVariableBoolTable";

const NodeInputHandler = ({
  inputAnchor,
  inputParam,
  data,
  disabled = false,
  isAdditionalParams = false,
}) => {
  const ref = useRef(null);
  const { reactFlowInstance } = useContext(flowContext);
  const updateNodeInternals = useUpdateNodeInternals();
  const [position, setPosition] = useState(0);
  const [selectedOptionInputs, setSelectedOptionInputs] = useState({});
  const [optionInputs, setOptionInputs] = useState([]);
  const [selectedOption, setSelectedOption] = useState({});
  const [textareaInputValue, setTextareaInputValue] = useState("");
  const [showVariableFormatDialog, setShowVariableFormatDialog] =
    useState(false);
  const [variableFormatDialogProps, setVariableFormatDialogProps] = useState(
    {}
  );

  const variableObject = (value) => {
    const obj = {};
    const templateValue = data.inputs["template"];
    const inputVariables = getInputVariables(templateValue);
    for (const inputVariable of inputVariables) {
      if (value) {
        if (inputVariable in value) {
          obj[inputVariable] = value[inputVariable];
        } else {
          obj[inputVariable] = false;
        }
      } else {
        obj[inputVariable] = false;
      }
    }
    return obj;
  };
  const onFormatVariableBoolTable = (value) => {
    console.log(value);
    let inputValue = value;
    const obj = variableObject(value);
    if (Object.keys(obj).length) inputValue = JSON.stringify(obj);
    const dialogProp = {
      value: inputValue,
      inputParam,
    };
    setVariableFormatDialogProps(dialogProp);
    setShowVariableFormatDialog(true);
  };

  useEffect(() => {
    if (inputParam) {
      if (inputParam.type == "options") {
        if (Object.keys(data.inputs).length > 0) {
          //loading saved flow
          for (let index = 0; index < inputParam.options.length; index++) {
            //looping through every option and finding the selected option
            if (
              inputParam.options[index].deploymentId ===
              data.inputs[inputParam.name]
            ) {
              let preselected = inputParam.options[index];
              setSelectedOption(preselected);
              setSelectedOptionInputs(
                data.inputs[`${inputParam.name}_parameters`]
              );
              setOptionInputs(inputParam.options);
              break;
            }
          }
        } else {
          //initialising new flow
          setSelectedOption(inputParam.options[0]); //default option
          setOptionInputs(inputParam.options); //parameters associated to the input
          data.inputs[inputParam.name] = inputParam.options[0].deploymentId;
          data.inputs[`${inputParam.name}_parameters`] = {};
          inputParam.options[0].inputParams.forEach((param) => {
            data.inputs[`${inputParam.name}_parameters`][param.name] =
              param.values[3];
          });
          setSelectedOptionInputs(data.inputs[`${inputParam.name}_parameters`]); //parameters associated to that option type
        }
      }

      if (inputParam.type === "string") {
        if (Object.keys(data.inputs).length > 0) {
          //loading saved flow
          setTextareaInputValue(data.inputs[inputParam.name]);
        } else {
          //initialising new flow
        }
      }

      if (inputParam.type === "booleanTable") {
        if (Object.keys(data.inputs).length > 0) {
          //loading saved flow
          let obj;
          if (data.inputs[inputParam.name]) {
            obj = variableObject(data.inputs[inputParam.name]);
          } else {
            obj = variableObject("");
          }
          data.inputs[inputParam.name] = obj;
        } else {
          //initialising new flow
        }
      }
    }
  }, []);

  useEffect(() => {
    if (ref.current && ref.current.offsetTop && ref.current.clientHeight) {
      setPosition(ref.current.offsetTop + ref.current.clientHeight / 2);
      updateNodeInternals(data.id);
    }
  }, [data.id, ref, updateNodeInternals]);

  useEffect(() => {
    updateNodeInternals(data.id);
  }, [data.id, position, updateNodeInternals]);

  return (
    <div ref={ref}>
      {inputAnchor && (
        <div
          style={{
            ...contentStyle.io,
            ...contentStyle.textLeft,
            fontSize: "12px",
          }}
        >
          <Handle
            type="target"
            position={Position.Left}
            key={inputAnchor.id}
            id={inputAnchor.id}
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
            <div>
              {inputAnchor.label}
              {!inputAnchor.optional && (
                <span style={{ color: "red" }}>&nbsp;*</span>
              )}
              {/* {inputAnchor.description && <TooltipWithParser style={{ marginLeft: 10 }} title={inputAnchor.description} />} */}
            </div>
          </div>
        </div>
      )}

      {((inputParam && !inputParam.additionalParams) || isAdditionalParams) && (
        <>
          <div
            style={{
              ...contentStyle.io,
              ...contentStyle.textLeft,
              fontSize: "12px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ padding: "2px" }}>
                {inputParam.label}
                {!inputParam.optional && (
                  <span style={{ color: "red" }}>&nbsp;*</span>
                )}
                {/* {inputParam.description && <TooltipWithParser style={{ marginLeft: 10 }} title={inputParam.description} />} */}
              </div>
              {/* <div style={{ flexGrow: 1 }}></div>
                            {((inputParam.type === 'string' && inputParam.rows) || inputParam.type === 'code') && (
                                <IconButton
                                    size='small'
                                    sx={{
                                        height: 25,
                                        width: 25
                                    }}
                                    title='Expand'
                                    color='primary'
                                    onClick={() =>
                                        onExpandDialogClicked(data.inputs[inputParam.name] ?? inputParam.default ?? '', inputParam)
                                    }
                                >
                                    <IconArrowsMaximize />
                                </IconButton>
                            )} */}
            </div>
            {(inputParam.type === "string" ||
              inputParam.type === "password" ||
              inputParam.type === "number") && (
              <textarea
                rows={inputParam.rows ?? 1}
                placeholder={inputParam.placeholder}
                mode={inputParam.type}
                onChange={(newValue) => {
                  data.inputs[inputParam.name] = newValue.target.value;
                  setTextareaInputValue(newValue.target.value);
                }}
                value={textareaInputValue ?? inputParam.default ?? ""}
                style={{
                  fontFamily:
                    "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
                  fontSize: "12px",
                  padding: "8px",
                  resize: "none",
                  width: "100%",
                  boxSizing: "border-box",
                  borderRadius: "8px",
                  backgroundColor: "#fafafa",
                  border: "1px solid #f0f0f0",
                  fontWeight: 600,
                }}
              />
            )}
            {inputParam.type === "options" && (
              <>
                <select
                  value={selectedOption.deploymentId}
                  onChange={(event) => {
                    let selected = {};
                    for (let index = 0; index < optionInputs.length; index++) {
                      if (
                        optionInputs[index].deploymentId == event.target.value
                      ) {
                        selected = optionInputs[index];
                        break;
                      }
                    }
                    data.inputs[inputParam.name] = event.target.value;
                    if (selected.inputParams) {
                      selected.inputParams.forEach((param) => {
                        data.inputs[`${inputParam.name}_parameters`][
                          param.name
                        ] = param.values[3];
                      });
                    } else {
                      data.inputs[`${inputParam.name}_parameters`] = {};
                    }

                    setSelectedOption(selected);
                    setSelectedOptionInputs(
                      data.inputs[`${inputParam.name}_parameters`]
                    );
                  }}
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
                  {inputParam.options.map((option, id) => (
                    <option key={id} value={option.deploymentId}>
                      {option.modelName} | {option.deploymentId}
                    </option>
                  ))}
                </select>
                {Object.keys(selectedOption).length > 0 &&
                  selectedOption.inputParams &&
                  selectedOption.inputParams.map((param, i) => {
                    return (
                      <div key={i} style={{ marginTop: "8px" }}>
                        <div
                          style={{
                            padding: "2px",
                            textTransform: "capitalize",
                          }}
                        >
                          {param.name.split("_").join(" ")}
                          <span style={{ color: "red" }}>&nbsp;*</span>
                        </div>
                        {param.type === "string" && (
                          <textarea
                            rows={1}
                            mode={param.type}
                            value={selectedOptionInputs[param.name]}
                            onChange={(newValue) =>
                              (data.inputs[`${inputParam.name}_parameters`][
                                param.name
                              ] = newValue)
                            }
                            style={{
                              fontFamily:
                                "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
                              fontSize: "12px",
                              padding: "8px",
                              resize: "none",
                              width: "100%",
                              boxSizing: "border-box",
                              borderRadius: "8px",
                              backgroundColor: "#fafafa",
                              border: "1px solid #f0f0f0",
                              fontWeight: 600,
                            }}
                          />
                        )}
                        {param.type === "number" && (
                          <div
                            className="nodrag"
                            style={{
                              pointerEvents: "all",
                            }}
                          >
                            <input
                              onChange={(event) => {
                                //saving specific parameter value
                                data.inputs[`${inputParam.name}_parameters`][
                                  param.name
                                ] = event.target.value;
                                //updating parameters associated to the option
                                setSelectedOptionInputs((prevState) => {
                                  return {
                                    ...prevState,
                                    [param.name]: event.target.value,
                                  };
                                });
                              }}
                              style={{ width: "100%" }}
                              type="range"
                              min={param.values[0]}
                              max={param.values[1]}
                              step={param.values[2]}
                              value={selectedOptionInputs[param.name]}
                            />
                            <div>{selectedOptionInputs[param.name]}</div>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </>
            )}

            {inputParam.type === "booleanTable" && (
              <>
                {/* {!inputParam?.acceptVariable && (
                                    <JsonEditorInput
                                        disabled={disabled}
                                        onChange={(newValue) => (data.inputs[inputParam.name] = newValue)}
                                        value={data.inputs[inputParam.name] ?? inputParam.default ?? ''}
                                        isDarkMode={customization.isDarkMode}
                                    />
                                )} */}
                {inputParam?.acceptVariable && (
                  <>
                    {/* <Button
                                            sx={{
                                                borderRadius: 25,
                                                width: '100%',
                                                mb: 0,
                                                mt: 2
                                            }}
                                            variant='outlined'
                                            disabled={disabled}
                                            onClick={() => onEditJSONClicked(data.inputs[inputParam.name] ?? '', inputParam)}
                                        >
                                            {inputParam.label}
                                        </Button> */}
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
                      onClick={() => {
                        onFormatVariableBoolTable(
                          data.inputs[inputParam.name] ?? ""
                        );
                      }}
                    >
                      {inputParam.label}
                    </button>
                  </>
                )}
                <TemplateVariableBoolTable
                  show={showVariableFormatDialog}
                  dialogProp={variableFormatDialogProps}
                  onChange={(newValue) => {
                    data.inputs[inputParam.name] = newValue;
                  }}
                  onCancel={() => {
                    setShowVariableFormatDialog(false);
                  }}
                />
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default NodeInputHandler;
