// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: "#000" },
        tabBarActiveTintColor: "yellow",
      }}
    >
      <Tabs.Screen
        name="page1"
        options={{ title: "Reservas" }}
      />
      <Tabs.Screen
        name="page2"
        options={{ title: "Atendidos" }}
      />
    </Tabs>
  );
}
