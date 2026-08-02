module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    P1: { type: 'net', value: undefined },
    P2: { type: 'net', value: undefined },
    P3: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "SW-TH_K3-1235S-L1"`);
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
fp.push(`(pad "1" smd rect (at -2.5 ${flipN(flip, 3.25)} ${flipR(flip, p.r + 180)}) (size 1 1.7) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.P1})`);
fp.push(`(pad "2" smd rect (at 0 ${flipN(flip, -3.25)} ${flipR(flip, p.r + 180)}) (size 1 1.7) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.P2})`);
fp.push(`(pad "3" smd rect (at 2.5 ${flipN(flip, 3.25)} ${flipR(flip, p.r + 180)}) (size 1 1.7) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.P3})`);

// Drawings on F.CrtYd
fp.push(`(fp_line (start -4.5 ${flipN(flip, -1.75)}) (end 4.5 ${flipN(flip, -1.75)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -4.5 ${flipN(flip, 1.75)}) (end -4.5 ${flipN(flip, -1.75)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 4.5 ${flipN(flip, -1.75)}) (end 4.5 ${flipN(flip, 1.75)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 4.5 ${flipN(flip, 1.75)}) (end -4.5 ${flipN(flip, 1.75)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);

// Drawings on F.Fab
//fp.push(`(fp_text user "\${REFERENCE}" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

// Drawings on F.SilkS
fp.push(`(fp_line (start -4.5 ${flipN(flip, -1.8)}) (end 4.5 ${flipN(flip, -1.8)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -4.5 ${flipN(flip, -1.28)}) (end -4.5 ${flipN(flip, -1.8)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -4.5 ${flipN(flip, 1.8)}) (end -4.5 ${flipN(flip, -1.28)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -2.03 ${flipN(flip, -0.76)}) (end 1.87 ${flipN(flip, -0.76)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -2.03 ${flipN(flip, 0.74)}) (end -2.03 ${flipN(flip, -0.76)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -1.73 ${flipN(flip, -0.46)}) (end -1.73 ${flipN(flip, 0.44)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -1.73 ${flipN(flip, 0.44)}) (end -0.83 ${flipN(flip, 0.44)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -0.83 ${flipN(flip, -0.46)}) (end -1.73 ${flipN(flip, -0.46)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -0.83 ${flipN(flip, 0.44)}) (end -0.83 ${flipN(flip, -0.46)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 1.87 ${flipN(flip, -0.76)}) (end 1.87 ${flipN(flip, 0.74)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 1.87 ${flipN(flip, 0.74)}) (end -2.03 ${flipN(flip, 0.74)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 4.5 ${flipN(flip, -1.8)}) (end 4.5 ${flipN(flip, 1.8)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 4.5 ${flipN(flip, 1.8)}) (end -4.5 ${flipN(flip, 1.8)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// 3D Models
fp.push(`(model "\${EASYEDA2KICAD}/easyeda2kicad.3dshapes/SW-TH_K3-1235S-L1.wrl" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))`);

// Properties
// fp.push(`(property "Reference" "REF**" (at 0 ${flipN(flip, -7.25)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "SW-TH_K3-1235S-L1" (at 0 ${flipN(flip, 7.25)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "LCSC Part" "C223838" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27)) (justify${ flip ? " mirror" : ""})))`);

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

