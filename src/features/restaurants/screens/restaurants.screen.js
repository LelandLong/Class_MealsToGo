import React, { useState } from "react";
import { StatusBar, FlatList } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../../components/restaurant-info-card.component";
import { RestaurantCard } from "../../components/restaurant-info-card.styles";
import { keyExtractor } from "react-native/Libraries/Lists/VirtualizeUtils";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={() => {}}
          value={searchQuery}
        />
      </SearchContainer>
      <FlatList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
        ]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
