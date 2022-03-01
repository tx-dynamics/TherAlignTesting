import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import * as Location from "expo-location";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../../../components/Text";
import colors from "../../../config/colors";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { ClientRoutes } from "../../../navigation/Routes";
import { hp, wp } from "../../../Helpers/Responsiveness";
import ImagesPath from "../../../constants/ImagesPath";

const GOOGLE_API_KEY = "";

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
      imageURI: ImagesPath.dr1,
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
      imageURI: ImagesPath.dr2,
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
      imageURI: ImagesPath.dr3,
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
      imageURI: ImagesPath.dr4,
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
            top: wp(35),
            width: wp(90),
            justifyContent: "center",
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
                textInput: { paddingLeft: wp(10), height: "100%" },
                listView: { backgroundColor: "white" },
              }}
              placeholder="Search Therapist, Practice..."
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
          {/* <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
          /> */}
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
            width: wp(12),
            height: wp(12),
            position: "absolute",
            bottom: hp(20),
            right: wp(5),
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
                  width: wp(20),
                  height: hp(12),
                  borderRadius: 10,
                  marginHorizontal: wp(4),
                }}
                source={therapiDetail.imageURI}
              />

              <View>
                <AppText style={{ fontSize: wp(5) }}>
                  {therapiDetail.name}
                </AppText>
                <AppText style={{ fontSize: wp(4) }}>
                  {therapiDetail.title}
                </AppText>
                <AppText style={{ fontSize: wp(4) }}>
                  <MaterialCommunityIcons
                    name="star"
                    size={20}
                    color="#FFD700"
                  />{" "}
                  {therapiDetail.rating} ({therapiDetail.review} reviews)
                </AppText>
                <AppText style={{ fontSize: wp(4) }}>
                  {therapiDetail.address}
                </AppText>
              </View>

              <TouchableOpacity
                style={{
                  backgroundColor: "#f23535",
                  borderRadius: 10,
                  alignSelf: "flex-start",
                  marginVertical: wp(4),
                  marginEnd: wp(4),
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
    position: "relative",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: wp(100),
    height: hp(100),
  },
  //   Css

  icon: {
    position: "absolute",
    top: wp(1.5),
    marginHorizontal: wp(2),
    zIndex: 2,
  },

  modal: {
    position: "absolute",
    width: wp(90),
    // height: hp(15),
    padding: wp(4),
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp(2),
    backgroundColor: "#fff",
    borderRadius: 30,
    bottom: wp(2),
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
