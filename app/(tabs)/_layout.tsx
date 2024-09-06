// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons"; // Importa los íconos

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { 
          backgroundColor: "#3E4684",
          margin: 8,
          borderRadius: 50,
        },
        tabBarActiveTintColor: "#FFFFFF", // Color blanco para íconos activos
        tabBarInactiveTintColor: "#B0B0B0", // Color gris claro para íconos inactivos
        tabBarItemStyle: {
          marginVertical: 4, // Márgenes superior e inferior para cada ítem
        },
        tabBarLabelStyle: {
          fontSize: 11, // Tamaño del texto
        },
      }}
    >
      <Tabs.Screen
        name="page1"
        options={{
          title: "Reservas",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="calendar" size={20} color={color} /> // Tamaño específico
          ),
        }}
      />
      <Tabs.Screen
        name="page2"
        options={{
          title: "Atendidos",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="check-circle" size={20} color={color} /> // Tamaño específico
          ),
        }}
      />
    </Tabs>
  );
}
