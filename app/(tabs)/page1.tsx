import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function Page1() {
  return (
    <View style={{ flex: 1 }} className='p-1'>
      <Text className='mb-4 text-lg font-medium'>Historial de Reservas</Text>
      <View className="bg-white shadow-lg p-2 mb-2">
        <Text className="text-lg font-bold mt-2">Card Title</Text>
        <Text className="text-gray-500 mt-2">
          This is a description of the card. It can be multiple lines and provide some information about the content.
        </Text>
        <TouchableOpacity className="bg-blue-500 rounded-lg mt-4 p-2 mb-4">
          <Text className="text-white text-center">Click Me</Text>
        </TouchableOpacity>
      </View>
      <View className="bg-white shadow-lg p-2 mb-2">
        <Text className="text-lg font-bold mt-2">Card Title</Text>
        <Text className="text-gray-500 mt-2">
          This is a description of the card. It can be multiple lines and provide some information about the content.
        </Text>
        <TouchableOpacity className="bg-blue-500 rounded-lg mt-4 p-2 mb-4">
          <Text className="text-white text-center">Click Me</Text>
        </TouchableOpacity>
      </View>
      <View className="bg-white shadow-lg p-2 mb-2">
        <Text className="text-lg font-bold mt-2">Card Title</Text>
        <Text className="text-gray-500 mt-2">
          This is a description of the card. It can be multiple lines and provide some information about the content.
        </Text>
        <TouchableOpacity className="bg-blue-500 rounded-lg mt-4 p-2 mb-4">
          <Text className="text-white text-center">Click Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
