module.exports = {
  params: {
    designator: 'RST',
    side: 'F',
    P1: { type: 'net', value: undefined },
    P2: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint easyeda2kicad:KEY-SMD_L6.0-W3.3-LS6.7`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr smd)`);

// Unknown to kicad2ergogen

// Pads
fp.push(`(pad "1" smd rect (at -3.25 ${flipN(flip, 0.00)} ${flipR(flip, p.r + 0.00)}) (size 1.500 1.300) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") ${p.P1})`);
fp.push(`(pad "2" smd rect (at 3.25 ${flipN(flip, 0.00)} ${flipR(flip, p.r + 0.00)}) (size 1.500 1.300) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") ${p.P2})`);

// Drawings on F.CrtYd
fp.push(`(fp_line (start -3.00 ${flipN(flip, 1.65)}) (end -3.00 ${flipN(flip, -1.65)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -3.00 ${flipN(flip, -1.65)}) (end 3.00 ${flipN(flip, -1.65)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 3.00 ${flipN(flip, -1.65)}) (end 3.00 ${flipN(flip, 1.65)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 3.00 ${flipN(flip, 1.65)}) (end -3.00 ${flipN(flip, 1.65)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);

// Drawings on F.Fab
//fp.push(`(fp_text value KEY-SMD_L6.0-W3.3-LS6.7 (at 0.000 ${flipN(flip, 4.000)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
//fp.push(`(fp_text user %R (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

// Drawings on F.SilkS
//fp.push(`(fp_text reference REF** (at 0.000 ${flipN(flip, -4.000)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
fp.push(`(fp_line (start -3.00 ${flipN(flip, -1.65)}) (end 3.00 ${flipN(flip, -1.65)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start 3.00 ${flipN(flip, 1.65)}) (end -3.00 ${flipN(flip, 1.65)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start 3.00 ${flipN(flip, -1.02)}) (end 2.29 ${flipN(flip, -1.02)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start 2.29 ${flipN(flip, -1.02)}) (end 2.29 ${flipN(flip, 1.02)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start 2.29 ${flipN(flip, 1.02)}) (end 3.00 ${flipN(flip, 1.02)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start -3.00 ${flipN(flip, -1.02)}) (end -2.29 ${flipN(flip, -1.02)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start -2.29 ${flipN(flip, -1.02)}) (end -2.29 ${flipN(flip, 1.02)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start -2.29 ${flipN(flip, 1.02)}) (end -3.00 ${flipN(flip, 1.02)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start -1.52 ${flipN(flip, -0.76)}) (end -1.52 ${flipN(flip, -0.76)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start -1.52 ${flipN(flip, -0.76)}) (end 1.52 ${flipN(flip, -0.76)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start 1.52 ${flipN(flip, -0.76)}) (end 1.52 ${flipN(flip, 0.76)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start 1.52 ${flipN(flip, 0.76)}) (end -1.52 ${flipN(flip, 0.76)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start -1.52 ${flipN(flip, 0.76)}) (end -1.52 ${flipN(flip, -0.76)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start 3.00 ${flipN(flip, -1.65)}) (end 3.00 ${flipN(flip, -0.98)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start 3.00 ${flipN(flip, 0.98)}) (end 3.00 ${flipN(flip, 1.65)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start -3.00 ${flipN(flip, -1.65)}) (end -3.00 ${flipN(flip, -0.98)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start -3.00 ${flipN(flip, 0.98)}) (end -3.00 ${flipN(flip, 1.65)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_circle (center -3.35 ${flipN(flip, 1.65)}) (end -3.32 ${flipN(flip, 1.65)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.06))`);

// 3D Models
fp.push(`(model "\${EASYEDA2KICAD}/easyeda2kicad.3dshapes/KEY-SMD_L6.0-W3.3-H5.0-LS6.7.wrl" (offset (xyz 0.000 0.000 0.000)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))`);

// Properties
// fp.push(`(property "LCSC Part" "C127906")`);

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

