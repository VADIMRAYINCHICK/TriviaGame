var panel = $("#quiz-area");

// Question set
var questions = [{
  question: "Game of Thrones is an adaptation of series of fantasy novels written by:",
  answers: ["J. K. Rowling", "J. R. R. Tolkien", "George R. R. Martin", "Isaac Asimov"],
  correctAnswer: "George R. R. Martin"
}, {
  question: "Which of these had been the royal house of Westeros since the defeat of and exile of the Targaryen dynasty?",
  answers: ["House Baratheon", "House Tyrell", "House Stark", "House Lannister"],
  correctAnswer: "House Baratheon"
}, {
  question: "Who was the only daughter and first child of Tywin Lannister and his wife Joanna?",
  answers: ["Sansa", "Myrcella", "Margaery", "Cersei"],
  correctAnswer: "Cersei"
}, {
  question: "Who had arranged the assassination of King Robb, his wife, Queen Talisa, his mother, Lady Catelyn at The Red Wedding?",
  answers: ["Euron Greyjoy", "Rodrik Forrester", "Walder Frey", "Edmure Tully"],
  correctAnswer: "Walder Frey"
}, {
  question: "Who said, \"Go drink until it feels like you did the right thing\"?",
  answers: ["Tyrion Lannister", "Bronn", "Lady Arryn", "Hodor"],
  correctAnswer: "Bronn"
}, {
  question: "Whose skull was crushed like an egg by The Mountain's giant hands?",
  answers: ["Oberyn Martell", "Viserys Targaryen", "Khal Drogo", "Jory Cassel"],
  correctAnswer: "Oberyn Martell"
}, {
  question: "Only two characters appeared in every episode before they were killed off. They were…",
  answers: ["Maester Luwiny and Talisa Stark", "Elizabeth Bathory and Ned Sherrin", "Robb Stark and Viserys Targaryen", "Robert Baratheon and Ned Stark"],
  correctAnswer: "Robert Baratheon and Ned Stark"
}, {
  question: "What is the name of Ned Stark's sword?",
  answers: ["Winter", "Ice", "Wolf's Tooth", "Longclaw"],
  correctAnswer: "Longclaw"
}];

// Variable that will hold the setInterval
var timer;

   var audioElement1 = document.createElement("audio");
      audioElement1.setAttribute("src", "assets/audio/main.mp3");
      audioElement1.volume = 0.3;

var audioElement2 = document.createElement("audio");
      audioElement2.setAttribute("src", "assets/audio/end.mp3");
      audioElement2.volume = 0.6;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME IS UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);
    audioElement1.play();

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' class='choise' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

   

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>When you play a game of thrones you win or you die!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {

   audioElement2.play();
  game.done();
});
