$(document).ready(function(){

  $(document).mousemove(function(e){
    $('.hair').css('left',e.pageX+"px");
    $('.hair').css('top',e.pageY+"px");
  });

  console.log('script.js is loading...');
  var counter = 0;
  var fish1 = $('<img src="fish1.png" class="fish1">');
  var fish2 = $('<img src="fish2.png" class="fish2">');
  var fish3 = $('<img src="fish3.png" class="fish3">');
  var fish4 = $('<img src="fish1.png" class="fish3">');
  var fish5 = $('<img src="fish2.png" class="fish1">');
  var fish6 = $('<img src="fish3.png" class="fish2">');
  var fish7 = $('<img src="fish1.png" class="fish2">');
  var fish8 = $('<img src="fish2.png" class="fish3">');
  var fish9 = $('<img src="fish3.png" class="fish1">');
  var gb1 = $('<img src="gb1.png" class="slot2">');
  var gb2 = $('<img src="gb2.png" class="slot3">');
  var gb3 = $('<img src="gb3.png" class="slot1">');
  var gb4 = $('<img src="gb1.png" class="slot1">');
  var gb5 = $('<img src="gb2.png" class="slot2">');
  var gb6 = $('<img src="gb3.png" class="slot3">');
  var gb7 = $('<img src="gb1.png" class="slot3">');
  var gb8 = $('<img src="gb2.png" class="slot1">');
  var gb9 = $('<img src="gb3.png" class="slot2">');
  var gb10 = $('<img src="gb4.png" class="slot2">');
  var gb11 = $('<img src="gb5.png" class="slot3">');
  var gb12 = $('<img src="gb6.png" class="slot1">');
  var gb13 = $('<img src="gb4.png" class="slot1">');
  var gb14 = $('<img src="gb5.png" class="slot2">');
  var gb15 = $('<img src="gb6.png" class="slot3">');
  var gb16 = $('<img src="gb4.png" class="slot3">');
  var gb17 = $('<img src="gb5.png" class="slot1">');
  var gb18 = $('<img src="gb6.png" class="slot2">');

  var objArr = [];
  objArr.push(fish1);
  objArr.push(fish2);
  objArr.push(fish3);
  objArr.push(fish4);
  objArr.push(fish5);
  objArr.push(fish6);
  objArr.push(fish7);
  objArr.push(fish8);
  objArr.push(fish9);
  objArr.push(gb1);
  objArr.push(gb2);
  objArr.push(gb3);
  objArr.push(gb4);
  objArr.push(gb5);
  objArr.push(gb6);
  objArr.push(gb7);
  objArr.push(gb8);
  objArr.push(gb9);
  objArr.push(gb10);
  objArr.push(gb11);
  objArr.push(gb12);
  objArr.push(gb13);
  objArr.push(gb14);
  objArr.push(gb15);
  objArr.push(gb16);
  objArr.push(gb17);
  objArr.push(gb18);

  function rndObj(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function board(){
    popObj = setInterval(function(){
      $('body').append(objArr[rndObj(0,30)]);
    },1000);
  }

  function gameOver(){
    clearInterval(popObj);
    counter = 0;
    $('body').append('<h1 class="str">RESTART</h1>');
    $('.fish1').remove();
    $('.fish2').remove();
    $('.fish3').remove();
    $('.slot1').remove();
    $('.slot2').remove();
    $('.slot3').remove();

    $('.str').click(function(){
      $('.str').remove();
      board();
      $('.scr').text("Score: " + counter);
    });
  }

  $('.str').click(function(){
    $('.str').remove();
    board();
    $('.scr').text("Score: " + counter);
  });

  $(document).on('click', '.slot1',function(){
    $(this).remove();
    counter++;
    $('.scr').text("Score: " + counter);
  });

  $(document).on('click', '.slot2',function(){
    $(this).remove();
    counter++;
    $('.scr').text("Score: " + counter);
  });

  $(document).on('click', '.slot3',function(){
    $(this).remove();
    counter++;
    $('.scr').text("Score: " + counter);
  });

  $(document).on('click', '.fish1',function(){
    gameOver();
  });

  $(document).on('click', '.fish2',function(){
    gameOver();
  });

  $(document).on('click', '.fish3',function(){
    gameOver();
  });

});
