import { useState } from 'react';
import { Image,Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí va la lógica de autenticación
    console.log(`Email: ${email}, Password: ${password}`);
  };

  const handleRegister = () => {
    // Aquí va la lógica para registrar un nuevo usuario
    console.log('Navigate to Register screen');
  };

  const handleForgotPassword = () => {
    // Aquí va la lógica para manejar la contraseña olvidada
    console.log('Navigate to Forgot Password screen');
  };


  return (
    <View className="flex-1 justify-center items-center bg-gray-50 p-8">
      <View className="w-full max-w-xs">
        <Image
          source={require('./assets/logo.png')} // Ruta de la imagen del logo
          className="w-40 h-32 mb-6 mx-auto"
          resizeMode="stretch"
        />
        
        <Text className="text-3xl font-semibold text-gray-800 mb-6 text-center">Seja bem-vindo</Text>

        <TextInput
          className="w-full bg-white p-4 mb-4 rounded-2xl border border-gray-200 shadow-sm"
          placeholder="Usuario"
          keyboardType="default"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        
        <TextInput
          className="w-full bg-white p-4 mb-6 rounded-2xl border border-gray-200 shadow-sm"
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        
        <TouchableOpacity
          className="w-full bg-blue-600 p-4 rounded-2xl shadow-lg mb-4"
          onPress={handleLogin}
        >
          <Text className="text-center text-white font-semibold text-lg">Login</Text>
        </TouchableOpacity>
        
        <View className="flex-row justify-between">
          <TouchableOpacity onPress={handleRegister}>
            <Text className="text-blue-600 text-center">Registrar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text className="text-blue-600 text-center">Olvidé contraseña</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
