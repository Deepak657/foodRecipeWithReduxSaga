import React, { useEffect } from "react";
import { useGSelector } from "../redux/Store";
import { useDispatch } from "react-redux";
import { FETCH_RECIPE_START } from "../redux/actions/RecipesActions";
import SearchFood from "../components/SearchBar/SearchFood";
import { styled } from "styled-components";
import HomeFoodCard from "../components/Cards/HomeFoodCard";
const Home = () => {
  const foods = useGSelector((state) => state.data.recipes);
  const query = useGSelector((state) => state.query.query);

  const dispatch = useDispatch();

  console.log(foods);

  useEffect(() => {
    dispatch({ type: FETCH_RECIPE_START, query });
  }, [dispatch, query]);

  return (
    <Wrapper>
      <Heading>Recipe App</Heading>
      <SearchFood />
      <FoodCardWrapper>
        {foods.map((food) => {
          return <HomeFoodCard key={food.id} food={food} />;
        })}
      </FoodCardWrapper>
    </Wrapper>
  );
};

const Heading = styled.p`
  color: blue;
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
`;

const Wrapper = styled.div`
  max-width: 1400px;
  margin: auto;
`;

const FoodCardWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
`;
export default Home;
