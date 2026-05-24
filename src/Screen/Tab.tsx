import { CurvedBottomTabs } from "@/componente/base/curved-bottom-tabs";
import { theme } from "@/styles/global";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Calendario from "./Calendario";
import Home from "./Home";
import Perfil from "./Perfil";
import Progresso from "./Progresso";
const Tab = createBottomTabNavigator();

function ScreenPlaceholder({ name, color }: { name: string; color: string }) {
  return (
    <View style={[styles.placeholder, { backgroundColor: color }]}>
      <Text style={styles.placeholderText}>{name}</Text>
    </View>
  );
}

export default function Tabs() {
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
            <Home />
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
          component={Calendario}
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
            <Progresso Progress={30} />
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
