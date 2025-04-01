
import React from "react";
import BurnRateCalculator from "@/components/BurnRateCalculator";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-customBackground">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-customPrimary">
            Burn Rate Calculator for Startups
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plan your startup's financial future confidently with our interactive burn rate calculator. 
            Visualize your runway and make strategic decisions to ensure your company's longevity.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-8 px-4 mb-16">
        <div className="container mx-auto">
          <BurnRateCalculator />
        </div>
      </section>

      {/* Educational Content */}
      <section className="py-16 px-4 bg-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-customPrimary">
            Understanding Burn Rate & Runway for Startups
          </h2>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-semibold text-customPrimary mt-8 mb-4">
              What is Burn Rate?
            </h3>
            <p className="text-gray-700 mb-6">
              Burn rate is a critical financial metric that measures how quickly a company spends its 
              cash reserves. For startups and SaaS businesses, understanding burn rate is essential 
              for financial planning and sustainability. There are two types of burn rate to consider:
            </p>

            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>
                <strong>Gross Burn Rate:</strong> The total amount of operating costs your company 
                incurs each month, before factoring in any revenue.
              </li>
              <li>
                <strong>Net Burn Rate:</strong> The total amount of money your company loses each month, 
                calculated as your gross burn minus your monthly revenue.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-customPrimary mt-10 mb-4">
              What is Runway?
            </h3>
            <p className="text-gray-700 mb-6">
              Runway is the amount of time a company has before it runs out of cash, assuming constant 
              burn rate and no additional funding. It's calculated by dividing the total cash reserves by 
              the monthly net burn rate. For example, if your startup has ₹1 crore in the bank and 
              spends ₹10 lakhs more than it earns each month, your runway is 10 months.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 my-8">
              <h4 className="text-xl font-semibold text-customPrimary mb-3">
                Runway = Total Cash Reserves ÷ Net Monthly Burn Rate
              </h4>
              <p className="text-gray-600">
                For startups with projected revenue growth, the runway calculation becomes more complex, 
                as the burn rate will decrease over time as revenue increases.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-customPrimary mt-10 mb-4">
              Why Tracking Burn Rate and Runway Is Crucial
            </h3>
            <p className="text-gray-700 mb-6">
              Having a clear understanding of your burn rate and runway provides several strategic advantages:
            </p>

            <ol className="list-decimal pl-6 space-y-3 mb-6">
              <li>
                <strong>Financial Planning:</strong> Knowing exactly how much time you have left helps in making 
                informed decisions about when to cut costs or seek additional funding.
              </li>
              <li>
                <strong>Investor Relations:</strong> Investors expect founders to have a firm grasp on burn rate and 
                runway metrics. Being able to communicate these numbers clearly demonstrates financial acumen.
              </li>
              <li>
                <strong>Strategic Growth:</strong> Understanding your burn rate allows you to balance growth 
                investments with financial sustainability.
              </li>
              <li>
                <strong>Crisis Prevention:</strong> Monitoring your runway helps avoid cash flow crises by giving 
                you enough time to adjust your business strategy or secure additional capital.
              </li>
            </ol>

            <h3 className="text-2xl font-semibold text-customPrimary mt-10 mb-4">
              Strategies to Extend Your Runway
            </h3>
            <p className="text-gray-700 mb-6">
              If your runway analysis indicates a need for adjustment, consider these strategies:
            </p>

            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>
                <strong>Reduce Operating Costs:</strong> Identify and eliminate non-essential expenses while 
                preserving core business functions.
              </li>
              <li>
                <strong>Accelerate Revenue Growth:</strong> Focus on sales, marketing, or product improvements 
                that can increase monthly recurring revenue (MRR).
              </li>
              <li>
                <strong>Adjust Pricing Strategy:</strong> Consider price increases or new pricing tiers that 
                better reflect your product's value.
              </li>
              <li>
                <strong>Secure Additional Funding:</strong> If your growth metrics are strong, consider raising 
                additional capital through investors or alternative funding sources.
              </li>
              <li>
                <strong>Extend Payment Terms:</strong> Negotiate better payment terms with vendors and suppliers 
                to improve cash flow.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-customPrimary mt-10 mb-4">
              How to Use Our Burn Rate Calculator
            </h3>
            <p className="text-gray-700 mb-6">
              Our interactive tool is designed to give you immediate insights into your startup's financial 
              health. Here's how to use it effectively:
            </p>

            <ol className="list-decimal pl-6 space-y-3 mb-8">
              <li>
                Enter your current total cash reserves (the amount of money in your company's bank account).
              </li>
              <li>
                Input your monthly expenses (including salaries, office space, marketing, etc.).
              </li>
              <li>
                Add your monthly revenue (how much money your business generates each month).
              </li>
              <li>
                Adjust the projected growth rate slider to estimate how your revenue might increase over time.
              </li>
              <li>
                Click "Calculate" to visualize your burn rate, runway, and cash projection over time.
              </li>
              <li>
                Analyze the results and use the email or download options to share with your team or investors.
              </li>
            </ol>

            <Separator className="my-10" />

            <h3 className="text-2xl font-semibold text-customPrimary mt-6 mb-4">
              Burn Rate Benchmarks for Indian Startups
            </h3>
            <p className="text-gray-700 mb-6">
              While ideal burn rates vary by industry, stage, and growth objectives, here are some general 
              guidelines for Indian startups:
            </p>

            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>
                <strong>Pre-seed/Seed Stage:</strong> Maintain a runway of 12-18 months with a burn rate 
                typically under ₹10-15 lakhs per month for most sectors.
              </li>
              <li>
                <strong>Series A:</strong> Runway of 12-24 months with burn rates that reflect strategic 
                growth investments, often between ₹25-75 lakhs monthly.
              </li>
              <li>
                <strong>Series B and beyond:</strong> Companies should target 18-24 months of runway, with 
                burn rates calibrated to specific growth metrics and industry benchmarks.
              </li>
            </ul>

            <p className="text-gray-700 mt-8">
              Remember that burn rate should always be contextualized with growth metrics. A high burn rate 
              can be justified if it's driving proportionately high growth in revenue or other key business indicators.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-customPrimary text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Runway Visualizer Pro</h3>
              <p className="text-gray-300">
                Financial planning tools for modern startups and businesses.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Guides</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Financial Templates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Email Us</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Runway Visualizer Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
