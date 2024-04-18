import { View, Text, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Redirect, router } from 'expo-router'

import { images } from '../constants'

import CustomButton from '../components/CustomButton'

const Welcome = () => {
  return (
    <SafeAreaView className="bg-white h-full">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
            <View className="w-full justify-center items-center h-full px-5">
                <Image
                    source={images.logo}
                    resizeMode="contain"
                    className="w-[70px] h-[70px]"
                />

                <Text className="text-2xl font-sfmedium text-center mt-7 relative">Расскажите о себе</Text>
                
                <CustomButton
                    title="Перейти к следующему шагу"
                    handlePress={() => {}}
                    contrainerStyles="w-full mt-4"
                />
            </View>
        </ScrollView>

        <StatusBar backgroundColor='#ffffff' style='black' />
    </SafeAreaView>
  )
}

export default Welcome