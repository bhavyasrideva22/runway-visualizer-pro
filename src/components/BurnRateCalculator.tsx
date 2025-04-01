
import React, { useState } from "react";
import BurnRateCalculatorForm from "./BurnRateCalculatorForm";
import BurnRateResultsComponent from "./BurnRateResults";
import { BurnRateInputs, calculateBurnRate, BurnRateResults } from "@/utils/burnRateCalculator";

const BurnRateCalculator: React.FC = () => {
  const [calculatorInputs, setCalculatorInputs] = useState<BurnRateInputs | null>(null);
  const [calculatorResults, setCalculatorResults] = useState<BurnRateResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = (inputs: BurnRateInputs) => {
    setIsCalculating(true);
    
    // Simulate a calculation delay for UX
    setTimeout(() => {
      const results = calculateBurnRate(inputs);
      setCalculatorInputs(inputs);
      setCalculatorResults(results);
      setIsCalculating(false);
    }, 600);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-5">
          <BurnRateCalculatorForm
            onCalculate={handleCalculate}
            isCalculating={isCalculating}
          />
        </div>
        
        <div className="md:col-span-7">
          {calculatorResults && calculatorInputs ? (
            <BurnRateResultsComponent
              inputs={calculatorInputs}
              results={calculatorResults}
            />
          ) : (
            <div className="h-full flex items-center justify-center calculator-card">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-customSecondary/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-customPrimary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 text-customPrimary">
                  Enter Your Financial Data
                </h3>
                <p className="text-gray-600">
                  Fill in your startup's financial details to calculate your burn rate and visualize your runway.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BurnRateCalculator;
