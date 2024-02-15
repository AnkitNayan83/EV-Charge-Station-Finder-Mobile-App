import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapComponent from "../../components/MapComponent";
import HeaderComponent from "../../components/HeaderComponent";
import SearchBar from "../../components/SearchBar";

export default function HomeScreen() {
    return (
        <View style={styles.body}>
            <View style={styles.headerContainer}>
                <HeaderComponent />
                <SearchBar searchedLocation={(location) => console.log(location)} />
            </View>
            <MapComponent />
        </View>
    );
}

const styles = StyleSheet.create({
    body: { paddingTop: 30, flex: 1, position: "relative" },
    headerContainer: {
        position: "absolute",
        zIndex: 10,
        paddingTop: 40,
        width: "100%",
        paddingHorizontal: 20,
    },
});
