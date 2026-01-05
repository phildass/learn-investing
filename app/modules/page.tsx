import Link from 'next/link';
import MainLayout from '@/components/shared/MainLayout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { investingCurriculum } from '@/lib/curriculum';
import { BookOpen, Lock, CheckCircle } from 'lucide-react';

export default function ModulesPage() {
  // TODO: Get user progress from authentication/database
  const userProgress: {
    completedModules: string[];
    currentModule: string;
    completedLessons: string[];
  } = {
    completedModules: [],
    currentModule: 'module-1',
    completedLessons: [],
  };

  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Investment Learning Modules
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master personal investing through 10 comprehensive modules covering everything 
              from basics to advanced strategies. Each module contains 10 detailed lessons.
            </p>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investingCurriculum.map((module) => {
              const isUnlocked = module.moduleNumber === 1 || 
                                userProgress.completedModules.includes(`module-${module.moduleNumber - 1}`);
              const isCompleted = userProgress.completedModules.includes(module.id);
              const isCurrent = userProgress.currentModule === module.id;

              return (
                <Card key={module.id} className={`
                  ${isCurrent ? 'border-blue-500 border-2' : ''}
                  ${!isUnlocked ? 'opacity-60' : ''}
                  hover:shadow-md transition
                `}>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div className={`
                        w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg
                        ${isCompleted ? 'bg-green-600' : isUnlocked ? 'bg-blue-600' : 'bg-gray-400'}
                      `}>
                        {module.moduleNumber}
                      </div>
                      <div>
                        {isCompleted && <CheckCircle className="h-6 w-6 text-green-600" />}
                        {!isUnlocked && <Lock className="h-6 w-6 text-gray-400" />}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{module.title}</CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <BookOpen className="h-4 w-4 mr-2" />
                        <span>{module.lessons.length || 10} Lessons</span>
                      </div>
                      
                      {/* Progress Bar */}
                      {isUnlocked && (
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${isCompleted ? 'bg-green-600' : 'bg-blue-600'}`}
                            style={{ width: isCompleted ? '100%' : '0%' }}
                          />
                        </div>
                      )}

                      {isUnlocked ? (
                        <Link 
                          href={`/modules/${module.id}`}
                          className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                        >
                          {isCurrent ? 'Continue Learning' : isCompleted ? 'Review Module' : 'Start Module'}
                        </Link>
                      ) : (
                        <button 
                          disabled
                          className="w-full text-center bg-gray-300 text-gray-600 py-2 rounded-md cursor-not-allowed"
                        >
                          Locked - Complete Previous Module
                        </button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Info Section */}
          <div className="mt-16 bg-blue-600 text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">1</div>
                <h3 className="text-lg font-semibold mb-2">Learn</h3>
                <p className="text-blue-100">
                  Read through each lesson carefully. Each lesson is designed to teach 
                  one core concept in simple, easy-to-understand language.
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2</div>
                <h3 className="text-lg font-semibold mb-2">Practice</h3>
                <p className="text-blue-100">
                  Take a 5-question quiz after each lesson. You need to score at least 
                  3 out of 5 to unlock the next lesson.
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">3</div>
                <h3 className="text-lg font-semibold mb-2">Progress</h3>
                <p className="text-blue-100">
                  Complete all 10 modules and pass the final certification exam to earn 
                  your Investment Literacy Certificate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
