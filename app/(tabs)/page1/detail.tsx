import React, { useEffect } from 'react';
import { View, Text, Alert } from 'react-native';

export default function DetailPage() {
    useEffect(() => {
        Alert.alert("Hola", "Estás en la vista detalle.");
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Vista de Detalle</Text>
        </View>
    );
}
