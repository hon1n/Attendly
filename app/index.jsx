import { View, Text, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Redirect, router } from 'expo-router'

import { images } from '../constants'

import CustomButton from '../components/CustomButton'

const Welcome = () => {
  return (
    <SafeAreaView className="bg-secondary h-full">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
            <View className="w-full justify-center items-center h-full px-5 min-h-[100vh]">
                <Image
                    source={images.logo}
                    resizeMode="contain"
                    className="w-[70px] h-[70px]"
                />

                <Image
                    source={images.peoples}
                    resizeMode="contain"
                    className="w-[350px] h-[216px] mt-7"
                />

                <View className="mt-4 relative">
                    <Text className="text-2xl font-sfmedium text-center">Управлять посещаемостью стало ещё проще с{'\u00A0'}
                    <Text className="text-2xl font-sfsemibold text-primary underline">Attendly</Text></Text>
                </View>

                <Text className="mt-3 ext-sm font-sfmedium text-center text-black-350">Актуальное расписание, простой и понятный интерфейс помогут вам в этом</Text>

                <CustomButton
                    title="Перейти к следующему шагу"
                    handlePress={() => router.push('/sign-in')}
                    containerStyles="w-full mt-4"
                />
            </View>
        </ScrollView>
        <StatusBar backgroundColor="#F0F0F0" style='black' />
    </SafeAreaView>
  )
}

export default Welcome