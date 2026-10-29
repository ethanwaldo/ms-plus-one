import { useCallback, useEffect, useMemo, useState } from "react";
import Bracket from "./Bracket.jsx";
import PlayerSheet from "./PlayerSheet.jsx";
import {
  S, HEAD_TIP, ICON, QUALITY, STAT_LABEL, STAT_ORDER,
  dropMeta, dropReal, load, paths, randomize
} from "./loot.js";

function DropCard({ drop }) {
  const stats = Object.entries(drop.stats || {})
    .filter(([key]) => key !== "weaponDps")
    .sort((a, b) => (STAT_ORDER.indexOf(a[0]) + 1 || 99) - (STAT_ORDER.indexOf(b[0]) + 1 || 99));
  return (
    <aside id="tip">
      <div className="tip-head">
        {drop.icon ? <img alt="" src={`${ICON}${drop.icon}.jpg`} /> : null}
        <div>
          <h3 style={{ color: QUALITY[drop.quality] || "#e7e2d8" }}>{drop.name}</h3>
          <p className="meta">{dropMeta(drop)}</p>
        </div>
      </div>
      <ul className="stats">
        {stats.map(([key, amount]) => <li key={key}>+{amount} {STAT_LABEL[key] || key}</li>)}
        {drop.dps ? <li>{Number(drop.dps).toFixed(1)} damage per second</li> : null}
      </ul>
    </aside>
  );
}

function Tally() {
  const counts = S.people.filter(person => S.counts[person.id]).map(person => `${person.name} +${S.counts[person.id]}`);
  return (
    <div id="tally">
      {S.last
        ? <><strong>{S.last.name}</strong> won {S.last.ms ? "main spec, +1" : "off spec, no +1"}. </>
        : "Nobody won. "}
      Tonight: {counts.length ? counts.join(" · ") : "everyone +0"}
    </div>
  );
}

function Hover({ tip }) {
  if (!tip) return null;
  const { box, lines, place } = tip;
  const style = place === "below"
    ? { left: Math.min(box.left, window.innerWidth - 336), top: box.bottom + 8 }
    : { left: box.right + 10, top: box.top + box.height / 2, transform: "translateY(-50%)" };
  if (place !== "below" && box.right + 300 > window.innerWidth) {
    Object.assign(style, { left: Math.max(8, box.left - 290) });
  }
  return (
    <div id="hover" className={place === "below" ? "head" : ""} style={style}>
      {lines.map(line => <p key={line}>{line}</p>)}
    </div>
  );
}

export default function App() {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);
  const [tick, setTick] = useState(0);
  const [player, setPlayer] = useState(null);
  const [tip, setTip] = useState(null);

  useEffect(() => {
    load(import.meta.env.BASE_URL)
      .then(() => { randomize(); setReady(true); })
      .catch(err => { console.error(err); setError(true); });
  }, []);

  const rows = useMemo(() => (ready && S.drop ? paths(S.drop) : []), [ready, tick]);
  const hover = useCallback((element, lines, place) => {
    setTip({ box: element.getBoundingClientRect(), lines, place });
  }, []);
  const unhover = useCallback(() => setTip(null), []);
  const open = useCallback((id, round) => { setTip(null); setPlayer({ id, round }); }, []);

  const act = fn => () => { fn(); setPlayer(null); setTip(null); setTick(t => t + 1); };

  if (error) return <p className="muted pad">Could not load the item log.</p>;
  if (!ready) return <p className="muted pad">Loading the item log…</p>;

  const row = player && rows.find(entry => entry.person.id === player.id);

  return (
    <>
      <div className="board">
        {S.drop
          ? <Bracket rows={rows} serial={S.serial} hover={hover} unhover={unhover} open={open} headTips={HEAD_TIP} />
          : <p className="muted pad">No drop in range. Try Random gear.</p>}
      </div>
      <div className="controls">
        <button type="button" onClick={act(randomize)}>Random gear</button>
        <button type="button" onClick={act(dropReal)}>Random item</button>
      </div>
      <Tally />
      {S.drop ? <DropCard drop={S.drop} /> : null}
      <Hover tip={tip} />
      {row ? <PlayerSheet row={row} round={player.round} drop={S.drop} onBack={() => setPlayer(null)} /> : null}
    </>
  );
}
