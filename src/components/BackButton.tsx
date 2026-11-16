import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BackButtonProps {
  to?: string;
  className?: string;
}

export function BackButton({ to, className }: BackButtonProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleBack}
      className={cn("gap-2 text-muted-foreground hover:text-foreground", className)}
    >
      <ArrowLeft className="w-4 h-4" />
      Back
    </Button>
  );
}
