import MainLayout from '@/components/shared/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { MessageSquare, HelpCircle } from 'lucide-react';

export default function SupportPage() {
  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <HelpCircle className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Support & Help
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're here to help you succeed in your learning journey
            </p>
          </div>

          {/* Support Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-6 w-6 text-blue-600 mr-2" />
                  Submit a Ticket
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Have a specific question or issue? Submit a support ticket and 
                  our team will get back to you within 24 hours.
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  <strong>Note:</strong> Support tickets are available for registered users only.
                </p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                  Create Support Ticket
                </button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  For general inquiries or feedback, you can reach us directly via email.
                </p>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-sm text-gray-600 mb-2">Email us at:</p>
                  <a 
                    href="mailto:info@iiskills.cloud" 
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    info@iiskills.cloud
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    How do I get started?
                  </h3>
                  <p className="text-gray-600">
                    Register for an account, complete the onboarding process, and start with 
                    Module 1. Each lesson builds on the previous one, so we recommend following 
                    the sequential order.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What if I fail a lesson quiz?
                  </h3>
                  <p className="text-gray-600">
                    Don't worry! You can retake the quiz as many times as needed. We recommend 
                    reviewing the lesson content before attempting again.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    How long does it take to complete the course?
                  </h3>
                  <p className="text-gray-600">
                    At a comfortable pace of 2-3 lessons per week, most learners complete the 
                    entire curriculum in 8-12 weeks. You can learn at your own pace.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Is the certificate recognized?
                  </h3>
                  <p className="text-gray-600">
                    Upon completion, you'll receive a Certificate of Investment Literacy from 
                    the Indian Institute of Professional Skills Development, which demonstrates 
                    your commitment to financial education.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Can I access content after completion?
                  </h3>
                  <p className="text-gray-600">
                    Yes! Once enrolled, you have lifetime access to all course materials and 
                    can review any lesson at any time.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Is my payment secure?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely. We use industry-standard UPI payment gateways with bank-level 
                    security encryption to protect your financial information.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <div className="mt-8 text-center bg-blue-600 text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-blue-100 mb-6">
              Our support team is ready to assist you with any questions or concerns.
            </p>
            <a 
              href="mailto:info@iiskills.cloud"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
