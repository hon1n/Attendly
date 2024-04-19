import { ScrollView, View, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';

import { useState } from 'react';

const SignIn = () => {
  const [form, setForm] = useState({
    phoneNumber: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {

  }

  return (
    <SafeAreaView className="bg-secondary h-full">
      <ScrollView>
        <View className="w-full justify-center items-center min-h-[100vh] px-5">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[70px] h-[70px]"
          />

          <Text className="text-2xl font-sfsemibold text-center mt-4">Авторизация</Text>

          <FormField
            placeholder="Номер телефона"
            value={form.phoneNumber}
            handleChangeText={(e) => setForm({...form, phoneNumber: e })}
            otherStyles="mt-4"
            inputMode="tel"
            maxLength={11}
          />

          <CustomButton
            title="Авторизоваться"
            handlePress={submit}
            containerStyles="w-full mt-4"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-4 flex-row gap-2">
            <Text className="text-base font-sfmedium text-black-350">У вас нет аккаунта?</Text>
            <Link href="/sign-up" className="text-base font-sfsemibold text-primary">Зарегистрироваться</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn