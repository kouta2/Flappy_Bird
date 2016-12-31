var bird;
var pipes = [];
var score = 0;
var height = 550;

var p5_header = function(sketch)
{
	sketch.setup = function()
	{
		var img = sketch.createCanvas(400, 25);
		img.parent('header');
	};

	sketch.draw = function()
	{
		sketch.background(200);
		sketch.strokeWeight(2);
		sketch.fill(255);
		sketch.textSize(18);
		sketch.textAlign(sketch.LEFT, sketch.TOP);
		var temp_score = Math.max(score, 0);
		sketch.text("Score: " + temp_score, 0, 0);

	};
};

var p5_game = function(sketch)
{
	sketch.setup = function()
	{
		var img2 = sketch.createCanvas(400, 550);
		img2.parent('game');
		bird = new Bird(sketch);
		pipes.push(new Pipe(sketch));
	};

	sketch.draw = function()
	{
		sketch.background(100);

		/*
		fill(50);
		textSize(16);
		textAlign(RIGHT, RIGHT);
		text("heasdfasdfasddfasdfasdfadfasdfasy", width, 15);
		*/

		bird.show(sketch);
		bird.update(sketch);
		// bird.up();

		for(var i = 0; i < pipes.length; i++)
		{
			pipes[i].show(sketch)
			pipes[i].update(sketch);
			if(pipes[i].hits(sketch, bird))
			{
				// console.log("bird hit pipe!");
				score = -1;
			}
			else if(pipes[i].is_offscreen(sketch))
			{
				score += 1;
				pipes.splice(i, 1);
			}		
		}

		if(sketch.frameCount % 125 == 0)
		{
			pipes.push(new Pipe(sketch));
		}
		/*
		pipes[0].show();
		pipes[0].update();
		*/

	};

	keyPressed = function()
	{
		console.log("in key pressed");
		if(sketch.key == ' ')
		{
			bird.up(sketch);
		}
	};
};

var header_sketch = new p5(p5_header);
var game_sketch = new p5(p5_game);

