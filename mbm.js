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
    numY = rand();
  }

  function chooseOperand() {
    $('.add').click(function() {
      var userChoice = "+";
    }
    $('.substract').click(function() {
      var userChoice = "-";
    }
    $('.multiply').click(function() {
      var userChoice = "x";
    }
    $('.divide').click(function() {
      var userChoice = "/";
    }
  }
    











    $('.add').click(function() {
      var userChoice = "+";
      getNumbers();
      presentQuestion(userChoice);
      answer = numX + numY;
      console.log(userChoice);
      console.log(answer);
      captureAnswer();
      focusOnAnswer();
    })

    $('.substract').click(function() {
      var userChoice = "-";
      getNumbers();
      presentQuestion(userChoice);
      answer = numX - numY;
      console.log(userChoice);
      console.log(answer);
      focusOnAnswer();
    })

    $('.multiply').click(function() {
      var userChoice = "x";
      getNumbers();
      presentQuestion(userChoice);
      answer = numX * numY;
      console.log(userChoice);
      console.log(answer);
      focusOnAnswer();
    })

    $('.divide').click(function() {
      var userChoice = "/";
      getNumbers();
      presentQuestion(userChoice);
      answer = numX / numY;
      console.log(userChoice);
      console.log(answer);
      focusOnAnswer();
    })
  }

  chooseOperand();

  function focusOnAnswer() {
    $('.answer_box').focus();
  }

  function presentQuestion(userChoice) {
    $('.question').empty();
    $(function () {
      $('.question').append(numX +  userChoice +  numY);
    })
  }

  function captureAnswer() {
    $('.answer_box').off().on('keypress', function(e) {  //.off() is there in order not to get multiple answers on continous clicks
  		if(e.which == 13) {
  			user_answer = +this.value;
        console.log(user_answer);
        if(user_answer === answer) {
          $('.feedback').append('Correct!');
        }
      }
    })
    // $('.image_button').off().on('click', function(e) {
    //   user_answer = +this.value;
    //   console.log(user_answer);
    //     if(user_answer === answer) {
    //       console.log('Eso');
    //     }
    // })
  }

  // function answerFormula() {
  //   if(userChoice === '+') {
  //     answer = numX + numY;
  //   } else if (userChoice === '-') {
  //     answer = numX - numY;
  //   } else if (userChoice === 'x') {
  //     answer = numX * numY;
  //   } else if (userChoice === '/') {
  //     answer = numX / numY;
  //   }
  // }

})
