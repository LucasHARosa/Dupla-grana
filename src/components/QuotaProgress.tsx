import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface QuotaProgressProps {
  person: string;
  quota: number;
  paid: number;
  className?: string;
}

const QuotaProgress = ({ person, quota, paid, className }: QuotaProgressProps) => {
  const percentage = (paid / quota) * 100;
  const isOverPaying = paid > quota;
  const difference = paid - quota;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <Card className={cn("shadow-card", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center justify-between">
          <span>{person}</span>
          <span className="text-sm font-normal text-muted-foreground">
            {formatCurrency(paid)} / {formatCurrency(quota)}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Progress 
          value={Math.min(percentage, 100)} 
          className="h-2"
        />
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">
            {percentage.toFixed(0)}% da quota
          </span>
          {difference !== 0 && (
            <span className={cn(
              "font-medium",
              isOverPaying ? "text-warning" : "text-muted-foreground"
            )}>
              {isOverPaying ? "+" : ""}{formatCurrency(difference)}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuotaProgress;