import MainLayout from '@/components/shared/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Newspaper, TrendingUp, Search } from 'lucide-react';

export default function NewsPage() {
  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <Newspaper className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Market News & Updates
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest news from Indian financial markets
            </p>
          </div>

          {/* Coming Soon Notice */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Coming Soon</CardTitle>
            </CardHeader>
            <CardContent className="text-center py-8">
              <TrendingUp className="h-20 w-20 text-blue-600 mx-auto mb-6" />
              <p className="text-lg text-gray-700 mb-6">
                We're working on bringing you live Indian finance news, market updates, 
                and expert analysis directly to this page.
              </p>
              <div className="bg-blue-50 rounded-lg p-6 text-left">
                <h3 className="font-semibold text-gray-900 mb-3">What to Expect:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Search className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Real-time news from Indian stock markets (NSE, BSE)</span>
                  </li>
                  <li className="flex items-start">
                    <Search className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Updates on mutual funds, gold, and commodities</span>
                  </li>
                  <li className="flex items-start">
                    <Search className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>RBI policy decisions and economic indicators</span>
                  </li>
                  <li className="flex items-start">
                    <Search className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Search and filter functionality</span>
                  </li>
                  <li className="flex items-start">
                    <Search className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Categorized news by asset class</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <p className="text-sm text-gray-600">
                  In the meantime, continue your learning journey with our comprehensive modules
                </p>
                <a 
                  href="/modules" 
                  className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Browse Modules
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
