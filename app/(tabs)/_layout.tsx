// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function TabsLayout() {
  
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { 
          backgroundColor: "#FEFDFF",
          //backgroundColor: "#3E4684",
          //margin: 8,
          //borderRadius: 50,
        },
        tabBarActiveTintColor: "#181818",
        tabBarInactiveTintColor: "#BBBBBB",
        tabBarItemStyle: {
          marginVertical: 5,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: 'bold'
        },
      }}
    >
      <Tabs.Screen
        name="page1"
        options={{
          title: "Reservas",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="calendar" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="page2"
        options={{
          title: "Atendidos",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="check-circle" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
