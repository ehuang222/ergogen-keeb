function board_left_extrude_10_outline_fn(){
    return new CSG.Path2D([[69.475,-188.525],[69.475,-94.6343912]]).appendArc([70.7389958,-92.7747413],{"radius":2,"clockwise":true,"large":false}).appendPoint([105.2203798,-79.12785]).appendArc([105.956384,-78.9875],{"radius":2,"clockwise":true,"large":false}).appendPoint([173.6503253,-78.9875]).appendArc([174.4934625,-79.173907],{"radius":2,"clockwise":true,"large":false}).appendPoint([203.6681372,-92.737176]).appendArc([204.825,-94.550769],{"radius":2,"clockwise":true,"large":false}).appendPoint([204.825,-167.5616971]).appendArc([204.679698,-168.3100923],{"radius":2,"clockwise":true,"large":false}).appendPoint([194.465923,-193.6222101]).appendArc([191.8629812,-194.728574],{"radius":2,"clockwise":true,"large":false}).appendPoint([147.8508617,-176.9732781]).appendArc([146.4272631,-176.9455134],{"radius":2,"clockwise":false,"large":false}).appendPoint([108.9024601,-190.4075238]).appendArc([108.2271053,-190.525],{"radius":2,"clockwise":true,"large":false}).appendPoint([71.475,-190.525]).appendArc([69.475,-188.525],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 10] });
}




                function bot_case_case_fn() {
                    

                // creating part 0 of case bot_case
                let bot_case__part_0 = board_left_extrude_10_outline_fn();

                // make sure that rotations are relative
                let bot_case__part_0_bounds = bot_case__part_0.getBounds();
                let bot_case__part_0_x = bot_case__part_0_bounds[0].x + (bot_case__part_0_bounds[1].x - bot_case__part_0_bounds[0].x) / 2
                let bot_case__part_0_y = bot_case__part_0_bounds[0].y + (bot_case__part_0_bounds[1].y - bot_case__part_0_bounds[0].y) / 2
                bot_case__part_0 = translate([-bot_case__part_0_x, -bot_case__part_0_y, 0], bot_case__part_0);
                bot_case__part_0 = rotate([0,0,0], bot_case__part_0);
                bot_case__part_0 = translate([bot_case__part_0_x, bot_case__part_0_y, 0], bot_case__part_0);

                bot_case__part_0 = translate([0,0,0], bot_case__part_0);
                let result = bot_case__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bot_case_case_fn();
            }

        