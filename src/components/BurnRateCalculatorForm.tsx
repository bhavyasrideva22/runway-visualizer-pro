
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { BadgeIndianRupee, Calculator, ArrowDown, ArrowUp } from "lucide-react";
import { BurnRateInputs } from "@/utils/burnRateCalculator";

interface BurnRateCalculatorFormProps {
  onCalculate: (inputs: BurnRateInputs) => void;
  isCalculating: boolean;
}

const BurnRateCalculatorForm: React.FC<BurnRateCalculatorFormProps> = ({
  onCalculate,
  isCalculating,
}) => {
  const [totalCash, setTotalCash] = useState(10000000); // 1 Crore INR
  const [monthlyExpenses, setMonthlyExpenses] = useState(1000000); // 10 Lakh INR
  const [monthlyRevenue, setMonthlyRevenue] = useState(500000); // 5 Lakh INR
  const [projectedGrowthRate, setProjectedGrowthRate] = useState(10); // 10% annual growth
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateNumber = (value: string, fieldName: string): boolean => {
    const numericValue = Number(value);
    
    if (isNaN(numericValue) || numericValue < 0) {
      setErrors(prev => ({ ...prev, [fieldName]: "Please enter a valid positive number" }));
      return false;
    }
    
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[fieldName];
      return newErrors;
    });
    
    return true;
  };

  const handleNumberChange = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<number>>,
    fieldName: string
  ) => {
    // Allow empty string for better UX during typing
    if (value === "") {
      setter(0);
      return;
    }
    
    // Remove non-numeric characters except decimal point
    const cleanedValue = value.replace(/[^0-9.]/g, "");
    
    if (validateNumber(cleanedValue, fieldName)) {
      setter(Number(cleanedValue));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const isValid = 
      validateNumber(totalCash.toString(), "totalCash") &&
      validateNumber(monthlyExpenses.toString(), "monthlyExpenses") &&
      validateNumber(monthlyRevenue.toString(), "monthlyRevenue");
    
    if (!isValid) return;
    
    onCalculate({
      totalCash,
      monthlyExpenses,
      monthlyRevenue,
      projectedGrowthRate,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="calculator-card">
          <div className="flex items-center mb-4">
            <BadgeIndianRupee className="h-6 w-6 text-customPrimary mr-2" />
            <h3 className="text-xl font-medium">Financial Details</h3>
          </div>
          
          <div className="space-y-4">
            <div className="input-wrapper">
              <Label htmlFor="totalCash" className="flex items-center text-base">
                Total Cash Reserves
              </Label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                <Input
                  id="totalCash"
                  type="text"
                  value={totalCash}
                  onChange={(e) => handleNumberChange(e.target.value, setTotalCash, "totalCash")}
                  className="pl-8"
                />
              </div>
              {errors.totalCash && <p className="text-red-500 text-sm mt-1">{errors.totalCash}</p>}
            </div>
            
            <div className="input-wrapper">
              <Label htmlFor="monthlyExpenses" className="flex items-center text-base">
                <ArrowDown className="h-4 w-4 text-red-500 mr-1" />
                Monthly Expenses
              </Label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                <Input
                  id="monthlyExpenses"
                  type="text"
                  value={monthlyExpenses}
                  onChange={(e) =>
                    handleNumberChange(e.target.value, setMonthlyExpenses, "monthlyExpenses")
                  }
                  className="pl-8"
                />
              </div>
              {errors.monthlyExpenses && (
                <p className="text-red-500 text-sm mt-1">{errors.monthlyExpenses}</p>
              )}
            </div>
            
            <div className="input-wrapper">
              <Label htmlFor="monthlyRevenue" className="flex items-center text-base">
                <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                Monthly Revenue
              </Label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                <Input
                  id="monthlyRevenue"
                  type="text"
                  value={monthlyRevenue}
                  onChange={(e) =>
                    handleNumberChange(e.target.value, setMonthlyRevenue, "monthlyRevenue")
                  }
                  className="pl-8"
                />
              </div>
              {errors.monthlyRevenue && (
                <p className="text-red-500 text-sm mt-1">{errors.monthlyRevenue}</p>
              )}
            </div>
          </div>
        </div>
        
        <div className="calculator-card">
          <div className="flex items-center mb-4">
            <Calculator className="h-6 w-6 text-customPrimary mr-2" />
            <h3 className="text-xl font-medium">Growth Projections</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label className="text-base">
                Projected Monthly Revenue Growth Rate: {projectedGrowthRate}%
              </Label>
              <div className="py-4">
                <Slider
                  value={[projectedGrowthRate]}
                  onValueChange={(values) => setProjectedGrowthRate(values[0])}
                  max={50}
                  step={1}
                  className="my-4"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>0%</span>
                  <span>25%</span>
                  <span>50%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Button
        type="submit"
        className="w-full bg-customPrimary hover:bg-customPrimary/90 text-white py-6 text-lg"
        disabled={isCalculating || Object.keys(errors).length > 0}
      >
        {isCalculating ? "Calculating..." : "Calculate Burn Rate & Runway"}
      </Button>
    </form>
  );
};

export default BurnRateCalculatorForm;
