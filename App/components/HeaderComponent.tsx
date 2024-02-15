import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { FontAwesome } from "@expo/vector-icons";
import color from "../Utils/color";

export default function HeaderComponent() {
    const { user } = useUser();
    return (
        <View style={styles.container}>
            <FontAwesome name="filter" size={24} color="black" />
            <View style={styles.logoBody}>
                <Image source={require("../../assets/images/logo.png")} style={styles.logoImg} />
                <Text style={styles.logoText}>EV Charge Finder </Text>
            </View>
            <Image source={{ uri: user?.imageUrl }} style={styles.img} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    img: {
        width: 40,
        height: 40,
        objectFit: "cover",
        borderRadius: 50,
    },
    logoBody: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: color.GREEN,
        gap: 10,
        borderRadius: 20,
        padding: 10,
    },
    logoImg: {
        width: 30,
        height: 30,
        objectFit: "contain",
    },
    logoText: {
        fontFamily: "roboto-bold",
        fontSize: 18,
        borderBottomColor: "green",
        borderBottomWidth: 1,
    },
});
