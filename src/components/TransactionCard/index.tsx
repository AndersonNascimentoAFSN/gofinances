import React from "react";
import {
  Container,
  HeaderTransaction,
  Title,
  Amount,
  TransactionFooter,
  Category,
  CategoryIcon,
  CategoryName,
  TransactionDate,
} from "./styles";

interface ICategory {
  name: string;
  icon: string;
}

interface ITypeAmount {
  type: "positive" | "negative";
}

interface ITransactionCardProps {
  type: ITypeAmount;
  title: string;
  amount: string;
  category: ICategory;
  date: string;
}

export function TransactionCard({
  type,
  title,
  amount,
  category,
  date,
}: ITransactionCardProps) {
  return (
    <Container>
      <HeaderTransaction>
        <Title>{title}</Title>
        <Amount type={type}>{amount}</Amount>
      </HeaderTransaction>

      <TransactionFooter>
        <Category>
          <CategoryIcon name={category.icon}/>
          <CategoryName>{category.name}</CategoryName>
        </Category>
        <TransactionDate>{date}</TransactionDate>
      </TransactionFooter>
    </Container>
  );
}
