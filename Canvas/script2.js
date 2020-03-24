(function() { 
    function init(){
    var canvas = document.getElementsByTagName('canvas')[0];
    var c = canvas.getContext('2d');
    c.translate(650,300);

    
    var maxCircle = 30;
    var radius = 200;
    var size = 15;

        for(var i=1; i<=maxCircle; i++) {
            c.fillStyle = 'hsl( ' + 360*Math.random() + ',100%,50%)';
            c.beginPath();
            c.arc(0,radius,size,0,2*Math.PI,false);
            c.rotate(2*Math.PI/maxCircle);
            c.fill();
        }
    }

window.addEventListener('load',init,false);

});