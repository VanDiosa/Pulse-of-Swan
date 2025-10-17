let socket;
let circleX = 200;
let circleY = 200;
const port = 3000;

function setup() {
    createCanvas(300, 400);
    background(220);
    socket = io(); 

    socket.on('connect', () => {
        console.log('Connected to server');
    });

    socket.on('message', (data) => {
        console.log(`Received message:`, data);
        if (data && data.type === 'touch') {
            circleX = data.x;
            circleY = data.y;
        }
    });    

    socket.on('disconnect', () => {
        console.log('Disconnected from server');
    });

    socket.on('connect_error', (error) => {
        console.error('Socket.IO error:', error);
    });
}

function draw() {
    background(220);
    fill(255, 0, 0);
    ellipse(circleX, circleY, 50, 50);
}

