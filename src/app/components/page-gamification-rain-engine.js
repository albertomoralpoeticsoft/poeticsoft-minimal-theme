import engineBackground from './page-gamification-rain-engine-background'
import engineHandDraw from './page-gamification-rain-engine-handdraw'
import engineUtils from './page-gamification-rain-engine-utils'
import Drop from './page-gamification-rain-engine-drop'

function RainyDay(
  rainelm, 
  canvaselm, 
  imageelm
) {

	this.rainelm = rainelm;
	this.canvas = canvaselm;
	this.img = imageelm;

  // window.addEventListener(
  //   'resize',
  //   this.init
  // )

	this.init();
}

RainyDay.prototype.init = function() {

	this.prepareBackground(
    20, 
    this.rainelm.clienttWidth,
    this.rainelm.clienttHeight, 
  );
	this.w = this.canvas.width;
	this.h = this.canvas.height;

	// this.prepareGlass(0.9);
	// this.prepareMiniatures();
  // this.handDraw()
};

RainyDay.prototype.prepareMiniatures = function() {

	this.mini = document.createElement('canvas');
	this.mini.width = this.canvas.width/2;
	this.mini.height = this.canvas.height/2;

	var miniContext = this.mini.getContext('2d');

	miniContext.translate(this.mini.width/2, this.mini.height/2);
	miniContext.rotate(Math.PI);

	miniContext.drawImage(
    this.img, 
    -this.mini.width/2, 
    -this.mini.height/2, 
    this.mini.width, 
    this.mini.height
  );

};

RainyDay.prototype.prepareGlass = function(opacity) {

	this.glass = document.createElement('canvas');
	this.glass.width = this.canvas.width;
	this.glass.height = this.canvas.height;
	this.glass.style.position = "absolute";
	this.glass.style.top = this.canvas.offsetTop;
	this.glass.style.left = this.canvas.offsetLeft;
	this.glass.style.zIndex = this.canvas.style.zIndex + 100;
	this.canvas.parentNode.appendChild(this.glass);
	this.context = this.glass.getContext('2d');
	this.glass.style.opacity = opacity;
};

RainyDay.prototype.preset = function(
  min, 
  base, 
  quan
) {

	return {
		"min": min,
		"base": base,
		"quan" : quan
	}
};

RainyDay.prototype.rain = function(presets, speed) {

	if (speed > 0) {

		// animation
		this.presets = presets;
		setInterval(
			(function(self) {

				return function() {

					var random = Math.random();
					// select matching preset
					var preset;
					for (var i = 0; i < presets.length; i++) {

						if (random < presets[i].quan) {
							preset = presets[i];
							break;
						}
					}

					if (preset) {

						self.putDrop(
              new Drop(
                self, 
                Math.random()*self.w, 
                Math.random()*self.h, 
                preset.min, 
                preset.base
              )
            );
					}
				}
			})(this),
			speed
		);

	} else {

		// static picture
		for (var i = 0; i < presets.length; i++) {

			var preset = presets[i];
			for (var c = 0; c < preset.quan; ++c) {

				this.putDrop(
          new Drop(
            this, Math.random()*this.w, 
            Math.random()*this.h, 
            preset.min, 
            preset.base
          )
        );
			}
		}
	}
};

RainyDay.prototype.putDrop = function(drop) {

	drop.draw();
	if (this.gravity) {

		drop.animate();
	}
};

RainyDay.prototype.getLinepoints = function(iterations) {

	var pointList = {};
	pointList.first = {x:0, y:1};
	var lastPoint = {x:1, y:1}
	var minY = 1;
	var maxY = 1;
	var point;
	var nextPoint;
	var dx, newX, newY;

	pointList.first.next = lastPoint;
	for (var i = 0; i < iterations; i++) {

		point = pointList.first;
		while (point.next != null) {

			nextPoint = point.next;
			
			dx = nextPoint.x - point.x;
			newX = 0.5*(point.x + nextPoint.x);
			newY = 0.5*(point.y + nextPoint.y);
			newY += dx*(Math.random()*2 - 1);
				
			var newPoint = {x:newX, y:newY};
				
			//min, max
			if (newY < minY) {

				minY = newY;

			} else if (newY > maxY) {

				maxY = newY;
			}
				
			//put between points
			newPoint.next = nextPoint;
			point.next = newPoint;
				
			point = nextPoint;
		}
	}
		
	//normalize to values between 0 and 1
	if (maxY != minY) {

		var normalizeRate = 1/(maxY - minY);
		point = pointList.first;
		while (point != null) {

			point.y = normalizeRate*(point.y - minY);
			point = point.next;
		}

	} else {

		point = pointList.first;
		while (point != null) {

			point.y = 1;
			point = point.next;
		}
	}

	return pointList;		
};

engineUtils(RainyDay)
engineBackground(RainyDay)
engineHandDraw(RainyDay)

export default RainyDay
