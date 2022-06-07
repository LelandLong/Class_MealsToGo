import React from "react";
import { Spacer } from "../../components/spacer/spacer.component";
import { Text } from "../../components/typography/text.component";
import {
  Icon,
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Info,
  Rating,
  Section,
  SectionEnd,
  RatingPng,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "data:image/jpeg;base64,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",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  // console.log(ratingArray);

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <RatingPng source={require("../../../assets/Star.png")} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && (
                <RatingPng source={require("../../../assets/IsOpen.png")} />
              )}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
