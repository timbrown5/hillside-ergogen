module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    A1: { type: 'net', value: undefined },
    A12: { type: 'net', value: undefined },
    A4: { type: 'net', value: undefined },
    A5: { type: 'net', value: undefined },
    A6: { type: 'net', value: undefined },
    A7: { type: 'net', value: undefined },
    A8: { type: 'net', value: undefined },
    A9: { type: 'net', value: undefined },
    B1: { type: 'net', value: undefined },
    B12: { type: 'net', value: undefined },
    B4: { type: 'net', value: undefined },
    B5: { type: 'net', value: undefined },
    B6: { type: 'net', value: undefined },
    B7: { type: 'net', value: undefined },
    B8: { type: 'net', value: undefined },
    B9: { type: 'net', value: undefined },
    S1: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "USB_C_Receptacle_TYPE-C-16P-CB1-6-073"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(descr "USB Type-C receptacle for USB 2.0 and PD")`);
fp.push(`(tags "usb usb-c 2.0 pd")`);
fp.push(`(attr smd)`);

// Unknown to kicad2ergogen

// Pads
fp.push(`(pad "A1" smd rect (at -3.2 ${flipN(flip, -0.75)} ${flipR(flip, p.r + 180)}) (size 0.54 1.1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.A1})`);
fp.push(`(pad "A4" smd rect (at -2.45 ${flipN(flip, -0.75)} ${flipR(flip, p.r + 180)}) (size 0.54 1.1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.A4})`);
fp.push(`(pad "A5" smd rect (at -1.25 ${flipN(flip, -0.75)} ${flipR(flip, p.r + 180)}) (size 0.3 1.1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.A5})`);
fp.push(`(pad "A6" smd rect (at -0.25 ${flipN(flip, -0.75)} ${flipR(flip, p.r + 180)}) (size 0.3 1.1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.A6})`);
fp.push(`(pad "A7" smd rect (at 0.25 ${flipN(flip, -0.75)} ${flipR(flip, p.r + 180)}) (size 0.3 1.1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.A7})`);
fp.push(`(pad "A8" smd rect (at 1.25 ${flipN(flip, -0.75)} ${flipR(flip, p.r + 180)}) (size 0.3 1.1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.A8})`);
fp.push(`(pad "A9" smd rect (at 2.45 ${flipN(flip, -0.75)} ${flipR(flip, p.r + 180)}) (size 0.54 1.1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.A9})`);
fp.push(`(pad "A12" smd rect (at 3.2 ${flipN(flip, -0.75)} ${flipR(flip, p.r + 180)}) (size 0.54 1.1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.A12})`);
fp.push(`(pad "B1" smd rect (at 3.2 ${flipN(flip, -0.75)} ${flipR(flip, p.r + 180)}) (size 0.54 1.1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.B1})`);
fp.push(`(pad "B4" smd rect (at 2.45 ${flipN(flip, -0.75)} ${flipR(flip, p.r + 180)}) (size 0.54 1.1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.B4})`);
fp.push(`(pad "B5" smd rect (at 1.75 ${flipN(flip, -0.75)} ${flipR(flip, p.r + 180)}) (size 0.3 1.1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.B5})`);
fp.push(`(pad "B6" smd rect (at 0.75 ${flipN(flip, -0.75)} ${flipR(flip, p.r + 180)}) (size 0.3 1.1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.B6})`);
fp.push(`(pad "B7" smd rect (at -0.75 ${flipN(flip, -0.75)} ${flipR(flip, p.r + 180)}) (size 0.3 1.1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.B7})`);
fp.push(`(pad "B8" smd rect (at -1.75 ${flipN(flip, -0.75)} ${flipR(flip, p.r + 180)}) (size 0.3 1.1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.B8})`);
fp.push(`(pad "B9" smd rect (at -2.45 ${flipN(flip, -0.75)} ${flipR(flip, p.r + 180)}) (size 0.54 1.1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.B9})`);
fp.push(`(pad "B12" smd rect (at -3.2 ${flipN(flip, -0.75)} ${flipR(flip, p.r + 180)}) (size 0.54 1.1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.B12})`);
fp.push(`(pad "S1" thru_hole oval (at -5.62 ${flipN(flip, 0.4)} ${flipR(flip, p.r + 180)}) (size 1.2 2) (drill oval 0.6 1.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.S1})`);
fp.push(`(pad "S1" thru_hole oval (at -5.62 ${flipN(flip, 4.4)} ${flipR(flip, p.r + 180)}) (size 1.2 2.25) (drill oval 0.6 1.65) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.S1})`);
fp.push(`(pad "S1" thru_hole oval (at 5.62 ${flipN(flip, 0.4)} ${flipR(flip, p.r + 180)}) (size 1.2 2) (drill oval 0.6 1.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.S1})`);
fp.push(`(pad "S1" thru_hole oval (at 5.62 ${flipN(flip, 4.4)} ${flipR(flip, p.r + 180)}) (size 1.2 2.25) (drill oval 0.6 1.65) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.S1})`);

// Drawings on F.CrtYd
fp.push(`(fp_line (start -4.47 ${flipN(flip, -1.4)}) (end 4.47 ${flipN(flip, -1.4)}) (stroke (width 0.08) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -4.47 ${flipN(flip, 6.5)}) (end -4.47 ${flipN(flip, -1.4)}) (stroke (width 0.08) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 4.47 ${flipN(flip, -1.4)}) (end 4.47 ${flipN(flip, 6.5)}) (stroke (width 0.08) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 4.47 ${flipN(flip, 6.5)}) (end -4.47 ${flipN(flip, 6.5)}) (stroke (width 0.08) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);

// Drawings on Edge.Cuts
fp.push(`(fp_line (start -4.62 ${flipN(flip, -0.05)}) (end -4.62 ${flipN(flip, 6)}) (stroke (width 0.08) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start -3.513782 ${flipN(flip, -0.2)}) (end 3.513782 ${flipN(flip, -0.2)}) (stroke (width 0.08) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start 4.62 ${flipN(flip, -0.05)}) (end 4.62 ${flipN(flip, 6)}) (stroke (width 0.08) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_arc (start -4.62 ${flipN(flip, -0.05)}) (mid -4.249409 ${flipN(flip, -0.532963)}) (end -3.686987 ${flipN(flip, -0.3)}) (stroke (width 0.08) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_arc (start -3.513782 ${flipN(flip, -0.2)}) (mid -3.613782 ${flipN(flip, -0.226795)}) (end -3.686987 ${flipN(flip, -0.3)}) (stroke (width 0.08) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_arc (start 3.686987 ${flipN(flip, -0.3)}) (mid 3.613782 ${flipN(flip, -0.226795)}) (end 3.513782 ${flipN(flip, -0.2)}) (stroke (width 0.08) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_arc (start 3.686987 ${flipN(flip, -0.3)}) (mid 4.24941 ${flipN(flip, -0.532963)}) (end 4.62 ${flipN(flip, -0.05)}) (stroke (width 0.08) (type solid)) (layer "Edge.Cuts") )`);

// Drawings on F.Fab
fp.push(`(fp_text user "\${REFERENCE}" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

// Drawings on Dwgs.User
fp.push(`(fp_line (start -4.62 ${flipN(flip, 6)}) (end 4.62 ${flipN(flip, 6)}) (stroke (width 0.12) (type solid)) (layer "Dwgs.User") )`);
fp.push(`(fp_text user "PCB Edge" (at 0 ${flipN(flip, 5.1)} ${flipR(flip, p.r + 0) % 180}) (layer "Dwgs.User")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

// 3D Models
fp.push(`(model "/Users/danny/syncproj/kicad-libs/3dmodels/USB4510-03-1-A.stp" (offset (xyz 0 -6.43 0)) (scale (xyz 1 1 1)) (rotate (xyz -90 0 0)))`);

// Properties
// fp.push(`(property "Reference" "REF**" (at 0 ${flipN(flip, -2.15)} ${flipR(flip, p.r + 180) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 0.8 0.8) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "USB_C_Receptacle_TYPE-C-16P-CB1-6-073" (at 0 ${flipN(flip, -5.5)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Footprint" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "https://datasheet.lcsc.com/lcsc/2110211830_SHOU-HAN-TYPE-C-16P-CB1-6-073_C2906290.pdf" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27)) (justify${ flip ? " mirror" : ""})))`);

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

