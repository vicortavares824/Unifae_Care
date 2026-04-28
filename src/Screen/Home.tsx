import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CurvedBottomTabs } from "@/componente/base/curved-bottom-tabs";
import { theme } from "@/styles/global";
import Perfil from "./Perfil";
const Tab = createBottomTabNavigator();

function ScreenPlaceholder({ name, color }: { name: string; color: string }) {
  return (
    <View style={[styles.placeholder, { backgroundColor: color }]}>
      <Text style={styles.placeholderText}>{name}</Text>
    </View>
  );
}

export default function HomeTabs() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tab.Navigator
        tabBar={(props) => <CurvedBottomTabs {...props} />}
        screenOptions={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: "",
        }}
      >
        <Tab.Screen
          name="Início"
          component={() => (
            <ScreenPlaceholder name="Início" color={theme.colors.white} />
          )}
          options={{
            title: "Início",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={20}
                color={focused ? theme.colors.focused : theme.colors.unfocused}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Agenda"
          component={() => (
            <ScreenPlaceholder name="Agenda" color={theme.colors.white} />
          )}
          options={{
            title: "Agenda",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "calendar" : "calendar-outline"}
                size={20}
                color={focused ? theme.colors.focused : theme.colors.unfocused}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Progressos"
          component={() => (
            <ScreenPlaceholder name="Progressos" color={theme.colors.white} />
          )}
          options={{
            title: "Progressos",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "analytics" : "analytics-outline"}
                size={20}
                color={focused ? theme.colors.focused : theme.colors.unfocused}
              />
            ),
          }}
        />
        <Tab.Screen
          name="profile"
          component={Perfil}
          options={{
            title: "Perfil",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={20}
                color={focused ? theme.colors.focused : theme.colors.unfocused}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  placeholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.colors.text,
  },
});
