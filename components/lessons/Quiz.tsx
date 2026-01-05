'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizProps {
  questions: Question[];
  onComplete: (passed: boolean, score: number) => void;
}

export default function Quiz({ questions, onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
    const score = selectedAnswers.reduce((acc, answer, index) => {
      return acc + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
    const passed = score >= 3; // Pass with 3/5
    onComplete(passed, score);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((acc, answer, index) => {
      return acc + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  if (showResults) {
    const score = calculateScore();
    const passed = score >= 3;

    return (
      <Card>
        <CardHeader>
          <CardTitle>Quiz Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <div className={`text-6xl font-bold mb-4 ${passed ? 'text-green-600' : 'text-red-600'}`}>
              {score}/5
            </div>
            <p className={`text-xl mb-6 ${passed ? 'text-green-600' : 'text-red-600'}`}>
              {passed ? 'Congratulations! You passed!' : 'You need at least 3 correct answers to pass.'}
            </p>
            
            {/* Detailed Results */}
            <div className="space-y-4 text-left max-w-2xl mx-auto">
              {questions.map((question, index) => {
                const userAnswer = selectedAnswers[index];
                const isCorrect = userAnswer === question.correctAnswer;

                return (
                  <div key={question.id} className={`p-4 rounded-lg border-2 ${isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
                    <p className="font-semibold mb-2">Question {index + 1}: {question.question}</p>
                    <p className="text-sm text-gray-600">
                      Your answer: <span className={isCorrect ? 'text-green-700' : 'text-red-700'}>
                        {question.options[userAnswer] || 'Not answered'}
                      </span>
                    </p>
                    {!isCorrect && (
                      <p className="text-sm text-green-700 mt-1">
                        Correct answer: {question.options[question.correctAnswer]}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex justify-center space-x-4">
              {!passed && (
                <Button 
                  onClick={() => {
                    setShowResults(false);
                    setCurrentQuestion(0);
                    setSelectedAnswers(new Array(questions.length).fill(-1));
                  }}
                >
                  Retake Quiz
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const question = questions[currentQuestion];
  const allAnswered = selectedAnswers.every(answer => answer !== -1);

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Lesson Quiz</CardTitle>
          <span className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Question */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{question.question}</h3>
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition ${
                    selectedAnswers[currentQuestion] === index
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                      selectedAnswers[currentQuestion] === index
                        ? 'border-blue-600 bg-blue-600'
                        : 'border-gray-300'
                    }`}>
                      {selectedAnswers[currentQuestion] === index && (
                        <div className="w-3 h-3 rounded-full bg-white" />
                      )}
                    </div>
                    <span>{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>

            <div className="flex space-x-2">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentQuestion
                      ? 'bg-blue-600'
                      : selectedAnswers[index] !== -1
                      ? 'bg-green-600'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {currentQuestion < questions.length - 1 ? (
              <Button
                onClick={handleNext}
                disabled={selectedAnswers[currentQuestion] === -1}
              >
                Next
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!allAnswered}
              >
                Submit Quiz
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
