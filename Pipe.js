/* Pipe objects that get in the way of the bird */

function Pipe(sketch)
{
	this.width_of_pipe = 25;
	this.gap_top = Math.min(Math.max(sketch.random(sketch.height), 125), sketch.height - 125);
	this.gap_space = 100;
	this.x = sketch.width;
	this.speed = 2;
	this.highlight = false;

	this.show = function(sketch)
	{
		sketch.fill(255);
		if(this.highlight)
		{
			sketch.fill(255, 0, 0);
		}
		sketch.rect(this.x, 0, this.width_of_pipe, this.gap_top); // top pipe
		sketch.rect(this.x, this.gap_space + this.gap_top, this.width_of_pipe, sketch.height - this.gap_top - this.gap_space); // bottom pipe
	}

	this.update = function(sketch)
	{
		this.x -= this.speed;
	}

	this.is_offscreen = function(sketch)
	{
		return (this.x + this.width_of_pipe < 0);
	}

	this.hits = function(sketch, bird)
	{
		return (this.highlight = (bird.x >= this.x) && (bird.x <= this.x + this.width_of_pipe) && ((bird.y >= 0 && bird.y <= this.gap_top) || (bird.y <= sketch.height && bird.y >= this.gap_top + this.gap_space)));
	}
}