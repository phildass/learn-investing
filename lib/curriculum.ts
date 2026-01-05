export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Lesson {
  id: string;
  moduleId: string;
  lessonNumber: number;
  title: string;
  content: string;
  quiz: Question[];
}

export interface Module {
  id: string;
  moduleNumber: number;
  title: string;
  description: string;
  lessons: Lesson[];
}

export const investingCurriculum: Module[] = [
  {
    id: "module-1",
    moduleNumber: 1,
    title: "Introduction to Investing",
    description: "Learn the fundamentals of investing and why it's essential for financial growth",
    lessons: [
      {
        id: "m1-l1",
        moduleId: "module-1",
        lessonNumber: 1,
        title: "What is Investing?",
        content: `Investing is the process of allocating money with the expectation of generating income or profit over time. Unlike saving, which focuses on preserving capital, investing aims to grow your wealth by putting money to work in various financial instruments.

The primary goal of investing is to build wealth over the long term. By investing, you allow your money to grow through the power of compounding returns. This means your investment earnings generate their own earnings, creating exponential growth over time.

In India, investing has become increasingly accessible to the average person. With technological advancements, anyone with a smartphone can start investing in stocks, mutual funds, or other financial instruments. Understanding investing is crucial for achieving financial goals like buying a home, funding education, or securing retirement.

Different types of investments carry different levels of risk and potential returns. Generally, higher potential returns come with higher risk. The key is to find the right balance based on your financial goals, time horizon, and risk tolerance.

Starting early with investing, even with small amounts, can make a significant difference due to the power of compounding. Time is one of the most valuable assets in investing, allowing your money to grow exponentially over the years.`,
        quiz: [
          {
            id: "m1-l1-q1",
            question: "What is the primary goal of investing?",
            options: [
              "To preserve capital",
              "To build wealth over the long term",
              "To avoid taxes",
              "To spend money wisely"
            ],
            correctAnswer: 1
          },
          {
            id: "m1-l1-q2",
            question: "What does compounding mean in investing?",
            options: [
              "Investing in multiple assets",
              "Investment earnings generating their own earnings",
              "Combining different investment strategies",
              "Investing in company stocks"
            ],
            correctAnswer: 1
          },
          {
            id: "m1-l1-q3",
            question: "What is generally true about risk and returns in investing?",
            options: [
              "Lower risk means higher returns",
              "Risk and returns are unrelated",
              "Higher potential returns come with higher risk",
              "All investments have the same risk level"
            ],
            correctAnswer: 2
          },
          {
            id: "m1-l1-q4",
            question: "Why is starting early important in investing?",
            options: [
              "Investment options decrease with age",
              "Time allows money to grow through compounding",
              "Early investors get special privileges",
              "Market is less volatile for young investors"
            ],
            correctAnswer: 1
          },
          {
            id: "m1-l1-q5",
            question: "What has made investing more accessible in India?",
            options: [
              "Government subsidies",
              "Decreased market regulations",
              "Technological advancements",
              "Lower investment minimums only"
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: "m1-l2",
        moduleId: "module-1",
        lessonNumber: 2,
        title: "Risk and Return Relationship",
        content: `Understanding the relationship between risk and return is fundamental to successful investing. Every investment carries some level of risk, which is the possibility of losing some or all of your invested capital. The potential return is the profit you expect to earn from your investment.

Generally, investments with higher potential returns come with higher levels of risk. For example, stocks typically offer higher returns than fixed deposits, but they also carry more risk of value fluctuation. This is known as the risk-return tradeoff, and it's a core principle in finance.

Risk tolerance varies from person to person based on factors like age, income, financial goals, and personality. Younger investors can typically afford to take more risks as they have time to recover from potential losses. Older investors nearing retirement often prefer lower-risk investments to preserve their capital.

Diversification is a key strategy to manage investment risk. By spreading your money across different types of investments, you can reduce the impact of any single investment performing poorly. Don't put all your eggs in one basket is a timeless investment wisdom.

Understanding your own risk tolerance and choosing investments accordingly is crucial for long-term success. An investment that keeps you up at night worrying is probably too risky for your comfort level, regardless of its potential returns.`,
        quiz: [
          {
            id: "m1-l2-q1",
            question: "What is the risk-return tradeoff?",
            options: [
              "Higher risk investments always lose money",
              "Higher potential returns come with higher risk",
              "Risk and return are unrelated",
              "Lower risk means no returns"
            ],
            correctAnswer: 1
          },
          {
            id: "m1-l2-q2",
            question: "Why can younger investors typically afford more risk?",
            options: [
              "They have more money",
              "Markets favor young investors",
              "They have time to recover from losses",
              "They pay lower taxes"
            ],
            correctAnswer: 2
          },
          {
            id: "m1-l2-q3",
            question: "What is diversification in investing?",
            options: [
              "Investing only in one sector",
              "Spreading money across different investments",
              "Buying only stocks",
              "Investing in foreign markets only"
            ],
            correctAnswer: 1
          },
          {
            id: "m1-l2-q4",
            question: "What determines an individual's risk tolerance?",
            options: [
              "Only their age",
              "Only their income",
              "Age, income, goals, and personality",
              "Market conditions only"
            ],
            correctAnswer: 2
          },
          {
            id: "m1-l2-q5",
            question: "Why is understanding your risk tolerance important?",
            options: [
              "To impress financial advisors",
              "To choose suitable investments for long-term success",
              "To predict market movements",
              "To avoid paying taxes"
            ],
            correctAnswer: 1
          }
        ]
      },
      {
        id: "m1-l3",
        moduleId: "module-1",
        lessonNumber: 3,
        title: "Time Value of Money",
        content: `The time value of money is a fundamental concept stating that money available today is worth more than the same amount in the future. This is because money can be invested now to earn returns, making it grow over time. Understanding this principle is crucial for making informed investment decisions.

Inflation is a key factor in the time value of money. As prices rise over time, the purchasing power of money decreases. If your money doesn't grow at least at the rate of inflation, you're effectively losing value. This is why keeping all your money in a savings account with low interest rates may not be the best strategy.

The concept of present value and future value helps investors compare investment options. Present value calculates what a future sum of money is worth today, while future value determines what today's money will be worth in the future. These calculations help in making better investment decisions.

Compounding is the process where your investment earnings generate their own earnings over time. The longer you stay invested, the more powerful compounding becomes. This is why starting to invest early, even with small amounts, can lead to significant wealth accumulation over decades.

Understanding the time value of money helps you appreciate why investing is better than just saving. While saving preserves your money, investing helps it grow and maintain its value against inflation, ensuring your financial security in the future.`,
        quiz: [
          {
            id: "m1-l3-q1",
            question: "Why is money today worth more than the same amount in the future?",
            options: [
              "Currency values always increase",
              "Money can be invested to earn returns",
              "Future money is fake",
              "Banks prefer current money"
            ],
            correctAnswer: 1
          },
          {
            id: "m1-l3-q2",
            question: "What does inflation do to money's purchasing power?",
            options: [
              "Increases it",
              "Keeps it same",
              "Decreases it",
              "Has no effect"
            ],
            correctAnswer: 2
          },
          {
            id: "m1-l3-q3",
            question: "What is compounding in investing?",
            options: [
              "Combining multiple investments",
              "Investment earnings generating their own earnings",
              "Investing in compound products",
              "Adding money regularly"
            ],
            correctAnswer: 1
          },
          {
            id: "m1-l3-q4",
            question: "What makes compounding more powerful?",
            options: [
              "Higher initial investment only",
              "Lower risk investments",
              "Longer investment duration",
              "Market volatility"
            ],
            correctAnswer: 2
          },
          {
            id: "m1-l3-q5",
            question: "Why is investing better than just saving?",
            options: [
              "Investing is risk-free",
              "Investing helps money grow and maintain value against inflation",
              "Savings accounts are illegal",
              "Investing guarantees profits"
            ],
            correctAnswer: 1
          }
        ]
      },
      {
        id: "m1-l4",
        moduleId: "module-1",
        lessonNumber: 4,
        title: "Setting Financial Goals",
        content: `Setting clear financial goals is the first step toward successful investing. Goals give direction to your investment strategy and help you stay focused during market volatility. Without specific goals, it's easy to make impulsive decisions that may harm your long-term financial health.

Financial goals can be categorized into short-term (less than 3 years), medium-term (3-7 years), and long-term (more than 7 years). Short-term goals might include building an emergency fund or saving for a vacation. Medium-term goals could be buying a car or making a down payment on a house. Long-term goals typically include retirement planning and children's education.

Each type of goal requires a different investment approach. Short-term goals need safer, more liquid investments like fixed deposits or liquid mutual funds. Medium-term goals can accommodate moderate risk with balanced funds. Long-term goals allow for higher risk investments like equity stocks or equity mutual funds, which have historically provided better returns.

Goals should be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound. Instead of saying "I want to be rich," a SMART goal would be "I want to accumulate ₹50 lakhs for my retirement in 25 years." This clarity helps you calculate how much you need to invest regularly.

Regularly reviewing and adjusting your goals is important as life circumstances change. Marriage, children, career changes, or health issues may require you to modify your financial goals. Flexibility and periodic reassessment ensure your investment strategy remains aligned with your life priorities.`,
        quiz: [
          {
            id: "m1-l4-q1",
            question: "What is a long-term financial goal timeframe?",
            options: [
              "Less than 1 year",
              "1-3 years",
              "3-7 years",
              "More than 7 years"
            ],
            correctAnswer: 3
          },
          {
            id: "m1-l4-q2",
            question: "What type of investments suit short-term goals?",
            options: [
              "High-risk stocks",
              "Safer, liquid investments",
              "Real estate",
              "Long-term bonds"
            ],
            correctAnswer: 1
          },
          {
            id: "m1-l4-q3",
            question: "What does SMART stand for in goal setting?",
            options: [
              "Simple, Minimal, Active, Real, Timely",
              "Specific, Measurable, Achievable, Relevant, Time-bound",
              "Strong, Managed, Assessed, Recorded, Tested",
              "Safe, Moderate, Adjusted, Reviewed, Trusted"
            ],
            correctAnswer: 1
          },
          {
            id: "m1-l4-q4",
            question: "Why should financial goals be reviewed regularly?",
            options: [
              "To impress financial advisors",
              "Life circumstances change",
              "Markets require it",
              "Tax laws mandate it"
            ],
            correctAnswer: 1
          },
          {
            id: "m1-l4-q5",
            question: "What is an example of a medium-term financial goal?",
            options: [
              "Emergency fund",
              "Retirement planning",
              "Buying a car",
              "Weekly grocery budget"
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: "m1-l5",
        moduleId: "module-1",
        lessonNumber: 5,
        title: "Investment vs Speculation",
        content: `Understanding the difference between investment and speculation is crucial for building sustainable wealth. Investment involves buying assets based on fundamental analysis with the expectation of long-term growth. Speculation, on the other hand, is taking high risks hoping for quick profits without thorough analysis.

Investors focus on the intrinsic value of an asset and its potential to generate income over time. They conduct research, analyze financial statements, and make informed decisions. Investors are patient and willing to hold their positions for years, benefiting from compounding and business growth.

Speculators are more interested in price movements than the underlying value of assets. They attempt to profit from short-term price fluctuations, often based on market sentiment or rumors. While speculation can lead to quick gains, it also carries significantly higher risk of substantial losses.

In the Indian stock market, many beginners confuse speculation with investment. Buying stocks based on tips from friends or social media without research is speculation, not investment. True investing requires understanding the business, its financials, competitive position, and growth prospects.

A balanced approach acknowledges that while the majority of your portfolio should be invested based on solid research, a small portion can be allocated to calculated speculation if you have high risk tolerance. However, never speculate with money you cannot afford to lose, and always distinguish clearly between your investments and speculative positions.`,
        quiz: [
          {
            id: "m1-l5-q1",
            question: "What is the primary focus of investing?",
            options: [
              "Quick profits",
              "Long-term growth based on fundamentals",
              "Following market rumors",
              "Daily trading"
            ],
            correctAnswer: 1
          },
          {
            id: "m1-l5-q2",
            question: "What characterizes speculation?",
            options: [
              "Thorough fundamental analysis",
              "Long-term holding",
              "High risk for quick profits without thorough analysis",
              "Diversified portfolio"
            ],
            correctAnswer: 2
          },
          {
            id: "m1-l5-q3",
            question: "What do investors focus on?",
            options: [
              "Daily price movements",
              "Market tips and rumors",
              "Intrinsic value and income potential",
              "Social media trends"
            ],
            correctAnswer: 2
          },
          {
            id: "m1-l5-q4",
            question: "What is an example of speculation?",
            options: [
              "Buying stocks after analyzing financial statements",
              "Investing in index funds for retirement",
              "Buying stocks based on tips without research",
              "Dollar-cost averaging in mutual funds"
            ],
            correctAnswer: 2
          },
          {
            id: "m1-l5-q5",
            question: "What should you never do with speculation?",
            options: [
              "Research before speculating",
              "Speculate with money you can't afford to lose",
              "Keep speculation separate from investment",
              "Limit speculation to a small portion"
            ],
            correctAnswer: 1
          }
        ]
      },
      {
        id: "m1-l6",
        moduleId: "module-1",
        lessonNumber: 6,
        title: "Power of Compounding",
        content: `Compounding is often called the eighth wonder of the world, and for good reason. It's the process where your investment returns generate their own returns, creating exponential growth over time. Understanding and harnessing compounding is key to building substantial wealth.

Let's consider an example: If you invest ₹10,000 monthly at 12% annual return for 30 years, you would invest a total of ₹36 lakhs. However, due to compounding, your corpus would grow to approximately ₹3.5 crores. The majority of this amount comes not from your contributions but from returns on returns.

The power of compounding increases exponentially with time. The first few years might seem slow, but growth accelerates significantly in later years. This is why starting early is so important – even small amounts invested at age 25 can outperform larger amounts invested at age 40.

In India, compounding works across all investment types – stocks through dividend reinvestment and price appreciation, mutual funds through growth options, and even bank deposits through interest-on-interest. The key is to reinvest your earnings rather than withdrawing them.

Three factors maximize compounding: starting early, staying invested for the long term, and choosing investments with higher returns. Even a few percentage points difference in annual returns can result in dramatically different outcomes over decades due to compounding's exponential nature.`,
        quiz: [
          {
            id: "m1-l6-q1",
            question: "What is compounding?",
            options: [
              "Adding money regularly to investments",
              "Investment returns generating their own returns",
              "Investing in multiple assets",
              "Combining different investment strategies"
            ],
            correctAnswer: 1
          },
          {
            id: "m1-l6-q2",
            question: "Why does compounding accelerate over time?",
            options: [
              "Markets become more volatile",
              "Returns generate their own returns exponentially",
              "Investment minimums decrease",
              "Taxes decrease with time"
            ],
            correctAnswer: 1
          },
          {
            id: "m1-l6-q3",
            question: "What is crucial for maximizing compounding benefits?",
            options: [
              "Frequent withdrawals",
              "Starting early and staying invested long-term",
              "Only investing large amounts",
              "Switching investments frequently"
            ],
            correctAnswer: 1
          },
          {
            id: "m1-l6-q4",
            question: "What should you do with investment earnings to benefit from compounding?",
            options: [
              "Withdraw them immediately",
              "Spend on luxuries",
              "Reinvest them",
              "Keep in savings account"
            ],
            correctAnswer: 2
          },
          {
            id: "m1-l6-q5",
            question: "Which factor does NOT maximize compounding?",
            options: [
              "Starting early",
              "Staying invested long-term",
              "Choosing higher return investments",
              "Frequent withdrawals"
            ],
            correctAnswer: 3
          }
        ]
      },
      {
        id: "m1-l7",
        moduleId: "module-1",
        lessonNumber: 7,
        title: "Inflation and Purchasing Power",
        content: `Inflation is the rate at which the general level of prices for goods and services rises, eroding purchasing power over time. Understanding inflation is crucial because it affects the real value of your investments and savings. In India, inflation has historically averaged around 5-7% annually.

If inflation is 6% per year and your money is in a savings account earning 4% interest, you're actually losing purchasing power. The real return is negative 2%, meaning what you can buy with your money decreases each year. This is why investing is essential – you need returns that beat inflation.

Different assets respond differently to inflation. Real estate and gold are often considered inflation hedges as their values tend to rise with inflation. Stocks of companies that can pass increased costs to customers also tend to perform well during inflationary periods. Fixed-income investments like bonds may suffer as inflation erodes their fixed returns.

In India, food and fuel prices significantly impact inflation. The Reserve Bank of India monitors inflation closely and adjusts interest rates to control it. As an investor, you should aim for returns that not only beat inflation but provide real growth after accounting for inflation.

Consider inflation when planning for long-term goals. If you need ₹1 crore for retirement in 30 years, with 6% inflation, you'll actually need approximately ₹5.7 crores to have the same purchasing power. This highlights why it's crucial to invest in growth assets for long-term goals rather than relying solely on fixed deposits.`,
        quiz: [
          {
            id: "m1-l7-q1",
            question: "What is inflation?",
            options: [
              "Increase in stock prices",
              "Rate at which general price levels rise",
              "Growth in GDP",
              "Interest earned on savings"
            ],
            correctAnswer: 1
          },
          {
            id: "m1-l7-q2",
            question: "What happens if investment returns are lower than inflation?",
            options: [
              "You gain purchasing power",
              "Nothing changes",
              "You lose purchasing power",
              "You get tax benefits"
            ],
            correctAnswer: 2
          },
          {
            id: "m1-l7-q3",
            question: "Which is typically considered an inflation hedge?",
            options: [
              "Savings account",
              "Fixed deposits",
              "Real estate and gold",
              "Cash"
            ],
            correctAnswer: 2
          },
          {
            id: "m1-l7-q4",
            question: "What is the average historical inflation rate in India?",
            options: [
              "1-2%",
              "3-4%",
              "5-7%",
              "10-12%"
            ],
            correctAnswer: 2
          },
          {
            id: "m1-l7-q5",
            question: "Why must long-term investment returns beat inflation?",
            options: [
              "To impress others",
              "Government regulations",
              "To maintain and grow purchasing power",
              "To avoid taxes"
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: "m1-l8",
        moduleId: "module-1",
        lessonNumber: 8,
        title: "Asset Classes Overview",
        content: `Asset classes are categories of investments with similar characteristics and behavior. Understanding different asset classes is fundamental to building a diversified portfolio. The main asset classes include equity (stocks), debt (bonds), real estate, commodities (gold, silver), and cash equivalents.

Equity represents ownership in a company through stocks. Historically, equities have provided the highest returns over long periods but come with higher volatility. They're suitable for long-term goals where you can ride out market fluctuations. In India, equity investments can be made directly through stocks or indirectly through equity mutual funds.

Debt instruments include bonds, debentures, and fixed deposits where you lend money in return for interest payments. They offer more stability than equity but lower returns. Debt is suitable for shorter time horizons or for investors seeking regular income. Government bonds are considered safest, while corporate bonds offer higher returns with slightly more risk.

Real estate involves investing in physical property – residential, commercial, or land. It can provide rental income and potential appreciation. However, it requires significant capital, has low liquidity, and involves maintenance costs. REITs (Real Estate Investment Trusts) offer a way to invest in real estate with smaller amounts and better liquidity.

Gold and other commodities serve as portfolio diversifiers and inflation hedges. In Indian culture, gold holds special significance and is considered a traditional investment. Modern options like gold ETFs and sovereign gold bonds provide ways to invest in gold without physical storage concerns. Each asset class plays a specific role in a well-balanced investment portfolio.`,
        quiz: [
          {
            id: "m1-l8-q1",
            question: "What does equity represent?",
            options: [
              "Lending money to companies",
              "Ownership in a company",
              "Government bonds",
              "Physical property"
            ],
            correctAnswer: 1
          },
          {
            id: "m1-l8-q2",
            question: "Which asset class historically provides highest returns over long periods?",
            options: [
              "Debt",
              "Cash",
              "Equity",
              "Fixed deposits"
            ],
            correctAnswer: 2
          },
          {
            id: "m1-l8-q3",
            question: "What are debt instruments suitable for?",
            options: [
              "High risk tolerance investors only",
              "Shorter time horizons or regular income seekers",
              "Long-term wealth creation only",
              "Speculation"
            ],
            correctAnswer: 1
          },
          {
            id: "m1-l8-q4",
            question: "What is a REIT?",
            options: [
              "Real Estate Investment Trust",
              "Retirement Equity Investment Tool",
              "Regulated Equity Income Tax",
              "Return Estimation Investment Technique"
            ],
            correctAnswer: 0
          },
          {
            id: "m1-l8-q5",
            question: "Why are gold and commodities held in portfolios?",
            options: [
              "Guaranteed high returns",
              "Tax benefits only",
              "Diversification and inflation hedge",
              "Government mandates"
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: "m1-l9",
        moduleId: "module-1",
        lessonNumber: 9,
        title: "Diversification Strategy",
        content: `Diversification is spreading your investments across different asset classes, sectors, and geographies to reduce risk. The principle behind diversification is simple: don't put all your eggs in one basket. By diversifying, you reduce the impact of any single investment performing poorly.

Asset allocation is the first level of diversification – deciding how much of your portfolio goes into equity, debt, gold, and real estate. Your allocation should match your risk tolerance, time horizon, and financial goals. A young professional might have 70% in equity, while someone nearing retirement might prefer 30% equity and 70% debt.

Within each asset class, further diversification is important. For equity, invest across different sectors like technology, banking, pharmaceuticals, and consumer goods. Economic cycles affect sectors differently – when one struggles, another might thrive. Geographic diversification, including international investments, can also reduce country-specific risks.

Diversification also involves investing across different company sizes – large-cap, mid-cap, and small-cap stocks. Large-cap companies offer stability, mid-caps offer growth potential, and small-caps can provide high returns with higher volatility. Mutual funds make such diversification easier for individual investors.

However, over-diversification can dilute returns and make portfolio management difficult. There's a balance to strike. For most individual investors, 15-20 well-selected stocks or 5-7 mutual funds across different categories provide adequate diversification. Regular portfolio review and rebalancing ensure your diversification strategy remains effective over time.`,
        quiz: [
          {
            id: "m1-l9-q1",
            question: "What is diversification?",
            options: [
              "Investing all money in one stock",
              "Spreading investments across different assets",
              "Only investing in equity",
              "Keeping money in savings"
            ],
            correctAnswer: 1
          },
          {
            id: "m1-l9-q2",
            question: "What determines your asset allocation?",
            options: [
              "Only your age",
              "Market conditions only",
              "Risk tolerance, time horizon, and goals",
              "Friend's recommendations"
            ],
            correctAnswer: 2
          },
          {
            id: "m1-l9-q3",
            question: "Why diversify across different sectors?",
            options: [
              "Government requirement",
              "Economic cycles affect sectors differently",
              "All sectors perform same",
              "To pay less tax"
            ],
            correctAnswer: 1
          },
          {
            id: "m1-l9-q4",
            question: "What is a disadvantage of over-diversification?",
            options: [
              "Higher taxes",
              "Increased risk",
              "Diluted returns and difficult management",
              "Lower liquidity"
            ],
            correctAnswer: 2
          },
          {
            id: "m1-l9-q5",
            question: "How many mutual funds typically provide adequate diversification?",
            options: [
              "1-2 funds",
              "5-7 funds across categories",
              "20-30 funds",
              "50+ funds"
            ],
            correctAnswer: 1
          }
        ]
      },
      {
        id: "m1-l10",
        moduleId: "module-1",
        lessonNumber: 10,
        title: "Investment Mindset",
        content: `Developing the right investment mindset is as important as understanding financial concepts. Successful investing requires discipline, patience, and emotional control. Many investors fail not because of poor stock selection but due to behavioral mistakes driven by fear and greed.

Long-term thinking is fundamental to investment success. Markets will fluctuate in the short term, but quality investments tend to grow over the long term. Trying to time the market or make quick profits usually leads to losses. Instead, focus on time in the market rather than timing the market.

Emotional discipline is crucial during market volatility. When markets crash, fear pushes investors to sell at losses. When markets boom, greed leads to buying overvalued assets. Successful investors maintain composure, stick to their strategy, and sometimes do the opposite of the crowd – buying when others panic and being cautious when others are euphoric.

Continuous learning is part of the investment mindset. Financial markets evolve, new investment products emerge, and economic conditions change. Reading financial news, understanding company reports, and learning from both successes and failures helps you become a better investor over time.

Accept that losses are part of investing. Even the best investors make mistakes. What matters is learning from them and ensuring your overall portfolio grows over time. Maintain realistic expectations – slow and steady wealth accumulation is more sustainable than chasing unrealistic returns. The tortoise wins the race in investing.`,
        quiz: [
          {
            id: "m1-l10-q1",
            question: "What is more important for investment success?",
            options: [
              "Timing the market perfectly",
              "Time in the market",
              "Following hot tips",
              "Frequent trading"
            ],
            correctAnswer: 1
          },
          {
            id: "m1-l10-q2",
            question: "What should investors do during market crashes?",
            options: [
              "Panic and sell everything",
              "Maintain composure and stick to strategy",
              "Stop investing forever",
              "Follow the crowd"
            ],
            correctAnswer: 1
          },
          {
            id: "m1-l10-q3",
            question: "Why is continuous learning important?",
            options: [
              "To impress others",
              "Markets and products evolve over time",
              "Government requirement",
              "To get certifications"
            ],
            correctAnswer: 1
          },
          {
            id: "m1-l10-q4",
            question: "How should investors view losses?",
            options: [
              "As complete failures",
              "As reasons to quit investing",
              "As learning opportunities and part of investing",
              "As signs to increase risk"
            ],
            correctAnswer: 2
          },
          {
            id: "m1-l10-q5",
            question: "What kind of wealth accumulation is most sustainable?",
            options: [
              "Quick schemes promising high returns",
              "Slow and steady growth",
              "Gambling on single stocks",
              "Day trading"
            ],
            correctAnswer: 1
          }
        ]
      }
    ]
  },
  {
    id: "module-2",
    moduleNumber: 2,
    title: "Understanding Stocks",
    description: "Learn about equity markets, stock valuation, and how to invest in individual stocks",
    lessons: []
  },
  {
    id: "module-3",
    moduleNumber: 3,
    title: "Bonds and Fixed Income",
    description: "Master debt instruments, bond markets, and fixed-income investment strategies",
    lessons: []
  },
  {
    id: "module-4",
    moduleNumber: 4,
    title: "Mutual Funds",
    description: "Understand mutual funds, SIPs, and how to select the right funds for your goals",
    lessons: []
  },
  {
    id: "module-5",
    moduleNumber: 5,
    title: "Gold and Commodities",
    description: "Learn about investing in gold, silver, and other commodities in the Indian market",
    lessons: []
  },
  {
    id: "module-6",
    moduleNumber: 6,
    title: "Real Estate Investment",
    description: "Explore residential and commercial property investment strategies",
    lessons: []
  },
  {
    id: "module-7",
    moduleNumber: 7,
    title: "Financial Planning",
    description: "Create comprehensive financial plans including emergency funds and insurance",
    lessons: []
  },
  {
    id: "module-8",
    moduleNumber: 8,
    title: "Taxation for Investors",
    description: "Understand tax implications of different investments and tax-saving strategies",
    lessons: []
  },
  {
    id: "module-9",
    moduleNumber: 9,
    title: "Advanced Investment Strategies",
    description: "Learn about portfolio rebalancing, SWP, and advanced investment techniques",
    lessons: []
  },
  {
    id: "module-10",
    moduleNumber: 10,
    title: "Building Your Investment Portfolio",
    description: "Practical steps to build and maintain a diversified investment portfolio",
    lessons: []
  }
];
