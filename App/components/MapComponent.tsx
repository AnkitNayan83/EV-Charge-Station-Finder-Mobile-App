import { Image, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import MapView, { Marker } from "react-native-maps";
import mapViewStyle from "../Utils/map-view-style.json";
import { UserLocationContext } from "../Context/UserLocationContext";

export default function MapComponent() {
    const { location, setLocation } = useContext(UserLocationContext);

    return (
        location?.latitude && (
            <View>
                <MapView
                    style={styles.map}
                    customMapStyle={mapViewStyle}
                    region={{
                        latitude: location?.latitude,
                        longitude: location?.longitude,
                        latitudeDelta: 0.0422,
                        longitudeDelta: 0.0421,
                    }}
                    zoomControlEnabled
                >
                    <Marker
                        coordinate={{
                            latitude: location?.latitude,
                            longitude: location?.longitude,
                        }}
                    >
                        <Image
                            style={{ width: 40, height: 40, objectFit: "contain" }}
                            source={require("../../assets/images/car.png")}
                        />
                    </Marker>
                </MapView>
            </View>
        )
    );
}

const styles = StyleSheet.create({
    map: {
        width: "100%",
        height: "100%",
    },
});
