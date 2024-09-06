import { FontAwesome } from '@expo/vector-icons';
import { View, Text, TouchableWithoutFeedback, FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import React, { useState, useCallback } from 'react';

const INITIAL_DATA = [...Array(30).keys()].map(index => ({
    id: index,
    hour: '09:00',
    category: index === 0 ? 'Oncología' : 'General',
    doctor: 'Doctora Ana María Rivera',
    date: `Miércoles ${(index + 1) * 2} de Septiembre 2024`,
}));

export default function Page1() {
    const router = useRouter(); // Hook para navegación
    const [data, setData] = useState(INITIAL_DATA);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true); // Para controlar si hay más datos

    interface ListItem {
        id: number;
        hour: string;
        category: string;
        doctor: string;
        date: string;
      }

    const loadMoreData = useCallback(() => {
        if (loading || !hasMore) return;
        setLoading(true);
        setTimeout(() => {
            // Simula la carga de más datos
            const newData = [...Array(30).keys()].map(index => ({
                id: index + page * 30,
                hour: '09:00',
                category: 'General',
                doctor: 'Doctora Ana María Rivera',
                date: `Miércoles ${(index + 1) * 2 + page * 30} de Septiembre 2024`,
            }));
            setData(prevData => {
                const allData = [...prevData, ...newData];
                // Controla si se ha alcanzado el límite de datos
                if (allData.length >= 30) {
                    setHasMore(false); // No hay más datos que cargar
                    return allData.slice(0, 30); // Limita la cantidad de datos
                }
                return allData;
            });
            setLoading(false);
            setPage(prevPage => prevPage + 1);
        }, 1000);
    }, [loading, page, hasMore]);

    const renderItem = ({ item }: { item: ListItem }) => (
        <TouchableWithoutFeedback
            onPress={() => {
                router.push('/(tabs)/page1/detail');
            }}>
            <View className="flex-row items-start p-2">
                {/* Hora */}
                <Text className="text-gray-700 font-bold text-lg">{item.hour}</Text>

                {/* Línea vertical y Círculo */}
                <View className="flex-row items-center ml-4">
                    {/* Columna con círculo y línea */}
                    <View className="flex items-center">
                        {/* Círculo con animación de pulsación */}
                        <View className={`w-5 h-5 ${item.category === 'Oncología' ? 'bg-[#3E4684]' : 'bg-[#FFA71A]'} rounded-full mb-1 animate-pulse`} />
                        {/* Línea vertical descendente */}
                        <View className="w-[2px] h-full bg-gray-400 flex-1" />
                    </View>
                </View>

                {/* Información de la cita */}
                <View className="ml-4">
                    <Text className="text-blue-500 font-bold text-base">{item.category}</Text>
                    <Text className="text-gray-700">{item.doctor}</Text>
                    <Text className="text-gray-500">{item.date}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            onEndReached={loadMoreData}
            onEndReachedThreshold={0.5} // Carga más datos cuando el usuario llega al 50% del final de la lista
            ListFooterComponent={loading && hasMore ? <ActivityIndicator size="large" color="#0000ff" /> : null}
        />
    );
}
