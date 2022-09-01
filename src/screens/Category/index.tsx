import { FlatList } from "react-native";
import React from "react";
import {
  Container,
  CategoryItem,
  Icon,
  Name,
  Separator,
  Footer
} from "./styles";
import { Header } from "../../components/Header";
import { categories } from "../../utils/categories";
import { Button } from "../../components/Forms/Button";

interface ICategory {
  key: string;
  name: string;
}

interface ICategoryProps {
  category: string;
  setCategory: (category: ICategory) => void;
  closeSelectCategory: () => void;
}
export function Category({
  category,
  setCategory,
  closeSelectCategory,
}: ICategoryProps) {
  return (
    <Container>
      <Header title="Categoria" />

      <FlatList
        data={categories}
        style={{ flex: 1, width: "100%" }}
        renderItem={({ item }) => (
          <CategoryItem>
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </CategoryItem>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button title="Selecionar" />
      </Footer>
    </Container>
  );
}
