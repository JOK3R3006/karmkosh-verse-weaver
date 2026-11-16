import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
import { AuthShell } from "@/components/layout/AuthShell";

const iconClass = "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground";

export default function Auth() {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode") || "signin";
  const [isSignUp, setIsSignUp] = useState(mode === "signup");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
    isCreator: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic validation
    if (isSignUp) {
      if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
        toast({
          title: "Error",
          description: "Please fill in all required fields",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        toast({
          title: "Error",
          description: "Passwords do not match",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      if (!formData.acceptTerms) {
        toast({
          title: "Error",
          description: "Please accept the terms and conditions",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }
    }

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: isSignUp ? "Account Created!" : "Welcome Back!",
        description: isSignUp 
          ? "Your account has been created successfully. Please verify your email."
          : "You have been signed in successfully.",
      });

      // Here you would typically redirect to dashboard or home
      console.log(isSignUp ? "Sign up successful" : "Sign in successful", formData);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    // Simulate Google OAuth flow
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({
        title: "Google Sign In",
        description: "Google authentication would be implemented here with a proper OAuth provider",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Google sign in failed. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthShell backTo="/">
      <div className="mb-8">
        <h1 className="display text-5xl text-foreground">{isSignUp ? "Create Account" : "Welcome Back"}</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          {isSignUp ? "Join thousands of creators building their business" : "Sign in to your account to continue"}
        </p>
      </div>

      <Button variant="outline" className="h-11 w-full" type="button" onClick={handleGoogleSignIn} disabled={isLoading}>
        <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
        {isLoading ? "Connecting..." : "Continue with Google"}
      </Button>

      <div className="my-6 flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
        <span className="h-px flex-1 bg-white/10" />
        or
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {isSignUp && (
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <div className="relative">
              <User className={iconClass} />
              <Input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                className="pl-10"
                required
              />
            </div>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className={iconClass} />
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              className="pl-10"
              required
            />
          </div>
        </div>

        {isSignUp && (
          <div className="space-y-2">
            <Label htmlFor="phone">
              Phone Number <span className="font-normal text-muted-foreground">(Optional)</span>
            </Label>
            <div className="relative">
              <Phone className={iconClass} />
              <Input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+91 9876543210"
                value={formData.phone}
                onChange={handleInputChange}
                className="pl-10"
              />
            </div>
          </div>
        )}

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            {!isSignUp && (
              <Link to="/forgot-password" className="text-xs font-medium text-brand-rose hover:underline">
                Forgot your password?
              </Link>
            )}
          </div>
          <div className="relative">
            <Lock className={iconClass} />
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete={isSignUp ? "new-password" : "current-password"}
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              className="pl-10 pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {isSignUp && (
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <div className="relative">
              <Lock className={iconClass} />
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="pl-10"
                required
              />
            </div>
          </div>
        )}

        {isSignUp && (
          <div className="space-y-3 pt-1">
            <div className="flex items-start gap-3">
              <Checkbox
                id="isCreator"
                name="isCreator"
                className="mt-0.5"
                checked={formData.isCreator}
                onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, isCreator: checked as boolean }))}
              />
              <Label htmlFor="isCreator" className="text-sm font-normal leading-snug text-foreground/85">
                I want to sell products (Creator account)
              </Label>
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                id="acceptTerms"
                name="acceptTerms"
                className="mt-0.5"
                checked={formData.acceptTerms}
                onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, acceptTerms: checked as boolean }))}
                required
              />
              <Label htmlFor="acceptTerms" className="text-sm font-normal leading-snug text-foreground/85">
                I agree to the{" "}
                <Link to="/terms" className="font-medium text-brand-rose hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="font-medium text-brand-rose hover:underline">
                  Privacy Policy
                </Link>
              </Label>
            </div>
          </div>
        )}

        <Button type="submit" size="lg" className="!mt-6 w-full" disabled={isLoading}>
          {isLoading ? (isSignUp ? "Creating Account..." : "Signing In...") : isSignUp ? "Create Account" : "Sign In"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
        <button
          type="button"
          onClick={() => setIsSignUp(!isSignUp)}
          className="font-semibold text-foreground underline-offset-4 hover:text-brand-rose hover:underline"
        >
          {isSignUp ? "Sign In" : "Sign Up"}
        </button>
      </p>

      {/* Creator-specific links */}
      <div className="surface mt-8 flex items-center justify-between gap-4 p-4">
        <div>
          <p className="text-sm font-medium text-foreground">Interested in selling your content?</p>
          <Link to="/pricing" className="text-xs text-muted-foreground hover:text-foreground">
            View Creator Plans
          </Link>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link to="/creators">Become a Creator</Link>
        </Button>
      </div>
    </AuthShell>
  );
}
