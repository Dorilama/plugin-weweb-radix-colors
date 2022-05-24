import * as Colors from "@radix-ui/colors";

const errorTip = () => "common for Error";
const successTip = () => "common for Success";
const infoTip = () => "common for Info";
const warningTip = () => "common for Warning";

// color names grouped like https://www.radix-ui.com/docs/colors/palette-composition/the-scales
export const groups = {
  colors: [
    "tomato",
    "red",
    "crimson",
    "pink",
    "plum",
    "purple",
    "violet",
    "indigo",
    "blue",
    "cyan",
    "teal",
    "green",
    "grass",
    "orange",
    "brown",
  ],
  brightColors: ["sky", "mint", "lime", "yellow", "amber"],
  grays: ["gray", "mauve", "slate", "sage", "olive", "sand"],
  metals: ["gold", "bronze"],
  overlays: ["blackA", "whiteA"],
  allGroups: [
    {
      label: "Colors",
      key: "colors",
      tip: "designed for white foreground text",
    },
    {
      label: "Bright colors",
      key: "brightColors",
      tip: "designed for black foreground text",
    },
    {
      label: "Grays",
      key: "grays",
      tip: "commonly used for text, borders, and backgrounds",
    },
    { label: "Metals", key: "metals" },
    {
      label: "Overlays",
      key: "overlays",
      tip: "designed for overlays. unchanged by dark mode.",
    },
  ],
  tips: {
    red: errorTip,
    tomato: errorTip,
    crimson: errorTip,
    teal: successTip,
    green: successTip,
    grass: successTip,
    mint: successTip,
    yellow: warningTip,
    amber: warningTip,
    blue: infoTip,
    sky: infoTip,
    cyan: infoTip,
    gray: () => "will work well with any hue or palette",
    mauve: createTipSelector([
      "tomato",
      "red",
      "crimson",
      "pink",
      "plum",
      "purple",
      "violet",
    ]),
    slate: createTipSelector(["indigo", "blue", "sky", "cyan"]),
    sage: createTipSelector(["teal", "mint", "green"]),
    olive: createTipSelector(["grass", "lime"]),
    sand: createTipSelector(["yellow", "amber", "orange", "brown"]),
  },
};

function createTipSelector(values) {
  return (selected = []) => {
    const common = selected.filter((v) => values.includes(v));
    if (common.length) {
      return `will work well with ${common
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join(", ")}`;
    }
  };
}

export function isOverlay(color) {
  return groups.overlays.includes(color);
}

export function getColor(color, scale, dark, alpha) {
  if (isOverlay(color)) {
    dark = false;
    alpha = false;
  }
  let colorKey = color + (dark ? "Dark" : "") + (alpha ? "A" : "");
  let scaleKey = color + (alpha ? "A" : "") + scale;
  return Colors[colorKey][scaleKey];
}

export function selectedObjToArr(obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (value) {
      acc.push(key);
    }
    return acc;
  }, []);
}

export function selectedArrToObj(arr) {
  return arr.reduce((acc, value) => {
    acc[value] = true;
    return acc;
  }, {});
}
