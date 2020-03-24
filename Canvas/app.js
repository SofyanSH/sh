var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })
  
  mounted() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");  
    this.vueCanvas = ctx;
  }
  
  data = {
      message = 'Hello Vue!',
      vueCanvas = null
    }
  
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  
  ctx.fillRect(100,100,300,300)
  
  ctx.strokeStyle = "red"
  ctx.strokeRect(100,100,300,300)
  
  ctx.moveTo(x, y);
  ctx.lineTo(200,100)
  ctx.stroke()
  ctx.lineTo(200,150)
  
  ctx.beginPath();
  ctx.moveTo(100,100)
  ctx.lineTo(200,100)
  ctx.lineTo(200,150)
  ctx.closePath()
  ctx.stroke()
  painting = false
  
  methods() {
      startPainting() {
          this.painting = true;
          console.log(this.painting);
      }
      finishedPainting() {
        this.painting = false;
        console.log(this.painting);
      }
    }