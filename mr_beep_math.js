$(document).ready(function(){
  // function start() {
  //   var userChoice = "+";
  //   getNumbers();
  //   presentQuestion(userChoice);
  //   answer = numX + numY;
  //   console.log(userChoice);
  //   console.log(answer);
  // }
  //
  // start();

  function rand() {
    return Math.floor(Math.random()*(9-0+1)+0);
  }

  function getNumbers() {
    numX = rand();
    console.log(numX);
    numY = rand();
    console.log(numY);
    if(numX < numY) {
      numX = numY;
      numY = numX;
    }
  }

  function chooseOperand() {
    operand = $('.sign').on('click',function() {
      console.log($(this).val());
      $('.feedback').empty();
      userChoice = ($(this).val());
      getNumbers();
      if(userChoice == '+'){
        answer = numX + numY;
      } else {
        answer = numX - numY;
      }
      presentQuestion(userChoice);
      focusOnAnswer();
      console.log(answer);
      captureAnswer();
    });
  }

  chooseOperand();

  function presentQuestion(userChoice) {
    $('.question').empty();
    $(function () {
      $('.question').append(numX +  userChoice +  numY);
    })
  }

  function numberToRobot(numX, numY){
    $('.numX').empty();
    $('.numY').empty();
    if(userChoice === '+') {
      for(var i=0; i < numX; i++){
        $('.numX').append('<img src=images/head.png class="head">    </img>');
      }
      for(var i=0; i < numY; i++){
        $('.numY').append('<img src=images/head.png class="head"></img> <br>');
      }
    } else {
      for(var i=0; i < numX; i++){
        $('.numX').append('<img src=images/head.png class="head"></img> <br>');
      }
    }
  }

  function captureAnswer() {
    $('.answer_box').off().on('keypress', function(e) {  //.off() is there in order not to get multiple answers on continous clicks
  		if(e.which == 13) {
        setTimeout(function() {
            $('.answer_box').val('');
        }, 2000);
        $('.feedback').empty();
  			user_answer = +this.value;
        console.log(user_answer);
        if(user_answer === answer) {
          $('.feedback').append('correct' +'<br>' + numX + ' ' + userChoice + ' ' + numY +' ' + '=' + ' ' + answer);
        } else {
          $('.feedback').append('Sorry, ' +'<br>' + numX + ' ' + userChoice + ' ' + numY +' ' + 'is not' + ' ' + user_answer);
        }
      }
    })
    numberToRobot(numX, numY);
  }

  function focusOnAnswer() {
    $('.answer_box').focus();
  }
})
