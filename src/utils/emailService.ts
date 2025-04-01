
import { toast } from "@/components/ui/use-toast";
import { BurnRateData } from "./pdfGenerator";

export const sendEmailReport = async (
  email: string,
  data: BurnRateData
): Promise<boolean> => {
  // This is a mock function since we can't actually send emails from the frontend
  // In a real application, this would call a backend API
  
  // Simulate API call
  try {
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Success simulation (in real app, would be based on API response)
    const success = true;
    
    if (success) {
      toast({
        title: "Report Sent Successfully",
        description: `The burn rate analysis has been sent to ${email}`,
        variant: "default",
      });
      return true;
    } else {
      toast({
        title: "Failed to Send Email",
        description: "There was an error sending your report. Please try again.",
        variant: "destructive",
      });
      return false;
    }
  } catch (error) {
    toast({
      title: "Error",
      description: "An unexpected error occurred. Please try again later.",
      variant: "destructive",
    });
    console.error("Email sending error:", error);
    return false;
  }
};
