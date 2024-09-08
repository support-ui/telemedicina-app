import { View, FlatList, ActivityIndicator, TextInput, Text } from 'react-native';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import Citas from '../../../components/Citas';
import { SearchIcon } from '../../../components/Icons';
import { useFonts } from 'expo-font';

const INITIAL_DATA = [...Array(5).keys()].map(index => ({
    id: index,
    hour: '09:00',
    category: index === 0 ? 'Oncología' : 'General',
    doctor: 'Doctora Ana María Rivera',
    date: `Miércoles ${(index + 1) * 2} de Septiembre 2024`,
    presencial: index % 3 === 0,
    fullColor: index % 2 === 0
}));

interface ListItem {
    id: number;
    hour: string;
    category: string;
    doctor: string;
    date: string;
    presencial: boolean;
    fullColor: boolean;
}

export default function Page1() {
    const router = useRouter();
    const [data, setData] = useState(INITIAL_DATA);
    const [filteredData, setFilteredData] = useState(INITIAL_DATA);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true); 
    const [searchTerm, setSearchTerm] = useState('');
    const [fontsLoaded] = useFonts({
        Ubuntu:require("../../../assets/fonts/ubuntu/Ubuntu-Regular.ttf")
      })
    // Función para filtrar los datos
    const filterData = (text: string) => {
        setSearchTerm(text);
        const lowercasedText = text.toLowerCase();
        const filtered = INITIAL_DATA.filter(item =>
            item.hour.toLowerCase().includes(lowercasedText) ||
            item.category.toLowerCase().includes(lowercasedText) ||
            item.doctor.toLowerCase().includes(lowercasedText) ||
            item.date.toLowerCase().includes(lowercasedText)
        );
        setFilteredData(filtered);
    };

    const renderItem = ({ item }: { item: ListItem }) => (
        <Citas
            hour={item.hour}
            category={item.category}
            doctor={item.doctor}
            date={item.date}
            presencial={item.presencial}
            fullColor={item.fullColor}
            onPress={() => router.push('/(tabs)/page1/detail')}
        />
    );

    return (
        <View className='flex-1 bg-[#FEFDFF]'>
            <View className='flex-row items-center p-2 mt-3'>
                <TextInput
                    placeholder='Buscar...'
                    className='bg-[#FEFDFF]'
                    value={searchTerm}
                    onChangeText={filterData}
                    style={{ 
                        flex: 1,
                        marginLeft: 1,
                        borderColor: 'gray',
                        borderWidth: 1,
                        borderRadius: 25,
                        paddingHorizontal: 8,
                        paddingVertical: 6,
                        paddingStart:15,
                        fontFamily:"Ubuntu"
                    }}
                />
            </View>
            <View>
                <Text className='ml-4'></Text>
            </View>
            <FlatList
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                onEndReached={() => {}}
                onEndReachedThreshold={0.5}
                ListFooterComponent={loading && hasMore ? <ActivityIndicator size="large" color="#0000ff" /> : null}
            />
        </View>
    );
}
