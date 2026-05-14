// ─── Conversion Data ───
const CATEGORIES = [
  {
    id: 'length', name: 'Length', icon: '📏',
    base: 'meter',
    units: [
      { id: 'mm', name: 'Millimeter', toBase: v => v * 0.001, fromBase: v => v / 0.001 },
      { id: 'cm', name: 'Centimeter', toBase: v => v * 0.01, fromBase: v => v / 0.01 },
      { id: 'm',  name: 'Meter',      toBase: v => v,       fromBase: v => v },
      { id: 'km', name: 'Kilometer',  toBase: v => v * 1000, fromBase: v => v / 1000 },
      { id: 'in', name: 'Inch',       toBase: v => v * 0.0254, fromBase: v => v / 0.0254 },
      { id: 'ft', name: 'Foot',       toBase: v => v * 0.3048, fromBase: v => v / 0.3048 },
      { id: 'yd', name: 'Yard',       toBase: v => v * 0.9144, fromBase: v => v / 0.9144 },
      { id: 'mi', name: 'Mile',       toBase: v => v * 1609.344, fromBase: v => v / 1609.344 },
    ]
  },
  {
    id: 'weight', name: 'Weight', icon: '⚖️',
    base: 'gram',
    units: [
      { id: 'mg', name: 'Milligram', toBase: v => v * 0.001, fromBase: v => v / 0.001 },
      { id: 'g',  name: 'Gram',      toBase: v => v,        fromBase: v => v },
      { id: 'kg', name: 'Kilogram',  toBase: v => v * 1000,  fromBase: v => v / 1000 },
      { id: 't',  name: 'Tonne',     toBase: v => v * 1e6,   fromBase: v => v / 1e6 },
      { id: 'oz', name: 'Ounce',     toBase: v => v * 28.3495, fromBase: v => v / 28.3495 },
      { id: 'lb', name: 'Pound',     toBase: v => v * 453.592, fromBase: v => v / 453.592 },
    ]
  },
  {
    id: 'temperature', name: 'Temperature', icon: '🌡️',
    base: 'celsius',
    units: [
      { id: 'C', name: 'Celsius',    toBase: v => v,       fromBase: v => v },
      { id: 'F', name: 'Fahrenheit', toBase: v => (v-32)*5/9, fromBase: v => v*9/5+32 },
      { id: 'K', name: 'Kelvin',     toBase: v => v - 273.15, fromBase: v => v + 273.15 },
    ]
  },
  {
    id: 'volume', name: 'Volume', icon: '🧪',
    base: 'liter',
    units: [
      { id: 'mL',   name: 'Milliliter',   toBase: v => v * 0.001, fromBase: v => v / 0.001 },
      { id: 'L',    name: 'Liter',         toBase: v => v,        fromBase: v => v },
      { id: 'gal',  name: 'Gallon (US)',  toBase: v => v * 3.78541, fromBase: v => v / 3.78541 },
      { id: 'qt',   name: 'Quart (US)',   toBase: v => v * 0.946353, fromBase: v => v / 0.946353 },
      { id: 'pt',   name: 'Pint (US)',    toBase: v => v * 0.473176, fromBase: v => v / 0.473176 },
      { id: 'cup',  name: 'Cup (US)',     toBase: v => v * 0.236588, fromBase: v => v / 0.236588 },
      { id: 'floz', name: 'Fluid Ounce',  toBase: v => v * 0.0295735, fromBase: v => v / 0.0295735 },
      { id: 'tbsp', name: 'Tablespoon',   toBase: v => v * 0.0147868, fromBase: v => v / 0.0147868 },
      { id: 'tsp',  name: 'Teaspoon',     toBase: v => v * 0.00492892, fromBase: v => v / 0.00492892 },
    ]
  },
  {
    id: 'area', name: 'Area', icon: '📐',
    base: 'sq-meter',
    units: [
      { id: 'mm2', name: 'mm²',  toBase: v => v * 1e-6,    fromBase: v => v / 1e-6 },
      { id: 'cm2', name: 'cm²',  toBase: v => v * 1e-4,    fromBase: v => v / 1e-4 },
      { id: 'm2',  name: 'm²',   toBase: v => v,           fromBase: v => v },
      { id: 'ha',  name: 'Hectare', toBase: v => v * 10000, fromBase: v => v / 10000 },
      { id: 'km2', name: 'km²',  toBase: v => v * 1e6,     fromBase: v => v / 1e6 },
      { id: 'in2', name: 'in²',  toBase: v => v * 0.00064516, fromBase: v => v / 0.00064516 },
      { id: 'ft2', name: 'ft²',  toBase: v => v * 0.092903, fromBase: v => v / 0.092903 },
      { id: 'ac',  name: 'Acre', toBase: v => v * 4046.86,  fromBase: v => v / 4046.86 },
      { id: 'mi2', name: 'mi²',  toBase: v => v * 2.59e6,  fromBase: v => v / 2.59e6 },
    ]
  },
  {
    id: 'speed', name: 'Speed', icon: '🚀',
    base: 'mps',
    units: [
      { id: 'mps',  name: 'm/s',    toBase: v => v,        fromBase: v => v },
      { id: 'kmh',  name: 'km/h',   toBase: v => v / 3.6,   fromBase: v => v * 3.6 },
      { id: 'mph',  name: 'mph',    toBase: v => v * 0.44704, fromBase: v => v / 0.44704 },
      { id: 'fps',  name: 'ft/s',   toBase: v => v * 0.3048,  fromBase: v => v / 0.3048 },
      { id: 'kn',   name: 'Knot',   toBase: v => v * 0.514444, fromBase: v => v / 0.514444 },
    ]
  },
  {
    id: 'time', name: 'Time', icon: '⏱️',
    base: 'second',
    units: [
      { id: 'ms',  name: 'Millisecond', toBase: v => v * 0.001,    fromBase: v => v / 0.001 },
      { id: 's',   name: 'Second',      toBase: v => v,            fromBase: v => v },
      { id: 'min', name: 'Minute',      toBase: v => v * 60,       fromBase: v => v / 60 },
      { id: 'h',   name: 'Hour',        toBase: v => v * 3600,     fromBase: v => v / 3600 },
      { id: 'd',   name: 'Day',         toBase: v => v * 86400,    fromBase: v => v / 86400 },
      { id: 'wk',  name: 'Week',        toBase: v => v * 604800,   fromBase: v => v / 604800 },
      { id: 'mo',  name: 'Month (30d)', toBase: v => v * 2592000,  fromBase: v => v / 2592000 },
      { id: 'yr',  name: 'Year (365d)', toBase: v => v * 31536000, fromBase: v => v / 31536000 },
    ]
  },
  {
    id: 'data', name: 'Data', icon: '💾',
    base: 'byte',
    units: [
      { id: 'B',  name: 'Byte',      toBase: v => v,          fromBase: v => v },
      { id: 'KB', name: 'Kilobyte',  toBase: v => v * 1024,   fromBase: v => v / 1024 },
      { id: 'MB', name: 'Megabyte',  toBase: v => v * 1048576, fromBase: v => v / 1048576 },
      { id: 'GB', name: 'Gigabyte',  toBase: v => v * 1.074e9, fromBase: v => v / 1.074e9 },
      { id: 'TB', name: 'Terabyte',  toBase: v => v * 1.1e12,  fromBase: v => v / 1.1e12 },
      { id: 'PB', name: 'Petabyte',  toBase: v => v * 1.126e15, fromBase: v => v / 1.126e15 },
    ]
  }
];

// ─── Real-World Visual Comparisons ───
// Each entry: { unitId, atValue, label, emoji? }
// The closest match to the user's input is shown.
const REAL_WORLD = {
  weight: [
    { unitId: 'g',  atValue: 1,    label: 'a paperclip 📎' },
    { unitId: 'g',  atValue: 28,   label: 'a slice of bread 🍞' },
    { unitId: 'g',  atValue: 100,  label: 'a medium apple 🍎' },
    { unitId: 'g',  atValue: 150,  label: 'a small potato 🥔' },
    { unitId: 'g',  atValue: 200,  label: 'a cup of water 🥛' },
    { unitId: 'g',  atValue: 250,  label: 'a cup of flour' },
    { unitId: 'g',  atValue: 300,  label: 'a can of soda 🥫' },
    { unitId: 'g',  atValue: 500,  label: 'a loaf of bread 🍞' },
    { unitId: 'g',  atValue: 454,  label: '1 lb = a small pineapple 🍍' },
    { unitId: 'kg', atValue: 1,    label: 'a liter of water 💧' },
    { unitId: 'kg', atValue: 2.5,  label: 'a laptop computer 💻' },
    { unitId: 'kg', atValue: 4.5,  label: 'a small cat 🐱' },
    { unitId: 'kg', atValue: 10,   label: 'a bowling ball 🎳' },
    { unitId: 'kg', atValue: 25,   label: 'a car tire 🛞' },
    { unitId: 'kg', atValue: 70,   label: 'an average adult 👤' },
    { unitId: 'kg', atValue: 200,  label: 'a grand piano 🎹' },
    { unitId: 't',  atValue: 1,    label: 'a small car 🚗' },
    { unitId: 't',  atValue: 5,    label: 'an elephant 🐘' },
    { unitId: 't',  atValue: 80,   label: 'a blue whale 🐋' },
    { unitId: 'lb', atValue: 0.25, label: 'a stick of butter 🧈' },
    { unitId: 'lb', atValue: 0.5,  label: 'a grapefruit 🍊' },
    { unitId: 'lb', atValue: 1,    label: 'a small pineapple or 2 cups of sugar 🍍' },
    { unitId: 'lb', atValue: 3,    label: 'a standard bag of apples 🛍️' },
    { unitId: 'lb', atValue: 10,   label: 'a small dog 🐕' },
    { unitId: 'oz', atValue: 1,    label: 'a slice of bread 🍞' },
    { unitId: 'oz', atValue: 3.5,  label: 'a chocolate bar 🍫' },
    { unitId: 'oz', atValue: 8,    label: 'a cup of water 🥤' },
    { unitId: 'oz', atValue: 12,   label: 'a can of soda 🥫' },
    { unitId: 'oz', atValue: 16,   label: '1 lb — a small steak 🥩' },
  ],
  length: [
    { unitId: 'mm', atValue: 1,    label: 'a grain of sand' },
    { unitId: 'mm', atValue: 10,   label: 'a fingernail thickness 💅' },
    { unitId: 'cm', atValue: 1,    label: 'a fingernail width' },
    { unitId: 'cm', atValue: 2.5,  label: '1 inch' },
    { unitId: 'cm', atValue: 10,   label: 'a smartphone width 📱' },
    { unitId: 'cm', atValue: 30,   label: 'a ruler 📏' },
    { unitId: 'm',  atValue: 1,    label: 'a guitar 🎸' },
    { unitId: 'm',  atValue: 1.8,  label: 'average human height 👤' },
    { unitId: 'm',  atValue: 3,    label: 'a compact car 🚗' },
    { unitId: 'm',  atValue: 9,    label: 'a pickup truck 🛻' },
    { unitId: 'km', atValue: 1,    label: 'a 12-minute walk 🚶' },
    { unitId: 'km', atValue: 5,    label: 'a 5K run 🏃' },
    { unitId: 'km', atValue: 42,   label: 'a marathon 🏅' },
    { unitId: 'km', atValue: 100,  label: 'a 1-hour drive 🚗' },
    { unitId: 'mi', atValue: 1,    label: 'a 15-minute walk 🚶' },
    { unitId: 'mi', atValue: 26.2, label: 'a marathon 🏅' },
    { unitId: 'ft', atValue: 1,    label: 'a ruler 📏' },
    { unitId: 'ft', atValue: 5.5,  label: 'a door height 🚪' },
    { unitId: 'ft', atValue: 10,   label: 'a basketball hoop 🏀' },
    { unitId: 'in', atValue: 1,    label: 'a thumb width 👍' },
    { unitId: 'in', atValue: 8.5,  label: 'a sheet of paper (width) 📄' },
    { unitId: 'in', atValue: 11,   label: 'a sheet of paper (height) 📄' },
  ],
  volume: [
    { unitId: 'mL',  atValue: 1,    label: 'a drop of water 💧' },
    { unitId: 'mL',  atValue: 5,    label: 'a teaspoon 🥄' },
    { unitId: 'mL',  atValue: 15,   label: 'a tablespoon 🥄' },
    { unitId: 'mL',  atValue: 30,   label: 'a shot glass 🥃' },
    { unitId: 'mL',  atValue: 250,  label: 'a coffee mug ☕' },
    { unitId: 'mL',  atValue: 330,  label: 'a can of soda 🥫' },
    { unitId: 'mL',  atValue: 355,  label: 'a can of beer 🍺' },
    { unitId: 'mL',  atValue: 500,  label: 'a water bottle 🧴' },
    { unitId: 'L',   atValue: 1,    label: 'a standard water bottle 💧' },
    { unitId: 'L',   atValue: 2,    label: 'a large soda bottle 🥤' },
    { unitId: 'L',   atValue: 4,    label: 'a car oil change 🛢️' },
    { unitId: 'L',   atValue: 50,   label: 'a bathtub 🛁' },
    { unitId: 'L',   atValue: 200,  label: 'a rain barrel 🌧️' },
    { unitId: 'gal', atValue: 1,    label: 'a milk jug 🥛' },
    { unitId: 'gal', atValue: 5,    label: 'a fish tank 🐠' },
    { unitId: 'gal', atValue: 15,   label: 'a car gas tank ⛽' },
    { unitId: 'cup', atValue: 1,    label: 'a coffee mug ☕' },
    { unitId: 'tsp', atValue: 1,    label: 'a pinch of salt 🧂' },
    { unitId: 'tbsp',atValue: 1,    label: 'a spoonful of medicine 💊' },
  ],
  temperature: [
    { unitId: 'C', atValue: -18,  label: 'freezer temperature ❄️' },
    { unitId: 'C', atValue: 0,    label: 'water freezes 🧊' },
    { unitId: 'C', atValue: 4,    label: 'refrigerator 🧊' },
    { unitId: 'C', atValue: 20,   label: 'room temperature 🏠' },
    { unitId: 'C', atValue: 25,   label: 'warm summer day ☀️' },
    { unitId: 'C', atValue: 37,   label: 'human body temperature 🌡️' },
    { unitId: 'C', atValue: 40,   label: 'hot bath 🛀' },
    { unitId: 'C', atValue: 60,   label: 'hot coffee ☕' },
    { unitId: 'C', atValue: 100,  label: 'water boils 💨' },
    { unitId: 'C', atValue: 180,  label: 'oven for baking 🍪' },
    { unitId: 'C', atValue: 220,  label: 'oven for pizza 🍕' },
    { unitId: 'F', atValue: 0,    label: 'bitter cold day 🥶' },
    { unitId: 'F', atValue: 32,   label: 'water freezes 🧊' },
    { unitId: 'F', atValue: 68,   label: 'room temperature 🏠' },
    { unitId: 'F', atValue: 98.6, label: 'human body temperature 🌡️' },
    { unitId: 'F', atValue: 212,  label: 'water boils 💨' },
  ],
  area: [
    { unitId: 'm2',  atValue: 1,    label: 'a yoga mat 🧘' },
    { unitId: 'm2',  atValue: 10,   label: 'a parking space 🅿️' },
    { unitId: 'm2',  atValue: 20,   label: 'a shipping container 📦' },
    { unitId: 'm2',  atValue: 100,  label: 'a tennis court 🎾' },
    { unitId: 'ha',  atValue: 1,    label: 'a soccer field ⚽' },
    { unitId: 'ha',  atValue: 2,    label: 'a football field 🏈' },
    { unitId: 'ac',  atValue: 1,    label: 'a football field 🏈' },
    { unitId: 'ft2', atValue: 1,    label: 'a sheet of paper 📄' },
    { unitId: 'ft2', atValue: 200,  label: 'a small apartment 🏠' },
    { unitId: 'ft2', atValue: 500,  label: 'a studio apartment 🏢' },
    { unitId: 'ft2', atValue: 1000, label: 'a small house 🏡' },
    { unitId: 'ft2', atValue: 2500, label: 'a family house 🏠' },
    { unitId: 'km2', atValue: 1,    label: 'a small town 🏘️' },
    { unitId: 'mi2', atValue: 1,    label: 'a small city 🏙️' },
  ],
  speed: [
    { unitId: 'kmh', atValue: 5,    label: 'walking pace 🚶' },
    { unitId: 'kmh', atValue: 15,   label: 'bicycle 🚲' },
    { unitId: 'kmh', atValue: 30,   label: 'city driving 🏙️' },
    { unitId: 'kmh', atValue: 60,   label: 'highway driving 🛣️' },
    { unitId: 'kmh', atValue: 100,  label: 'fast highway 🏎️' },
    { unitId: 'kmh', atValue: 300,  label: 'bullet train 🚄' },
    { unitId: 'kmh', atValue: 800,  label: 'passenger plane ✈️' },
    { unitId: 'mph', atValue: 15,   label: 'neighborhood driving 🏡' },
    { unitId: 'mph', atValue: 30,   label: 'city driving 🏙️' },
    { unitId: 'mph', atValue: 55,   label: 'highway cruising 🛣️' },
    { unitId: 'mph', atValue: 70,   label: 'interstate driving 🛣️' },
    { unitId: 'mph', atValue: 100,  label: 'fast sports car 🏎️' },
    { unitId: 'mph', atValue: 500,  label: 'passenger plane ✈️' },
    { unitId: 'mps', atValue: 1,    label: 'walking pace 🚶' },
    { unitId: 'mps', atValue: 10,   label: 'sprinting 🏃' },
    { unitId: 'mps', atValue: 340,  label: 'speed of sound (Mach 1) ✈️' },
    { unitId: 'kn',  atValue: 10,   label: 'leisure boat 🛥️' },
    { unitId: 'kn',  atValue: 30,   label: 'speed boat 🚤' },
    { unitId: 'kn',  atValue: 500,  label: 'jet plane ✈️' },
  ],
  time: [
    { unitId: 's',   atValue: 1,    label: 'a heartbeat 💓' },
    { unitId: 's',   atValue: 60,   label: '1 minute — a short song 🎵' },
    { unitId: 'min', atValue: 5,    label: 'boil an egg 🥚' },
    { unitId: 'min', atValue: 15,   label: 'a short break ☕' },
    { unitId: 'min', atValue: 30,   label: 'a TV show episode 📺' },
    { unitId: 'min', atValue: 60,   label: 'a yoga class 🧘' },
    { unitId: 'h',   atValue: 1,    label: 'a lunch break 🍽️' },
    { unitId: 'h',   atValue: 2,    label: 'a movie 🎬' },
    { unitId: 'h',   atValue: 8,    label: 'a work day 💼' },
    { unitId: 'h',   atValue: 24,   label: 'a full day 🌅' },
    { unitId: 'd',   atValue: 7,    label: 'a week 📅' },
    { unitId: 'd',   atValue: 30,   label: 'a month 🗓️' },
    { unitId: 'd',   atValue: 365,  label: 'a year 🎂' },
    { unitId: 'wk',  atValue: 1,    label: 'a work week 💼' },
    { unitId: 'wk',  atValue: 2,    label: 'a vacation 🏖️' },
    { unitId: 'mo',  atValue: 9,    label: 'a pregnancy 🤰' },
    { unitId: 'yr',  atValue: 1,    label: 'a full orbit around the sun 🌍' },
    { unitId: 'yr',  atValue: 5,    label: 'between presidential elections 🗳️' },
    { unitId: 'yr',  atValue: 18,   label: 'coming of age 🎂' },
    { unitId: 'yr',  atValue: 80,   label: 'a human lifespan 👴' },
  ],
  data: [
    { unitId: 'B',  atValue: 1,     label: 'a single character 🔤' },
    { unitId: 'B',  atValue: 100,   label: 'a short text message 💬' },
    { unitId: 'KB', atValue: 1,     label: 'a small text file 📄' },
    { unitId: 'KB', atValue: 100,   label: 'a scanned page 📃' },
    { unitId: 'MB', atValue: 1,     label: 'a high-res photo 📷' },
    { unitId: 'MB', atValue: 3,     label: 'a 3-minute MP3 song 🎵' },
    { unitId: 'MB', atValue: 25,    label: 'a 5-minute YouTube video 📹' },
    { unitId: 'MB', atValue: 100,   label: 'a smartphone app 📱' },
    { unitId: 'GB', atValue: 1,     label: 'a 2-hour movie 🎬' },
    { unitId: 'GB', atValue: 8,     label: 'a CD-ROM 💿' },
    { unitId: 'GB', atValue: 25,    label: 'a Blu-ray movie 🎞️' },
    { unitId: 'GB', atValue: 128,   label: 'a phone storage 📱' },
    { unitId: 'TB', atValue: 1,     label: '500 hours of video 📺' },
    { unitId: 'TB', atValue: 4,     label: 'a portable hard drive 💾' },
    { unitId: 'TB', atValue: 10,    label: 'a desktop computer backup 💻' },
    { unitId: 'PB', atValue: 1,     label: '500 billion pages of text 📚' },
  ]
};

// ─── State ───
let currentCategory = 'length';
let fromUnit = 'm';
let toUnit = 'ft';
let fromValue = 1;

// ─── DOM refs ───
const el = id => document.getElementById(id);
const catTabs = el('categoryTabs');
const fromVal = el('fromValue');
const toVal = el('toValue');
const fromUnitSel = el('fromUnit');
const toUnitSel = el('toUnit');
const swapBtn = el('swapBtn');
const copyBtn = el('copyBtn');
const resultRow = el('resultRow');
const resultText = el('resultText');
const formulaBox = el('formulaBox');
const allUnitsGrid = el('allUnitsGrid');
const visBox = el('visualBox');

// ─── Render Categories ───
function renderTabs() {
  catTabs.innerHTML = CATEGORIES.map(c =>
    `<button class="cat-tab${c.id === currentCategory ? ' active' : ''}" data-cat="${c.id}">
       ${c.icon} ${c.name}
     </button>`
  ).join('');
  catTabs.querySelectorAll('.cat-tab').forEach(btn => {
    btn.addEventListener('click', () => switchCategory(btn.dataset.cat));
  });
}

// ─── Switch Category ───
function switchCategory(catId) {
  currentCategory = catId;
  const cat = CATEGORIES.find(c => c.id === catId);
  fromUnit = cat.units[0].id;
  toUnit = cat.units[1]?.id || cat.units[0].id;
  renderTabs();
  populateUnits();
  convert();
}

// ─── Populate Unit Selects ───
function populateUnits() {
  const cat = CATEGORIES.find(c => c.id === currentCategory);
  const opts = cat.units.map(u =>
    `<option value="${u.id}"${u.id === fromUnit ? ' selected' : ''}>${u.name}</option>`
  ).join('');
  fromUnitSel.innerHTML = opts;
  toUnitSel.innerHTML = cat.units.map(u =>
    `<option value="${u.id}"${u.id === toUnit ? ' selected' : ''}>${u.name}</option>`
  ).join('');
}

// ─── Convert ───
function convert() {
  const cat = CATEGORIES.find(c => c.id === currentCategory);
  const from = cat.units.find(u => u.id === fromUnit);
  const to = cat.units.find(u => u.id === toUnit);
  if (!from || !to) return;

  const val = parseFloat(fromVal.value);
  if (isNaN(val)) {
    toVal.value = '';
    resultText.textContent = '';
    formulaBox.innerHTML = '';
    allUnitsGrid.innerHTML = '';
    visBox.innerHTML = '';
    return;
  }

  // Convert: fromValue -> base -> toValue
  const baseVal = from.toBase(val);
  const result = to.fromBase(baseVal);

  // Format result
  const formatted = formatNum(result);
  toVal.value = formatted;
  resultText.innerHTML = `<strong>${formatNum(val)}</strong> ${from.name} = <strong class="result-highlight">${formatted}</strong> ${to.name}`;
  resultRow.classList.add('show');

  // Formula
  if (from.id === 'C' || from.id === 'F' || from.id === 'K') {
    formulaBox.innerHTML = `<span class="formula">Formula: ${getTempFormula(from.id, to.id)}</span>`;
  } else if (from.id !== to.id) {
    formulaBox.innerHTML = `<span class="formula">1 ${from.name} = ${formatNum(Math.abs(result / val))} ${to.name}</span>`;
  } else {
    formulaBox.innerHTML = '';
  }

  renderAllUnits(cat, baseVal);
  renderVisuals(cat, from, baseVal, val);
}

function formatNum(n) {
  if (Math.abs(n) >= 1e12 || (Math.abs(n) < 1e-10 && n !== 0)) return n.toExponential(6);
  if (Number.isInteger(n) && Math.abs(n) < 1e15) return n.toString();
  const s = n.toPrecision(10);
  return parseFloat(s).toString();
}

function getTempFormula(from, to) {
  const pairs = {
    'C,F': '°F = °C × 9/5 + 32',
    'C,K': 'K = °C + 273.15',
    'F,C': '°C = (°F − 32) × 5/9',
    'F,K': 'K = (°F − 32) × 5/9 + 273.15',
    'K,C': '°C = K − 273.15',
    'K,F': '°F = (K − 273.15) × 9/5 + 32',
  };
  return pairs[`${from},${to}`] || '';
}

// ─── All Units Grid ───
function renderAllUnits(cat, baseVal) {
  const rows = cat.units.map(u => {
    const converted = u.fromBase(baseVal);
    return `<div class="unit-card">
      <span class="unit-card-value">${formatNum(converted)}</span>
      <span class="unit-card-label">${u.name}</span>
    </div>`;
  }).join('');
  allUnitsGrid.innerHTML = rows;
}

// ─── Real-World Visualizations ───
function renderVisuals(cat, fromUnitObj, baseVal, inputVal) {
  const comparisons = REAL_WORLD[cat.id];
  if (!comparisons) { visBox.innerHTML = ''; return; }

  // Build up a map: unitId -> converted value in that unit
  const converted = {};
  cat.units.forEach(u => {
    converted[u.id] = u.fromBase(baseVal);
  });

  // Find the closest comparison(s) — pick up to 3 that are closest to a converted value
  const scores = [];
  comparisons.forEach(cmp => {
    const cmpVal = converted[cmp.unitId];
    if (cmpVal === undefined || cmpVal === 0) return;
    const ratio = cmpVal / cmp.atValue;
    // Score: how close the ratio is to a nice round number, weighted by relevance
    // Prefer comparisons where the ratio is between 0.5 and 5
    const closeness = ratio >= 0.5 && ratio <= 5 ? 1 : 0.5 / Math.max(ratio, 1/ratio);
    scores.push({ cmp, ratio, closeness, cmpVal });
  });

  // Sort by closeness, pick top 4
  scores.sort((a, b) => b.closeness - a.closeness);
  const top = scores.slice(0, 4);

  if (top.length === 0) { visBox.innerHTML = ''; return; }

  const cards = top.map(s => {
    const count = Math.round(s.ratio);
    const displayCount = count > 1 ? `×${count} ` : '';
    return `<div class="vis-card">
      <div class="vis-icon">${displayCount}${s.cmp.label.split(' ').pop() || '📦'}</div>
      <div class="vis-label">≈ ${displayCount}${s.cmp.label}</div>
      <div class="vis-hint">${formatNum(s.cmpVal)} = ${formatNum(s.cmp.atValue)} ${getUnitName(cat, s.cmp.unitId)} each</div>
    </div>`;
  }).join('');

  visBox.innerHTML = `
    <div class="vis-section">
      <h3 class="vis-title">🔍 Real-World Comparison</h3>
      <div class="vis-grid">${cards}</div>
    </div>`;
}

function getUnitName(cat, unitId) {
  const u = cat.units.find(x => x.id === unitId);
  return u ? u.name : unitId;
}

// ─── Event Listeners ───
fromVal.addEventListener('input', () => { fromValue = fromVal.value; convert(); });
fromUnitSel.addEventListener('change', () => { fromUnit = fromUnitSel.value; convert(); });
toUnitSel.addEventListener('change', () => { toUnit = toUnitSel.value; convert(); });

swapBtn.addEventListener('click', () => {
  [fromUnit, toUnit] = [toUnit, fromUnit];
  [fromVal.value, toVal.value] = [toVal.value || '1', fromVal.value];
  fromValue = fromVal.value;
  populateUnits();
  convert();
});

copyBtn.addEventListener('click', () => {
  const text = toVal.value;
  navigator.clipboard.writeText(text).then(() => {
    copyBtn.textContent = '✅';
    setTimeout(() => { copyBtn.textContent = '📋'; }, 1500);
  });
});

// ─── Init ───
renderTabs();
populateUnits();
fromVal.value = '1';
convert();

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
