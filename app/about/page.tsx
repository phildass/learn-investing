import MainLayout from '@/components/shared/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About Learn Investing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering Indians to make informed investment decisions through 
              comprehensive, accessible financial education.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Learn Investing is dedicated to democratizing investment education in India. 
              We believe that everyone deserves access to quality financial knowledge, 
              regardless of their background or starting point.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through our structured curriculum, interactive lessons, and practical examples, 
              we aim to transform financial literacy in India, one learner at a time.
            </p>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardHeader>
                <Target className="h-10 w-10 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Clarity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We break down complex financial concepts into simple, 
                  understandable lessons that anyone can grasp.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Quality investment education should be available to all Indians, 
                  not just the privileged few.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-10 w-10 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our curriculum is carefully crafted by financial experts 
                  with deep knowledge of Indian markets.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Practicality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every lesson includes real-world examples and actionable 
                  insights you can apply immediately.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* About iiskills.cloud */}
          <div className="bg-blue-600 text-white rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">Part of iiskills.cloud Ecosystem</h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-4">
              Learn Investing is a proud member of the iiskills.cloud family of educational platforms. 
              Together with Learn Math, Learn Winning, and other specialized domains, we form a 
              comprehensive learning ecosystem under the Indian Institute of Professional Skills Development.
            </p>
            <p className="text-lg text-blue-100 leading-relaxed">
              Our integrated approach means you can access multiple learning tracks with a single account, 
              track your progress across platforms, and build a well-rounded skill set for professional success.
            </p>
          </div>

          {/* Curriculum Overview */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Fundamentals</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Understanding risk and return</li>
                  <li>• Time value of money</li>
                  <li>• Setting financial goals</li>
                  <li>• Power of compounding</li>
                  <li>• Asset class diversification</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Investment Vehicles</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Stock market investing</li>
                  <li>• Bonds and fixed income</li>
                  <li>• Mutual funds and SIPs</li>
                  <li>• Gold and commodities</li>
                  <li>• Real estate investment</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Planning & Strategy</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Financial planning</li>
                  <li>• Tax optimization</li>
                  <li>• Portfolio construction</li>
                  <li>• Risk management</li>
                  <li>• Retirement planning</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Advanced Topics</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Technical analysis</li>
                  <li>• Fundamental analysis</li>
                  <li>• Portfolio rebalancing</li>
                  <li>• Alternative investments</li>
                  <li>• International investing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Investment Journey?
            </h2>
            <a 
              href="/register" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
