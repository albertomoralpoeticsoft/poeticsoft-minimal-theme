function Drop(
  rainyday, 
  centerX, 
  centerY, 
  min, 
  base
) {

	this.x = Math.floor(centerX);
	this.y = Math.floor(centerY);
	this.r1 = (Math.random() * base) + min;
	this.rainyday = rainyday;
	var iterations = 5;
	this.r2 = 0.88 * this.r1;
	this.linepoints = rainyday.getLinepoints(iterations);
	this.context = rainyday.context;
	this.mini = rainyday.mini;
}

Drop.prototype.draw = function() {

	var phase = 0;
	var point;
	var rad, theta;
	var x0,y0;

	this.context.save();
	this.context.beginPath();
	point = this.linepoints.first;
	theta = phase;
	rad = this.r2 + point.y*(this.r1 - this.r2);
	x0 = this.x + rad*Math.cos(theta);
	y0 = this.y + rad*Math.sin(theta);
	this.context.lineTo(x0, y0);

	while (point.next != null) {

		point = point.next;
		theta = (Math.PI*2*point.x) + phase;
		rad = this.r2 + point.y*(this.r1 - this.r2);
		x0 = this.x + rad*Math.cos(theta);
		y0 = this.y + rad*Math.sin(theta);
		this.context.lineTo(x0, y0);
	}

	this.context.clip();
	
	if (this.rainyday.reflection) {

		this.rainyday.reflection(this);

	} else {
		
	}

	this.context.restore();
};

Drop.prototype.animate = function() {

	this.intid = setInterval(
		(function(self) {
			return function() {

				if (self.rainyday.gravity) {
					var stopped = self.rainyday.gravity(self);
					if (!stopped) {

						if (self.rainyday.trail) {

							self.rainyday.trail(self);
						}
					}
				}
			}
		})(this),
		10
	);
};

export default Drop