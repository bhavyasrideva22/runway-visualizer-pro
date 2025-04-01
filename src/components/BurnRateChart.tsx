
import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatCurrency } from "@/utils/formatters";

interface BurnRateChartProps {
  runwayMonths: number[];
  cashRemaining: number[];
  breakEvenPoint: number | null;
}

const BurnRateChart: React.FC<BurnRateChartProps> = ({
  runwayMonths,
  cashRemaining,
  breakEvenPoint,
}) => {
  // Prepare chart data
  const chartData = runwayMonths.map((month, index) => ({
    month,
    cashRemaining: cashRemaining[index],
  }));

  return (
    <div className="w-full h-80 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            dataKey="month"
            label={{
              value: "Months",
              position: "insideBottomRight",
              offset: -10,
            }}
            tickFormatter={(month) => `${month}`}
          />
          <YAxis
            tickFormatter={(value) => formatCurrency(value).replace("₹", "")}
            width={80}
            label={{
              value: "Cash Remaining (₹)",
              angle: -90,
              position: "insideLeft",
              offset: -5,
            }}
          />
          <Tooltip
            formatter={(value: number) => [formatCurrency(value), "Cash Remaining"]}
            labelFormatter={(month) => `Month ${month}`}
          />
          <Legend />
          <Area
            type="monotone"
            dataKey="cashRemaining"
            name="Cash Remaining"
            stroke="#245e4f"
            fill="#7ac9a7"
            activeDot={{ r: 8 }}
          />
          {breakEvenPoint && (
            <CartesianGrid
              verticalCoordinatesGenerator={() => [breakEvenPoint]}
              stroke="#e9c46a"
              strokeWidth={2}
              strokeDasharray="5 5"
            />
          )}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BurnRateChart;
