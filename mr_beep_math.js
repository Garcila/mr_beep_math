$(document).ready(() => {
  let right = 0;
  let wrong = 0;
  let answer = 0;
  let userChoice = '';

  const focusOnAnswer = () => $('.answer_box').focus();

  const rand = () => Math.floor(Math.random() * (15 - 0 + 1) + 0);

  const getNumbers = () => {
    numX = rand();
    numY = rand();
    if (numX < numY) {
      numX = numY;
      numY = numX;
    }
  };

  const evaluateAnswer = () =>
    (answer = userChoice === '+' ? numX + numY : numX - numY);

  function play() {
    function chooseOperand() {
      let operand = $('.sign').on('click', function() {
        $('.feedback').empty();
        userChoice = $(this).val();
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

  const randomSentencesGood = () => {
    const sentences = [
      'good job',
      'Nice!!!',
      'WOW, really good',
      'You got this',
      'Getting really good',
      'Mathematician, are you?',
    ];
    let sayIt = sentences[Math.floor(Math.random() * sentences.length)];
    return sayIt;
  };

  const randomSentencesBad = () => {
    let sentences = [
      'Sorry',
      'Take a deep breath',
      "Mr Beep, can't compute",
      'An error your Math has',
      'You can do it',
      'Mathematician, you will be?',
    ];
    let sayIt = sentences[Math.floor(Math.random() * sentences.length)];
    return sayIt;
  };

  const presentQuestion = userChoice => {
    $('.question').empty();
    $(() => $('.question').append(numX + userChoice + numY));
  };

  const clearColumHeads = () => {
    $('.numX').empty();
    $('.numY').empty();
    $('.operand').empty();
  };

  const numberToRobot = (numX, numY) => {
    clearColumHeads();
    $('.operand').append(userChoice);
    if (userChoice === '+') {
      for (var i = 0; i < numX; i++) {
        $('.numX').append(
          '<img src="./images/full_robot_head.png" class="head">    </img>'
        );
      }
      for (var i = 0; i < numY; i++) {
        $('.numY').append(
          '<img src="./images/full_robot_head.png" class="head"></img> <br>'
        );
      }
    } else if (userChoice === '-') {
      for (var i = 0; i < numX; i++) {
        $('.numX').append(
          '<img src="./images/full_robot_head.png" class="head">    </img>'
        );
      }
      for (var i = 0; i < numY; i++) {
        $('.numY').append(
          '<img src="./images/full_robot_head.png" class="head"></img> <br>'
        );
      }
    } else {
      for (var i = 0; i < numX; i++) {
        $('.numX').append(
          '<img src="./images/full_robot_head.png" class="head"></img> <br>'
        );
      }
    }
  };

  const heartEye = () => {
    $('.hi').hide();
    $('.robot_parts img:nth-child(1)').hide(); //robot head
    $('.robot_parts img:nth-child(2)').show(); // hearts head
    $('.robot_parts img:nth-child(3)').hide(); // wrong head
  };

  const wrongEye = () => {
    $('.hi').hide();
    $('.robot_parts img:nth-child(1)').hide();
    $('.robot_parts img:nth-child(2)').hide();
    $('.robot_parts img:nth-child(3)').show();
  };

  const feebackToPlayer = user_answer => {
    if (user_answer === answer) {
      $('.feedback').append(
        randomSentencesGood() +
          '<br>' +
          numX +
          ' ' +
          userChoice +
          ' ' +
          numY +
          ' ' +
          '=' +
          ' ' +
          answer
      );
      heartEye();
      right += 1;
      $('.score div:nth-child(2)')
        .empty()
        .append('Right: ' + right);
    } else {
      $('.feedback').append(
        randomSentencesBad() +
          '<br>' +
          numX +
          ' ' +
          userChoice +
          ' ' +
          numY +
          ' ' +
          'is not' +
          ' ' +
          user_answer +
          '.' +
          '<br>' +
          'Try again'
      );
      wrongEye();
      wrong += 1;
      $('.score div:nth-child(3)')
        .empty()
        .append('Wrong: ' + wrong);
    }
  };

  const captureAnswer = () => {
    $('.answer_box')
      .off()
      .on('keypress', function(e) {
        //.off() is there in order not to get multiple answers on continous clicks
        if (e.which == 13) {
          setTimeout(function() {
            $('.answer_box').val('');
          }, 2000);
          $('.feedback').empty();
          var user_answer = +this.value;
          feebackToPlayer(user_answer);
        }
      });
    numberToRobot(numX, numY);
  };
});
