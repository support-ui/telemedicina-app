// Citas.tsx
import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { VideoIcon } from './Icons';


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

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View className='flex-row items-start p-2 border-[1px] rounded-[15px] border-[#EBEAED] m-1'>
                <Text className='text-gray-700 font-bold text-lg'>{hour}</Text>
                <View className='flex-row items-center ml-4'>
                    <View className='flex items-center'>
                        <View className='w-5 h-5 rounded-full mb-1'
                            style={[
                                circleStyle
                            ]}
                        />
                        <View className='w-[2px] h-full bg-gray-400 flex-1' />
                    </View>
                </View>

                <View className='ml-4'>
                    <Text className='text-blue-500 font-bold text-base'>{category}</Text>
                    <Text className='text-gray-700'>{doctor}</Text>
                    <Text className='text-gray-500'>{date}</Text>
                    <View className='flex-row items-center justify-between'>
                        <View className='mt-1'
                            style={{
                                backgroundColor,
                                borderRadius: 15,
                                paddingHorizontal: 10,
                                paddingVertical: 3,
                                alignSelf: 'flex-start'
                            }}>
                            <Text style={{ color: 'white', fontSize: 12 }}>{presencial ? 'Presencial' : 'Online'}</Text>
                        </View>
                        {fullColor && !presencial && (
                            <View className='mt-1'
                                style={{
                                    backgroundColor,
                                    borderRadius: 15,
                                    paddingHorizontal: 10,
                                    paddingVertical: 3,
                                    alignSelf: 'flex-start'
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
