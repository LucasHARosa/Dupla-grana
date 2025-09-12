import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Clock, AlertTriangle, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExpenseItemProps {
  name: string;
  amount: number;
  category: string;
  dueDate: string;
  status: "PENDENTE" | "PAGO" | "ATRASADA" | "PARCIAL";
  paidBy?: string;
  isShared: boolean;
}

const ExpenseItem = ({ name, amount, category, dueDate, status, paidBy, isShared }: ExpenseItemProps) => {
  const getStatusIcon = () => {
    switch (status) {
      case "PAGO":
        return <Check className="h-4 w-4 text-success" />;
      case "ATRASADA":
        return <AlertTriangle className="h-4 w-4 text-destructive" />;
      case "PARCIAL":
        return <Clock className="h-4 w-4 text-warning" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusVariant = () => {
    switch (status) {
      case "PAGO":
        return "default";
      case "ATRASADA":
        return "destructive";
      case "PARCIAL":
        return "secondary";
      default:
        return "outline";
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <Card className="shadow-card hover:shadow-card-hover transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3">
              {getStatusIcon()}
              <div>
                <h3 className="font-medium text-foreground">{name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{category}</span>
                  <span>•</span>
                  <span>{dueDate}</span>
                  {isShared && (
                    <>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        Compartilhada
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="font-semibold text-foreground">{formatCurrency(amount)}</div>
              {paidBy && <div className="text-sm text-muted-foreground">por {paidBy}</div>}
            </div>
            <Badge variant={getStatusVariant()}>{status}</Badge>
            {status === "PENDENTE" && (
              <Button size="sm" variant="outline">
                Pagar
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpenseItem;