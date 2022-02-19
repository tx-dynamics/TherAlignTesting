import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import * as Location from "expo-location";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../../../components/Text";
import colors from "../../../config/colors";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { height, totalSize, width } from "react-native-dimension";
import { ClientRoutes } from "../../../navigation/Routes";

export default function MapScreen({ navigation, route }) {
  const [errorMsg, setErrorMsg] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [therapiDetail, setTherapiDetail] = useState("");
  const [userLocation, setUserLocation] = useState(null);

  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [therapist] = useState([
    {
      id: 1,
      name: "Dr.Alexandro Smith",
      title: "Therapist",
      address: "Temple Hills, MD 20748",
      rating: "4.8",
      review: "141",
      location: {
        longitude: 73.1,
        latitude: 31.6,
      },
      imageURI: require("../../../assets/images/dr1.jpg"),
    },
    {
      id: 2,
      name: "Dr.Bob",
      title: "Therapist",
      address: "Calefornia, NM 2141",
      rating: "4.2",
      review: "100",
      location: {
        longitude: 72.1,
        latitude: 31.1,
      },
      imageURI: require("../../../assets/images/dr2.jpg"),
    },
    {
      id: 3,
      name: "Dr.Alex",
      title: "Therapist",
      address: "Razot JK, 3434",
      rating: "4.5",
      review: "90",
      location: {
        longitude: 71.0,
        latitude: 31.9,
      },
      imageURI: require("../../../assets/images/dr3.jpg"),
    },
    {
      id: 4,
      name: "Dr.Smith",
      title: "Therapist",
      address: "Island Hk, 103",
      rating: "3.9",
      review: "170",
      location: {
        longitude: 70.8,
        latitude: 30.8,
      },
      imageURI: require("../../../assets/images/dr4.jpg"),
    },
  ]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
        longitudeDelta: 0.0922,
        latitudeDelta: 0.0421,
      });
      setUserLocation({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
        longitudeDelta: 0.0922,
        latitudeDelta: 0.0421,
      });
    })();
  }, []);

  return (
    <>
      <View style={styles.container}>
        {/* Search bar */}
        <View
          style={{
            position: "absolute",
            zIndex: 1,
            top: 120,
            width: width(90),
          }}
        >
          {/* Search Icon */}
          <View style={styles.icon}>
            <Ionicons name="search" size={30} color={colors.medium} />
          </View>
          {/* Search Map */}
          <View>
            <GooglePlacesAutocomplete
              /*  textInputProps={{
                // Super hacky.. for auto focus
                ref: (textInput) => {
                  setTimeout(() => textInput && textInput.focus(), 100);
                },
              }} */
              placeholder="Search"
              fetchDetails={true}
              GooglePlacesSearchQuery={{
                rankby: "distance",
              }}
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
                setRegion({
                  latitude: details.geometry.location.lat,
                  longitude: details.geometry.location.lng,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                });
              }}
              query={{
                key: "AIzaSyAeQz4YccyDn0qIDsKjHX1ac-L7lMes1bY",
                language: "en",
                components: "country:us",
                types: "establishment",
                radius: 30000,
                location: `${region.latitude}, ${region.longitude}`,
              }}
              styles={{
                container: {
                  zIndex: 1,
                  borderWidth: 2,
                  borderColor: colors.primary,
                },
                textInput: { paddingLeft: 45, height: "100%" },
                listView: { backgroundColor: "white" },
              }}
              placeholder="Search Therapist, Practice"
            />
          </View>
        </View>
        {/* Map */}
        <MapView
          followsUserLocation
          initialRegion={userLocation}
          region={region}
          onRegionChangeComplete={({
            latitude,
            longitude,
            latitudeDelta,
            longitudeDelta,
          }) =>
            setRegion({ latitude, longitude, latitudeDelta, longitudeDelta })
          }
          style={styles.map}
        >
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
          />
          {therapist.map((therapi) => (
            <Marker
              key={therapi.id}
              coordinate={therapi.location}
              title={therapi.title}
              description={therapi.description}
              onPress={() => {
                setTherapiDetail(therapi);
                setShowModal(true);
              }}
            >
              <Image
                style={{
                  width: 50,
                  resizeMode: "cover",
                  height: 50,
                  borderRadius: 15,
                }}
                source={therapi.imageURI}
              />
            </Marker>
          ))}
        </MapView>
        {/* Loction btn */}
        <TouchableOpacity
          activeOpacity={0.4}
          style={{
            width: width(12),
            height: height(6),
            position: "absolute",
            bottom: height(20),
            right: width(5),
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15,
            backgroundColor: colors.white,
          }}
        >
          <Ionicons
            style={styles.back_btn}
            name="md-locate"
            size={24}
            color="black"
            onPress={() => setRegion(userLocation)}
          />
        </TouchableOpacity>

        {/* Detail Modal */}
        {showModal && (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.modal}
            onPress={() =>
              navigation.navigate(ClientRoutes.HOME_THERAPIST_PROFILE_SCREEN, {
                therapiDetail,
              })
            }
          >
            <>
              <Image
                style={{
                  width: width(20),
                  height: height(12),
                  borderRadius: 10,
                  marginHorizontal: 20,
                }}
                source={therapiDetail.imageURI}
              />

              <View>
                <AppText style={{ fontSize: totalSize(2) }}>
                  {therapiDetail.name}
                </AppText>
                <AppText style={{ fontSize: totalSize(2) }}>
                  {therapiDetail.title}
                </AppText>
                <AppText style={{ fontSize: totalSize(2) }}>
                  <MaterialCommunityIcons
                    name="star"
                    size={20}
                    color="#FFD700"
                  />{" "}
                  {therapiDetail.rating} ({therapiDetail.review} reviews)
                </AppText>
                <AppText style={{ fontSize: totalSize(2) }}>
                  {therapiDetail.address}
                </AppText>
              </View>

              <TouchableOpacity
                style={{
                  backgroundColor: "#f23535",
                  borderRadius: 10,
                  alignSelf: "flex-start",
                  marginVertical: 10,
                  marginEnd: 20,
                  position: "absolute",
                  right: 0,
                }}
                onPress={() => setShowModal(false)}
              >
                <MaterialCommunityIcons
                  name="close"
                  size={20}
                  color={colors.white}
                />
              </TouchableOpacity>
            </>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  map: {
    width: width(100),
    height: height(100),
  },
  //   Css
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 2,
    borderColor: colors.secondary,
    borderWidth: 1,
    paddingLeft: 50,
    fontSize: 18,
    backgroundColor: "#fff",
  },
  icon: {
    position: "absolute",
    // height: "100%",
    marginHorizontal: 10,
    marginVertical: 5,
    justifyContent: "center",
    zIndex: 2,
  },

  modal: {
    position: "absolute",
    width: width(90),
    height: height(20),
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 30,
    bottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    backgroundColor: "#fff",
    elevation: 6,
  },
});
