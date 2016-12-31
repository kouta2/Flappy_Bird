var bird;
var pipes = [];
var score = 0;

function setup()
{
	createCanvas(400, 550);
	bird = new Bird();
	pipes.push(new Pipe());
}

function draw()
{
	background(100);

	bird.show();
	bird.update();
	// bird.up();

	for(var i = 0; i < pipes.length; i++)
	{
		if(pipes[i].is_offscreen())
		{
			score += 1;
			pipes.splice(i, 1);
		}
		else
		{
			pipes[i].show()
			pipes[i].update();
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
	// console.log("in key pressed");
	if(key == ' ')
	{
		bird.up();
	}
}