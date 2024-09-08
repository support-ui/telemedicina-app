// app/_layout.tsx
import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function RootLayout() {
  return (
    <Stack initialRouteName="master">
      <Stack.Screen 
        name="master" 
        options={{
          title: 'Reservas',
          headerStyle: {
            backgroundColor: '#FEFDFF', // Color de fondo de la cabecera
          },
          headerTitleStyle: {
            fontSize: 16,
            color: '#181818', // Color del texto
          },
        }} 
      />
      <Stack.Screen 
        name="detail" 
        options={{
          title: 'Detalle',
          headerStyle: {
            backgroundColor: '#FEFDFF', // Color de fondo de la cabecera
          },
          headerTitleStyle: {
            fontSize: 16,
            color: '#181818', // Color del texto
          },
        }} 
      />
    </Stack>
  );
}
