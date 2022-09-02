import { FlatList } from "react-native";
import React from "react";
import {
  Container,
  CategoryItem,
  Icon,
  Name,
  Separator,
  Footer,
} from "./styles";
import { Header } from "../../components/Header";
import { categories } from "../../utils/categories";
import { Button } from "../../components/Forms/Button";

interface ICategory {
  key: string;
  name: string;
}

interface ICategorySelectProps {
  category: ICategory;
  setCategory: (category: ICategory) => void;
  closeSelectCategory: () => void;
}
export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory,
}: ICategorySelectProps) {
  function handleCategorySelect(category: ICategory) {
    setCategory(category);
  }

  return (
    <Container>
      <Header title="Categoria" />

      <FlatList
        data={categories}
        style={{ flex: 1, width: "100%" }}
        renderItem={({ item }) => (
          <CategoryItem
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </CategoryItem>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button title="Selecionar" onPress={closeSelectCategory} />
      </Footer>
    </Container>
  );
}
