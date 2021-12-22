const canvas = document.getElementById("myCanvas")
const shapes = canvas.getContext("2d")
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// !1
shapes.fillStyle="black"
shapes.fillRect(150, 150, 50, 50)

// !2
shapes.fillStyle="red"
shapes.fillRect(300,300, 70, 70)

// !3
shapes.beginPath();
shapes.arc(450, 450, 30, 0, 2 * Math.PI);
shapes.stroke();
shapes.fillStyle="red"
shapes.fill()

// !4
shapes.beginPath();
shapes.arc(450, 100, 50, 0, 2 * Math.PI );
shapes.stroke();
shapes.fillStyle="blue";
shapes.fill();

// !5
shapes.beginPath();
shapes.arc(100, 300, 40, 0, 2 *Math.PI);
shapes.stroke();
shapes.fillStyle="green";
shapes.fill();

shapes.beginPath();
shapes.arc(100, 200, 40, 0, 2*Math.PI)
shapes.stroke();
shapes.fillStyle="green";
shapes.fill()

!6
y = 0;
shapes.fillStyle = "yellow";

setInterval(() => {
    shapes.clearRect(600, y, 100, 100)
    shapes.clearRect(750, y, 100, 100)
    shapes.clearRect(900, y, 100, 100)
    y += 20
    shapes.fillRect(600, y, 100, 100);
    shapes.fillRect(750, y, 100, 100);
    shapes.fillRect(900, y, 100, 100);
}, 500);

!7

const floor = {
    x: 0, y: canvas.height - 100, width: canvas.width, height: 100
}
shapes.fillRect(floor.x, floor.y, floor.width, floor.height);
shapes.fillStyle = "purple";

!8
const player = {
    x: 0, y: canvas.height - floor.height - 100, width: 100, height: 100
}

!9
const jump = () => {
    shapes.clearRect(player.x, player.y, player.width, player.height);
    shapes.fillRect(player.x, player.y, player.width, player.height);
    addEventListener("keydown", (e) => {
        shapes.clearRect(player.x, player.y, player.width, player.height);
        if (e.key == "ArrowUp") {
            player.y -= 1
            setTimeout(() => {
                shapes.clearRect(player.x, player.y, player.width, player.height);
                player.y += 1;
            }, 500)
        }
    });
    requestAnimationFrame(jump)
}

jump();

!10
for (let i = 0; i < 10; i++) {
    shapes.fillStyle = "red";
    shapes.fillRect(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 50, 50);
}

!11
for (let i = 0; i < 10; i++) {
    shapes.beginPath()
    shapes.fillStyle = "yellow";
    shapes.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 80, 0, 2 * Math.PI);
    shapes.fill();
}

!12
for (let i = 0; i < 10; i++) {
    shapes.beginPath()
    shapes.fillStyle = '#' + Math.floor(Math.random() * 16777215).toString(16)
    shapes.arc(Math.random() * 1000, Math.random() * 400, 30, 0, 2 * Math.PI);
    shapes.fill();
}
