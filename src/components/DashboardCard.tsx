import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  value: string;
  subtitle?: string;
  variant?: "default" | "success" | "warning" | "accent" | "income" | "expense" | "investment";
  className?: string;
}

const DashboardCard = ({ title, value, subtitle, variant = "default", className }: DashboardCardProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return "border-success/20 bg-success-light/50";
      case "warning":
        return "border-warning/20 bg-warning-light/50";
      case "accent":
        return "border-accent/20 bg-accent-light/50";
      case "income":
        return "border-income/20 bg-success-light/30";
      case "expense":
        return "border-expense/20 bg-destructive/5";
      case "investment":
        return "border-investment/20 bg-accent-light/30";
      default:
        return "border-border bg-card";
    }
  };

  return (
    <Card className={cn("shadow-card hover:shadow-card-hover transition-shadow", getVariantStyles(), className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
      </CardContent>
    </Card>
  );
};

export default DashboardCard;