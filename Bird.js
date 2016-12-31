/* Bird object */

function Bird(sketch) 
{
	this.y = sketch.height / 2;
	this.x = 50;

	this.gravity = .781;
	this.lift = -12;
	this.velocity = 0;

	this.show = function(sketch)
	{
		sketch.fill(255);
		sketch.ellipse(this.x, this.y, 32, 32);
	}
	
	this.up = function(sketch)
	{
		// console.log("in up");
		this.velocity += this.lift;
	}

	this.update = function(sketch)
	{
		this.velocity += this.gravity;
		this.velocity *= .95;
		this.y += this.velocity;

		if(this.y > sketch.height || this.y < 0)
		{
			this.velocity = 0;
		}

		this.y = Math.max(Math.min(this.y, sketch.height), 0);
	}


}