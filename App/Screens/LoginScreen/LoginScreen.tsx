import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import color from "../../Utils/color";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../../hooks/warmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const handelLogin = React.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow();

            if (createdSessionId) {
                setActive({ session: createdSessionId });
            }
        } catch (err) {
            console.error("OAuth error", err);
        }
    }, []);

    return (
        <View
            style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: 15,
                marginTop: 40,
                backgroundColor: color.GREEN,
                paddingTop: 20,
            }}
        >
            <View style={styles.logo}>
                <Image style={styles.logoImg} source={require("../../../assets/images/logo.png")} />
                <Text style={styles.logoText}>EV Finder </Text>
            </View>
            <Image source={require("../../../assets/images/bg.png")} style={styles.bgImg} />

            <View style={{ padding: 20 }}>
                <Text style={styles.heading}>Your Ultimate EV charging station finder app</Text>
                <Text style={styles.subHeading}>
                    Find EV charging station near you, plan your trip and so much more...
                </Text>
            </View>
            <TouchableOpacity onPress={handelLogin} style={styles.btnBody}>
                <Image source={require("../../../assets/images/g.png")} style={styles.btnImg} />
                <Text style={styles.btnText}>Login With Google </Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    logoImg: {
        height: 40,
        width: 50,
        objectFit: "contain",
    },
    logo: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },
    logoText: {
        fontFamily: "roboto-bold",
        fontSize: 22,
        borderBottomColor: "green",
        borderBottomWidth: 1,
    },
    bgImg: {
        width: "100%",
        height: 300,
        objectFit: "cover",
        marginTop: 20,
        backgroundColor: "#badc57",
    },
    heading: {
        fontSize: 25,
        fontFamily: "roboto-medium",
        textAlign: "center",
        marginTop: 20,
    },
    subHeading: {
        fontSize: 17,
        fontFamily: "roboto",
        marginTop: 15,
        textAlign: "center",
        color: color.GRAY,
    },
    btnBody: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        backgroundColor: color.WHITE,
        padding: 10,
        borderRadius: 20,
        marginTop: 30,
    },
    btnImg: {
        height: 30,
        width: 30,
    },
    btnText: {
        color: color.BLACK,
    },
});
