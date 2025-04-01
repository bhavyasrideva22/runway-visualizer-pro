
export interface BurnRateInputs {
  totalCash: number;
  monthlyExpenses: number;
  monthlyRevenue: number;
  projectedGrowthRate: number;
}

export interface BurnRateResults {
  netBurnRate: number;
  runway: number;
  runwayMonths: number[];
  cashRemaining: number[];
  breakEvenPoint: number | null;
}

export const calculateBurnRate = (inputs: BurnRateInputs): BurnRateResults => {
  const { totalCash, monthlyExpenses, monthlyRevenue, projectedGrowthRate } = inputs;
  
  // Calculate initial net burn rate (expenses - revenue)
  let initialNetBurnRate = Math.max(0, monthlyExpenses - monthlyRevenue);
  
  // If revenue exceeds expenses, burn rate is 0 (you're profitable)
  if (initialNetBurnRate <= 0) {
    return {
      netBurnRate: 0,
      runway: Infinity,
      runwayMonths: Array(24).fill(0).map((_, i) => i + 1),
      cashRemaining: Array(24).fill(totalCash),
      breakEvenPoint: 0
    };
  }
  
  // Calculate runway with growth projections
  const monthlyGrowthRate = projectedGrowthRate / 100 / 12; // Convert annual percentage to monthly decimal
  
  const runwayMonths: number[] = [];
  const cashRemaining: number[] = [];
  
  let remainingCash = totalCash;
  let currentRevenue = monthlyRevenue;
  let month = 1;
  let breakEvenPoint: number | null = null;
  
  // Project for up to 60 months (5 years) or until cash runs out
  while (remainingCash > 0 && month <= 60) {
    // Track current month
    runwayMonths.push(month);
    
    // Calculate this month's burn
    const monthlyBurn = Math.max(0, monthlyExpenses - currentRevenue);
    
    // Check for break-even (when revenue exceeds expenses)
    if (monthlyBurn === 0 && breakEvenPoint === null) {
      breakEvenPoint = month;
    }
    
    // Update remaining cash
    remainingCash -= monthlyBurn;
    cashRemaining.push(Math.max(0, remainingCash));
    
    // Grow revenue for next month
    currentRevenue *= (1 + monthlyGrowthRate);
    
    month++;
  }
  
  // Calculate runway (in months)
  const runway = remainingCash > 0 ? month - 1 : runwayMonths.length;
  
  return {
    netBurnRate: initialNetBurnRate,
    runway,
    runwayMonths,
    cashRemaining,
    breakEvenPoint
  };
};
