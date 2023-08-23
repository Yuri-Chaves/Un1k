import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import ToDo from "../pages/ToDo";

export type StackNavigatorPages = {
    Home: undefined
    ToDo: undefined
}

const Stack = createStackNavigator<StackNavigatorPages>();

export function AppRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="ToDo" component={ToDo} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}