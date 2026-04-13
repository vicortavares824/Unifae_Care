import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CurvedBottomTabs } from "@/componente/base/curved-bottom-tabs";

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
          headerTitle: "Organizador de Estudos",
          headerStyle: { backgroundColor: "#8369f5" },
          headerTintColor: "#fff",
        }}
      >
        <Tab.Screen
          name="home"
          component={() => <ScreenPlaceholder name="Início" color="#f8f9fa" />}
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={20}
                color={focused ? "#FFFFFF" : "#B9B9B9"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="tasks"
          component={() => <ScreenPlaceholder name="Tarefas" color="#f8f9fa" />}
          options={{
            title: "Tarefas",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "checkbox" : "checkbox-outline"}
                size={20}
                color={focused ? "#FFFFFF" : "#B9B9B9"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="subjects"
          component={() => <ScreenPlaceholder name="Materias" color="#f8f9fa" />}
          options={{
            title: "Materiais",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "school" : "school-outline"}
                size={20}
                color={focused ? "#FFFFFF" : "#B9B9B9"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="notes"
          component={() => <ScreenPlaceholder name="Anotações" color="#f8f9fa" />}
          options={{
            title: "Anotações",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "book" : "book-outline"}
                size={20}
                color={focused ? "#FFFFFF" : "#B9B9B9"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="profile"
          component={() => <ScreenPlaceholder name="Perfil" color="#f8f9fa" />}
          options={{
            title: "Perfil",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={20}
                color={focused ? "#FFFFFF" : "#B9B9B9"}
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
    color: "#333",
  },
});
