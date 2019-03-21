console.log("this works!");

let draw = SVG('drawing').size(3000, 3000)
let rectWidth = 200;
let rectHeight = 200;
let rect = draw.rect(16, 16).fill('black');
rect.move(50, 40);

drawCircle(45, 5, 'orange');
drawCircle(65, 15, 'purple');
drawCircle(85, 35, 'red');
drawCircle(65, 55, 'yellow');
drawCircle(45, 65, 'magenta');

drawCircle(25, 15, 'red');
drawCircle(5, 35, 'blue');
drawCircle(25, 55, 'black');
drawCircle(45, 65, 'green');

drawFlower(20, 555, 'purple', 'blue', 'yellow', 'green');
drawFlower(135, 555, 'red', 'orange', 'yellow', 'green');
drawFlower(250, 555, 'purple', 'blue', 'yellow', 'green');
drawFlower(365, 555, 'red', 'orange', 'yellow', 'green');
drawFlower(480, 555, 'purple', 'blue', 'yellow', 'green');
drawFlower(595, 555, 'red', 'orange', 'yellow', 'green');
drawFlower(710, 555, 'purple', 'blue', 'yellow', 'green');
drawFlower(825, 555, 'red', 'orange', 'yellow', 'green');
drawFlower(940, 555, 'purple', 'blue', 'yellow', 'green');
drawFlower(1055, 555, 'red', 'orange', 'yellow', 'green');
drawFlower(1170, 555, 'purple', 'blue', 'yellow', 'green');



function drawCircle(x, y, color){
    let circle = draw.circle(30).fill(color).move(x, y);
    }
function drawFlower(x, y, color, color2, color3, color4){
    let flower1 = draw.polygon('50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40')
    flower1.fill(color).move(x, y);
    let flower2 = polygon = draw.polygon('50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40')
    flower2.fill(color2).move(x, y)
    flower2.transform({ rotation: 125 }).transform({ rotation: 45 })
    let circle = draw.circle(25).fill(color3).move(x+37, y+37)
    let stalk = draw.rect(3, 65).fill(color4).move(x+48, y+66)
}

