draw(e) {
    if(!this.painting) return
    console.log("Hello...Event is Working")
  }
canvas = null,
ctx = null,
this.canvas = document.getElementById("canvas");
this.ctx = canvas.getContext("2d");  
// Resize canvas
this.canvas.height = window.innerHeight;
this.canvas.width = window.innerWidth;

draw(e){
    if(!this.painting) 
    return (this.ctx.lineWidth = 10, this.ctx.lineCap ="round");
    
   this.ctx.lineTo(e.clientX,e.clientY)
   this.ctx.stroke()

    this.ctx.beginPath()
   this.ctx.moveTo(e.clientX,e.clientY)
}
  

finishedPainting() {
    this.painting = false;
    console.log(this.painting);
    this.ctx.beginPath()
  }
startPainting(e) {
    this.painting = true;
    console.log(this.painting)
    this.draw(e)
  }