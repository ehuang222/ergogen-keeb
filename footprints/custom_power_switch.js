// Part ID: K3-1235D-L1
// LCSC ID: C223840
module.exports = {
  params: {
    designator: 'PWR',
    side: 'F',
    P1: { type: 'net', value: undefined },
    P2: { type: 'net', value: undefined },
    P3: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "SW-TH_K3-1235D-L1"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr through_hole)`);

// Unknown to kicad2ergogen
fp.push(`(duplicate_pad_numbers_are_jumpers no)`);
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "1" thru_hole circle (at -1.6 ${flipN(flip, -2.54)} ${flipR(flip, p.r + 0)}) (size 1.8 1.8) (drill 1.199998) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P1})`);
fp.push(`(pad "2" thru_hole circle (at 1.6 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 1.8 1.8) (drill 1.199998) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P2})`);
fp.push(`(pad "3" thru_hole circle (at -1.6 ${flipN(flip, 2.54)} ${flipR(flip, p.r + 0)}) (size 1.8 1.8) (drill 1.199998) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P3})`);

// Drawings on F.CrtYd
fp.push(`(fp_line (start -2.5 ${flipN(flip, -4.63)}) (end 2.5 ${flipN(flip, -4.63)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -2.5 ${flipN(flip, 4.63)}) (end -2.5 ${flipN(flip, -4.63)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 2.5 ${flipN(flip, -4.63)}) (end 2.5 ${flipN(flip, 4.63)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 2.5 ${flipN(flip, 4.63)}) (end -2.5 ${flipN(flip, 4.63)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);

// Drawings on F.Fab
fp.push(`(fp_circle (center -1.6 ${flipN(flip, -2.54)}) (end -1.35 ${flipN(flip, -2.54)}) (stroke (width 0.5) (type solid)) (fill no) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_circle (center -1.6 ${flipN(flip, 2.54)}) (end -1.35 ${flipN(flip, 2.54)}) (stroke (width 0.5) (type solid)) (fill no) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_circle (center 1.6 ${flipN(flip, 0)}) (end 1.85 ${flipN(flip, 0)}) (stroke (width 0.5) (type solid)) (fill no) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
//fp.push(`(fp_text user "\${REFERENCE}" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

// Drawings on F.SilkS
fp.push(`(fp_line (start -1.75 ${flipN(flip, -4.5)}) (end -1.75 ${flipN(flip, -3.66)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -1.75 ${flipN(flip, -4.5)}) (end 1.75 ${flipN(flip, -4.5)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -1.75 ${flipN(flip, -1.42)}) (end -1.75 ${flipN(flip, 1.42)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -1.75 ${flipN(flip, 3.66)}) (end -1.75 ${flipN(flip, 4.5)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -1.27 ${flipN(flip, -1.46)}) (end -1.27 ${flipN(flip, 1.46)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -1.02 ${flipN(flip, -0.51)}) (end -1.02 ${flipN(flip, -1.57)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -1.02 ${flipN(flip, -0.51)}) (end 0.59 ${flipN(flip, -0.51)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 1.02 ${flipN(flip, -2.29)}) (end -0.5 ${flipN(flip, -2.29)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 1.02 ${flipN(flip, -2.29)}) (end 1.02 ${flipN(flip, -0.97)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 1.27 ${flipN(flip, -2.54)}) (end -0.47 ${flipN(flip, -2.54)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 1.27 ${flipN(flip, -2.54)}) (end 1.27 ${flipN(flip, -1.08)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 1.27 ${flipN(flip, 1.08)}) (end 1.27 ${flipN(flip, 2.54)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 1.27 ${flipN(flip, 2.54)}) (end -0.47 ${flipN(flip, 2.54)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 1.75 ${flipN(flip, -1.12)}) (end 1.75 ${flipN(flip, -4.5)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 1.75 ${flipN(flip, 4.5)}) (end -1.75 ${flipN(flip, 4.5)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 1.75 ${flipN(flip, 4.5)}) (end 1.75 ${flipN(flip, 1.12)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// 3D Models
fp.push(`(model "\${EASYEDA2KICAD}/easyeda2kicad.3dshapes/SW-TH_K3-1235D-L1.wrl" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))`);

// Properties
// fp.push(`(property "Reference" "REF**" (at 0 ${flipN(flip, -6.54)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "SW-TH_K3-1235D-L1" (at 0 ${flipN(flip, 6.54)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "LCSC Part" "C223840" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27)) (justify${ flip ? " mirror" : ""})))`);

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



