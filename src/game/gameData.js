export const tricks = {
  kickflip: { name: 'Kickflip', damage: 5, combo: 1, detail: 'Reliable impact.' },
  grind: { name: 'Grind', damage: 3, combo: 2, detail: 'Gains power with flow.' },
  boost: { name: 'Boost', damage: 2, combo: 1, heal: 3, detail: 'Stabilizes the ride.' },
};

export const stages = [
  { id: 'neptune', name: 'Neptune Drift', enemy: 'Void Slalom', requiredUpgrade: false },
  { id: 'mercury', name: 'Mercury Rail', enemy: 'Solar Flare', requiredUpgrade: true },
  { id: 'sun', name: 'The Sun Core', enemy: 'Corona Titan', requiredUpgrade: true, final: true },
];

export const opponentMoves = [
  { name: 'Gravity Whip', damage: 3 },
  { name: 'Debris Wall', damage: 4 },
  { name: 'Solar Draft', damage: 2 },
];

export const heatShieldCost = 10;
