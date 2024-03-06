import React, { useEffect, useRef, useState } from "react";

const AddNodes = ({ nodesData, node }) => {
  const [nodes, setNodes] = useState({});
  const [open, setOpen] = useState(false);
  // const [categoryExpanded, setCategoryExpanded] = useState({});

  const anchorRef = useRef(null);
  const prevOpen = useRef(open);

  const groupByCategory = (nodes, newTabValue, isFilter) => {
    const accordianCategories = {};
    const result = nodes.reduce(function (r, a) {
      r[a.category] = r[a.category] || [];
      r[a.category].push(a);
      accordianCategories[a.category] = isFilter ? true : false;
      return r;
    }, Object.create(null));
    setNodes(result);
    // setCategoryExpanded(accordianCategories);
  };

  // const handleAccordionChange = (category) => (event, isExpanded) => {
  //   const accordianCategories = { ...categoryExpanded };
  //   accordianCategories[category] = isExpanded;
  //   setCategoryExpanded(accordianCategories);
  // };

  // const handleClose = (event) => {
  //   if (anchorRef.current && anchorRef.current.contains(event.target)) {
  //     return;
  //   }
  //   setOpen(false);
  // };

  // const handleToggle = () => {
  //   setOpen((prevOpen) => !prevOpen);
  // };

  const onDragStart = (event, node) => {
    event.dataTransfer.setData("application/reactflow", JSON.stringify(node));
    event.dataTransfer.effectAllowed = "move";
  };

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  useEffect(() => {
    if (node) setOpen(false);
  }, [node]);

  useEffect(() => {
    if (nodesData) {
      groupByCategory(nodesData);
    }
  }, [nodesData]);

  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1000,
        backgroundColor: "white",
        left: 10,
        top: 10,
        padding: 24,
        border: "1px solid #f0f0f0",
        height: "50vh",
        borderRadius: "8px",
        minWidth: "250px",
        maxWidth: "350px",
        boxShadow: "0 14px 28px rgba(0,0,0,0.05), 0 10px 10px rgba(0,0,0,0.05)",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        Add Nodes
      </div>
      <div>
        {Object.keys(nodes)
          .sort()
          .map((category, i) => {
            return (
              <div
                key={i}
                style={{
                  padding: "16px 0 16px 0",
                  borderBottom: "1px solid #f0f0f0",
                }}
              >
                <div style={{ fontSize: "14px", fontWeight: 600 }}>
                  {category}
                </div>
                <div>
                  {nodes[category].map((node, index) => (
                    <div
                      style={{ marginTop: "8px", cursor: "move" }}
                      draggable
                      key={node.name}
                      onDragStart={(event) => onDragStart(event, node)}
                    >
                      <div style={{ fontSize: "14px" }}>{node.label}</div>
                      <div style={{ fontSize: "14px", color: "#9e9e9e" }}>
                        {node.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AddNodes;
