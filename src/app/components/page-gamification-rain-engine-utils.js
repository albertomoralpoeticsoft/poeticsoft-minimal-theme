import Drop from './page-gamification-rain-engine-drop'

export default RainyDay => {  

  RainyDay.prototype.TRAIL_DROPS = function(drop) {

    if (!drop.trail_y || drop.y - drop.trail_y >= Math.random()*10*drop.r1) {

      drop.trail_y = drop.y;
      this.putDrop(new Drop(this, drop.x, drop.y - drop.r1 - 5, 0, Math.ceil(drop.r1 / 5)));
    }
  };

  RainyDay.prototype.GRAVITY_SIMPLE = function(drop) {

    if (drop.r1 < 3) {

      clearInterval(drop.intid);
      return true;
    }

    this.context.clearRect(
      drop.x - drop.r1 - 1, 
      drop.y - drop.r1 - 1, 
      2*drop.r1 + 2, 
      2*drop.r1 + 2
    );

    if (drop.y - drop.r1 > this.glass.height) {

      clearInterval(drop.intid);
      return true;
    }

    if (drop.speed) {

      drop.speed += 0.005 * Math.floor(drop.r1);

    } else {

      drop.speed = 0.1;
    }

    drop.y += drop.speed;
    drop.draw();
    
    return false;
  };

  RainyDay.prototype.REFLECTION_NONE = function(drop) {

    this.context.fillStyle = '#8ED6FF';
    this.context.fill();
  };

  RainyDay.prototype.REFLECTION_HQ = function(drop) {

    var mx = (drop.x * this.mini.width) / this.glass.width;
    var my = (drop.y * this.mini.height) / this.glass.height;
    var mw = drop.r1 * 10;
    var mh = drop.r1 * 10;

    this.context.drawImage(
      this.mini, 
      (mx - mw) < 0 ? 0 : (mx - mw), 
      (my - mh) < 0 ? 0 : (my - mh),
      mw * 2, 
      mh * 2, 
      drop.x - drop.r1, 
      drop.y - drop.r1, 
      2 * drop.r1, 
      2 * drop.r1
    );
  };
}