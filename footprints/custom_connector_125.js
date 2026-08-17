// Part ID: 1.25T-2P-WT
// LCSC ID: C145938
module.exports = {
  params: {
    designator: 'JST',
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

fp.push(`(footprint "CONN-SMD_1.25T-2P-WT"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr smd)`);

// Unknown to kicad2ergogen
fp.push(`(duplicate_pad_numbers_are_jumpers no)`);
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "1" smd rect (at -0.63 ${flipN(flip, 1.54)} ${flipR(flip, p.r + 0)}) (size 0.7 2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.P1})`);
fp.push(`(pad "2" smd rect (at 0.62 ${flipN(flip, 1.54)} ${flipR(flip, p.r + 0)}) (size 0.7 2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.P2})`);
fp.push(`(pad "3" smd rect (at -3.47 ${flipN(flip, -1.54)} ${flipR(flip, p.r + 0)}) (size 2.4 3.2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.P3})`);
fp.push(`(pad "4" smd rect (at 3.47 ${flipN(flip, -1.54)} ${flipR(flip, p.r + 0)}) (size 2.4 3.2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.P4})`);

// Drawings on F.CrtYd
fp.push(`(fp_line (start -3.83 ${flipN(flip, -2.23)}) (end -3.81 ${flipN(flip, -2.29)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -3.83 ${flipN(flip, -0.55)}) (end -3.83 ${flipN(flip, -2.23)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -3.81 ${flipN(flip, -2.29)}) (end -3.8 ${flipN(flip, -2.35)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -3.8 ${flipN(flip, -2.35)}) (end -3.75 ${flipN(flip, -2.41)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -3.8 ${flipN(flip, -0.42)}) (end -3.83 ${flipN(flip, -0.55)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -3.75 ${flipN(flip, -2.41)}) (end -3.7 ${flipN(flip, -2.45)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -3.75 ${flipN(flip, -0.37)}) (end -3.8 ${flipN(flip, -0.42)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -3.7 ${flipN(flip, -2.45)}) (end -3.63 ${flipN(flip, -2.47)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -3.7 ${flipN(flip, -0.33)}) (end -3.75 ${flipN(flip, -0.37)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -3.63 ${flipN(flip, -2.47)}) (end -3.62 ${flipN(flip, -2.47)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -3.63 ${flipN(flip, -0.31)}) (end -3.7 ${flipN(flip, -0.33)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -3.62 ${flipN(flip, -2.98)}) (end -3.61 ${flipN(flip, -2.99)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -3.62 ${flipN(flip, -2.47)}) (end -3.62 ${flipN(flip, -2.98)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -3.61 ${flipN(flip, -2.99)}) (end -3.6 ${flipN(flip, -3.01)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -3.6 ${flipN(flip, -3.01)}) (end -3.59 ${flipN(flip, -3.02)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -3.59 ${flipN(flip, -3.02)}) (end -3.56 ${flipN(flip, -3.03)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -3.58 ${flipN(flip, -0.23)}) (end -3.63 ${flipN(flip, -0.31)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -3.56 ${flipN(flip, -3.03)}) (end -2.12 ${flipN(flip, -3.03)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -2.12 ${flipN(flip, -3.43)}) (end 2.13 ${flipN(flip, -3.43)}) (stroke (width 0.05) (type default)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -2.12 ${flipN(flip, -3.03)}) (end -2.12 ${flipN(flip, -3.43)}) (stroke (width 0.05) (type default)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -2.12 ${flipN(flip, -0.23)}) (end -3.58 ${flipN(flip, -0.23)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -2.12 ${flipN(flip, 0.77)}) (end -2.12 ${flipN(flip, -0.23)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 2.12 ${flipN(flip, 0.77)}) (end -2.12 ${flipN(flip, 0.77)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 2.13 ${flipN(flip, -3.03)}) (end 2.13 ${flipN(flip, -3.43)}) (stroke (width 0.05) (type default)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 2.13 ${flipN(flip, -3.03)}) (end 3.58 ${flipN(flip, -3.03)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 2.13 ${flipN(flip, -0.22)}) (end 2.12 ${flipN(flip, 0.77)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 3.57 ${flipN(flip, -0.23)}) (end 2.13 ${flipN(flip, -0.22)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 3.58 ${flipN(flip, -3.03)}) (end 3.63 ${flipN(flip, -2.98)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 3.62 ${flipN(flip, -0.3)}) (end 3.62 ${flipN(flip, -0.28)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 3.62 ${flipN(flip, -0.28)}) (end 3.57 ${flipN(flip, -0.23)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 3.63 ${flipN(flip, -2.98)}) (end 3.63 ${flipN(flip, -2.47)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 3.63 ${flipN(flip, -2.47)}) (end 3.7 ${flipN(flip, -2.45)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 3.63 ${flipN(flip, -0.31)}) (end 3.62 ${flipN(flip, -0.3)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 3.69 ${flipN(flip, -0.33)}) (end 3.63 ${flipN(flip, -0.31)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 3.7 ${flipN(flip, -2.45)}) (end 3.76 ${flipN(flip, -2.41)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 3.76 ${flipN(flip, -2.41)}) (end 3.8 ${flipN(flip, -2.34)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 3.76 ${flipN(flip, -0.37)}) (end 3.69 ${flipN(flip, -0.33)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 3.8 ${flipN(flip, -2.34)}) (end 3.81 ${flipN(flip, -2.29)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 3.8 ${flipN(flip, -0.42)}) (end 3.76 ${flipN(flip, -0.37)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 3.81 ${flipN(flip, -2.29)}) (end 3.83 ${flipN(flip, -2.23)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 3.82 ${flipN(flip, -0.49)}) (end 3.8 ${flipN(flip, -0.42)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 3.83 ${flipN(flip, -2.23)}) (end 3.83 ${flipN(flip, -0.55)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 3.83 ${flipN(flip, -0.55)}) (end 3.82 ${flipN(flip, -0.49)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);

// Drawings on F.Fab
//fp.push(`(fp_text user "\${REFERENCE}" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

// Drawings on F.SilkS
fp.push(`(fp_line (start -2.1 ${flipN(flip, -3.4)}) (end -0.2 ${flipN(flip, -3.4)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -2.1 ${flipN(flip, 0.8)}) (end -2.1 ${flipN(flip, -3.4)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -1.21 ${flipN(flip, 0.8)}) (end -2.1 ${flipN(flip, 0.8)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -0.2 ${flipN(flip, -3.4)}) (end -0.2 ${flipN(flip, -1.9)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -0.2 ${flipN(flip, -1.9)}) (end 0.2 ${flipN(flip, -1.9)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 0.04 ${flipN(flip, 0.8)}) (end -0.05 ${flipN(flip, 0.8)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 0.2 ${flipN(flip, -3.4)}) (end 2.1 ${flipN(flip, -3.4)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 0.2 ${flipN(flip, -1.9)}) (end 0.2 ${flipN(flip, -3.4)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 2.1 ${flipN(flip, -3.4)}) (end 2.1 ${flipN(flip, 0.8)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 2.1 ${flipN(flip, 0.8)}) (end 1.2 ${flipN(flip, 0.8)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// 3D Models
fp.push(`(model "\${EASYEDA2KICAD}/easyeda2kicad.3dshapes/CONN-SMD_MX1.25-WS-2P.wrl" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 180)))`);

// Properties
// fp.push(`(property "Reference" "REF**" (at 0 ${flipN(flip, -5.545)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "CONN-SMD_1.25T-2P-WT" (at 0 ${flipN(flip, 5.545)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "LCSC Part" "C145938" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27)) (justify${ flip ? " mirror" : ""})))`);

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



