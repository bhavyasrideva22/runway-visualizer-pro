
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { formatCurrency, formatMonths } from './formatters';

// Type augmentation for jsPDF
declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}

export interface BurnRateData {
  totalCash: number;
  monthlyExpenses: number;
  monthlyRevenue: number;
  projectedGrowthRate: number;
  runway: number;
}

export const generatePDF = (data: BurnRateData): jsPDF => {
  const { totalCash, monthlyExpenses, monthlyRevenue, projectedGrowthRate, runway } = data;
  const netBurnRate = monthlyExpenses - monthlyRevenue;
  
  // Create a new PDF document
  const doc = new jsPDF();
  
  // Add logo and header
  doc.setFillColor(36, 94, 79); // #245e4f
  doc.rect(0, 0, 210, 25, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text('BURN RATE ANALYSIS REPORT', 105, 15, { align: 'center' });
  
  // Add date
  doc.setTextColor(100, 100, 100);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const today = new Date();
  doc.text(`Generated on: ${today.toLocaleDateString('en-IN')}`, 105, 30, { align: 'center' });
  
  // Add summary
  doc.setFontSize(14);
  doc.setTextColor(36, 94, 79);
  doc.setFont('helvetica', 'bold');
  doc.text('Summary', 20, 45);
  
  doc.setFontSize(12);
  doc.setTextColor(50, 50, 50);
  doc.setFont('helvetica', 'normal');
  
  // Company financial details
  const tableData = [
    ['Total Cash Reserves', formatCurrency(totalCash)],
    ['Monthly Expenses', formatCurrency(monthlyExpenses)],
    ['Monthly Revenue', formatCurrency(monthlyRevenue)],
    ['Net Monthly Burn Rate', formatCurrency(netBurnRate)],
    ['Projected Growth Rate', `${projectedGrowthRate}%`],
    ['Estimated Runway', formatMonths(runway)]
  ];
  
  doc.autoTable({
    startY: 50,
    head: [['Metric', 'Value']],
    body: tableData,
    theme: 'grid',
    headStyles: { fillColor: [36, 94, 79], textColor: [255, 255, 255] },
    styles: { fontSize: 10, cellPadding: 5 },
    columnStyles: {
      0: { cellWidth: 80 },
      1: { cellWidth: 60, halign: 'right' }
    }
  });
  
  // Add explanation
  const explanationY = doc.lastAutoTable.finalY + 20;
  doc.setFontSize(14);
  doc.setTextColor(36, 94, 79);
  doc.setFont('helvetica', 'bold');
  doc.text('What This Means For Your Business', 20, explanationY);
  
  doc.setFontSize(10);
  doc.setTextColor(50, 50, 50);
  doc.setFont('helvetica', 'normal');
  
  const explanation = 
    `Your company has a net burn rate of ${formatCurrency(netBurnRate)} per month, which means ` +
    `you're currently spending ${formatCurrency(netBurnRate)} more than you earn each month. ` +
    `With your current cash reserves of ${formatCurrency(totalCash)}, your startup has approximately ` +
    `${formatMonths(runway)} of runway before running out of cash, assuming your burn rate and growth projections remain constant.\n\n` +
    `The growth rate of ${projectedGrowthRate}% has been factored into this calculation. ` +
    `To extend your runway, consider strategies to increase revenue, reduce expenses, or secure additional funding.`;
  
  doc.setFontSize(10);
  const splitText = doc.splitTextToSize(explanation, 170);
  doc.text(splitText, 20, explanationY + 10);
  
  // Add footer
  doc.setFontSize(8);
  doc.setTextColor(150, 150, 150);
  doc.text('Runway Visualizer Pro | Burn Rate Analysis Tool', 105, 280, { align: 'center' });
  doc.text('www.runwayvisualizerpro.com', 105, 285, { align: 'center' });
  
  return doc;
};

export const downloadPDF = (data: BurnRateData) => {
  const doc = generatePDF(data);
  doc.save('burn-rate-analysis.pdf');
};
