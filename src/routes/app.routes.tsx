import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import ToDo from "../pages/ToDo";
import Shopping from "../pages/Shopping";

export type StackNavigatorPages = {
    Home: undefined
    ToDo: undefined
    Shopping: undefined
}

const Stack = createStackNavigator<StackNavigatorPages>();

export function AppRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="ToDo" component={ToDo} options={{ headerShown: false }} />
            <Stack.Screen name="Shopping" component={Shopping} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}