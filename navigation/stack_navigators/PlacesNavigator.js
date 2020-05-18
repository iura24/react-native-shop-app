import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PlacesListScreen, {
  placesListScreenOptions,
} from "../../screens/places/PlacesListScreen";
import PlaceDetailScreen, {
  placeDetailScreenOptions,
} from "../../screens/places/PlaceDetailScreen";
import NewPlaceScreen, {
  newPlaceScreenOptions,
} from "../../screens/places/NewPlaceScreen";
import MapScreen, { mapScreenOptions } from "../../screens/places/MapScreen";

const PlacesStackNavigator = createStackNavigator();

export default PlacesNavigator = () => {
  return (
    <PlacesStackNavigator.Navigator>
      <PlacesStackNavigator.Screen
        name="Places"
        component={PlacesListScreen}
        options={placesListScreenOptions}
      />
      <PlacesStackNavigator.Screen
        name="PlaceDetail"
        component={PlaceDetailScreen}
        options={placeDetailScreenOptions}
      />
      <PlacesStackNavigator.Screen
        name="NewPlace"
        component={NewPlaceScreen}
        options={newPlaceScreenOptions}
      />
      <PlacesStackNavigator.Screen
        name="Map"
        component={MapScreen}
        options={mapScreenOptions}
      />
    </PlacesStackNavigator.Navigator>
  );
};
