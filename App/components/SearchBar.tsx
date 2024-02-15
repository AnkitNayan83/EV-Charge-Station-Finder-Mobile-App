import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function SearchBar({ searchedLocation }) {
    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                fetchDetails
                placeholder="Search EV charging station"
                onPress={(data, details = null) => {
                    console.log(data, details);
                    searchedLocation(details?.geometry?.location);
                }}
                query={{
                    key: "PLACES API KEY",
                    language: "en",
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
});
