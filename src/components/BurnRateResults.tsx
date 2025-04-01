
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { BurnRateResults } from "@/utils/burnRateCalculator";
import { formatCurrency, formatMonths } from "@/utils/formatters";
import BurnRateChart from "./BurnRateChart";
import EmailReportForm from "./EmailReportForm";
import { downloadPDF, BurnRateData } from "@/utils/pdfGenerator";

interface BurnRateResultsComponentProps {
  inputs: BurnRateData;
  results: BurnRateResults;
}

const BurnRateResultsComponent: React.FC<BurnRateResultsComponentProps> = ({
  inputs,
  results,
}) => {
  const { totalCash, monthlyExpenses, monthlyRevenue, projectedGrowthRate } = inputs;
  const { netBurnRate, runway, runwayMonths, cashRemaining, breakEvenPoint } = results;

  const handleDownloadPDF = () => {
    downloadPDF({
      totalCash,
      monthlyExpenses,
      monthlyRevenue,
      projectedGrowthRate,
      runway,
    });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="calculator-card">
        <h3 className="text-2xl font-bold mb-4 text-gradient">Results Summary</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gray-50 border-none shadow-sm">
            <CardContent className="p-6">
              <h4 className="text-lg font-medium text-customPrimary mb-4">Financial Analysis</h4>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Cash Reserves:</span>
                  <span className="font-semibold">{formatCurrency(totalCash)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly Expenses:</span>
                  <span className="font-semibold">{formatCurrency(monthlyExpenses)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly Revenue:</span>
                  <span className="font-semibold">{formatCurrency(monthlyRevenue)}</span>
                </div>
                
                <Separator className="my-2" />
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Net Burn Rate:</span>
                  <span className="font-semibold text-red-600">{formatCurrency(netBurnRate)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-50 border-none shadow-sm">
            <CardContent className="p-6">
              <h4 className="text-lg font-medium text-customPrimary mb-4">Runway Projection</h4>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Projected Growth Rate:</span>
                  <span className="font-semibold">{projectedGrowthRate}% annually</span>
                </div>
                
                <Separator className="my-2" />
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Estimated Runway:</span>
                  <span className="font-bold text-xl text-customPrimary">
                    {runway === Infinity ? "Infinite" : formatMonths(runway)}
                  </span>
                </div>
                
                {breakEvenPoint && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Break-even Point:</span>
                    <span className="font-semibold text-green-600">
                      {formatMonths(breakEvenPoint)}
                    </span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8">
          <h4 className="text-lg font-medium text-customPrimary mb-4">Cash Runway Visualization</h4>
          <BurnRateChart
            runwayMonths={runwayMonths}
            cashRemaining={cashRemaining}
            breakEvenPoint={breakEvenPoint}
          />
        </div>
      </div>
      
      <div className="calculator-card">
        <h3 className="text-xl font-bold mb-4">Share Your Results</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="flex items-center text-customPrimary font-medium mb-3">
              <Mail className="h-5 w-5 mr-2" />
              Email Report
            </h4>
            <EmailReportForm
              calculatorData={{
                totalCash,
                monthlyExpenses,
                monthlyRevenue,
                projectedGrowthRate,
                runway,
              }}
            />
          </div>
          
          <div>
            <h4 className="flex items-center text-customPrimary font-medium mb-3">
              <Download className="h-5 w-5 mr-2" />
              Download Report
            </h4>
            <p className="text-gray-600 mb-4 text-sm">
              Get a detailed PDF report with your burn rate analysis and runway projections.
            </p>
            <Button 
              onClick={handleDownloadPDF}
              className="bg-customAccent hover:bg-amber-500 text-customText"
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurnRateResultsComponent;
