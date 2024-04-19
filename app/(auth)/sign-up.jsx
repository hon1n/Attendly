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
    name: "",
    lastName: "",
    status: "",
    phoneNumber: "",
    subdivision: "",
    course: "",
    groupNumber: ""
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

          <Text className="text-2xl font-sfsemibold text-center mt-4">Регистрация</Text>

          <FormField
            placeholder="Имя"
            value={form.name}
            handleChangeText={(e) => setForm({...form, name: e })}
            otherStyles="mt-3"
            inputMode="text"
            maxLength={15}
          />

          <FormField
            placeholder="Фамилия"
            value={form.lastName}
            handleChangeText={(e) => setForm({...form, lastName: e })}
            otherStyles="mt-3"
            inputMode="text"
            maxLength={15}
          />

          <FormField
            placeholder="Номер телефона"
            value={form.phoneNumber}
            handleChangeText={(e) => setForm({...form, phoneNumber: e })}
            otherStyles="mt-3"
            inputMode="tel"
            maxLength={11}
          />

          <FormField
            placeholder="Статус"
            value={form.status}
            handleChangeText={(e) => setForm({...form, status: e })}
            otherStyles="mt-3"
            inputMode="text"
            maxLength={15}
          />

          <FormField
            placeholder="Подразделение"
            value={form.subdivision}
            handleChangeText={(e) => setForm({...form, subdivision: e })}
            otherStyles="mt-3"
            inputMode="text"
            maxLength={15}
          />

          <FormField
            placeholder="Курс"
            value={form.course}
            handleChangeText={(e) => setForm({...form, course: e })}
            otherStyles="mt-3"
            inputMode="text"
            maxLength={15}
          />

          <FormField
            placeholder="Номер группы"
            value={form.groupNumber}
            handleChangeText={(e) => setForm({...form, groupNumber: e })}
            otherStyles="mt-3"
            inputMode="text"
            maxLength={15}
          />

          <CustomButton
            title="Зарегистрироваться"
            handlePress={submit}
            containerStyles="w-full mt-4"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-4 flex-row gap-2">
            <Text className="text-base font-sfmedium text-black-350">Уже есть аккаунт?</Text>
            <Link href="/sign-in" className="text-base font-sfsemibold text-primary">Авторизоваться</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn