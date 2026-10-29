import { useMemo } from "react";
import { ReactFlow, Background, Controls, Handle, Position, BaseEdge } from "@xyflow/react";
import { ICON as ICON_URL, SPEC_ICON } from "./loot.js";
import { buildGraph, ICON } from "./graph.js";

function PersonNode({ data }) {
  const icon = SPEC_ICON[data.person.raid] || "inv_misc_questionmark";
  return (
    <button
      type="button"
      className={`who ${data.tone}`}
      style={{ width: ICON, height: ICON }}
      onMouseEnter={event => data.hover(event.currentTarget, [data.why], "right")}
      onMouseLeave={data.unhover}
      onClick={() => data.open(data.person.id, data.round)}
    >
      <Handle type="target" position={Position.Left} className="ghost-handle" isConnectable={false} />
      <img alt="" src={`${ICON_URL}${icon}.jpg`} draggable={false} />
      <span className="letter">{data.person.name[0]}</span>
      <Handle type="source" position={Position.Right} className="ghost-handle" isConnectable={false} />
    </button>
  );
}

function HeadNode({ data }) {
  return (
    <div className="round-title">
      <span
        onMouseEnter={event => data.hover(event.currentTarget, data.lines, "below")}
        onMouseLeave={data.unhover}
        onClick={event => data.hover(event.currentTarget, data.lines, "below")}
      >
        {data.label}
      </span>
    </div>
  );
}

function WireEdge({ data }) {
  return (
    <BaseEdge
      path={data.d}
      style={{ stroke: data.color, strokeWidth: 2, strokeDasharray: data.dashed ? "5 5" : undefined }}
    />
  );
}

const nodeTypes = { person: PersonNode, head: HeadNode };
const edgeTypes = { wire: WireEdge };

export default function Bracket({ rows, serial, hover, unhover, open, headTips }) {
  const graph = useMemo(() => {
    const built = buildGraph(rows);
    for (const node of built.nodes) {
      Object.assign(node.data, { hover, unhover, open });
      if (node.type === "head") node.data.lines = headTips[node.data.round];
    }
    return built;
  }, [rows, hover, unhover, open, headTips]);

  const fit = instance => {
    const { x, y, width, height } = graph.bounds;
    const narrow = window.innerWidth < 700;
    const padLeft = narrow ? 16 : 40;
    const padRight = narrow ? 16 : 320;
    const padTop = 110;
    const padBottom = narrow ? 230 : 30;
    const availW = window.innerWidth - padLeft - padRight;
    const availH = window.innerHeight - padTop - padBottom;
    const zoom = narrow
      ? Math.max(0.6, Math.min(1, availH / height))
      : Math.min(1.4, availW / width, availH / height);
    const top = padTop + Math.max(0, (availH - height * zoom) / 2);
    instance.setViewport({ x: padLeft - x * zoom, y: top - y * zoom, zoom });
  };

  return (
    <ReactFlow
      key={serial}
      nodes={graph.nodes}
      edges={graph.edges}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      onInit={fit}
      onMoveStart={unhover}
      colorMode="dark"
      nodesDraggable={false}
      nodesConnectable={false}
      elementsSelectable={false}
      minZoom={0.2}
      maxZoom={3}
    >
      <Background color="#2a2723" gap={24} size={1.5} />
      <Controls position="bottom-left" showInteractive={false} />
    </ReactFlow>
  );
}
