const questions = {
    easy: [
        ["Who was Prophet Yusuf's father?", ["Prophet Ya'qub", "Prophet Ibrahim", "Prophet Musa"], 0],
  ["What did Prophet Yusuf see in his dream?", ["Eleven stars", "A full moon", "A burning tree"], 0],
  ["Who were Prophet Yusuf's brothers?", ["Twelve", "Ten", "Seven"], 0],
  ["Where was Prophet Yusuf thrown into?", ["A well", "A cave", "A dungeon"], 0],
  ["Who bought Prophet Yusuf in Egypt?", ["A merchant", "The king", "Al-Aziz"], 2],
  ["Who tried to seduce Prophet Yusuf?", ["Zulaykha", "The queen", "Asiya"], 0],
  ["What did Prophet Yusuf say when faced with temptation?", ["I seek refuge in Allah", "I will resist", "I am not afraid"], 0],
  ["How many years was Prophet Yusuf in prison?", ["Seven", "Nine", "Twelve"], 1],
  ["Who were the two prisoners Prophet Yusuf interpreted dreams for?", ["The baker and the cupbearer", "The merchant and the king", "The rich and the poor"], 0],
  ["What was the interpretation of the cupbearer's dream?", ["He would be restored to his position", "He would be punished", "He would be promoted"], 0],
  ["What did Prophet Yusuf ask the cupbearer to do after his release?", ["Remember him to the king", "Help him escape", "Send him gifts"], 0],
  ["What was the king's dream?", ["Seven fat cows and seven thin cows", "A mountain of gold", "A river overflowing"], 0],
  ["Who suggested Prophet Yusuf interpret the king's dream?", ["The cupbearer", "The queen", "The royal advisor"], 0],
  ["What did Prophet Yusuf say the dream meant?", ["Years of plenty followed by famine", "A time of peace", "A new ruler will come"], 0],
  ["How did Prophet Yusuf's family react when they met him in Egypt?", ["They were amazed", "They recognized him immediately", "They didn't recognize him"], 2],
  ["Who was Prophet Yusuf's mother?", ["Rahel", "Asiya", "Leah"], 0],
  ["What did Prophet Yusuf give to his brothers when they visited him?", ["Money", "Grain", "Jewelry"], 1],
  ["What did Prophet Ya'qub do when he lost his sight?", ["He cried for days", "He forgave his sons", "He prayed for Yusuf"], 0],
  ["Who recognized Prophet Yusuf first when his brothers visited him?", ["His youngest brother", "His father", "His wife"], 0],
  ["What did Prophet Yusuf do when his brothers apologized?", ["He forgave them", "He punished them", "He sent them away"], 0]
],
    medium: [
        ["How many brothers did Prophet Yusuf have?", ["Ten", "Eleven", "Twelve"], 1],
        ["What did Prophet Ya'qub see when he smelled Prophet Yusuf's shirt?", ["He regained his sight", "He fainted", "He became happy"], 0],
        ["Who was Prophet Yusuf's mother?", ["Rachel", "Asiya", "Sarah"], 0],
        ["Who suggested throwing Prophet Yusuf into the well?", ["His eldest brother", "His father", "His brothers"], 2],
        ["How did Prophet Yusuf respond when he was accused by Zulaykha?", ["He sought Allah’s help", "He confessed", "He remained silent"], 0],
        ["Who was the king of Egypt during Prophet Yusuf's time?", ["Amonhotep", "Pharaoh", "Ramses"], 1],
        ["Who was the first to recognize Prophet Yusuf in Egypt?", ["His youngest brother", "His father", "His wife"], 0],
        ["Who did Prophet Yusuf forgive for the wrong they did to him?", ["His brothers", "The merchant", "The king"], 0],
        ["Why did Prophet Yusuf's brothers finally come to Egypt?", ["To ask for forgiveness", "To buy food", "To meet the king"], 1],
        ["What role did Prophet Yusuf play in the Egyptian government?", ["Minister of Finance", "Governor of the land", "Interpreter of dreams"], 1],
        ["What did Prophet Yusuf do when his brothers came to him for help?", ["He gave them food", "He punished them", "He sent them away"], 0],
        ["What was the meaning of Prophet Yusuf's dream about the eleven stars?", ["His brothers would bow down to him", "He would be a ruler", "He would be famous"], 0],
        ["What was Prophet Ya'qub's reaction when he learned of Yusuf's fate?", ["He was deeply saddened", "He forgave his sons", "He prayed for him"], 0],
        ["How did Prophet Yusuf help Egypt during the years of famine?", ["By distributing grain", "By building cities", "By storing water"], 0],
        ["How did Prophet Yusuf prove his identity to his brothers?", ["He gave them his shirt", "He spoke to them in a foreign language", "He mentioned his dream"], 2],
        ["What did Prophet Ya'qub lose when he was separated from Prophet Yusuf?", ["His son", "His health", "His sight"], 2],
        ["What did Prophet Yusuf do when his brothers admitted their wrongdoings?", ["He forgave them", "He punished them", "He ignored them"], 0],
        ["Who was Prophet Yusuf's main adversary in Egypt?", ["Zulaykha", "Pharaoh", "His brothers"], 0],
        ["How did Prophet Yusuf comfort his brothers when they feared revenge?", ["He reassured them", "He punished them", "He told them to leave"], 0],
        ["What was the significance of Prophet Yusuf's dream?", ["It foreshadowed his rise to power", "It predicted a time of famine", "It showed the future of Egypt"], 0]
      ],
      hard: [
        ["What was the king's dream in Prophet Yusuf's story?", ["Seven fat cows and seven thin cows", "A river overflowing", "A harvest of wheat"], 0],
        ["What was the interpretation of the king's dream?", ["Years of plenty followed by years of famine", "A new ruler will come", "Egypt will prosper"], 0],
        ["Why did Prophet Ya'qub refuse to send Benjamin with his brothers?", ["He feared for his safety", "He wanted to keep him with him", "He didn’t trust his brothers"], 0],
        ["What did Prophet Yusuf give to his brothers when they visited him in Egypt?", ["Grain", "Gold", "Silver"], 0],
        ["What caused Prophet Ya'qub to regain his sight?", ["The scent of Yusuf's shirt", "Prayer", "The tears of his sons"], 0],
        ["What did Prophet Yusuf’s brothers do when they realized who he was?", ["They apologized", "They begged for mercy", "They denied it"], 0],
        ["What lesson did Prophet Yusuf teach about patience?", ["To trust in Allah's plan", "To be patient with suffering", "To avoid injustice"], 0],
        ["Who was Prophet Yusuf’s only full brother?", ["Benjamin", "Reuben", "Simeon"], 0],
        ["What happened to Prophet Yusuf when he was thrown into the well?", ["He prayed for help", "He drowned", "He was rescued by passing travelers"], 2],
        ["What is the name of Prophet Yusuf's wife?", ["Zulaykha", "Asiya", "Sarah"], 0],
        ["How did Prophet Yusuf respond to Zulaykha's advances?", ["He sought refuge in Allah", "He resisted", "He fled"], 0],
        ["Why was Prophet Yusuf placed in prison?", ["He was falsely accused of a crime", "He was a political threat", "He was seen as a troublemaker"], 0],
        ["What did Prophet Yusuf interpret for the baker in prison?", ["That he would be hanged", "That he would be restored to his position", "That he would be promoted"], 0],
        ["What was the significance of the shirt Prophet Yusuf gave to his father?", ["It restored his sight", "It brought him hope", "It proved his innocence"], 0],
        ["Who did Prophet Yusuf eventually reveal his identity to?", ["His brothers", "The king", "His wife"], 0],
        ["What did Prophet Yusuf say when he forgave his brothers?", ["Don’t worry, Allah forgives all", "You are my brothers", "You did wrong, but I forgive"], 2],
        ["What was the main theme of Prophet Yusuf's story?", ["Patience and trust in Allah", "Revenge against enemies", "Ruling over others"], 0],
        ["What was the final test Prophet Yusuf gave to his brothers?", ["He placed a cup in Benjamin’s bag", "He accused them of theft", "He asked them to bring their father"], 0],
        ["Why did Prophet Yusuf call for his brothers after many years?", ["To forgive them", "To ask for help", "To test their sincerity"], 0],
        ["What is one major lesson from the story of Prophet Yusuf?", ["Forgiveness", "Wealth", "Revenge"], 0]
      ]
      
};

let currentLevel = "";
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;

// Display Level Selection
function showLevelSelection() {
    document.getElementById("welcome-screen").classList.add("hidden");
    document.getElementById("level-screen").classList.remove("hidden");
}

// Start Quiz
function startQuiz(level) {
    currentLevel = level;
    currentQuestions = [...questions[level]].sort(() => Math.random() - 0.5); // Shuffle questions
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
    document.getElementById("level-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    startTimer();
}

// Show Question
function showQuestion() {
    const questionData = currentQuestions[currentQuestionIndex];
    document.getElementById("question-number").textContent = `Question ${currentQuestionIndex + 1} of 20`;
    document.getElementById("question-text").textContent = questionData[0];

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";
    
    questionData[1].forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(btn);
    });

    document.getElementById("quiz-screen").classList.add("fade");
}

// Check Answer
function checkAnswer(selectedIndex) {
    if (selectedIndex === currentQuestions[currentQuestionIndex][2]) {
        score++;
    }
    nextQuestion();
}

// Next Question
function nextQuestion() {
    if (currentQuestionIndex < 19) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        endQuiz();
    }
}

// Previous Question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

// Timer
function startTimer() {
    timeLeft = 60;
    document.getElementById("time-left").textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time-left").textContent = timeLeft;
        if (timeLeft === 0) {
            nextQuestion();
        }
    }, 1000);
}

// End Quiz
function endQuiz() {
    clearInterval(timer);
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("results-screen").classList.remove("hidden");
    document.getElementById("final-score").textContent = `${score} / 20`;

    const answersContainer = document.getElementById("correct-answers");
    answersContainer.innerHTML = "";
    currentQuestions.forEach((q, index) => {
        const p = document.createElement("p");
        p.textContent = `Q${index + 1}: ${q[0]} - Correct Answer: ${q[1][q[2]]}`;
        answersContainer.appendChild(p);
    });
}

// Restart Quiz
function restartQuiz() {
    document.getElementById("results-screen").classList.add("hidden");
    document.getElementById("level-screen").classList.remove("hidden");
}

// Main Menu
function goToMainMenu() {
    document.getElementById("results-screen").classList.add("hidden");
    document.getElementById("welcome-screen").classList.remove("hidden");
}
