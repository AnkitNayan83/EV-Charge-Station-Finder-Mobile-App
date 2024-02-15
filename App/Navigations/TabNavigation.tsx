import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import FavouriteScreen from "../Screens/FavouriteScreen/FavouriteScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator initialRouteName="Home" barStyle={{ backgroundColor: "#DAE0E2" }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => <Feather name="home" color={color} size={24} />,
                    tabBarColor: "#3498DB",
                }}
            />
            <Tab.Screen
                name="Favourites"
                component={FavouriteScreen}
                options={{
                    tabBarIcon: ({ color }) => <AntDesign name="staro" size={24} color={color} />,
                    tabBarColor: "#EEC213",
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} />,
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({});
