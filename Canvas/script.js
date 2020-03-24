var myCanvas = document.getElementById("cvs");
var context = myCanvas.getContext("2d");

context.font = '40pt Calibri ';
context.strokeText('Pengirim :', myCanvas.width / 2 - 130, myCanvas.height / 2 - 100);
context.font = '36pt Calibri ';
context.strokeText('POLITEKNIK NEGERI BANYUWANGI', myCanvas.width / 2 - 350, myCanvas.height / 2 - 30);
context.strokeText('Jalan Raya Jember KM 13 Labanasem', myCanvas.width / 2 - 380, myCanvas.height / 2 + 15);
context.strokeText('Kabat Banyuwangi Jawa Timur 68472', myCanvas.width / 2 - 379, myCanvas.height / 2 + 60);

context.beginPath();
context.moveTo(myCanvas.width / 2 - 10, myCanvas.height / 2 - 250);
context.lineTo(myCanvas.width / 2 - 600, myCanvas.height / 2 - 250);
context.stroke();
context.beginPath();
context.moveTo(myCanvas.width / 2 + 10, myCanvas.height / 2 - 250);
context.lineTo(myCanvas.width / 2 + 600, myCanvas.height / 2 - 250);
context.stroke();
context.beginPath();
context.moveTo(myCanvas.width / 2, myCanvas.height / 2 - 270);
context.lineTo(myCanvas.width / 2 + 10, myCanvas.height / 2 - 250);
context.stroke();
context.beginPath();
context.moveTo(myCanvas.width / 2, myCanvas.height / 2 - 270);
context.lineTo(myCanvas.width / 2 - 10, myCanvas.height / 2 - 250);
context.stroke();
context.moveTo(myCanvas.width / 2 - 670, myCanvas.height / 2 - 310);
context.lineTo(myCanvas.width / 2 - 600, myCanvas.height / 2 - 250);
context.stroke();
context.moveTo(myCanvas.width / 2 + 670, myCanvas.height / 2 - 310);
context.lineTo(myCanvas.width / 2 + 600, myCanvas.height / 2 - 250);
context.stroke();
context.font = '24px Arial';
context.strokeText('Amplop KHS', myCanvas.width / 2 + 470, myCanvas.height / 2 + 250);