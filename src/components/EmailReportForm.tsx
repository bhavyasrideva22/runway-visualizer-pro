
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";
import { sendEmailReport } from "@/utils/emailService";
import { BurnRateData } from "@/utils/pdfGenerator";

interface EmailReportFormProps {
  calculatorData: BurnRateData;
}

const EmailReportForm: React.FC<EmailReportFormProps> = ({ calculatorData }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    
    setEmailError("");
    setIsSubmitting(true);
    
    try {
      await sendEmailReport(email, calculatorData);
      setEmail("");
    } catch (error) {
      console.error("Failed to send email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <div className="flex gap-2">
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
            className={emailError ? "border-red-500" : ""}
          />
          <Button 
            type="submit" 
            disabled={isSubmitting} 
            className="bg-customAccent hover:bg-amber-500 text-customText"
          >
            <Mail className="mr-2 h-4 w-4" />
            {isSubmitting ? "Sending..." : "Send"}
          </Button>
        </div>
        {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
      </div>
    </form>
  );
};

export default EmailReportForm;
