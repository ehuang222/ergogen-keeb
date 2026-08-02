module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    P1: { type: 'net', value: undefined },
    P2: { type: 'net', value: undefined },
    P3: { type: 'net', value: undefined },
    P4: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint easyeda2kicad:CONN-SMD_1.25T-2P-WT`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr smd)`);

// Unknown to kicad2ergogen

// Pads
fp.push(`(pad "3" smd rect (at -3.47 ${flipN(flip, -1.54)} ${flipR(flip, p.r + 0.00)}) (size 2.400 3.200) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") ${p.P3})`);
fp.push(`(pad "4" smd rect (at 3.47 ${flipN(flip, -1.54)} ${flipR(flip, p.r + 0.00)}) (size 2.400 3.200) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") ${p.P4})`);
fp.push(`(pad "2" smd rect (at 0.62 ${flipN(flip, 1.54)} ${flipR(flip, p.r + 0.00)}) (size 0.700 2.000) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") ${p.P2})`);
fp.push(`(pad "1" smd rect (at -0.63 ${flipN(flip, 1.54)} ${flipR(flip, p.r + 0.00)}) (size 0.700 2.000) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") ${p.P1})`);

// Drawings on F.CrtYd
fp.push(`(fp_line (start -3.83 ${flipN(flip, -2.23)}) (end -3.81 ${flipN(flip, -2.29)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -3.81 ${flipN(flip, -2.29)}) (end -3.80 ${flipN(flip, -2.35)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -3.80 ${flipN(flip, -2.35)}) (end -3.75 ${flipN(flip, -2.41)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -3.75 ${flipN(flip, -2.41)}) (end -3.70 ${flipN(flip, -2.45)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -3.70 ${flipN(flip, -2.45)}) (end -3.63 ${flipN(flip, -2.47)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -3.63 ${flipN(flip, -2.47)}) (end -3.62 ${flipN(flip, -2.47)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -3.62 ${flipN(flip, -2.47)}) (end -3.62 ${flipN(flip, -2.98)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -3.62 ${flipN(flip, -2.98)}) (end -3.61 ${flipN(flip, -2.99)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -3.61 ${flipN(flip, -2.99)}) (end -3.60 ${flipN(flip, -3.01)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -3.60 ${flipN(flip, -3.01)}) (end -3.59 ${flipN(flip, -3.02)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -3.59 ${flipN(flip, -3.02)}) (end -3.56 ${flipN(flip, -3.03)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -3.56 ${flipN(flip, -3.03)}) (end -2.12 ${flipN(flip, -3.03)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -2.12 ${flipN(flip, -3.03)}) (end -2.12 ${flipN(flip, -3.39)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -2.12 ${flipN(flip, -3.39)}) (end -2.11 ${flipN(flip, -3.41)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -2.11 ${flipN(flip, -3.41)}) (end -2.10 ${flipN(flip, -3.42)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -2.10 ${flipN(flip, -3.42)}) (end -2.08 ${flipN(flip, -3.43)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -2.08 ${flipN(flip, -3.43)}) (end -0.15 ${flipN(flip, -3.43)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -0.15 ${flipN(flip, -3.43)}) (end -0.16 ${flipN(flip, -3.43)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -0.16 ${flipN(flip, -3.43)}) (end 2.13 ${flipN(flip, -3.43)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 2.13 ${flipN(flip, -3.43)}) (end 2.13 ${flipN(flip, -3.43)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 2.13 ${flipN(flip, -3.43)}) (end 2.13 ${flipN(flip, -3.43)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 2.13 ${flipN(flip, -3.43)}) (end 2.13 ${flipN(flip, -3.43)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 2.13 ${flipN(flip, -3.43)}) (end 2.13 ${flipN(flip, -3.43)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 2.13 ${flipN(flip, -3.43)}) (end 2.13 ${flipN(flip, -3.03)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 2.13 ${flipN(flip, -3.03)}) (end 3.58 ${flipN(flip, -3.03)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 3.58 ${flipN(flip, -3.03)}) (end 3.63 ${flipN(flip, -2.98)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 3.63 ${flipN(flip, -2.98)}) (end 3.63 ${flipN(flip, -2.47)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 3.63 ${flipN(flip, -2.47)}) (end 3.70 ${flipN(flip, -2.45)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 3.70 ${flipN(flip, -2.45)}) (end 3.76 ${flipN(flip, -2.41)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 3.76 ${flipN(flip, -2.41)}) (end 3.80 ${flipN(flip, -2.34)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 3.80 ${flipN(flip, -2.34)}) (end 3.81 ${flipN(flip, -2.29)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 3.81 ${flipN(flip, -2.29)}) (end 3.83 ${flipN(flip, -2.23)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 3.83 ${flipN(flip, -2.23)}) (end 3.83 ${flipN(flip, -0.55)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 3.83 ${flipN(flip, -0.55)}) (end 3.82 ${flipN(flip, -0.49)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 3.82 ${flipN(flip, -0.49)}) (end 3.80 ${flipN(flip, -0.42)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 3.80 ${flipN(flip, -0.42)}) (end 3.76 ${flipN(flip, -0.37)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 3.76 ${flipN(flip, -0.37)}) (end 3.69 ${flipN(flip, -0.33)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 3.69 ${flipN(flip, -0.33)}) (end 3.63 ${flipN(flip, -0.31)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 3.63 ${flipN(flip, -0.31)}) (end 3.62 ${flipN(flip, -0.30)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 3.62 ${flipN(flip, -0.30)}) (end 3.62 ${flipN(flip, -0.28)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 3.62 ${flipN(flip, -0.28)}) (end 3.57 ${flipN(flip, -0.23)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 3.57 ${flipN(flip, -0.23)}) (end 2.13 ${flipN(flip, -0.22)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 2.13 ${flipN(flip, -0.22)}) (end 2.12 ${flipN(flip, 0.77)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 2.12 ${flipN(flip, 0.77)}) (end -2.12 ${flipN(flip, 0.77)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -2.12 ${flipN(flip, 0.77)}) (end -2.12 ${flipN(flip, -0.23)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -2.12 ${flipN(flip, -0.23)}) (end -3.58 ${flipN(flip, -0.23)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -3.58 ${flipN(flip, -0.23)}) (end -3.63 ${flipN(flip, -0.31)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -3.63 ${flipN(flip, -0.31)}) (end -3.70 ${flipN(flip, -0.33)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -3.70 ${flipN(flip, -0.33)}) (end -3.75 ${flipN(flip, -0.37)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -3.75 ${flipN(flip, -0.37)}) (end -3.80 ${flipN(flip, -0.42)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -3.80 ${flipN(flip, -0.42)}) (end -3.83 ${flipN(flip, -0.55)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -3.83 ${flipN(flip, -0.55)}) (end -3.83 ${flipN(flip, -2.23)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);

// Drawings on F.Fab
//fp.push(`(fp_text value CONN-SMD_1.25T-2P-WT (at 0.000 ${flipN(flip, 5.545)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
//fp.push(`(fp_text user %R (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

// Drawings on F.SilkS
//fp.push(`(fp_text reference REF** (at 0.000 ${flipN(flip, -5.545)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
fp.push(`(fp_line (start -2.10 ${flipN(flip, -3.40)}) (end -0.20 ${flipN(flip, -3.40)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start -0.20 ${flipN(flip, -3.40)}) (end -0.20 ${flipN(flip, -1.90)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start -0.20 ${flipN(flip, -1.90)}) (end 0.20 ${flipN(flip, -1.90)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start 0.20 ${flipN(flip, -1.90)}) (end 0.20 ${flipN(flip, -3.40)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start 0.20 ${flipN(flip, -3.40)}) (end 2.10 ${flipN(flip, -3.40)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start 2.10 ${flipN(flip, -3.40)}) (end 2.10 ${flipN(flip, 0.80)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start 2.10 ${flipN(flip, 0.80)}) (end 1.20 ${flipN(flip, 0.80)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start -1.21 ${flipN(flip, 0.80)}) (end -2.10 ${flipN(flip, 0.80)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start -2.10 ${flipN(flip, 0.80)}) (end -2.10 ${flipN(flip, -3.40)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start 0.04 ${flipN(flip, 0.80)}) (end -0.05 ${flipN(flip, 0.80)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_circle (center -3.83 ${flipN(flip, 1.88)}) (end -3.80 ${flipN(flip, 1.88)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.06))`);

// 3D Models
fp.push(`(model "\${EASYEDA2KICAD}/easyeda2kicad.3dshapes/CONN-SMD_MX1.25-WS-2P.wrl" (offset (xyz 0.000 0.000 0.000)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 180)))`);

// Properties
// fp.push(`(property "LCSC Part" "C145938")`);

    fp.push(')');
    return fp.join('\n');
  }
}
function normalizeAngle(angle) {
  angle = angle % 360;
  if (angle <= -180) angle += 360;
  else if (angle > 180) angle -= 360;
  return angle;
}
function flipR(flip, r) { return normalizeAngle(flip ? (180 - r) : r) }
function flipN(flip, n) { return flip ? -n : n }

