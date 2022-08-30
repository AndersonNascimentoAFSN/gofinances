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
} from "./styles";

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
    </Container>
  );
}
