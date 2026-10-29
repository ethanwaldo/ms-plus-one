import { CLASS_COLOR, ROUNDS, darker, shownStage } from "./loot.js";

export const COL = 156;
export const GAP = 64;
export const ICON = 44;
const HEAD_Y = -56;

function stackYs(count, slots) {
  const tight = count === slots ? GAP : Math.max(42, GAP * Math.pow(count / slots, 0.85));
  const start = (slots * GAP - count * tight) / 2;
  return Array.from({ length: count }, (_, index) => start + (index + 0.5) * tight);
}

export function buildGraph(rows) {
  const slots = rows.length;
  const shownAt = row => row.stages.map((stage, index) => shownStage(stage) ? index : -1).filter(index => index >= 0);
  const passing = (row, index) => {
    const at = shownAt(row);
    return at.some(i => i < index) && at.some(i => i > index);
  };
  const placed = ROUNDS.map((_, index) => {
    const lane = rows.filter(row => shownStage(row.stages[index]) || passing(row, index));
    const ys = stackYs(lane.length, slots);
    return lane.map((row, order) => ({ row, y: ys[order], stage: row.stages[index], node: shownStage(row.stages[index]) }));
  });
  const yOf = (round, id) => placed[round].find(entry => entry.row.person.id === id).y;

  const nodes = ROUNDS.map(([id, label], index) => ({
    id: `head-${id}`,
    type: "head",
    position: { x: index * COL, y: HEAD_Y },
    data: { round: id, label },
    draggable: false,
    selectable: false
  }));
  placed.forEach((column, index) => {
    for (const entry of column) {
      if (!entry.node) continue;
      const person = entry.row.person;
      nodes.push({
        id: `${person.id}-${index}`,
        type: "person",
        position: { x: index * COL, y: entry.y - ICON / 2 },
        data: {
          person,
          round: entry.stage.id,
          why: entry.stage.id === "equip" ? person.name : entry.stage.why,
          tone: entry.stage.os ? "os" : entry.stage.in ? "" : "out"
        },
        draggable: false,
        selectable: false
      });
    }
  });

  const edges = [];
  for (const row of rows) {
    const indices = shownAt(row);
    const id = row.person.id;
    indices.slice(0, -1).forEach((from, order) => {
      const to = indices[order + 1];
      const next = row.stages[to];
      let d = `M ${from * COL + ICON} ${yOf(from, id)}`;
      for (let j = from + 1; j <= to; j += 1) {
        const left = j * COL;
        d += ` H ${left - (COL - ICON) / 2} V ${yOf(j, id)} H ${left}`;
        if (j < to) d += ` H ${left + ICON}`;
      }
      const base = CLASS_COLOR[row.person.className];
      edges.push({
        id: `${id}-${from}-${to}`,
        source: `${id}-${from}`,
        target: `${id}-${to}`,
        type: "wire",
        data: {
          d,
          color: next.in ? base : darker(base),
          dashed: !!(row.stages[from].os || next.os)
        },
        selectable: false
      });
    });
  }

  const width = (ROUNDS.length - 1) * COL + ICON;
  const height = slots * GAP;
  return { nodes, edges, bounds: { x: 0, y: HEAD_Y, width, height: height - HEAD_Y } };
}
