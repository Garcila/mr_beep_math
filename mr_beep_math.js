$(document).ready(function(){

  var right = 0;
  var wrong = 0;

  function focusOnAnswer() {
    $('.answer_box').focus();
  }

  function rand() {
    return Math.floor(Math.random()*(15-0+1)+0);
  }

  function getNumbers() {
    numX = rand();
    numY = rand();
    if(numX < numY) {
      numX = numY;
      numY = numX;
    }
  }

  function evaluateAnswer() {
    if(userChoice == '+'){
      answer = numX + numY;
    } else {
      answer = numX - numY;
    }
  }

  function play() {
    function chooseOperand() {
      var operand = $('.sign').on('click',function() {
        $('.feedback').empty();
        userChoice = ($(this).val());
        getNumbers();
        evaluateAnswer();
        presentQuestion(userChoice);
        focusOnAnswer();
        captureAnswer();
      });
    }
    chooseOperand();
  }

  play();

  function randomSentencesGood() {
    var sentences = ['good job', 'Nice!!!', 'WOW, really good', 'You got this', 'Getting really good', 'Mathematician, are you?']
    var sayIt = sentences[Math.floor(Math.random()*sentences.length)];
    return sayIt;
  }

  function randomSentencesBad() {
    var sentences = ['Sorry', 'Take a deep breath', "Mr Beep, can't compute", 'An error your Math has', 'You can do it', 'Mathematician, you will be?']
    var sayIt = sentences[Math.floor(Math.random()*sentences.length)];
    return sayIt;
  }

  function presentQuestion(userChoice) {
    $('.question').empty();
    $(function () {
      $('.question').append(numX +  userChoice +  numY);
    })
  }

  function clearColumHeads() {
    $('.numX').empty();
    $('.numY').empty();
    $('.operand').empty();
  }

  function numberToRobot(numX, numY){
    clearColumHeads();
    $('.operand').append(userChoice);
    if(userChoice === '+') {
      for(var i=0; i < numX; i++){
        $('.numX').append('<img src=https://cdn.pbrd.co/images/acXNNGVde.png class="head">    </img>');
      }
      for(var i=0; i < numY; i++){
        $('.numY').append('<img src=https://cdn.pbrd.co/images/acXNNGVde.png class="head"></img> <br>');
      }
    } else {
      for(var i=0; i < numX; i++){
        $('.numX').append('<img src=https://cdn.pbrd.co/images/acXNNGVde.png class="head"></img> <br>');
      }
    }
  }

  function heartEye() {
    $('.hi').hide();
    $('.robot_parts img:nth-child(1)').hide(); //robot head
    $('.robot_parts img:nth-child(2)').show(); // hearts head
    $('.robot_parts img:nth-child(3)').hide(); // wrong head
  }

  function wrongEye() {
    $('.hi').hide();
    $('.robot_parts img:nth-child(1)').hide();
    $('.robot_parts img:nth-child(2)').hide();
    $('.robot_parts img:nth-child(3)').show();
  }

  function feebackToPlayer(user_answer) {
    if(user_answer === answer) {
      $('.feedback').append(randomSentencesGood() +'<br>' + numX + ' ' + userChoice + ' ' + numY +' ' + '=' + ' ' + answer);
      heartEye();
      right += 1;
      $('.score div:nth-child(2)').empty().append('Right: ' + right);
    } else {
      $('.feedback').append(randomSentencesBad() +'<br>' + numX + ' ' + userChoice + ' ' + numY +' ' + 'is not' + ' ' + user_answer + '.' + '<br>' + 'Try again');
      wrongEye();
      wrong += 1;
      $('.score div:nth-child(3)').empty().append('Wrong: ' + wrong);
    }
  }

  function captureAnswer() {
    $('.answer_box').off().on('keypress', function(e) {  //.off() is there in order not to get multiple answers on continous clicks
  		if(e.which == 13) {
        setTimeout(function() {
          $('.answer_box').val('');
        }, 2000);
        $('.feedback').empty();
  			var user_answer = +this.value;
        feebackToPlayer(user_answer);
      }
    })
    numberToRobot(numX, numY);
  }
})
