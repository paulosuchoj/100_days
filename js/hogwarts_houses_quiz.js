var resultadosQuiz = [
    {   title: "Ah, right, then. Hmm, right. Okay.",
        desc:  '<p>GRYFFINDOR!</p><img src="../images/gryffindor_crest.png"/>'},
    {   title: "Let's see... It's all in here and. Ah!",
        desc: '<p>SLYTHERIN!</p><img src="../images/slytherin_crest.png"/>'},
    {   title: "Yes, yes, I can see... But... No, this will do.",
        desc: '<p>RAVENCLAW!</p><img src="../images/ravenclaw_crest.png"/>'},
    {   title: "Don't even need to think. You'll go to...",
        desc: '<p>HUFFLEPUFF!</p><img src="../images/hufflepuff_crest.png"/>'},
];

var etapasQuiz = $("#quiz .quiz-step");
var totalDePontos = 0;

etapasQuiz.each(function() {
  var etapaAtual = $(this);
  var opcoesResposta = etapaAtual.children(".quiz-answer");
});
