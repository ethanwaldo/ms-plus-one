import {
  S, ICON, ROUNDS, SHOW_SLOTS, SPEC_ICON,
  comparisonRows, fmt, kindFor, scoreItem, specName, wornPiece
} from "./loot.js";

export default function PlayerSheet({ row, round, drop, onBack }) {
  const stage = row.stages.find(entry => entry.id === round) || row.stages[0];
  const gear = S.gear[row.person.id] || {};
  const speaking = row.specId;
  const weights = S.weights[speaking] || {};
  const worn = wornPiece(gear, drop, weights);
  const icon = SPEC_ICON[row.person.raid] || "inv_misc_questionmark";
  const roundLabel = ROUNDS.find(entry => entry[0] === stage.id)[1];
  const compare = comparisonRows(drop, worn, weights);
  const twoHand = drop.hand === "twohand" || drop.slot === "twohand";
  const slotNote = drop.slot === "finger"
    ? "Compared with the weaker of the two rings."
    : drop.slot === "trinket" ? "Compared with the weaker of the two trinkets." : "";

  return (
    <div className="sheet-wrap">
      <button id="back" type="button" onClick={onBack}>Back</button>
      <div className="sheet">
        <div className="identity">
          <div className="face">
            <img alt="" src={`${ICON}${icon}.jpg`} />
            <span className="letter">{row.person.name[0]}</span>
          </div>
          <div>
            <h2>{row.person.name}</h2>
            <p className="muted">
              {specName(speaking)}{speaking === row.person.raid ? " · main spec" : " · off spec"}. +{S.before[row.person.id] || 0} tonight before this drop.
            </p>
          </div>
        </div>
        <p><strong>{roundLabel}.</strong> {stage.why}</p>
        <p className="muted">
          Against {drop.name}. Wearing {row.wearing}. {fmt(row.now)} now, {fmt(row.next)} with the drop. {slotNote}
        </p>
        {!twoHand && compare.length ? (
          <ul className="compare">
            {compare.map(entry => entry.counted ? (
              <li key={entry.stat}><span>{entry.label}</span><span className="muted">{entry.had} worn</span><span>{entry.amount} drop</span></li>
            ) : (
              <li key={entry.stat}><span>{entry.label}</span><span className="miss">Not on this spec</span></li>
            ))}
          </ul>
        ) : null}
        <ul className="gear">
          {SHOW_SLOTS.map(slot => {
            const item = gear[slot];
            return (
              <li key={slot}>
                <span className="muted">{slot}.</span> {item ? `${item.name} (${item.ilvl})` : "empty"}
                {item ? ` · ${fmt(scoreItem(item, weights, kindFor(slot)))}` : ""}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
