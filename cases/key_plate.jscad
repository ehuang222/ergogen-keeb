function plate_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[427.225,-178.525],[427.225,-85.275]]).appendArc([425.225,-83.275],{"radius":2,"clockwise":false,"large":false}).appendPoint([406.647136,-83.275]).appendArc([405.7527088,-83.0638544],{"radius":2,"clockwise":true,"large":false}).appendPoint([387.2965955,-73.8357978]).appendArc([386.9402233,-73.6983872],{"radius":2,"clockwise":false,"large":false}).appendPoint([370.3389752,-69.061235]).appendArc([369.8009202,-68.9875],{"radius":2,"clockwise":false,"large":false}).appendPoint([330.2490798,-68.9875]).appendArc([329.7110248,-69.061235],{"radius":2,"clockwise":false,"large":false}).appendPoint([313.0722042,-73.7088821]).appendArc([312.7857524,-73.8130087],{"radius":2,"clockwise":false,"large":false}).appendPoint([293.0504932,-82.7430963]).appendArc([291.875,-84.5652347],{"radius":2,"clockwise":false,"large":false}).appendPoint([291.875,-157.0891295]).appendArc([292.0185524,-157.8331741],{"radius":2,"clockwise":false,"large":false}).appendPoint([302.2545906,-183.3728638]).appendArc([304.8508366,-184.486963],{"radius":2,"clockwise":false,"large":false}).appendPoint([349.0254981,-166.8993321]).appendArc([350.1173635,-166.7887076],{"radius":2,"clockwise":true,"large":false}).appendPoint([367.790836,-169.9491841]).appendArc([368.3331962,-170.1290981],{"radius":2,"clockwise":true,"large":false}).appendPoint([388.7027088,-180.3138544]).appendArc([389.597136,-180.525],{"radius":2,"clockwise":false,"large":false}).appendPoint([425.225,-180.525]).appendArc([427.225,-178.525],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[303.2559196,-176.4562069],[316.2364935,-171.2117146]]).appendPoint([310.9920012,-158.2311407]).appendPoint([298.0114273,-163.475633]).appendPoint([303.2559196,-176.4562069]).close().innerToCAG()
.union(
    new CSG.Path2D([[327.1069592,-171.9562831],[340.0875331,-166.7117908]]).appendPoint([334.8430408,-153.7312169]).appendPoint([321.8624669,-158.9757092]).appendPoint([327.1069592,-171.9562831]).close().innerToCAG()
).union(
    new CSG.Path2D([[295.4,-100.8],[309.4,-100.8]]).appendPoint([309.4,-86.8]).appendPoint([295.4,-86.8]).appendPoint([295.4,-100.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[295.4,-119.85],[309.4,-119.85]]).appendPoint([309.4,-105.85]).appendPoint([295.4,-105.85]).appendPoint([295.4,-119.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[295.4,-138.9],[309.4,-138.9]]).appendPoint([309.4,-124.9]).appendPoint([295.4,-124.9]).appendPoint([295.4,-138.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[314.45,-91.275],[328.45,-91.275]]).appendPoint([328.45,-77.275]).appendPoint([314.45,-77.275]).appendPoint([314.45,-91.275]).close().innerToCAG()
).union(
    new CSG.Path2D([[314.45,-110.325],[328.45,-110.325]]).appendPoint([328.45,-96.325]).appendPoint([314.45,-96.325]).appendPoint([314.45,-110.325]).close().innerToCAG()
).union(
    new CSG.Path2D([[314.45,-129.375],[328.45,-129.375]]).appendPoint([328.45,-115.375]).appendPoint([314.45,-115.375]).appendPoint([314.45,-129.375]).close().innerToCAG()
).union(
    new CSG.Path2D([[314.45,-148.425],[328.45,-148.425]]).appendPoint([328.45,-134.425]).appendPoint([314.45,-134.425]).appendPoint([314.45,-148.425]).close().innerToCAG()
).union(
    new CSG.Path2D([[333.5,-88.89375],[347.5,-88.89375]]).appendPoint([347.5,-74.89375]).appendPoint([333.5,-74.89375]).appendPoint([333.5,-88.89375]).close().innerToCAG()
).union(
    new CSG.Path2D([[333.5,-107.94375],[347.5,-107.94375]]).appendPoint([347.5,-93.94375]).appendPoint([333.5,-93.94375]).appendPoint([333.5,-107.94375]).close().innerToCAG()
).union(
    new CSG.Path2D([[333.5,-126.99375],[347.5,-126.99375]]).appendPoint([347.5,-112.99375]).appendPoint([333.5,-112.99375]).appendPoint([333.5,-126.99375]).close().innerToCAG()
).union(
    new CSG.Path2D([[333.5,-146.04375],[347.5,-146.04375]]).appendPoint([347.5,-132.04375]).appendPoint([333.5,-132.04375]).appendPoint([333.5,-146.04375]).close().innerToCAG()
).union(
    new CSG.Path2D([[352.55,-86.5125],[366.55,-86.5125]]).appendPoint([366.55,-72.5125]).appendPoint([352.55,-72.5125]).appendPoint([352.55,-86.5125]).close().innerToCAG()
).union(
    new CSG.Path2D([[352.55,-105.5625],[366.55,-105.5625]]).appendPoint([366.55,-91.5625]).appendPoint([352.55,-91.5625]).appendPoint([352.55,-105.5625]).close().innerToCAG()
).union(
    new CSG.Path2D([[352.55,-124.6125],[366.55,-124.6125]]).appendPoint([366.55,-110.6125]).appendPoint([352.55,-110.6125]).appendPoint([352.55,-124.6125]).close().innerToCAG()
).union(
    new CSG.Path2D([[352.55,-143.6625],[366.55,-143.6625]]).appendPoint([366.55,-129.6625]).appendPoint([352.55,-129.6625]).appendPoint([352.55,-143.6625]).close().innerToCAG()
).union(
    new CSG.Path2D([[352.55,-162.7125],[366.55,-162.7125]]).appendPoint([366.55,-148.7125]).appendPoint([352.55,-148.7125]).appendPoint([352.55,-162.7125]).close().innerToCAG()
).union(
    new CSG.Path2D([[371.6,-91.275],[385.6,-91.275]]).appendPoint([385.6,-77.275]).appendPoint([371.6,-77.275]).appendPoint([371.6,-91.275]).close().innerToCAG()
).union(
    new CSG.Path2D([[371.6,-110.325],[385.6,-110.325]]).appendPoint([385.6,-96.325]).appendPoint([371.6,-96.325]).appendPoint([371.6,-110.325]).close().innerToCAG()
).union(
    new CSG.Path2D([[371.6,-129.375],[385.6,-129.375]]).appendPoint([385.6,-115.375]).appendPoint([371.6,-115.375]).appendPoint([371.6,-129.375]).close().innerToCAG()
).union(
    new CSG.Path2D([[371.6,-148.425],[385.6,-148.425]]).appendPoint([385.6,-134.425]).appendPoint([371.6,-134.425]).appendPoint([371.6,-148.425]).close().innerToCAG()
).union(
    new CSG.Path2D([[371.6,-167.475],[385.6,-167.475]]).appendPoint([385.6,-153.475]).appendPoint([371.6,-153.475]).appendPoint([371.6,-167.475]).close().innerToCAG()
).union(
    new CSG.Path2D([[390.65,-100.8],[404.65,-100.8]]).appendPoint([404.65,-86.8]).appendPoint([390.65,-86.8]).appendPoint([390.65,-100.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[390.65,-119.85],[404.65,-119.85]]).appendPoint([404.65,-105.85]).appendPoint([390.65,-105.85]).appendPoint([390.65,-119.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[390.65,-138.9],[404.65,-138.9]]).appendPoint([404.65,-124.9]).appendPoint([390.65,-124.9]).appendPoint([390.65,-138.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[390.65,-157.95],[404.65,-157.95]]).appendPoint([404.65,-143.95]).appendPoint([390.65,-143.95]).appendPoint([390.65,-157.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[390.65,-177],[404.65,-177]]).appendPoint([404.65,-163]).appendPoint([390.65,-163]).appendPoint([390.65,-177]).close().innerToCAG()
).union(
    new CSG.Path2D([[409.7,-100.8],[423.7,-100.8]]).appendPoint([423.7,-86.8]).appendPoint([409.7,-86.8]).appendPoint([409.7,-100.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[409.7,-119.85],[423.7,-119.85]]).appendPoint([423.7,-105.85]).appendPoint([409.7,-105.85]).appendPoint([409.7,-119.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[409.7,-138.9],[423.7,-138.9]]).appendPoint([423.7,-124.9]).appendPoint([409.7,-124.9]).appendPoint([409.7,-138.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[409.7,-157.95],[423.7,-157.95]]).appendPoint([423.7,-143.95]).appendPoint([409.7,-143.95]).appendPoint([409.7,-157.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[409.7,-177],[423.7,-177]]).appendPoint([423.7,-163]).appendPoint([409.7,-163]).appendPoint([409.7,-177]).close().innerToCAG()
)).union(
    new CSG.Path2D([[139.475,-178.525],[139.475,-85.275]]).appendArc([141.475,-83.275],{"radius":2,"clockwise":true,"large":false}).appendPoint([160.052864,-83.275]).appendArc([160.9472912,-83.0638544],{"radius":2,"clockwise":false,"large":false}).appendPoint([179.4034045,-73.8357978]).appendArc([179.7597767,-73.6983872],{"radius":2,"clockwise":true,"large":false}).appendPoint([196.3610248,-69.061235]).appendArc([196.8990798,-68.9875],{"radius":2,"clockwise":true,"large":false}).appendPoint([236.4509202,-68.9875]).appendArc([236.9889752,-69.061235],{"radius":2,"clockwise":true,"large":false}).appendPoint([253.6277958,-73.7088821]).appendArc([253.9142476,-73.8130087],{"radius":2,"clockwise":true,"large":false}).appendPoint([273.6495068,-82.7430963]).appendArc([274.825,-84.5652347],{"radius":2,"clockwise":true,"large":false}).appendPoint([274.825,-157.0891295]).appendArc([274.6814476,-157.8331741],{"radius":2,"clockwise":true,"large":false}).appendPoint([264.4454094,-183.3728638]).appendArc([261.8491634,-184.486963],{"radius":2,"clockwise":true,"large":false}).appendPoint([217.6745019,-166.8993321]).appendArc([216.5826365,-166.7887076],{"radius":2,"clockwise":false,"large":false}).appendPoint([198.909164,-169.9491841]).appendArc([198.3668038,-170.1290981],{"radius":2,"clockwise":false,"large":false}).appendPoint([177.9972912,-180.3138544]).appendArc([177.102864,-180.525],{"radius":2,"clockwise":true,"large":false}).appendPoint([141.475,-180.525]).appendArc([139.475,-178.525],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[226.6124669,-166.7117908],[239.5930408,-171.9562831]]).appendPoint([244.8375331,-158.9757092]).appendPoint([231.8569592,-153.7312169]).appendPoint([226.6124669,-166.7117908]).close().innerToCAG()
.union(
    new CSG.Path2D([[250.4635065,-171.2117146],[263.4440804,-176.4562069]]).appendPoint([268.6885727,-163.475633]).appendPoint([255.7079988,-158.2311407]).appendPoint([250.4635065,-171.2117146]).close().innerToCAG()
).union(
    new CSG.Path2D([[257.3,-100.8],[271.3,-100.8]]).appendPoint([271.3,-86.8]).appendPoint([257.3,-86.8]).appendPoint([257.3,-100.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[257.3,-119.85],[271.3,-119.85]]).appendPoint([271.3,-105.85]).appendPoint([257.3,-105.85]).appendPoint([257.3,-119.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[257.3,-138.9],[271.3,-138.9]]).appendPoint([271.3,-124.9]).appendPoint([257.3,-124.9]).appendPoint([257.3,-138.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[238.25,-91.275],[252.25,-91.275]]).appendPoint([252.25,-77.275]).appendPoint([238.25,-77.275]).appendPoint([238.25,-91.275]).close().innerToCAG()
).union(
    new CSG.Path2D([[238.25,-110.325],[252.25,-110.325]]).appendPoint([252.25,-96.325]).appendPoint([238.25,-96.325]).appendPoint([238.25,-110.325]).close().innerToCAG()
).union(
    new CSG.Path2D([[238.25,-129.375],[252.25,-129.375]]).appendPoint([252.25,-115.375]).appendPoint([238.25,-115.375]).appendPoint([238.25,-129.375]).close().innerToCAG()
).union(
    new CSG.Path2D([[238.25,-148.425],[252.25,-148.425]]).appendPoint([252.25,-134.425]).appendPoint([238.25,-134.425]).appendPoint([238.25,-148.425]).close().innerToCAG()
).union(
    new CSG.Path2D([[219.2,-88.89375],[233.2,-88.89375]]).appendPoint([233.2,-74.89375]).appendPoint([219.2,-74.89375]).appendPoint([219.2,-88.89375]).close().innerToCAG()
).union(
    new CSG.Path2D([[219.2,-107.94375],[233.2,-107.94375]]).appendPoint([233.2,-93.94375]).appendPoint([219.2,-93.94375]).appendPoint([219.2,-107.94375]).close().innerToCAG()
).union(
    new CSG.Path2D([[219.2,-126.99375],[233.2,-126.99375]]).appendPoint([233.2,-112.99375]).appendPoint([219.2,-112.99375]).appendPoint([219.2,-126.99375]).close().innerToCAG()
).union(
    new CSG.Path2D([[219.2,-146.04375],[233.2,-146.04375]]).appendPoint([233.2,-132.04375]).appendPoint([219.2,-132.04375]).appendPoint([219.2,-146.04375]).close().innerToCAG()
).union(
    new CSG.Path2D([[200.15,-86.5125],[214.15,-86.5125]]).appendPoint([214.15,-72.5125]).appendPoint([200.15,-72.5125]).appendPoint([200.15,-86.5125]).close().innerToCAG()
).union(
    new CSG.Path2D([[200.15,-105.5625],[214.15,-105.5625]]).appendPoint([214.15,-91.5625]).appendPoint([200.15,-91.5625]).appendPoint([200.15,-105.5625]).close().innerToCAG()
).union(
    new CSG.Path2D([[200.15,-124.6125],[214.15,-124.6125]]).appendPoint([214.15,-110.6125]).appendPoint([200.15,-110.6125]).appendPoint([200.15,-124.6125]).close().innerToCAG()
).union(
    new CSG.Path2D([[200.15,-143.6625],[214.15,-143.6625]]).appendPoint([214.15,-129.6625]).appendPoint([200.15,-129.6625]).appendPoint([200.15,-143.6625]).close().innerToCAG()
).union(
    new CSG.Path2D([[200.15,-162.7125],[214.15,-162.7125]]).appendPoint([214.15,-148.7125]).appendPoint([200.15,-148.7125]).appendPoint([200.15,-162.7125]).close().innerToCAG()
).union(
    new CSG.Path2D([[181.1,-91.275],[195.1,-91.275]]).appendPoint([195.1,-77.275]).appendPoint([181.1,-77.275]).appendPoint([181.1,-91.275]).close().innerToCAG()
).union(
    new CSG.Path2D([[181.1,-110.325],[195.1,-110.325]]).appendPoint([195.1,-96.325]).appendPoint([181.1,-96.325]).appendPoint([181.1,-110.325]).close().innerToCAG()
).union(
    new CSG.Path2D([[181.1,-129.375],[195.1,-129.375]]).appendPoint([195.1,-115.375]).appendPoint([181.1,-115.375]).appendPoint([181.1,-129.375]).close().innerToCAG()
).union(
    new CSG.Path2D([[181.1,-148.425],[195.1,-148.425]]).appendPoint([195.1,-134.425]).appendPoint([181.1,-134.425]).appendPoint([181.1,-148.425]).close().innerToCAG()
).union(
    new CSG.Path2D([[181.1,-167.475],[195.1,-167.475]]).appendPoint([195.1,-153.475]).appendPoint([181.1,-153.475]).appendPoint([181.1,-167.475]).close().innerToCAG()
).union(
    new CSG.Path2D([[162.05,-100.8],[176.05,-100.8]]).appendPoint([176.05,-86.8]).appendPoint([162.05,-86.8]).appendPoint([162.05,-100.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[162.05,-119.85],[176.05,-119.85]]).appendPoint([176.05,-105.85]).appendPoint([162.05,-105.85]).appendPoint([162.05,-119.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[162.05,-138.9],[176.05,-138.9]]).appendPoint([176.05,-124.9]).appendPoint([162.05,-124.9]).appendPoint([162.05,-138.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[162.05,-157.95],[176.05,-157.95]]).appendPoint([176.05,-143.95]).appendPoint([162.05,-143.95]).appendPoint([162.05,-157.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[162.05,-177],[176.05,-177]]).appendPoint([176.05,-163]).appendPoint([162.05,-163]).appendPoint([162.05,-177]).close().innerToCAG()
).union(
    new CSG.Path2D([[143,-100.8],[157,-100.8]]).appendPoint([157,-86.8]).appendPoint([143,-86.8]).appendPoint([143,-100.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[143,-119.85],[157,-119.85]]).appendPoint([157,-105.85]).appendPoint([143,-105.85]).appendPoint([143,-119.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[143,-138.9],[157,-138.9]]).appendPoint([157,-124.9]).appendPoint([143,-124.9]).appendPoint([143,-138.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[143,-157.95],[157,-157.95]]).appendPoint([157,-143.95]).appendPoint([143,-143.95]).appendPoint([143,-157.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[143,-177],[157,-177]]).appendPoint([157,-163]).appendPoint([143,-163]).appendPoint([143,-177]).close().innerToCAG()
))).extrude({ offset: [0, 0, 1.5] });
}




                function key_plate_case_fn() {
                    

                // creating part 0 of case key_plate
                let key_plate__part_0 = plate_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let key_plate__part_0_bounds = key_plate__part_0.getBounds();
                let key_plate__part_0_x = key_plate__part_0_bounds[0].x + (key_plate__part_0_bounds[1].x - key_plate__part_0_bounds[0].x) / 2
                let key_plate__part_0_y = key_plate__part_0_bounds[0].y + (key_plate__part_0_bounds[1].y - key_plate__part_0_bounds[0].y) / 2
                key_plate__part_0 = translate([-key_plate__part_0_x, -key_plate__part_0_y, 0], key_plate__part_0);
                key_plate__part_0 = rotate([0,0,0], key_plate__part_0);
                key_plate__part_0 = translate([key_plate__part_0_x, key_plate__part_0_y, 0], key_plate__part_0);

                key_plate__part_0 = translate([0,0,0], key_plate__part_0);
                let result = key_plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return key_plate_case_fn();
            }

        