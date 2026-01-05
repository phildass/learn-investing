'use client';

import { useState } from 'react';
import Link from 'next/link';
import MainLayout from '@/components/shared/MainLayout';
import Quiz from '@/components/lessons/Quiz';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { investingCurriculum } from '@/lib/curriculum';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { notFound, useParams } from 'next/navigation';

export default function LessonPage() {
  const params = useParams();
  const moduleId = params.moduleId as string;
  const lessonId = params.lessonId as string;

  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizPassed, setQuizPassed] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const module = investingCurriculum.find(m => m.id === moduleId);
  if (!module) {
    notFound();
  }

  const lesson = module.lessons.find(l => l.id === lessonId);
  if (!lesson) {
    notFound();
  }

  const currentLessonIndex = module.lessons.findIndex(l => l.id === lessonId);
  const previousLesson = currentLessonIndex > 0 ? module.lessons[currentLessonIndex - 1] : null;
  const nextLesson = currentLessonIndex < module.lessons.length - 1 ? module.lessons[currentLessonIndex + 1] : null;

  const handleQuizComplete = (passed: boolean, score: number) => {
    setQuizCompleted(true);
    setQuizPassed(passed);
    setQuizScore(score);
    // TODO: Save progress to database
  };

  const contentParagraphs = lesson.content.split('\n\n');

  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            href={`/modules/${moduleId}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Module
          </Link>

          {/* Lesson Header */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                {lesson.lessonNumber}
              </div>
              <div>
                <p className="text-sm text-gray-600">Module {module.moduleNumber} - Lesson {lesson.lessonNumber}</p>
                <h1 className="text-3xl font-bold text-gray-900">{lesson.title}</h1>
              </div>
            </div>
          </div>

          {!showQuiz ? (
            <>
              {/* Lesson Content */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none">
                    {contentParagraphs.map((paragraph, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Take Quiz Button */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Ready to test your knowledge?</h3>
                        <p className="text-gray-600">Complete the quiz to unlock the next lesson</p>
                      </div>
                      <Button size="lg" onClick={() => setShowQuiz(true)}>
                        Take Quiz
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <>
              {/* Quiz Component */}
              <div className="mb-8">
                {!quizCompleted && (
                  <Button 
                    variant="ghost" 
                    onClick={() => setShowQuiz(false)}
                    className="mb-4"
                  >
                    ← Back to Lesson
                  </Button>
                )}
                <Quiz 
                  questions={lesson.quiz}
                  onComplete={handleQuizComplete}
                />
              </div>

              {/* Post-Quiz Actions */}
              {quizCompleted && quizPassed && (
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                        <div>
                          <h3 className="text-lg font-semibold text-green-900">Lesson Complete!</h3>
                          <p className="text-green-700">You scored {quizScore}/5. Great job!</p>
                        </div>
                      </div>
                      {nextLesson && (
                        <Link href={`/modules/${moduleId}/lessons/${nextLesson.id}`}>
                          <Button>
                            Next Lesson
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                      {!nextLesson && (
                        <Link href={`/modules/${moduleId}`}>
                          <Button>
                            Back to Module
                          </Button>
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
            </>
          )}

          {/* Lesson Navigation */}
          {!showQuiz && (
            <div className="flex justify-between items-center">
              {previousLesson ? (
                <Link href={`/modules/${moduleId}/lessons/${previousLesson.id}`}>
                  <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous Lesson
                  </Button>
                </Link>
              ) : (
                <div />
              )}

              {nextLesson && (
                <Link href={`/modules/${moduleId}/lessons/${nextLesson.id}`}>
                  <Button variant="outline">
                    Next Lesson
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
