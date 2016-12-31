var bird;
var pipes = [];
var score = 0;
var high_score = 0;

var p5_header = function(sketch)
{
	sketch.setup = function()
	{
		var img = sketch.createCanvas(400, 25);
		img.parent('header');
	};

	sketch.draw = function()
	{
		sketch.background(sketch.color(0, 255, 0));
		sketch.strokeWeight(2);
		sketch.fill(255);
		sketch.textSize(18);
		sketch.textAlign(sketch.LEFT, sketch.TOP);
		var temp_score = Math.max(score, 0);
		sketch.text("Score: " + temp_score + "\t High Score: " + high_score, 0, 0);

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

		bird.show(sketch);
		bird.update(sketch);

		for(var i = 0; i < pipes.length; i++)
		{
			pipes[i].show(sketch)
			pipes[i].update(sketch);
			if(pipes[i].hits(sketch, bird))
			{
				score = -1;
			}
			else if(pipes[i].is_offscreen(sketch))
			{
				score += 1;
				high_score = Math.max(high_score, score);
				pipes.splice(i, 1);
			}		
		}

		if(sketch.frameCount % 125 == 0)
		{
			pipes.push(new Pipe(sketch));
		}
	};

	keyPressed = function()
	{
		if(sketch.key == ' ')
		{
			bird.up(sketch);
		}
	};
};

var header_sketch = new p5(p5_header);
var game_sketch = new p5(p5_game);