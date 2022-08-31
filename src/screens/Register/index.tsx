import React, { useState } from "react";
import { Button } from "../../components/Forms/Button";
import { Input } from "../../components/Forms/Input";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import { Header } from "../../components/Header";
import { Container, Form, Fields } from "./styles";

export function Register() {
  const [transactionType, setTransactionType] = useState("");

  function handleTransactionTypeSelect(type: "up" | "down"): void {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header title="Cadastro" />

      <Form>
        <Fields direction="vertical">
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />

          <Fields direction="horizontal">
            <TransactionTypeButton
              title="Income"
              type="up"
              onPress={() => handleTransactionTypeSelect("up")}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton
              title="Outcome"
              type="down"
              onPress={() => handleTransactionTypeSelect("down")}
              isActive={transactionType === 'down'}
            />
          </Fields>
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
}