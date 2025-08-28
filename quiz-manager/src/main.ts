type Category = "Sports" | "Art" | "Technology" | "Boring ;(";

interface Answer {
  id: number;
  questionId: number;
  text: string;
}

interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

interface Quiz {
  id: number;
  title: string;
  questions: number[];
  answers: number[];
  category?: Category;
}

const quizes: Quiz[] = [
  { id: 1, title: "Sports quiz", questions: [1, 2, 3, 4, 5], answers: [1, 2, 3, 4, 5], category: "Sports" },
  { id: 2, title: "Art quiz", questions: [6, 7, 8, 9, 10], answers: [6, 7, 8, 9, 10], category: "Art" },
  { id: 3, title: "Technology quiz", questions: [11, 12, 13, 14, 15], answers: [11, 12, 13, 14, 15], category: "Technology" },
  { id: 4, title: "Boring quiz", questions: [16, 17, 18, 19, 20], answers: [16, 17, 18, 19, 20], category: "Boring ;(" }
];

const questions: Question[] = [
  // Sports questions
  { id: 1, text: "What is the main component of sweat?", answers: [] },
  { id: 2, text: "What is a common tactic in soccer?", answers: [] },
  { id: 3, text: "How many players are on a basketball team?", answers: [] },
  { id: 4, text: "Who is the coach of the local football team?", answers: [] },
  { id: 5, text: "What is the most popular sport worldwide?", answers: [] },

  // Art questions
  { id: 6, text: "Who painted the Mona Lisa?", answers: [] },
  { id: 7, text: "What is the primary color in Van Gogh's Starry Night?", answers: [] },
  { id: 8, text: "Which art movement is Picasso associated with?", answers: [] },
  { id: 9, text: "What material is used for marble sculptures?", answers: [] },
  { id: 10, text: "Who sculpted David?", answers: [] },

  // Technology questions
  { id: 11, text: "Who invented the World Wide Web?", answers: [] },
  { id: 12, text: "What does CPU stand for?", answers: [] },
  { id: 13, text: "Which company created the iPhone?", answers: [] },
  { id: 14, text: "What is the main function of RAM?", answers: [] },
  { id: 15, text: "What programming language is used for web development?", answers: [] },

  // Boring questions
  { id: 16, text: "What is the capital of Norway?", answers: [] },
  { id: 17, text: "How many days are in a leap year?", answers: [] },
  { id: 18, text: "What is the boiling point of water?", answers: [] },
  { id: 19, text: "What is 2 + 2?", answers: [] },
  { id: 20, text: "What color is the sky on a clear day?", answers: [] }
];

const answers: Answer[] = [
  // Sports answers
  { id: 1, questionId: 1, text: "Water" },
  { id: 2, questionId: 2, text: "Passing" },
  { id: 3, questionId: 3, text: "Five" },
  { id: 4, questionId: 4, text: "John Smith" },
  { id: 5, questionId: 5, text: "Soccer" },

  // Art answers
  { id: 6, questionId: 6, text: "Leonardo da Vinci" },
  { id: 7, questionId: 7, text: "Blue" },
  { id: 8, questionId: 8, text: "Cubism" },
  { id: 9, questionId: 9, text: "Marble" },
  { id: 10, questionId: 10, text: "Michelangelo" },

  // Technology answers
  { id: 11, questionId: 11, text: "Tim Berners-Lee" },
  { id: 12, questionId: 12, text: "Central Processing Unit" },
  { id: 13, questionId: 13, text: "Apple" },
  { id: 14, questionId: 14, text: "Temporary data storage" },
  { id: 15, questionId: 15, text: "JavaScript" },

  // Boring answers
  { id: 16, questionId: 16, text: "Oslo" },
  { id: 17, questionId: 17, text: "366" },
  { id: 18, questionId: 18, text: "100°C" },
  { id: 19, questionId: 19, text: "4" },
  { id: 20, questionId: 20, text: "Blue" }
];

const addQuiz = (quiz : Quiz) => {
  quizes.push(quiz);
}

/*
const quiz7: Quiz = {
  id: 7,
  title: "New quiz",
  questions: [16, 17, 12, 8, 9, 2, 19],
  answers: [16, 17, 12, 8, 9, 2, 19],
  category: "Boring ;("
};

addQuiz(quiz7);
*/

const getQuizById = (id: number) => {
  const quiz = quizes.find(quiz => quiz.id === id);
  return console.log(`Quiz with id ${id} is a quiz about ${quiz?.category} and has ${quiz?.questions.length} questions.`);
}

getQuizById(1);

// Funksjoner:
// - addQuiz(), getQuizById(...)
// - filterByCategory(...), getQuizAnswers(...)
// - printQuizAnswersCount()