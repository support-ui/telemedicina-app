import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { VideoIcon } from './Icons';
import { useFonts } from 'expo-font';

interface CitasProps {
    hour: string;
    category: string;
    doctor: string;
    date: string;
    presencial: boolean;
    fullColor: boolean;
    onPress: () => void;
}

const Citas: React.FC<CitasProps> = ({
    hour,
    category,
    doctor,
    date,
    presencial,
    fullColor,
    onPress
}) => {
    const backgroundColor = presencial ? '#4CAF50' : '#2196F3';
    const circleColor = category === 'Oncología' ? '#3E4684' : '#FFA71A';
    const circleStyle = fullColor
        ? { backgroundColor: circleColor }
        : { borderColor: circleColor, borderWidth: 2, backgroundColor: 'transparent' };

    const [fontsLoaded] = useFonts({
        Ubuntu: require("../assets/fonts/ubuntu/Ubuntu-Regular.ttf")
    });

    if (!fontsLoaded) {
        return null; // Puedes mostrar un indicador de carga si lo deseas
    }

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View className='flex-row items-start p-2 border-[1px] rounded-[15px] border-[#EBEAED] m-1'>
                <View className='flex'>
                    {/* Envuelve hora y estado en un View con espacio asegurado */}
                    <View className='flex items-start' style={{ width: 90 }}>
                        <Text className='text-gray-700 font-bold text-lg' style={{ fontFamily: "Ubuntu" }}>
                            {hour}
                        </Text>
                        <View className='mt-1'>
                            <Text style={{ color: 'black', fontSize: 12, fontFamily: "Ubuntu" }}>
                                {presencial ? 'Presencial' : 'Online'}
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Columna para el círculo y la línea */}
                <View className='flex-row items-center ml-4'>
                    <View className='flex items-center'>
                        <View className='w-5 h-5 rounded-full mb-1'
                            style={circleStyle}
                        />
                        <View className='w-[2px] h-full bg-gray-400 flex-1' />
                    </View>
                </View>

                {/* Información del doctor, categoría y fecha */}
                <View className='ml-2'>
                    <Text className='text-blue-500 font-bold text-base' style={{ fontFamily: "Ubuntu" }}>
                        {category}
                    </Text>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text
                            className='text-gray-700'
                            style={{ fontFamily: "Ubuntu", flexShrink: 1, flexWrap: 'wrap', maxWidth: 200 }} // Asegura el salto de línea
                        >
                            {doctor}
                        </Text>
                        <Text
                            className='text-gray-500 mt-1'
                            style={{ fontFamily: "Ubuntu", flexShrink: 1, flexWrap: 'wrap', maxWidth: 200 }} // Asegura el salto de línea
                        >
                            {date}
                        </Text>
                    </View>


                    {/* Icono de video si es online */}
                    <View className='flex-row' style={{ flex: 1 }}>
                        {fullColor && !presencial && (
                            <View className='mt-1'
                                style={{
                                    backgroundColor,
                                    borderRadius: 15,
                                    paddingHorizontal: 10,
                                    paddingVertical: 3,
                                    alignSelf: 'flex-start',
                                    width: '80%',
                                }}>
                                <Text style={{ color: 'white', fontSize: 12 }}>
                                    <VideoIcon color='white' />
                                </Text>
                            </View>
                        )}
                    </View>

                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Citas;
