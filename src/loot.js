export const ICON = "https://wow.zamimg.com/images/wow/icons/large/";
export const SPEC_ICON = {
  priest_discipline: "spell_holy_powerwordshield",
  druid_restoration: "spell_nature_healingtouch",
  warrior_protection: "ability_warrior_defensivestance",
  paladin_protection: "spell_holy_devotionaura",
  hunter_marksmanship: "ability_marksmanship",
  hunter_survival: "ability_hunter_swiftstrike",
  mage_arcane: "spell_holy_magicalsentry",
  warlock_ds_ruin: "spell_shadow_shadowbolt",
  shaman_stormcaller: "spell_nature_lightning"
};
const CLASS_OF = {
  ethan: "priest", jamie: "druid", jake: "warrior", wilder: "paladin",
  izzy: "hunter", matt: "hunter", emma: "mage", trevor: "warlock", kyle: "shaman"
};
export const CLASS_COLOR = {
  priest: "#FFFFFF", druid: "#FF7C0A", warrior: "#C69B6D", paladin: "#F48CBA",
  hunter: "#AAD372", mage: "#3FC7EB", warlock: "#8788EE", shaman: "#0070DD"
};
export function darker(hex) {
  const n = parseInt(hex.slice(1), 16);
  const scale = 0.45;
  const channels = [n >> 16, n >> 8, n].map(channel => Math.round((channel & 255) * scale).toString(16).padStart(2, "0"));
  return `#${channels.join("")}`;
}
const ARMOR = {
  priest: ["cloth"], mage: ["cloth"], warlock: ["cloth"],
  druid: ["cloth", "leather"],
  hunter: ["cloth", "leather", "mail"], shaman: ["cloth", "leather", "mail"],
  warrior: ["cloth", "leather", "mail", "plate"], paladin: ["cloth", "leather", "mail", "plate"]
};
const WEAPONS = {
  priest: ["staff", "mace", "dagger", "wand"],
  mage: ["sword", "staff", "dagger", "wand", "offhand"],
  warlock: ["sword", "staff", "dagger", "wand", "offhand"],
  druid: ["staff", "mace", "dagger", "fist", "polearm", "offhand"],
  hunter: ["sword", "axe", "polearm", "staff", "dagger", "fist", "bow", "gun", "crossbow"],
  shaman: ["mace", "axe", "dagger", "staff", "fist", "shield", "offhand"],
  warrior: ["sword", "axe", "mace", "polearm", "staff", "fist", "bow", "gun", "crossbow", "shield"],
  paladin: ["sword", "mace", "polearm", "shield"]
};
const RANGED = {
  hunter: ["bow", "crossbow", "gun", "thrown"],
  warrior: ["bow", "crossbow", "gun", "thrown"],
  priest: ["wand"], mage: ["wand"], warlock: ["wand"],
  druid: ["idol"], paladin: ["libram"], shaman: ["totem"]
};
const ALIAS = {
  strength: ["Strength"], agility: ["Agility"], stamina: ["Stamina"], intellect: ["Intellect"],
  spirit: ["Spirit"], attackPower: ["Attack power"], rangedAttackPower: ["Ranged attack power"],
  feralAttackPower: ["Feral attack power"], spellDamage: ["Spell damage"], healing: ["Healing power"],
  fire: ["Fire damage"], nature: ["Nature damage"], shadow: ["Shadow damage"], arcane: ["Arcane damage"],
  holy: ["Holy damage"], frost: ["Frost damage"], spellPenetration: ["Spell penetration"],
  mp5: ["Mana per 5 s"], hit: ["Hit", "Spell hit", "Ranged hit"],
  crit: ["Crit", "Spell crit", "Ranged crit"], haste: ["Attack speed", "Casting speed"],
  expertise: ["Expertise"], armorPenetration: ["Armor penetration"],
  blockValue: ["Block value"], block: ["Block"], defense: ["Defense"],
  dodge: ["Dodge"], parry: ["Parry"], armor: ["Armor"]
};
export const STAT_LABEL = {
  strength: "Strength", agility: "Agility", stamina: "Stamina", intellect: "Intellect", spirit: "Spirit",
  attackPower: "Attack power", rangedAttackPower: "Ranged attack power", feralAttackPower: "Feral attack power",
  spellDamage: "Spell damage", healing: "Healing", fire: "Fire damage", nature: "Nature damage",
  shadow: "Shadow damage", arcane: "Arcane damage", holy: "Holy damage", frost: "Frost damage",
  spellPenetration: "Spell penetration", mp5: "Mana per 5 sec", hit: "Hit", crit: "Critical strike",
  expertise: "Expertise", armorPenetration: "Armor penetration", blockValue: "Block value", block: "Block",
  defense: "Defense", dodge: "Dodge", parry: "Parry", armor: "Armor", bonusArmor: "Bonus armor"
};
export const STAT_ORDER = Object.keys(STAT_LABEL);
const SKIP_STORY = new Set(["armor", "bonusArmor", "weaponDps"]);
export const QUALITY = { 0: "#9d9d9d", 1: "#ffffff", 2: "#1eff00", 3: "#0070dd", 4: "#a335ee", 5: "#ff8000" };
const SLOT_LABEL = {
  head: "Head", neck: "Neck", shoulder: "Shoulder", back: "Back", chest: "Chest", wrist: "Wrist",
  hands: "Hands", waist: "Waist", legs: "Legs", feet: "Feet", finger: "Finger", trinket: "Trinket",
  weapon: "Weapon", ranged: "Ranged"
};
const ARMOR_LABEL = { cloth: "Cloth", leather: "Leather", mail: "Mail", plate: "Plate" };
const HAND_LABEL = { twohand: "Two-hand", onehand: "One-hand", mainhand: "Main hand", offhand: "Off hand" };
const BAND_MIN = 57;
const BAND_MAX = 66;
const ARMOR_SLOTS = ["head", "neck", "shoulder", "back", "chest", "wrist", "hands", "waist", "legs", "feet"];
export const SHOW_SLOTS = ["head", "neck", "shoulder", "back", "chest", "wrist", "hands", "waist", "legs", "feet", "finger1", "finger2", "trinket1", "trinket2", "mainhand", "offhand", "ranged"];

export const S = { items: [], people: [], weights: {}, priority: {}, gear: {}, drop: null, counts: {}, before: {}, rolls: {}, last: null, serial: 0 };
export const ROUNDS = [
  ["gear", "Meant to wear"],
  ["main", "Stat priority"],
  ["upgrade", "Upgrade"],
  ["plus", "MS+1"],
  ["os", "Off spec"],
  ["roll", "Roll"]
];
export const HEAD_TIP = {
  gear: [
    "Is this the gear your character is meant to wear?",
    "Yes: it's your own armor type (plate for Jake and Wilder; mail for Izzy, Matt, and Kyle; leather for Jamie; cloth for Ethan, Emma, and Trevor), or a weapon your role uses. Bows and guns are Izzy's, melee weapons are Matt's, shields and tank weapons are for tanks, and caster weapons are for casters. Rings, necks, cloaks, and trinkets count for everyone. You go on to the main-spec checks.",
    "You can use it, but it isn't meant for you: lighter armor, or a weapon for another role. Off spec only, after main spec passes.",
    "Your class can't equip it at all: you're out."
  ],
  main: [
    "Each spec's stat priority comes from its SixtySim weights, like Agility > Intellect > Ranged attack power.",
    "The item's biggest stat for your spec has to be in your top 6. Weapon damage counts for specs that weigh it."
  ],
  upgrade: ["It beats what you're wearing. A ring or trinket has to beat the weaker of your two, and a two-hander has to beat both hands."],
  plus: ["The lowest count wins, and the dice break a tie. Each win adds +1, and counts reset every night."],
  os: ["If nobody's left after MS+1, anyone who can equip it rolls off spec. The highest roll wins, with no +1."],
  roll: ["Everyone still in rolls 1 to 100. The highest roll wins."]
};
const OWN_ARMOR = {
  priest: "cloth", mage: "cloth", warlock: "cloth", druid: "leather",
  hunter: "mail", shaman: "mail", warrior: "plate", paladin: "plate"
};
const TYPED_SLOTS = ["head", "shoulder", "chest", "wrist", "hands", "waist", "legs", "feet"];
const ROLE = {
  ethan: "healer", jamie: "healer", jake: "tank", wilder: "tank",
  izzy: "ranged", matt: "melee", emma: "caster", trevor: "caster", kyle: "caster"
};
const PRIORITY_DEPTH = 6;
const STAT_KEY = {};
for (const [key, names] of Object.entries(ALIAS)) for (const name of names) STAT_KEY[name] = STAT_KEY[name] || key;

function priorityList(spec) {
  const seen = new Set();
  return (spec.perPoint || [])
    .filter(row => row.weight > 0)
    .sort((a, b) => b.weight - a.weight)
    .map(row => STAT_KEY[row.stat] || row.stat)
    .filter(key => !seen.has(key) && seen.add(key));
}

function weightMap(spec) {
  const map = {};
  for (const key of ["perPoint", "perPercent", "perWeaponDps"]) {
    for (const row of spec[key] || []) map[row.stat] = row.weight;
  }
  return map;
}

function canWear(person, item) {
  const cls = person.className;
  const armor = item.armor || item.armorType;
  if (armor && !(ARMOR[cls] || []).includes(armor)) return false;
  if (item.slot === "ranged" || item.ranged) {
    const kind = item.ranged || item.weapon;
    return !kind || (RANGED[cls] || []).includes(kind) || (WEAPONS[cls] || []).includes(kind);
  }
  if (item.weapon) return (WEAPONS[cls] || []).includes(item.weapon);
  return true;
}

function equipWhy(person, item) {
  const cls = person.className;
  const armor = item.armor || item.armorType;
  if (armor && !(ARMOR[cls] || []).includes(armor)) return `A ${cls} can't wear ${armor}.`;
  const kind = item.slot === "ranged" ? item.ranged || item.weapon : item.weapon;
  if (kind) return `A ${cls} can't use ${kind === "offhand" ? "held off-hands" : `${kind}s`}.`;
  return "Their class can't equip this.";
}

export function scoreItem(item, weights, kind) {
  if (!item || !weights) return 0;
  const stats = Object.assign({}, item.stats || {});
  const dps = item.dps || stats.weaponDps || 0;
  delete stats.weaponDps;
  let total = 0;
  for (const [stat, amount] of Object.entries(stats)) {
    let best = 0;
    for (const name of ALIAS[stat] || []) best = Math.max(best, weights[name] || 0);
    total += amount * best;
  }
  if (dps) {
    const name = kind === "ranged" ? "Ranged weapon DPS" : kind === "offhand" ? "Off-hand weapon DPS" : "Main-hand weapon DPS";
    total += dps * (weights[name] || 0);
  }
  return total;
}

export function kindFor(slot) {
  if (slot === "ranged") return "ranged";
  if (slot === "offhand") return "offhand";
  if (slot === "mainhand" || slot === "twohand" || slot === "weapon") return "weapon";
  return "armor";
}

function wornSlot(item) {
  if (item.slot === "weapon") {
    if (item.hand === "twohand" || item.hand === "mainhand" || item.hand === "onehand") return "mainhand";
    return "offhand";
  }
  if (item.slot === "twohand") return "mainhand";
  return item.slot;
}

function pairSlots(item) {
  if (item.slot === "finger") return ["finger1", "finger2"];
  if (item.slot === "trinket") return ["trinket1", "trinket2"];
  return null;
}

function replacedScore(gear, item, weights) {
  const pair = pairSlots(item);
  if (pair) return Math.min(...pair.map(slot => scoreItem(gear[slot], weights, "armor")));
  if (item.hand === "twohand" || item.slot === "twohand") {
    return scoreItem(gear.mainhand, weights, "weapon") + scoreItem(gear.offhand, weights, "offhand");
  }
  const slot = wornSlot(item);
  return scoreItem(gear[slot], weights, kindFor(slot));
}

export function wornPiece(gear, item, weights) {
  const pair = pairSlots(item);
  if (pair && weights) {
    return pair
      .map(slot => ({ item: gear[slot], score: scoreItem(gear[slot], weights, "armor") }))
      .sort((a, b) => a.score - b.score)[0].item || null;
  }
  if (item.hand === "twohand" || item.slot === "twohand") return null;
  return gear[wornSlot(item)] || null;
}

function wornName(gear, item, weights) {
  const pair = pairSlots(item);
  if (pair && weights) {
    const worse = wornPiece(gear, item, weights);
    return worse ? worse.name : "empty";
  }
  if (item.hand === "twohand" || item.slot === "twohand") {
    const main = gear.mainhand ? gear.mainhand.name : "empty hands";
    return gear.offhand ? `${main} + ${gear.offhand.name}` : main;
  }
  const worn = gear[wornSlot(item)];
  return worn ? worn.name : "empty";
}

function joinLabels(labels) {
  const shown = labels.slice(0, 3);
  if (!shown.length) return "";
  if (labels.length > 3) return `${shown.join(", ")}, and more`;
  if (shown.length === 1) return shown[0];
  if (shown.length === 2) return `${shown[0]} and ${shown[1]}`;
  return `${shown.slice(0, -1).join(", ")}, and ${shown[shown.length - 1]}`;
}

function mixSentence(drop, worn, weights, ahead) {
  if (drop.hand === "twohand" || drop.slot === "twohand") {
    return ahead ? "Better than both weapons they have on." : "Both weapons they have on still score higher.";
  }
  if (!worn) return ahead ? "Nothing in that slot." : "Not better than what they wear.";
  const wornStats = worn.stats || {};
  const dropStats = drop.stats || {};
  const up = [];
  const down = [];
  for (const stat of new Set([...Object.keys(dropStats), ...Object.keys(wornStats)])) {
    if (SKIP_STORY.has(stat)) continue;
    const label = (ALIAS[stat] || []).find(name => weights[name]);
    if (!label) continue;
    const amount = Number(dropStats[stat] || 0);
    const had = Number(wornStats[stat] || 0);
    if (amount === had) continue;
    (amount > had ? up : down).push(label);
  }
  if (up.length && down.length) {
    const close = ahead ? "The drop scores higher." : "What they wear still scores higher.";
    return `More ${up[0]}, less ${down[0]}. This spec counts both. ${close}`;
  }
  if (up.length && !down.length) {
    return up.length === 1
      ? `More ${up[0]} than what they wear.`
      : (ahead ? "Same stats, slightly higher than what they wear." : "Same stats. What they wear is already higher.");
  }
  if (down.length && !up.length) {
    return ahead ? "Better than what they wear." : `Less ${joinLabels(down)} than what they wear.`;
  }
  return ahead ? "Better than what they wear." : "Not better than what they wear.";
}

export function comparisonRows(drop, worn, weights) {
  const wornStats = (worn && worn.stats) || {};
  const dropStats = drop.stats || {};
  const rows = [];
  for (const stat of new Set([...Object.keys(dropStats), ...Object.keys(wornStats)])) {
    if (SKIP_STORY.has(stat)) continue;
    const matched = (ALIAS[stat] || []).find(name => weights[name]);
    const label = matched || STAT_LABEL[stat] || stat;
    const counted = (ALIAS[stat] || []).some(name => weights[name]);
    const amount = Number(dropStats[stat] || 0);
    const had = Number(wornStats[stat] || 0);
    if (!amount && !had) continue;
    if (!counted && !amount) continue;
    rows.push({ stat, label, counted, amount, had });
  }
  rows.sort((a, b) => (STAT_ORDER.indexOf(a.stat) + 1 || 99) - (STAT_ORDER.indexOf(b.stat) + 1 || 99));
  return rows;
}

function isRangedWeapon(item) {
  return item.slot === "ranged" && ["bow", "gun", "crossbow"].includes(item.ranged);
}

function isMeleeOneHand(item) {
  return item.slot === "weapon" && item.hand !== "twohand" && ["sword", "axe", "dagger", "fist"].includes(item.weapon);
}

function fitsYou(person, item) {
  const role = ROLE[person.id];
  const own = OWN_ARMOR[person.className];
  if (TYPED_SLOTS.includes(item.slot) && item.armor && item.armor !== own) {
    return { ok: false, why: `${ARMOR_LABEL[item.armor]} is lighter than their ${own}.` };
  }
  if (item.slot === "ranged" || item.ranged) {
    const kind = item.ranged || item.weapon;
    if (["bow", "gun", "crossbow"].includes(kind)) {
      return role === "ranged" ? { ok: true, why: "Ranged hunter. Bows and guns are theirs." } : { ok: false, why: "Bows and guns are the ranged hunter's." };
    }
    if (kind === "wand") {
      return role === "caster" || role === "healer" ? { ok: true, why: "Casters and healers use wands." } : { ok: false, why: "Wands are for casters and healers." };
    }
    if (role === "melee") return { ok: false, why: "Melee hunter. No ranged slot." };
    return { ok: true, why: "Fits their ranged slot." };
  }
  if (item.slot === "weapon") {
    if (item.weapon === "shield") {
      return role === "tank" || person.className === "shaman" ? { ok: true, why: "Shields are for tanks and shamans." } : { ok: false, why: "Shields are for tanks and shamans." };
    }
    if (item.weapon === "offhand") {
      return role === "caster" || role === "healer" ? { ok: true, why: "Held off-hands are for casters and healers." } : { ok: false, why: "Held off-hands are for casters and healers." };
    }
    if (role === "ranged" && isMeleeOneHand(item)) return { ok: false, why: "Ranged hunter. One-hand melee is the melee hunter's." };
    return { ok: true, why: "Fits their role." };
  }
  if (TYPED_SLOTS.includes(item.slot)) return { ok: true, why: `Their own armor type, ${own}.` };
  return { ok: true, why: "No armor type or role on this slot." };
}

function mainStat(item, specId) {
  const order = S.priority[specId] || [];
  const top = order.slice(0, PRIORITY_DEPTH);
  const line = `${specName(specId)}: ${top.map(stat => STAT_LABEL[stat] || stat).join(" > ")}.`;
  const weights = S.weights[specId] || {};
  let lead = null;
  let best = 0;
  for (const [stat, amount] of Object.entries(item.stats || {})) {
    if (SKIP_STORY.has(stat)) continue;
    let weight = 0;
    for (const name of ALIAS[stat] || []) weight = Math.max(weight, weights[name] || 0);
    if (order.includes(stat) && amount * weight > best) { best = amount * weight; lead = stat; }
  }
  if (item.dps && scoreItem({ dps: item.dps }, weights, kindFor(wornSlot(item))) > 0) return { ok: true, why: `${line} Weapon damage counts.` };
  if (!lead) return { ok: false, why: `${line} Nothing on this item is on the list.` };
  const rank = order.indexOf(lead) + 1;
  const name = STAT_LABEL[lead] || lead;
  if (rank <= PRIORITY_DEPTH) return { ok: true, why: `${line} ${name} leads this item, number ${rank} on the list.` };
  return { ok: false, why: `${line} ${name} leads this item, number ${rank}, outside the top ${PRIORITY_DEPTH}.` };
}

function upgradeOn(person, item, specId) {
  const weights = S.weights[specId] || {};
  const gear = S.gear[person.id] || {};
  const now = replacedScore(gear, item, weights);
  const next = scoreItem(item, weights, kindFor(wornSlot(item)));
  return { ok: next > now + 0.5, now, next, why: mixSentence(item, wornPiece(gear, item, weights), weights, next > now + 0.5) };
}

function evaluate(person, item) {
  const equip = canWear(person, item);
  const fits = fitsYou(person, item);
  const main = mainStat(item, person.raid);
  const up = upgradeOn(person, item, person.raid);
  const ms = equip && fits.ok && main.ok && up.ok;
  let os = null;
  if (equip && !ms) {
    const specs = (fits.ok ? [] : [person.raid]).concat(person.off);
    for (const specId of specs) {
      const offMain = mainStat(item, specId);
      if (!offMain.ok) continue;
      const offUp = upgradeOn(person, item, specId);
      if (offUp.ok) { os = { specId, main: offMain, up: offUp }; break; }
    }
  }
  return { person, equip, fits, main, up, ms, os };
}

function consider(item) {
  const rows = S.people.map(person => evaluate(person, item));
  return { seats: rows.filter(row => row.ms), offs: rows.filter(row => row.os) };
}

function pick(list) {
  if (!list.length) return null;
  return list[Math.floor(Math.random() * list.length)];
}

function other(list, taken) {
  const rest = list.filter(item => item !== taken);
  return pick(rest.length ? rest : list);
}

function band() {
  return S.items.filter(item => item.ilvl >= BAND_MIN && item.ilvl <= BAND_MAX);
}

function randomGear(person, pool) {
  const usable = pool.filter(item => canWear(person, item));
  const gear = {};
  const own = OWN_ARMOR[person.className];
  for (const slot of ARMOR_SLOTS) {
    const fit = usable.filter(item => item.slot === slot && (!TYPED_SLOTS.includes(slot) || !item.armor || item.armor === own));
    gear[slot] = pick(fit.length ? fit : usable.filter(item => item.slot === slot));
  }
  const rings = usable.filter(item => item.slot === "finger");
  gear.finger1 = pick(rings);
  gear.finger2 = other(rings, gear.finger1);
  const trinkets = usable.filter(item => item.slot === "trinket");
  gear.trinket1 = pick(trinkets);
  gear.trinket2 = other(trinkets, gear.trinket1);
  const twohand = usable.filter(item => item.slot === "weapon" && item.hand === "twohand");
  const onehand = usable.filter(item => item.slot === "weapon" && (item.hand === "mainhand" || item.hand === "onehand"));
  const offhand = usable.filter(item => item.slot === "weapon" && (item.hand === "offhand" || item.weapon === "shield"));
  const guns = usable.filter(item => isRangedWeapon(item));
  if (person.id === "matt") {
    gear.mainhand = pick(onehand);
    gear.offhand = other(onehand, gear.mainhand);
    gear.ranged = null;
  } else if (person.id === "izzy") {
    gear.mainhand = pick(onehand);
    gear.offhand = null;
    gear.ranged = pick(guns);
  } else if (twohand.length && (!onehand.length || Math.random() < 0.45)) {
    gear.mainhand = pick(twohand);
    gear.offhand = null;
    gear.ranged = pick(usable.filter(item => item.slot === "ranged"));
  } else {
    gear.mainhand = pick(onehand);
    gear.offhand = pick(offhand);
    gear.ranged = pick(usable.filter(item => item.slot === "ranged"));
  }
  return gear;
}

function rollDice() {
  const used = new Set();
  const rolls = {};
  for (const person of S.people) {
    let value;
    do { value = 1 + Math.floor(Math.random() * 100); } while (used.has(value));
    used.add(value);
    rolls[person.id] = value;
  }
  return rolls;
}

export function dropReal() {
  let seen = 0;
  let chosen = null;
  for (const item of band()) {
    const found = consider(item);
    if (!found.seats.length && !found.offs.length) continue;
    seen += 1;
    if (Math.random() < 1 / seen) chosen = item;
  }
  S.drop = chosen;
  S.serial += 1;
  S.before = { ...S.counts };
  S.rolls = rollDice();
  if (chosen) {
    const winner = paths(chosen).find(row => row.won);
    if (winner && winner.ms) S.counts[winner.person.id] = (S.counts[winner.person.id] || 0) + 1;
    S.last = winner ? { name: winner.person.name, ms: winner.ms } : null;
  }
}

export function randomize() {
  const pool = band();
  for (const person of S.people) S.gear[person.id] = randomGear(person, pool);
  S.counts = {};
  dropReal();
}

export function fmt(n) { return Math.round(n).toLocaleString("en-US"); }
export function specName(id) { return (id || "").replace(/_/g, " ").replace(/\b\w/g, ch => ch.toUpperCase()); }

export function shownStage(stage) {
  return stage.in || stage.why !== "Already out.";
}

export function paths(drop) {
  const rows = S.people.map(person => evaluate(person, drop));
  const msRows = rows.filter(row => row.ms);
  const count = row => S.before[row.person.id] || 0;
  const low = msRows.length ? Math.min(...msRows.map(count)) : 0;
  const rollers = msRows.length ? msRows.filter(row => count(row) === low) : rows.filter(row => row.os);
  const roll = row => S.rolls[row.person.id] || 0;
  const top = rollers.length ? Math.max(...rollers.map(roll)) : 0;
  const OUT = { in: false, why: "Already out." };
  return rows.map(row => {
    const gear = S.gear[row.person.id] || {};
    const osNote = row.os ? ` Off spec next: ${specName(row.os.specId)}.` : "";
    const wait = why => ({ in: true, os: true, why: `${why}${osNote}` });
    const stages = [];
    if (!row.equip) stages.push({ id: "gear", in: false, why: equipWhy(row.person, drop) });
    else if (row.fits.ok) stages.push({ id: "gear", in: true, why: row.fits.why });
    else if (row.os) stages.push({ id: "gear", in: true, os: true, why: `${row.fits.why} Off spec only, as ${specName(row.os.specId)}.` });
    else stages.push({ id: "gear", in: false, why: `${row.fits.why} Off spec only, and no off spec wants it.` });
    const pastFits = row.equip && row.fits.ok;
    if (!pastFits) stages.push({ id: "main", ...OUT });
    else if (row.main.ok) stages.push({ id: "main", in: true, why: row.main.why });
    else stages.push({ id: "main", ...(row.os ? wait(row.main.why) : { in: false, why: row.main.why }) });
    const pastMain = pastFits && row.main.ok;
    if (!pastMain) stages.push({ id: "upgrade", ...OUT });
    else if (row.up.ok) stages.push({ id: "upgrade", in: true, why: row.up.why });
    else stages.push({ id: "upgrade", ...(row.os ? wait(row.up.why) : { in: false, why: row.up.why }) });
    const mine = count(row);
    if (!row.ms) stages.push({ id: "plus", ...OUT });
    else if (mine === low) stages.push({ id: "plus", in: true, why: `+${mine} tonight. Lowest among main-spec rolls.` });
    else stages.push({ id: "plus", in: false, why: `+${mine} tonight. Someone rolling has +${low}.` });
    if (!row.os) stages.push({ id: "os", ...OUT });
    else if (msRows.length) stages.push({ id: "os", in: false, why: `${specName(row.os.specId)} waits. Main spec wants it.` });
    else stages.push({ id: "os", in: true, why: `Off spec, ${specName(row.os.specId)}. ${row.os.up.why}` });
    const rolling = rollers.includes(row);
    const won = rolling && roll(row) === top;
    if (!rolling) stages.push({ id: "roll", ...OUT });
    else if (rollers.length === 1) stages.push({ id: "roll", in: true, why: "Only one left. Wins." });
    else if (won) stages.push({ id: "roll", in: true, why: `Rolled ${roll(row)}. Wins.` });
    else stages.push({ id: "roll", in: false, why: `Rolled ${roll(row)}. Lost to ${top}.` });
    const specId = row.ms || !row.os ? row.person.raid : row.os.specId;
    const scored = row.ms || !row.os ? row.up : row.os.up;
    return {
      ...row, won, stages, specId, now: scored.now, next: scored.next,
      wearing: wornName(gear, drop, S.weights[specId])
    };
  });
}

export function dropMeta(drop) {
  let kind = SLOT_LABEL[drop.slot] || drop.slot;
  if (TYPED_SLOTS.includes(drop.slot) && drop.armor) kind = `${ARMOR_LABEL[drop.armor] || drop.armor} ${kind.toLowerCase()}`;
  else if (drop.slot === "weapon") {
    if (drop.weapon === "shield") kind = "Shield";
    else if (drop.weapon === "offhand") kind = "Off hand";
    else kind = `${HAND_LABEL[drop.hand] || "Weapon"} ${drop.weapon || "weapon"}`;
  } else if (drop.slot === "ranged") {
    const name = drop.ranged || "ranged";
    kind = name.charAt(0).toUpperCase() + name.slice(1);
  }
  return `Item level ${drop.ilvl} · ${kind}`;
}

export async function load(base) {
  const [items, seats, weightFile] = await Promise.all([
    fetch(`${base}data/forever_items.json`).then(r => r.json()),
    fetch(`${base}data/seats.json`).then(r => r.json()),
    fetch(`${base}data/sixtysim_weights.json`).then(r => r.json())
  ]);
  S.items = items.items;
  for (const spec of weightFile.specs) {
    S.weights[spec.id] = weightMap(spec);
    S.priority[spec.id] = priorityList(spec);
  }
  S.people = seats.people.map(person => ({
    id: person.id,
    name: person.name,
    className: CLASS_OF[person.id],
    raid: person.raid_spec,
    off: person.off_specs || []
  }));
}
