![GitHub repo size](https://img.shields.io/github/repo-size/LucasHARosa/Dupla-grana)
![GitHub language count](https://img.shields.io/github/languages/count/LucasHARosa/Dupla-grana)
![GitHub top language](https://img.shields.io/github/languages/top/LucasHARosa/Dupla-grana)
![GitHub last commit](https://img.shields.io/github/last-commit/LucasHARosa/Dupla-grana)

# Dupla Grana – Gestão Financeira para Casais

Aplicação web moderna para **gerenciamento financeiro de casais**, permitindo divisão proporcional de despesas, acompanhamento de gastos compartilhados e organização das finanças domésticas de forma justa e transparente.

O projeto utiliza uma **stack moderna e escalável**, com foco em **performance, experiência do usuário e design responsivo**.

---

## 📌 Objetivo do Projeto

- Facilitar a **divisão proporcional de despesas** entre casais
- Acompanhar **gastos compartilhados e individuais**
- Visualizar **status de pagamentos** e cotas
- Proporcionar uma **interface moderna e intuitiva**
- Servir como **base para gestão financeira colaborativa**

---

## 🧱 Arquitetura

O projeto segue uma estrutura organizada e escalável:

### 📁 Estrutura de Pastas

```text
├── src
│   ├── components
│   │   ├── DashboardCard.tsx
│   │   ├── ExpenseItem.tsx
│   │   ├── QuotaProgress.tsx
│   │   └── ui/                    # Componentes shadcn/ui
│   ├── hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib
│   │   └── utils.ts
│   ├── pages
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   └── main.tsx
│
├── public
├── components.json                 # Configuração shadcn/ui
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

### 🔹 Conceitos aplicados

- Componentização modular e reutilizável
- Sistema de design com **shadcn/ui**
- Gerenciamento de estado com **React Query**
- Roteamento com **React Router**
- Estilização com **Tailwind CSS**
- TypeScript para type-safety
- Tema customizado com gradientes

---

## 🚀 Funcionalidades

As principais funcionalidades da aplicação incluem:

- 💰 Cadastro e acompanhamento de despesas compartilhadas
- 📊 Dashboard com visão geral das finanças
- 🔄 Divisão proporcional baseada na renda
- 📅 Controle de vencimentos e status de pagamentos
- 👥 Identificação de quem pagou cada despesa
- 📈 Visualização de cotas e progresso
- 🎨 Interface moderna com gradientes e animações
- 📱 Design totalmente responsivo

---

## ▶️ Executando o Projeto

Primeiro, clone o repositório e instale as dependências:

```bash
# Clone o repositório
git clone https://github.com/LucasHARosa/Dupla-grana.git

# Entre no diretório
cd Dupla-grana

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

---

## 🛠️ Tecnologias Utilizadas

### Core
- **React** – Biblioteca para construção de interfaces
- **TypeScript** – Superset JavaScript com tipagem estática
- **Vite** – Build tool moderna e rápida

### UI/UX
- **Tailwind CSS** – Framework CSS utility-first
- **shadcn/ui** – Componentes acessíveis e customizáveis
- **Radix UI** – Primitivos de UI sem estilo
- **Lucide React** – Ícones modernos

### Gerenciamento de Estado
- **TanStack React Query** – Data fetching e cache
- **React Hook Form** – Gerenciamento de formulários
- **Zod** – Validação de schemas

### Roteamento
- **React Router DOM** – Navegação SPA

---

## 📁 Componentes Principais

### DashboardCard
Exibe cards de resumo com métricas financeiras

### ExpenseItem
Representa uma despesa individual com status, categoria e informações de pagamento

### QuotaProgress
Barra de progresso mostrando a cota de cada pessoa

---

## 🚀 Deploy

O projeto está configurado para deploy via **Lovable** e pode ser facilmente publicado:

```bash
npm run build
```

Acesse: https://lovable.dev/projects/05db1131-90cd-49b2-af22-aca5bdc16c3d

---

## 📚 Referências

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [TanStack Query](https://tanstack.com/query)

---

<div align="center">
    
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) 

</div>
