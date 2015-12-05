var draw = false;
var color = 'black';
var rainbow = false;

$(document).ready(function(){

  $('#1').css('background-color', color);
  createTables();
  createColors();


  $("td").mousedown(function(){
    draw = true;
  });

  $("td").mouseup(function(){
    draw = false;
  });

  $("td").mouseover(function(){

    if (rainbow === true){
      color = randomColor();
    }

      if (draw){$(this).css('background-color', color);}

  });

  $('.color').click(function() {
    color = $(this).css('backgroundColor');
})

});

function rainbow(){
  rainbow = false;
}


function createTables(){

  var cells = 44;
  $table = "<table>";

  for (var i = 1; i <= cells; i++){
    $table += "<tr>";
    for (var j = 1; j <= cells; j++){
      $table += "<td></td>";
    }
    $table += "</tr>";
  }
  $table += "</table>";

    $("#sketchpad").append($table);
}

function resetTable(){
  $('td').css('background-color', 'white');
}

function createColors(){
for (var i = 2; i <= 16; i++)
  $('#'+i).css('background-color', randomColor());


}

function randomColor(){

    var color = '#';
    for (var i = 0; i < 6; i++){
      var random = Math.random()*16;
      if (random <= 1)
        color += 0;
      else if (random <= 2)
        color += 1;
      else if (random <= 3)
        color += 2;
      else if (random <= 4)
        color += 3;
      else if (random <= 5)
        color += 4;
      else if (random <= 6)
        color += 5;
      else if (random <= 7)
        color += 6;
      else if (random <= 8)
        color += 7;
      else if (random <= 9)
        color += 8;
      else if (random <= 10)
        color += 9;
      else if (random <= 11)
        color += 'A';
      else if (random <= 12)
        color += 'B';
      else if (random <= 13)
        color += 'C';
      else if (random <= 14)
        color += 'D';
      else if (random <= 15)
        color += 'E';
      else if (random <= 16)
        color += 'F';
  }
  return color;
}
