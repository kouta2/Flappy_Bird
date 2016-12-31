var bird;
var pipes = [];
var score = 0;

function setup()
{
	var header = createCanvas(400, 50);
	header.parent('header');
	var game = createCanvas(400, 550);
	game.parent('game');
	game.position(0, 50);
	bird = new Bird();
	pipes.push(new Pipe());
}

function draw()
{
	background(100);

	/*
	fill(50);
	textSize(16);
	textAlign(RIGHT, RIGHT);
	text("heasdfasdfasddfasdfasdfadfasdfasy", width, 15);
	*/

	bird.show();
	bird.update();
	// bird.up();

	for(var i = 0; i < pipes.length; i++)
	{
		pipes[i].show()
		pipes[i].update();
		if(pipes[i].hits(bird))
		{
			// console.log("bird hit pipe!");
			score = 0;
		}
		else if(pipes[i].is_offscreen())
		{
			score += 1;
			pipes.splice(i, 1);
		}		
	}

	if(frameCount % 125 == 0)
	{
		pipes.push(new Pipe());
	}
	/*
	pipes[0].show();
	pipes[0].update();
	*/

}

function keyPressed()
{
	console.log("in key pressed");
	if(key == ' ')
	{
		bird.up();
	}
}
