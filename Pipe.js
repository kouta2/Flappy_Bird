/* Pipe objects that get in the way of the bird */

function Pipe()
{
	this.width = 25;
	this.gap_top = Math.min(Math.max(random(height), 125), height - 125);
	this.gap_space = 100;
	this.x = width;
	this.speed = 2;
	this.highlight = false;

	this.show = function()
	{
		fill(255);

		// fill(255, 0, 0);
		rect(this.x, 0, this.width, this.gap_top); // top pipe
		rect(this.x, this.gap_space + this.gap_top, this.width, height - this.gap_top - this.gap_space); // bottom pipe
	}

	this.update = function()
	{
		this.x -= this.speed;

	}

	this.is_offscreen = function()
	{
		return (this.x + this.width < 0);
	}

	this.hits = function(bird)
	{
		return (this.highlight = (bird.x >= this.x) && (bird.x <= this.x + this.width) && ((bird.y >= 0 && bird.y <= this.gap_top) || (bird.y <= height && bird.y >= this.gap_top + this.gap_space)));
	}

	this.color_red = function()
	{
		// fill
	}
}