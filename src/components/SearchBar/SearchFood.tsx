import React, { useState } from "react";
import { styled } from "styled-components";

interface Iprops {
  onChange: (value: string) => void;
}
const SearchFood = ({ onChange }: Iprops) => {
  const [search, setSearch] = useState("");
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    search: string
  ) => {
    event.preventDefault();
    onChange(search);
    setSearch("");
  };

  return (
    <SearchFoodStyle onSubmit={(e) => handleSubmit(e, search)}>
      <Input
        type="text"
        placeholder="FoodSearch...."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button type="submit">Search</Button>
    </SearchFoodStyle>
  );
};

const SearchFoodStyle = styled.form`
  margin-top: 10px;
  display: flex;
  gap: 10px;
  justify-content: center;
`;
const Input = styled.input`
  outline: none;
  border: 1px solid #000;
  background: transparent;
  padding: 8px 16px;
`;

const Button = styled.button`
  border: none;
  padding: 8px 14px;
  color: #fff;
  background: blue;
  cursor: pointer;
`;
export default SearchFood;
