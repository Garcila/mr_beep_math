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
    return Math.floor(Math.random()*(15-0+1)+0);
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
        }
      }
    })
  }

  function focusOnAnswer() {
    $('.answer_box').focus();
  }
})
