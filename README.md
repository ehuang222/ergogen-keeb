# ergogen-keeb (better name pending)
A 66-key wireless (BLE) ergonomic split mechanical keyboard generated with Ergogen. Heavily inspired by [keyzog's Kapl](https://github.com/keyzog/kapl) and [omkbd's Ergodash](https://github.com/omkbd/ErgoDash) keyboards.

This is a learning project. It's _very_ WIP and my first foray into PCB design and 3D modeling. Be warned, stuff in this repo will likely be broken and messy.

![Keeb top-view enclosed case sketch](/image/preview_w_case.svg "Keeb top-view enclosed case sketch")

## Resources and Tools
- [Ergogen Ceoloide](https://ergogen.ceoloide.com/) - Ceoloide's web-based Ergogen that supports custom footprints
- [ceoloide's ergogen PCB footprints](https://github.com/ceoloide/ergogen-footprints) - Very useful to have this open in a separate tab to reference footprint parameters when using the web-based Ergogen
- [FlatFootFox's Let's Design A Keyboard With Ergogen v4](https://flatfootfox.com/ergogen-introduction/) - The de facto Ergogen guide.
- [easyeda2kicad](https://github.com/uPesy/easyeda2kicad.py) - For downloading LSCS (see JLCPCB parts) footprints and models for use in KiCad
- [KiCad to Ergogen footprint converter](https://kicad2ergogen.genteure.com/) - For converting the abovementioned footprints so they can be used in Ceoloide's Ergogen
- [kicad-druid](https://github.com/Cimos/kicad-druid) - KiCad design rules for JLCPCB and PCBWay, supports KiCad versions 8 through 10
- [KiCad ViaStitching Plugin](https://github.com/weirdgyn/viastitching) - Generates stitching vias over a fill zone.
- [SVG Viewer](https://www.svgviewer.dev/) - A web-based SVG viewer, used this to flip/mirror SVG files.
- [Joric's nrfmicro wiki - Alternatives](https://github.com/joric/nrfmicro/wiki/Alternatives) - Wiki for Pro Micro Compatible alternatives including the SuperMini NRF52840

## Notes
### How to View These PCBs With Their 3D Models in Kicad
Clone/download this repo and note down your local path to the /kicad/easyeda2kicad/ directory.

In KiCad, go to `Preferences` -> `Configure Paths...`. Add a new Environment Variable named `EASYEDA2KICAD` with your local easyeda2kicad/ directory path.

![KiCad Configure Paths](/image/kicad_paths.png "KiCad Configure Paths - Adding a new environment variable")

Next, go to `Preferences` -> `Manage Footprint Libraries...`. Add the paths to the easyeda2kicad.3dshapes/ and easyeda2kicad.pretty/ directories.

![KiCad Manage Footprint Libraries](/image/kicad_footprint_libraries.png "KiCad Manage Footprint Libraries - Adding the easyeda2kicad footprints and models")

Next, go to `Preferences` -> `Manage Symbol Libraries...` and add the path to the `easyeda2kicad.kicad_sym` file.

Restart KiCad, then open the PCB files. Click on `3D Viewer` to view the PCB with all its models.

![KiCad PCB 3D Viewer](/image/keeb_pcb_3d.png "KiCad PCB 3D Viewer - Front")
![KiCad PCB 3D Viewer](/image/keeb_pcb_3d_2.png "KiCad PCB 3D Viewer - Back")