import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // Asegúrate de tener 'expo-vector-icons' instalado

export const HomeIcon = ({ color }: { color: string }) => (
  <Ionicons name="home" size={24} color={color} />
);

export const InfoIcon = ({ color }: { color: string }) => (
  <Ionicons name="information-circle" size={24} color={color} />
);
