import React from "react";
import {
  Container,
  Header,
  UserContainer,
  UserPhoto,
  UserTextWrapper,
  UserGreeting,
  UserName,
  UserWrapper,
  IconFeather,
  HighlightCards,
  Title,
  Transactions,
  TransactionsList,
} from "./styles";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";

interface IHighlightCardContent {
  type: "up" | "down" | "total";
  title: string;
  amount: string;
  lastTransaction: string;
}

const HighlightCardContent: IHighlightCardContent[] = [
  {
    type: "up",
    title: "Entradas",
    amount: "R$ 17.400,00",
    lastTransaction: "Última entrada dia 13 de abril",
  },
  {
    type: "down",
    title: "Saídas",
    amount: "R$ 1.259,00",
    lastTransaction: "Última saída dia 03 de abril",
  },
  {
    type: "total",
    title: "Total",
    amount: "R$ 16.141,00",
    lastTransaction: "01 à 16 de abril",
  },
];

const renderHighlightCard = ({
  type,
  title,
  amount,
  lastTransaction,
}: IHighlightCardContent): JSX.Element => {
  return (
    <HighlightCard
      key={type}
      type={type}
      title={title}
      amount={amount}
      lastTransaction={lastTransaction}
    />
  );
};

const TransactionCardContent = [
  {
    id: 1,
    type: "positive",
    title: "Desenvolvimento",
    amount: "R$ 12.000,00",
    category: {
      name: "Vendas",
      icon: "dollar-sign",
    },
    date: "13/04/2020",
  },
  {
    id: 2,
    type: "negative",
    title: "Hamburgueria Pizzy",
    amount: "- R$ 59,00",
    category: {
      name: "Alimentação",
      icon: "coffee",
    },
    date: "10/04/2020",
  },
  {
    id: 3,
    type: "negative",
    title: "Aluguel do apartamento",
    amount: "- R$ 1200,00",
    category: {
      name: "Casa",
      icon: "shopping-bag",
    },
    date: "09/04/2020",
  },
];

interface ITypeAmount {
  type: "positive" | "negative";
}

type TransactionCardContent = Omit<typeof TransactionCardContent[0], "type">;

interface ITransactionCard extends TransactionCardContent {
  type: ITypeAmount;
}

interface renderTransaction {
  item: ITransactionCard;
}

const renderTransaction = ({
  item: { type, title, amount, category, date },
}: renderTransaction): JSX.Element => {
  return (
    <TransactionCard
      title={title}
      amount={amount}
      category={category}
      date={date}
      type={type}
    />
  );
};

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserContainer>
            <UserPhoto
              source={{
                uri: "https://avatars.githubusercontent.com/u/73440184?v=4",
              }}
            />
            <UserTextWrapper>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Anderson</UserName>
            </UserTextWrapper>
          </UserContainer>

          <IconFeather name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        {HighlightCardContent.map(renderHighlightCard)}
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionsList
          data={TransactionCardContent}
          renderItem={renderTransaction}
          keyExtractor={(item: ITransactionCard) => item.id}
        />
      </Transactions>
    </Container>
  );
}
