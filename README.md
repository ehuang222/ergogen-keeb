# ergogen-keeb (better name pending)
A 66-key wireless (BLE) ergonomic split mechanical keyboard generated with Ergogen. Heavily inspired by [keyzog's Kapl](https://github.com/keyzog/kapl) and [omkbd's Ergodash](https://github.com/omkbd/ErgoDash) keyboards.

This is a learning project. It's _very_ WIP and my first foray into PCB design and 3D modeling. Be warned, stuff in this repo will likely be broken and messy.

![Keeb top-view enclosed case sketch](/image/preview_both.svg "Keeb top-view enclosed case sketch")

## Table of Contents
- [Project Overview](#project-overview)
- [Resources and Tools](#resources-and-tools)
- [Notes](#notes)

## Project Overview
TODO

## Resources and Tools
- [Ergogen Ceoloide](https://ergogen.ceoloide.com/) - Ceoloide's web-based Ergogen that supports custom footprints
- [ceoloide's ergogen PCB footprints](https://github.com/ceoloide/ergogen-footprints) - Very useful to have this open in a separate tab to reference footprint parameters when using the web-based Ergogen
- [FlatFootFox's Let's Design A Keyboard With Ergogen v4](https://flatfootfox.com/ergogen-introduction/) - The de facto Ergogen guide.
- [easyeda2kicad](https://github.com/uPesy/easyeda2kicad.py) - For downloading LSCS (see JLCPCB parts) footprints and models for use in KiCad
- [KiCad to Ergogen footprint converter](https://kicad2ergogen.genteure.com/) - For converting the abovementioned footprints so they can be used in Ceoloide's Ergogen
- [kicad-druid](https://github.com/Cimos/kicad-druid) - KiCad design rules for JLCPCB and PCBWay, supports KiCad versions 8 through 10
- [KiCad ViaStitching Plugin](https://github.com/weirdgyn/viastitching) - Generates stitching vias over a fill zone.
- [SVG Viewer](https://www.svgviewer.dev/) - A web-based SVG viewer, used this to flip/mirror SVG files.
- [Shaper Utilities](https://marketplace.autodesk.com/apps/1caf9b83-5b54-4cab-b893-9c0b9e8f312a) - Autodesk Fusion plugin for exporting SVGs
- [Joric's nrfmicro wiki - Alternatives](https://github.com/joric/nrfmicro/wiki/Alternatives) - Wiki for Pro Micro Compatible alternatives including the SuperMini NRF52840

## Notes
These are little notes to myself that I found useful (and because if I don't write them down I'll forget them in a week). Sharing these in case they may be useful to someone else.
- [How to View These PCBs With Their 3D Models in KiCad](#how-to-view-these-pcbs-with-their-3d-models-in-kicad)
- [Refining Ergogen Board Outlines in Fusion](#refining-ergogen-board-outlines-in-fusion)
- [How to Import SVG for Board Outline in KiCad](#how-to-import-svg-for-board-outline-in-kicad)

### How to View These PCBs With Their 3D Models in KiCad
Clone/download this repo and note down your local path to the /kicad/easyeda2kicad/ directory.

In KiCad, go to `Preferences` -> `Configure Paths...`. Add a new Environment Variable named `EASYEDA2KICAD` with your local easyeda2kicad/ directory path.

![KiCad Configure Paths](/image/kicad_paths.png "KiCad Configure Paths - Adding a new environment variable")

Next, go to `Preferences` -> `Manage Footprint Libraries...`. Add the paths to the easyeda2kicad.3dshapes/ and easyeda2kicad.pretty/ directories.

![KiCad Manage Footprint Libraries](/image/kicad_footprint_libraries.png "KiCad Manage Footprint Libraries - Adding the easyeda2kicad footprints and models")

Next, go to `Preferences` -> `Manage Symbol Libraries...` and add the path to the `easyeda2kicad.kicad_sym` file.

Restart KiCad, then open the PCB files. Click on `3D Viewer` to view the PCB with all its models.

![KiCad PCB 3D Viewer](/image/keeb_pcb_3d.png "KiCad PCB 3D Viewer - Front")
![KiCad PCB 3D Viewer](/image/keeb_pcb_3d_2.png "KiCad PCB 3D Viewer - Back")

### Refining Ergogen Board Outlines in Fusion

I wanted a curved edge to my PCBs (and key plate) but couldn't find an easy way to do it through KiCad or Ergogen. Then I read that you can do the outline in CAD software then import it into KiCad.

I took the DXFs of the board and plate outlines for one side (`board_left.dxf` and `plate_left.dxf`), created a new part in Fusion, created a sketch for each, then imported the DXFs into their respective sketch. I imported both DXFs because I wanted to easily compare them and make sure my new board edges would not interfere with the switch footprints.

Next, I added a few free-floating reference points above certain key cutouts Then added sketch dimensions from the key to its respective point, setting the dimension to 3.525 mm to match the outer edge widths of the key plate. I didn't want my new curve to go lower than this as I was worried it would make the key plate edges too bendy/fragile. I also needed the space for my PCB routes.

![Board Outline in Fusion](/image/fusion_board_dimensions.png "Board Outline in Fusion - Sketch dimensions")

Then I used the Fit Point Spline to create my curved lines. At some points, such as the top corners, the filleted areas needed to be redone to match the new spline. 

![Board Outline in Fusion](/image/fusion_board_outline.png "Board Outline in Fusion - Sketches with splines")

Once I was happy, I exported the modified `plate_left` sketch as a DXF for future Fusion use. I then copypasted the plate sketch into a new sketch and removed the key cutouts. 

<details>
<summary>How to Copypaste Fusion Sketches within the Same File</summary>
Edit the sketch that you want to copy from. 

Drag a selection over the entire sketch and `CTRL + C` to copy.

Click `Finish Sketch` to end editing the sketch. 

Then, edit the sketch that you want to paste in. `CTRL + V` to paste your previous selection. Make sure sketch is appropriately aligned.
</details>

I exported the DXF for use as my new `board_left.dxf`. Finally, using Fusion's Shaper Utilities plugin, I exported an SVG for use in KiCad.

![Board Outline in Fusion](/image/fusion_board_outline_splined.png "Board Outline in Fusion - Final board outline")

### How to Import SVG for Board Outline in KiCad

In KiCad, go to `File` > `Import` > `Graphics`. I selected my SVG and set the import layer to `User.4`. Place it somewhere on the side. I'm placing this outline on the User.4 layer first because I'm using this as a placeholder outline to align my edge cut that's coming up. 

![KiCad Import Vector](/image/kicad_import_svg.png "KiCad Import Vector - User.4 layer")

Next, I selected the imported polygon, all the segments should be highlighted, and set the line width to 0.15 mm to match the Ergogen-generated edge cut outline.

![KiCad Import Vector](/image/kicad_import_line_width.png "KiCad Import Vector - Updating polygon's line width")

On the right, I select the `Edge.Cuts` layer so it's active. Then clicked on the imported polygon and pressed `M` to begin moving it. Move it over the existing outline and it should snap to position right over it (you should see the crosshair icon on the cursor). If it's not snapping, try it at one of the corners.

![KiCad Import Vector](/image/kicad_edge_cut_move.png "KiCad Import Vector - Snapping to Edge Cut outline")

With the `Edge.Cuts` layer still active, go to `Edit` > `Global Deletions`. Check the box for `Board Outline` and select `Current layer (Edge.Cuts) only`. Click OK and your existing board outline should be deleted.

Import the SVG again but this time choose the `Edge.Cuts` layer.

![KiCad Import Vector](/image/kicad_import_svg_2.png "KiCad Import Vector - Edge.Cuts layer")

Update the line widths for this polygon to 0.15 mm like before.

Set the `User.4` layer as active and then move your new board outline over until it snaps onto the `User.4` outline.

Once again, go to `Global Deletions`. Check the box for `Graphics` and select the current layer (`User.4`). Click OK and the placeholder board outline is deleted.

Your new board outline is now in place on the `Edge.Cuts` layer. Refill ground zones and run DRC to verify.
