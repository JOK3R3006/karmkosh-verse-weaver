
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MailCheck } from "lucide-react";
import { AuthShell } from "@/components/layout/AuthShell";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate password reset email sending
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setEmailSent(true);
      toast({
        title: "Password Reset Email Sent!",
        description: "Check your email for password reset instructions.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send password reset email. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthShell backTo="/auth">
      <div className="mb-8">
        <h1 className="display text-5xl text-foreground">{emailSent ? "Check Your Email" : "Reset Password"}</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {emailSent
            ? "We've sent password reset instructions to your email address."
            : "Enter your email address and we'll send you instructions to reset your password."}
        </p>
      </div>

      {!emailSent ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <Button type="submit" size="lg" className="!mt-6 w-full" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Reset Instructions"}
          </Button>
        </form>
      ) : (
        <div className="surface space-y-5 p-6 text-center">
          <div className="icon-tile mx-auto h-14 w-14 rounded-2xl">
            <MailCheck className="h-6 w-6" strokeWidth={1.5} />
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            If an account with email <strong className="font-semibold text-foreground">{email}</strong> exists, you'll
            receive password reset instructions shortly.
          </p>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              setEmailSent(false);
              setEmail("");
            }}
          >
            Try Different Email
          </Button>
        </div>
      )}

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Remember your password?{" "}
        <Link to="/auth" className="font-semibold text-foreground underline-offset-4 hover:text-brand-rose hover:underline">
          Back to Sign In
        </Link>
      </p>
    </AuthShell>
  );
}
