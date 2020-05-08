import React, { useState, useEffect, useCallback } from "react";
import { Text, StyleSheet, TouchableOpacity, Platform } from "react-native";
import MapView, { Marker } from "react-native-maps";

import Colors from "../../constants/Colors";

const MapScreen = (props) => {
  const initialLocation = props.route.params
    ? props.route.params.initialLocation
    : null;
  const readonly = props.route.params ? props.route.params.readonly : null;

  const [selectedLocation, setSelectedLocation] = useState(initialLocation);
  const mapRegion = {
    latitude: initialLocation ? initialLocation.lat : 37.7,
    longitude: initialLocation ? initialLocation.long : -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  console.log(mapRegion);

  const selectLocationHandler = (event) => {
    if (readonly) {
      return;
    }
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      long: event.nativeEvent.coordinate.longitude,
    });
  };

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      return;
    }
    props.navigation.navigate("NewPlace", { pickedLocation: selectedLocation });
  }, [selectedLocation]);

  useEffect(() => {
    if (readonly) {
      return;
    }
    props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.headerButton}
          onPress={savePickedLocationHandler}
        >
          <Text style={styles.headerButtonText}>Save</Text>
        </TouchableOpacity>
      ),
    });
  }, [savePickedLocationHandler]);

  let markerCoordinates;

  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.long,
    };
  }
  return (
    <MapView
      style={styles.map}
      region={mapRegion}
      onPress={selectLocationHandler}
    >
      {markerCoordinates && (
        <Marker title="Picked Location" coordinate={markerCoordinates}></Marker>
      )}
    </MapView>
  );
};

export const mapScreenOptions = (navData) => {
  // const saveFn = navData.navigation.getParam("saveLocation");
  // const readonly = navData.navigation.getParam("readonly");
  // if (readonly) {
  //   return {};
  // }
  // return {
  //   headerRight: () => (
  //     <TouchableOpacity style={styles.headerButton} onPress={saveFn}>
  //       <Text style={styles.headerButtonText}>Save</Text>
  //     </TouchableOpacity>
  //   ),
  // };
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  headerButton: {
    marginHorizontal: 20,
  },
  headerButtonText: {
    fontSize: 16,
    color: Platform.OS === "android" ? "white" : Colors.primary,
  },
});

export default MapScreen;
