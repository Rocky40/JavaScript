console.log("this works!");

let draw = SVG('drawing').size(300, 300)
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

function drawCircle(x, y, color){
    let circle = draw.circle(30).fill(color).move(x, y);
    
}