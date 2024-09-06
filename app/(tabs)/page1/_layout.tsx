// app/_layout.tsx
import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function RootLayout() {
  return (
    <Stack initialRouteName="master"   >
      <Stack.Screen name="master" options={{title:'Reservas'}} />
      <Stack.Screen name="detail" options={{title:'Detalle'}}  />
    </Stack>
  );
}

 