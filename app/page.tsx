import Link from 'next/link';
import { TrendingUp, BookOpen, Award, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Learn Investing</h1>
                <p className="text-xs text-gray-500">iiskills.cloud</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/modules" className="text-gray-700 hover:text-blue-600">Modules</Link>
              <Link href="/news" className="text-gray-700 hover:text-blue-600">Market News</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
              <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Master Personal Investment<br />
            <span className="text-blue-600">for the Indian Market</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Learn to invest wisely in stocks, bonds, mutual funds, real estate, and more. 
            Build wealth through interactive lessons, practical simulations, and expert guidance.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/register" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Start Learning Now
            </Link>
            <Link 
              href="/modules" 
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition"
            >
              Explore Curriculum
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">100 Comprehensive Lessons</h3>
            <p className="text-gray-600">
              10 modules covering everything from basics to advanced investment strategies, 
              each with interactive quizzes and practical examples.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <Award className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Earn Certification</h3>
            <p className="text-gray-600">
              Complete all modules and pass the final exam to earn your Investment Literacy Certificate, 
              recognized by employers and financial institutions.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Community Support</h3>
            <p className="text-gray-600">
              Join a community of learners, get expert support through tickets, 
              and access job opportunities in the finance sector.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Introduction to Investing & Risk Management",
              "Stock Market Fundamentals & Analysis",
              "Bonds & Fixed Income Securities",
              "Mutual Funds & SIP Strategies",
              "Gold, Commodities & Alternative Investments",
              "Real Estate Investment Strategies",
              "Financial Planning & Goal Setting",
              "Tax Planning for Investors",
              "Advanced Portfolio Management",
              "Building Your Investment Portfolio"
            ].map((topic, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="bg-white text-blue-600 rounded-full h-8 w-8 flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-lg pt-1">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Start Your Investment Journey?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Join thousands of Indians learning to invest wisely and build wealth.
        </p>
        <Link 
          href="/register" 
          className="bg-blue-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition inline-block"
        >
          Enroll Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Learn Investing - iiskills.cloud. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Part of the Indian Institute of Professional Skills Development
          </p>
        </div>
      </footer>
    </div>
  );
}
