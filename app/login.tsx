// app/login.tsx
import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { Link, useRouter } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <View className="flex-1 justify-center items-center p-[10px]">
            <Image
              source={require('../assets/logo.png')}
              className="w-40 h-32 mb-6 mx-auto"
              resizeMode="stretch"
            />

            <Text className="text-3xl font-semibold text-gray-800 mb-6 text-center">Seja bem-vindo</Text>

            <TextInput
              className="w-full bg-white p-[14px] mb-4 rounded-xl border border-gray-200 shadow-sm"
              placeholder="Usuário"
              keyboardType="default"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              className="w-full bg-white p-[14px] mb-6 rounded-xl border border-gray-200 shadow-sm"
              placeholder="Senha"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <Link asChild href="/page1">
            <TouchableOpacity
              className="w-full bg-[#5991A5] p-[12px] rounded-full shadow-lg mb-4"
            >
              <Text className="text-center text-white font-semibold text-lg">Entre</Text>
            </TouchableOpacity>
            </Link>
            

            <View className="flex-row justify-between">
              <TouchableOpacity>
                <Text className="text-blue-600 text-center">Registrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
