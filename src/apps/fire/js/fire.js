import * as PIXI from 'jscommon/pixi.js'
import flameFrag from './flame-frag.js'
import noisetexture from 'assets/images/noise-texture.png'

const manifest = [
  { 
    name: "noise", 
    url: noisetexture 
  }
];

//
// FLAME FILTER
// ===========================================================================

class FlameFilter extends PIXI.Filter {
  
  constructor(texture, time = 0.0, horpos = 0.0, verpos = 0.0) {    

    super(null, flameFrag);
       
    this.uniforms.dimensions = new Float32Array(2);   
    this.texture = texture;
    this.time = time;
    this.horpos = horpos;
    this.verpos = verpos;
  }
  
  get texture() {

    return this.uniforms.mapSampler;
  }
  
  set texture(texture) {

    texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    this.uniforms.mapSampler = texture;
  }
  
  apply(filterManager, input, output, clear) {
          
    this.uniforms.dimensions[0] = input.sourceFrame.width;
    this.uniforms.dimensions[1] = input.sourceFrame.height;    
    this.uniforms.time = this.time;    
    this.uniforms.horpos = this.horpos;
    this.uniforms.verpos = this.verpos;

    filterManager.applyFilter(this, input, output, clear);
  }
}


//
// APPLICATION
// ===========================================================================

class Application extends PIXI.Application {
    
  constructor() {
    
    if (window.devicePixelRatio > 1) {

      PIXI.settings.RESOLUTION = 2;
    }
    
    PIXI.settings.PRECISION_FRAGMENT = "highp";

    const container = document.querySelector("#container")
    
    super({
      view: container,
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: 0x000000,
      autoResize: true
    });   
    
    this.isResized = true;      

    this.x = 0
    this.y = 0
  }
    
  load(manifest) {
    
    this.loader
        .add(manifest)
        .load((l, r) => this.init(r));   
  }
    
  init(resources) {     
        
    this.flame = new FlameFilter(resources.noise.texture);
       
    this.stage.filterArea = this.screen;
    this.stage.filters = [this.flame];

    this.ticker.add(this.update, this); 

    window.addEventListener("resize", () => this.isResized = true);      

    const move = e => {
      
      this.x = e.clientX || e.changedTouches[0].clientX
      this.y = e.clientY || e.changedTouches[0].clientY
    }

    document.addEventListener('mousemove', move); 
    document.addEventListener('touchmove', move); 
  }
   
  update(delta) {
    
    if (this.isResized) {

      this.renderer.resize(window.innerWidth, window.innerHeight);
      this.isResized = false;
    }

    this.flame.time += 0.1 * delta;
    this.flame.horpos = this.x / window.innerWidth;
    this.flame.verpos = this.y / window.innerHeight;
  }
}

export default (container) => {
  
  const app = new Application();
  app.load(manifest);
}