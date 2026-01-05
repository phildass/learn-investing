import Link from 'next/link';
import MainLayout from '@/components/shared/MainLayout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { investingCurriculum } from '@/lib/curriculum';
import { BookOpen, CheckCircle, Lock, ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

export default async function ModulePage({ 
  params 
}: { 
  params: Promise<{ moduleId: string }> 
}) {
  const { moduleId } = await params;
  const module = investingCurriculum.find(m => m.id === moduleId);

  if (!module) {
    notFound();
  }

  // TODO: Get user progress from authentication/database
  const userProgress: {
    completedLessons: string[];
  } = {
    completedLessons: [],
  };

  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            href="/modules"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Modules
          </Link>

          {/* Module Header */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                    {module.moduleNumber}
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{module.title}</h1>
                    <p className="text-gray-600 mt-1">{module.description}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                <span>{module.lessons.length} Lessons</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>0/{module.lessons.length} Completed</span>
              </div>
            </div>
          </div>

          {/* Lessons List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Lessons</h2>
            
            {module.lessons.length > 0 ? (
              module.lessons.map((lesson, index) => {
                const isCompleted = userProgress.completedLessons.includes(lesson.id);
                const isUnlocked = index === 0 || 
                                  userProgress.completedLessons.includes(module.lessons[index - 1]?.id);

                return (
                  <Card key={lesson.id} className={`
                    ${!isUnlocked ? 'opacity-60' : ''}
                    hover:shadow-md transition
                  `}>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className={`
                            w-12 h-12 rounded-full flex items-center justify-center text-white font-bold
                            ${isCompleted ? 'bg-green-600' : isUnlocked ? 'bg-blue-600' : 'bg-gray-400'}
                          `}>
                            {lesson.lessonNumber}
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-1">{lesson.title}</CardTitle>
                            <CardDescription>
                              {lesson.content.substring(0, 120)}...
                            </CardDescription>
                            <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                              <span>5 Questions</span>
                              <span>•</span>
                              <span>~10 min read</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {isCompleted && (
                            <CheckCircle className="h-6 w-6 text-green-600" />
                          )}
                          {!isUnlocked && (
                            <Lock className="h-6 w-6 text-gray-400" />
                          )}
                          {isUnlocked && (
                            <Link
                              href={`/modules/${moduleId}/lessons/${lesson.id}`}
                              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                            >
                              {isCompleted ? 'Review' : 'Start'}
                            </Link>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-gray-600">
                    Lessons for this module are being prepared. Check back soon!
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
