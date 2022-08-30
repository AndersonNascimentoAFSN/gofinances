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
} from "./styles";
import { HighlightCard } from "../../components/HighlightCard";

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
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </HighlightCards>
    </Container>
  );
}
