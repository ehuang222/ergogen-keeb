function bottom_case_extrude_12_outline_fn(){
    return new CSG.Path2D([[60.475,-188.525],[60.475,-94.5652347]]).appendArc([66.9402125,-84.5434733],{"radius":11,"clockwise":true,"large":false}).appendPoint([96.9466498,-70.9657386]).appendArc([101.4814373,-69.9875],{"radius":11,"clockwise":true,"large":false}).appendPoint([172.8185627,-69.9875]).appendArc([177.3533502,-70.9657386],{"radius":11,"clockwise":true,"large":false}).appendPoint([207.3600781,-84.5436048]).appendArc([213.8252903,-94.562889],{"radius":11,"clockwise":true,"large":false}).appendPoint([213.8421042,-169.2296532]).appendArc([212.8911048,-173.7062328],{"radius":11,"clockwise":true,"large":false}).appendArc([212.8905588,-173.7074589],{"radius":9,"clockwise":true,"large":false}).appendPoint([201.8483465,-198.5086743]).appendArc([187.3252439,-204.0835716],{"radius":11,"clockwise":true,"large":false}).appendPoint([187.3240178,-204.0830256]).appendPoint([147.5430732,-186.3714079]).appendPoint([111.8805541,-198.9029298]).appendArc([108.2338331,-199.525],{"radius":11,"clockwise":true,"large":false}).appendPoint([71.475,-199.525]).appendArc([60.475,-188.525],{"radius":11,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 12] });
}


function board_left_extrude_8_5_outline_fn(){
    return new CSG.Path2D([[69.475,-188.525],[69.475,-94.5652347]]).appendArc([70.6504932,-92.7430963],{"radius":2,"clockwise":true,"large":false}).appendPoint([100.6569305,-79.1653616]).appendArc([101.4814373,-78.9875],{"radius":2,"clockwise":true,"large":false}).appendPoint([172.8185627,-78.9875]).appendArc([173.6430695,-79.1653616],{"radius":2,"clockwise":true,"large":false}).appendPoint([203.6497974,-92.7432278]).appendArc([204.8252905,-94.5649158],{"radius":2,"clockwise":true,"large":false}).appendPoint([204.8421044,-169.2316799]).appendArc([204.6691955,-170.0456035],{"radius":2,"clockwise":true,"large":false}).appendPoint([193.6264373,-194.8480445]).appendArc([190.9858732,-195.8616623],{"radius":2,"clockwise":true,"large":false}).appendPoint([148.6614121,-177.017598]).appendArc([147.1848987,-176.9577926],{"radius":2,"clockwise":false,"large":false}).appendPoint([108.8968733,-190.4118963]).appendArc([108.2338331,-190.525],{"radius":2,"clockwise":true,"large":false}).appendPoint([71.475,-190.525]).appendArc([69.475,-188.525],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 8.5] });
}




                function bot_case_case_fn() {
                    

                // creating part 0 of case bot_case
                let bot_case__part_0 = bottom_case_extrude_12_outline_fn();

                // make sure that rotations are relative
                let bot_case__part_0_bounds = bot_case__part_0.getBounds();
                let bot_case__part_0_x = bot_case__part_0_bounds[0].x + (bot_case__part_0_bounds[1].x - bot_case__part_0_bounds[0].x) / 2
                let bot_case__part_0_y = bot_case__part_0_bounds[0].y + (bot_case__part_0_bounds[1].y - bot_case__part_0_bounds[0].y) / 2
                bot_case__part_0 = translate([-bot_case__part_0_x, -bot_case__part_0_y, 0], bot_case__part_0);
                bot_case__part_0 = rotate([0,0,0], bot_case__part_0);
                bot_case__part_0 = translate([bot_case__part_0_x, bot_case__part_0_y, 0], bot_case__part_0);

                bot_case__part_0 = translate([0,0,0], bot_case__part_0);
                let result = bot_case__part_0;
                
            

                // creating part 1 of case bot_case
                let bot_case__part_1 = board_left_extrude_8_5_outline_fn();

                // make sure that rotations are relative
                let bot_case__part_1_bounds = bot_case__part_1.getBounds();
                let bot_case__part_1_x = bot_case__part_1_bounds[0].x + (bot_case__part_1_bounds[1].x - bot_case__part_1_bounds[0].x) / 2
                let bot_case__part_1_y = bot_case__part_1_bounds[0].y + (bot_case__part_1_bounds[1].y - bot_case__part_1_bounds[0].y) / 2
                bot_case__part_1 = translate([-bot_case__part_1_x, -bot_case__part_1_y, 0], bot_case__part_1);
                bot_case__part_1 = rotate([0,0,0], bot_case__part_1);
                bot_case__part_1 = translate([bot_case__part_1_x, bot_case__part_1_y, 0], bot_case__part_1);

                bot_case__part_1 = translate([0,0,3.5], bot_case__part_1);
                result = result.subtract(bot_case__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return bot_case_case_fn();
            }

        