noseX=0;
noseY=0;


function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin =loadSound("coin.wav");
	mario_gameover =loadSound("gameover.wav");
	mario_kick=loadSound("kick.wav");
	mario_die=loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1250,336);
	canvas.parent("canvas");
	instializeInSetup(mario);

	video=createCapture(VIDEO);
	video.size(600,300);
	video.parent("game_console");
	
	posenet=ml5.poseNet(video,modelLoaded);
	posenet.on("pose",gotPoses);
}

function gotPoses(results){
	if(results.length>0){
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log	("nose x ="+noseX+", nose y ="+noseY);

	}
}

function draw() {
	game()
}

function modelLoaded(){
	console.log("model Loaded")
}






