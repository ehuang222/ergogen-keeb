function plate_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[366.75,-188.525],[366.75,-94.5652347]]).appendArc([365.5745068,-92.7430963],{"radius":2,"clockwise":false,"large":false}).appendPoint([335.5680695,-79.1653616]).appendArc([334.7435627,-78.9875],{"radius":2,"clockwise":false,"large":false}).appendPoint([263.4064373,-78.9875]).appendArc([262.5819305,-79.1653616],{"radius":2,"clockwise":false,"large":false}).appendPoint([232.5752026,-92.7432278]).appendArc([231.3997095,-94.5649158],{"radius":2,"clockwise":false,"large":false}).appendPoint([231.3828956,-169.2316799]).appendArc([231.5558045,-170.0456035],{"radius":2,"clockwise":false,"large":false}).appendPoint([242.5985627,-194.8480445]).appendArc([245.2391268,-195.8616623],{"radius":2,"clockwise":false,"large":false}).appendPoint([287.5635879,-177.017598]).appendArc([289.0401013,-176.9577926],{"radius":2,"clockwise":true,"large":false}).appendPoint([327.3281267,-190.4118963]).appendArc([327.9911669,-190.525],{"radius":2,"clockwise":false,"large":false}).appendPoint([364.75,-190.525]).appendArc([366.75,-188.525],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[243.2614538,-187.6703808],[256.0510902,-181.9760678]]).appendPoint([250.3567772,-169.1864314]).appendPoint([237.5671408,-174.8807444]).appendPoint([243.2614538,-187.6703808]).close().innerToCAG()
.union(
    new CSG.Path2D([[266.9523383,-182.3357247],[279.7419747,-176.6414117]]).appendPoint([274.0476617,-163.8517753]).appendPoint([261.2580253,-169.5460883]).appendPoint([266.9523383,-182.3357247]).close().innerToCAG()
).union(
    new CSG.Path2D([[234.925,-110.8],[248.925,-110.8]]).appendPoint([248.925,-96.8]).appendPoint([234.925,-96.8]).appendPoint([234.925,-110.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[234.925,-129.85],[248.925,-129.85]]).appendPoint([248.925,-115.85]).appendPoint([234.925,-115.85]).appendPoint([234.925,-129.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[234.925,-148.9],[248.925,-148.9]]).appendPoint([248.925,-134.9]).appendPoint([234.925,-134.9]).appendPoint([234.925,-148.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[253.975,-101.275],[267.975,-101.275]]).appendPoint([267.975,-87.275]).appendPoint([253.975,-87.275]).appendPoint([253.975,-101.275]).close().innerToCAG()
).union(
    new CSG.Path2D([[253.975,-120.325],[267.975,-120.325]]).appendPoint([267.975,-106.325]).appendPoint([253.975,-106.325]).appendPoint([253.975,-120.325]).close().innerToCAG()
).union(
    new CSG.Path2D([[253.975,-139.375],[267.975,-139.375]]).appendPoint([267.975,-125.375]).appendPoint([253.975,-125.375]).appendPoint([253.975,-139.375]).close().innerToCAG()
).union(
    new CSG.Path2D([[253.975,-158.425],[267.975,-158.425]]).appendPoint([267.975,-144.425]).appendPoint([253.975,-144.425]).appendPoint([253.975,-158.425]).close().innerToCAG()
).union(
    new CSG.Path2D([[273.025,-98.89375],[287.025,-98.89375]]).appendPoint([287.025,-84.89375]).appendPoint([273.025,-84.89375]).appendPoint([273.025,-98.89375]).close().innerToCAG()
).union(
    new CSG.Path2D([[273.025,-117.94375],[287.025,-117.94375]]).appendPoint([287.025,-103.94375]).appendPoint([273.025,-103.94375]).appendPoint([273.025,-117.94375]).close().innerToCAG()
).union(
    new CSG.Path2D([[273.025,-136.99375],[287.025,-136.99375]]).appendPoint([287.025,-122.99375]).appendPoint([273.025,-122.99375]).appendPoint([273.025,-136.99375]).close().innerToCAG()
).union(
    new CSG.Path2D([[273.025,-156.04375],[287.025,-156.04375]]).appendPoint([287.025,-142.04375]).appendPoint([273.025,-142.04375]).appendPoint([273.025,-156.04375]).close().innerToCAG()
).union(
    new CSG.Path2D([[292.075,-96.5125],[306.075,-96.5125]]).appendPoint([306.075,-82.5125]).appendPoint([292.075,-82.5125]).appendPoint([292.075,-96.5125]).close().innerToCAG()
).union(
    new CSG.Path2D([[292.075,-115.5625],[306.075,-115.5625]]).appendPoint([306.075,-101.5625]).appendPoint([292.075,-101.5625]).appendPoint([292.075,-115.5625]).close().innerToCAG()
).union(
    new CSG.Path2D([[292.075,-134.6125],[306.075,-134.6125]]).appendPoint([306.075,-120.6125]).appendPoint([292.075,-120.6125]).appendPoint([292.075,-134.6125]).close().innerToCAG()
).union(
    new CSG.Path2D([[292.075,-153.6625],[306.075,-153.6625]]).appendPoint([306.075,-139.6625]).appendPoint([292.075,-139.6625]).appendPoint([292.075,-153.6625]).close().innerToCAG()
).union(
    new CSG.Path2D([[292.075,-172.7125],[306.075,-172.7125]]).appendPoint([306.075,-158.7125]).appendPoint([292.075,-158.7125]).appendPoint([292.075,-172.7125]).close().innerToCAG()
).union(
    new CSG.Path2D([[311.125,-101.275],[325.125,-101.275]]).appendPoint([325.125,-87.275]).appendPoint([311.125,-87.275]).appendPoint([311.125,-101.275]).close().innerToCAG()
).union(
    new CSG.Path2D([[311.125,-120.325],[325.125,-120.325]]).appendPoint([325.125,-106.325]).appendPoint([311.125,-106.325]).appendPoint([311.125,-120.325]).close().innerToCAG()
).union(
    new CSG.Path2D([[311.125,-139.375],[325.125,-139.375]]).appendPoint([325.125,-125.375]).appendPoint([311.125,-125.375]).appendPoint([311.125,-139.375]).close().innerToCAG()
).union(
    new CSG.Path2D([[311.125,-158.425],[325.125,-158.425]]).appendPoint([325.125,-144.425]).appendPoint([311.125,-144.425]).appendPoint([311.125,-158.425]).close().innerToCAG()
).union(
    new CSG.Path2D([[311.125,-177.475],[325.125,-177.475]]).appendPoint([325.125,-163.475]).appendPoint([311.125,-163.475]).appendPoint([311.125,-177.475]).close().innerToCAG()
).union(
    new CSG.Path2D([[330.175,-110.8],[344.175,-110.8]]).appendPoint([344.175,-96.8]).appendPoint([330.175,-96.8]).appendPoint([330.175,-110.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[330.175,-129.85],[344.175,-129.85]]).appendPoint([344.175,-115.85]).appendPoint([330.175,-115.85]).appendPoint([330.175,-129.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[330.175,-148.9],[344.175,-148.9]]).appendPoint([344.175,-134.9]).appendPoint([330.175,-134.9]).appendPoint([330.175,-148.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[330.175,-167.95],[344.175,-167.95]]).appendPoint([344.175,-153.95]).appendPoint([330.175,-153.95]).appendPoint([330.175,-167.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[330.175,-187],[344.175,-187]]).appendPoint([344.175,-173]).appendPoint([330.175,-173]).appendPoint([330.175,-187]).close().innerToCAG()
).union(
    new CSG.Path2D([[349.225,-110.8],[363.225,-110.8]]).appendPoint([363.225,-96.8]).appendPoint([349.225,-96.8]).appendPoint([349.225,-110.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[349.225,-129.85],[363.225,-129.85]]).appendPoint([363.225,-115.85]).appendPoint([349.225,-115.85]).appendPoint([349.225,-129.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[349.225,-148.9],[363.225,-148.9]]).appendPoint([363.225,-134.9]).appendPoint([349.225,-134.9]).appendPoint([349.225,-148.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[349.225,-167.95],[363.225,-167.95]]).appendPoint([363.225,-153.95]).appendPoint([349.225,-153.95]).appendPoint([349.225,-167.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[349.225,-187],[363.225,-187]]).appendPoint([363.225,-173]).appendPoint([349.225,-173]).appendPoint([349.225,-187]).close().innerToCAG()
)).union(
    new CSG.Path2D([[69.475,-188.525],[69.475,-94.5652347]]).appendArc([70.6504932,-92.7430963],{"radius":2,"clockwise":true,"large":false}).appendPoint([100.6569305,-79.1653616]).appendArc([101.4814373,-78.9875],{"radius":2,"clockwise":true,"large":false}).appendPoint([172.8185627,-78.9875]).appendArc([173.6430695,-79.1653616],{"radius":2,"clockwise":true,"large":false}).appendPoint([203.6497974,-92.7432278]).appendArc([204.8252905,-94.5649158],{"radius":2,"clockwise":true,"large":false}).appendPoint([204.8421044,-169.2316799]).appendArc([204.6691955,-170.0456035],{"radius":2,"clockwise":true,"large":false}).appendPoint([193.6264373,-194.8480445]).appendArc([190.9858732,-195.8616623],{"radius":2,"clockwise":true,"large":false}).appendPoint([148.6614121,-177.017598]).appendArc([147.1848987,-176.9577926],{"radius":2,"clockwise":false,"large":false}).appendPoint([108.8968733,-190.4118963]).appendArc([108.2338331,-190.525],{"radius":2,"clockwise":true,"large":false}).appendPoint([71.475,-190.525]).appendArc([69.475,-188.525],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[180.1739098,-181.9760678],[192.9635462,-187.6703808]]).appendPoint([198.6578592,-174.8807444]).appendPoint([185.8682228,-169.1864314]).appendPoint([180.1739098,-181.9760678]).close().innerToCAG()
.union(
    new CSG.Path2D([[156.4830253,-176.6414117],[169.2726617,-182.3357247]]).appendPoint([174.9669747,-169.5460883]).appendPoint([162.1773383,-163.8517753]).appendPoint([156.4830253,-176.6414117]).close().innerToCAG()
).union(
    new CSG.Path2D([[187.3,-110.8],[201.3,-110.8]]).appendPoint([201.3,-96.8]).appendPoint([187.3,-96.8]).appendPoint([187.3,-110.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[187.3,-129.85],[201.3,-129.85]]).appendPoint([201.3,-115.85]).appendPoint([187.3,-115.85]).appendPoint([187.3,-129.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[187.3,-148.9],[201.3,-148.9]]).appendPoint([201.3,-134.9]).appendPoint([187.3,-134.9]).appendPoint([187.3,-148.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[168.25,-101.275],[182.25,-101.275]]).appendPoint([182.25,-87.275]).appendPoint([168.25,-87.275]).appendPoint([168.25,-101.275]).close().innerToCAG()
).union(
    new CSG.Path2D([[168.25,-120.325],[182.25,-120.325]]).appendPoint([182.25,-106.325]).appendPoint([168.25,-106.325]).appendPoint([168.25,-120.325]).close().innerToCAG()
).union(
    new CSG.Path2D([[168.25,-139.375],[182.25,-139.375]]).appendPoint([182.25,-125.375]).appendPoint([168.25,-125.375]).appendPoint([168.25,-139.375]).close().innerToCAG()
).union(
    new CSG.Path2D([[168.25,-158.425],[182.25,-158.425]]).appendPoint([182.25,-144.425]).appendPoint([168.25,-144.425]).appendPoint([168.25,-158.425]).close().innerToCAG()
).union(
    new CSG.Path2D([[149.2,-98.89375],[163.2,-98.89375]]).appendPoint([163.2,-84.89375]).appendPoint([149.2,-84.89375]).appendPoint([149.2,-98.89375]).close().innerToCAG()
).union(
    new CSG.Path2D([[149.2,-117.94375],[163.2,-117.94375]]).appendPoint([163.2,-103.94375]).appendPoint([149.2,-103.94375]).appendPoint([149.2,-117.94375]).close().innerToCAG()
).union(
    new CSG.Path2D([[149.2,-136.99375],[163.2,-136.99375]]).appendPoint([163.2,-122.99375]).appendPoint([149.2,-122.99375]).appendPoint([149.2,-136.99375]).close().innerToCAG()
).union(
    new CSG.Path2D([[149.2,-156.04375],[163.2,-156.04375]]).appendPoint([163.2,-142.04375]).appendPoint([149.2,-142.04375]).appendPoint([149.2,-156.04375]).close().innerToCAG()
).union(
    new CSG.Path2D([[130.15,-96.5125],[144.15,-96.5125]]).appendPoint([144.15,-82.5125]).appendPoint([130.15,-82.5125]).appendPoint([130.15,-96.5125]).close().innerToCAG()
).union(
    new CSG.Path2D([[130.15,-115.5625],[144.15,-115.5625]]).appendPoint([144.15,-101.5625]).appendPoint([130.15,-101.5625]).appendPoint([130.15,-115.5625]).close().innerToCAG()
).union(
    new CSG.Path2D([[130.15,-134.6125],[144.15,-134.6125]]).appendPoint([144.15,-120.6125]).appendPoint([130.15,-120.6125]).appendPoint([130.15,-134.6125]).close().innerToCAG()
).union(
    new CSG.Path2D([[130.15,-153.6625],[144.15,-153.6625]]).appendPoint([144.15,-139.6625]).appendPoint([130.15,-139.6625]).appendPoint([130.15,-153.6625]).close().innerToCAG()
).union(
    new CSG.Path2D([[130.15,-172.7125],[144.15,-172.7125]]).appendPoint([144.15,-158.7125]).appendPoint([130.15,-158.7125]).appendPoint([130.15,-172.7125]).close().innerToCAG()
).union(
    new CSG.Path2D([[111.1,-101.275],[125.1,-101.275]]).appendPoint([125.1,-87.275]).appendPoint([111.1,-87.275]).appendPoint([111.1,-101.275]).close().innerToCAG()
).union(
    new CSG.Path2D([[111.1,-120.325],[125.1,-120.325]]).appendPoint([125.1,-106.325]).appendPoint([111.1,-106.325]).appendPoint([111.1,-120.325]).close().innerToCAG()
).union(
    new CSG.Path2D([[111.1,-139.375],[125.1,-139.375]]).appendPoint([125.1,-125.375]).appendPoint([111.1,-125.375]).appendPoint([111.1,-139.375]).close().innerToCAG()
).union(
    new CSG.Path2D([[111.1,-158.425],[125.1,-158.425]]).appendPoint([125.1,-144.425]).appendPoint([111.1,-144.425]).appendPoint([111.1,-158.425]).close().innerToCAG()
).union(
    new CSG.Path2D([[111.1,-177.475],[125.1,-177.475]]).appendPoint([125.1,-163.475]).appendPoint([111.1,-163.475]).appendPoint([111.1,-177.475]).close().innerToCAG()
).union(
    new CSG.Path2D([[92.05,-110.8],[106.05,-110.8]]).appendPoint([106.05,-96.8]).appendPoint([92.05,-96.8]).appendPoint([92.05,-110.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[92.05,-129.85],[106.05,-129.85]]).appendPoint([106.05,-115.85]).appendPoint([92.05,-115.85]).appendPoint([92.05,-129.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[92.05,-148.9],[106.05,-148.9]]).appendPoint([106.05,-134.9]).appendPoint([92.05,-134.9]).appendPoint([92.05,-148.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[92.05,-167.95],[106.05,-167.95]]).appendPoint([106.05,-153.95]).appendPoint([92.05,-153.95]).appendPoint([92.05,-167.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[92.05,-187],[106.05,-187]]).appendPoint([106.05,-173]).appendPoint([92.05,-173]).appendPoint([92.05,-187]).close().innerToCAG()
).union(
    new CSG.Path2D([[73,-110.8],[87,-110.8]]).appendPoint([87,-96.8]).appendPoint([73,-96.8]).appendPoint([73,-110.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[73,-129.85],[87,-129.85]]).appendPoint([87,-115.85]).appendPoint([73,-115.85]).appendPoint([73,-129.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[73,-148.9],[87,-148.9]]).appendPoint([87,-134.9]).appendPoint([73,-134.9]).appendPoint([73,-148.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[73,-167.95],[87,-167.95]]).appendPoint([87,-153.95]).appendPoint([73,-153.95]).appendPoint([73,-167.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[73,-187],[87,-187]]).appendPoint([87,-173]).appendPoint([73,-173]).appendPoint([73,-187]).close().innerToCAG()
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

        