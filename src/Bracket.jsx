import { useCallback, useEffect, useMemo } from "react";
import {
  ReactFlow, ReactFlowProvider, Background, Controls, ControlButton, Handle, Position, BaseEdge,
  useReactFlow, useStore
} from "@xyflow/react";
import { ICON as ICON_URL, SPEC_ICON } from "./loot.js";
import { buildGraph, ICON } from "./graph.js";

function PersonNode({ data }) {
  const icon = SPEC_ICON[data.person.raid] || "inv_misc_questionmark";
  return (
    <button
      type="button"
      className={`who nopan ${data.tone}`}
      style={{ width: ICON, height: ICON }}
      onMouseEnter={event => data.hover(event.currentTarget, data.lines, "right")}
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
        className="nopan"
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

  return (
    <ReactFlowProvider key={serial}>
      <Board graph={graph} unhover={unhover} />
    </ReactFlowProvider>
  );
}

function fittedViewport({ x, y, width, height }, screenW = window.innerWidth, screenH = window.innerHeight) {
  const narrow = screenW < 700;
  const padLeft = narrow ? 16 : 40;
  const padRight = narrow ? 16 : 320;
  const padTop = 120;
  const padBottom = narrow ? 230 : 30;
  const availW = screenW - padLeft - padRight;
  const availH = screenH - padTop - padBottom;
  const zoom = narrow
    ? Math.max(0.6, Math.min(1, availH / height))
    : Math.min(1.4, availW / width, availH / height);
  const top = padTop + Math.max(0, (availH - height * zoom) / 2);
  return { x: padLeft - x * zoom, y: top - y * zoom, zoom };
}

function Board({ graph, unhover }) {
  const flow = useReactFlow();
  const paneW = useStore(state => state.width);
  const paneH = useStore(state => state.height);
  const start = useMemo(() => fittedViewport(graph.bounds), [graph]);
  const fit = useCallback(
    () => flow.setViewport(fittedViewport(graph.bounds, paneW || undefined, paneH || undefined), { duration: 200 }),
    [flow, graph, paneW, paneH]
  );

  useEffect(() => {
    if (paneW && paneH) flow.setViewport(fittedViewport(graph.bounds, paneW, paneH));
  }, [flow, graph, paneW, paneH]);

  return (
    <ReactFlow
      nodes={graph.nodes}
      edges={graph.edges}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      defaultViewport={start}
      onMoveStart={unhover}
      colorMode="dark"
      nodesDraggable={false}
      nodesConnectable={false}
      elementsSelectable={false}
      minZoom={0.2}
      maxZoom={3}
    >
      <Background color="#2a2723" gap={24} size={1.5} />
      <Controls position="bottom-left" showInteractive={false} showFitView={false}>
        <ControlButton onClick={fit} title="Fit" aria-label="Fit">
          <svg viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" /></svg>
        </ControlButton>
      </Controls>
    </ReactFlow>
  );
}
