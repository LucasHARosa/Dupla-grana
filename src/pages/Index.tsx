import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, TrendingUp, DollarSign, Users } from "lucide-react";
import DashboardCard from "@/components/DashboardCard";
import ExpenseItem from "@/components/ExpenseItem";
import QuotaProgress from "@/components/QuotaProgress";
import heroImage from "@/assets/hero-couples-finance.jpg";

const Index = () => {
  // Mock data for demonstration
  const mockExpenses = [
    {
      name: "Aluguel",
      amount: 2500,
      category: "Moradia",
      dueDate: "05/12",
      status: "PAGO" as const,
      paidBy: "João",
      isShared: true
    },
    {
      name: "Conta de Luz",
      amount: 180,
      category: "Moradia",
      dueDate: "10/12",
      status: "PENDENTE" as const,
      isShared: true
    },
    {
      name: "Mercado",
      amount: 450,
      category: "Alimentação",
      dueDate: "12/12",
      status: "PARCIAL" as const,
      paidBy: "Maria",
      isShared: true
    },
    {
      name: "Netflix",
      amount: 45,
      category: "Entretenimento",
      dueDate: "15/12",
      status: "ATRASADA" as const,
      isShared: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Header */}
      <header className="bg-card shadow-card border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <DollarSign className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Dupla Grana
              </h1>
            </div>
            <Button className="bg-gradient-primary text-primary-foreground hover:shadow-primary">
              <Plus className="h-4 w-4 mr-2" />
              Nova Despesa
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Gerencie as finanças do casal
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-6">
                Divida as contas de forma proporcional à renda e mantenha as finanças organizadas.
              </p>
              <div className="flex gap-4">
                <Button variant="secondary" size="lg">
                  <Users className="h-5 w-5 mr-2" />
                  Ver Divisão
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Relatórios
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Casal gerenciando finanças juntos" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <DashboardCard
            title="Total do Mês"
            value="R$ 3.175,00"
            subtitle="4 despesas"
            variant="default"
          />
          <DashboardCard
            title="Valor Pago"
            value="R$ 2.950,00"
            subtitle="92,9% do total"
            variant="success"
          />
          <DashboardCard
            title="Pendente"
            value="R$ 225,00"
            subtitle="2 despesas"
            variant="warning"
          />
          <DashboardCard
            title="Investível"
            value="R$ 6.825,00"
            subtitle="Estimado"
            variant="investment"
          />
        </div>

        {/* Quota Progress */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <QuotaProgress
            person="João"
            quota={2100}
            paid={2500}
          />
          <QuotaProgress
            person="Maria"
            quota={1075}
            paid={450}
          />
        </div>

        {/* Expenses */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Despesas do Mês</span>
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Adicionar
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockExpenses.map((expense, index) => (
              <ExpenseItem key={index} {...expense} />
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;
