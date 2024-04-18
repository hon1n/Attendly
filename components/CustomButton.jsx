import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, contrainerStyles, isLoading, textStyles }) => {
  return (
    <TouchableOpacity 
        className={`bg-primary rounded-2xl min-h-[60px] justify-center items-center ${contrainerStyles} ${isLoading ? 'opacity-50' : ''}`}
        onPress={handlePress}
        activeOpacity={0.7}
        disabled={isLoading}
    >
    <Text className={`text-white font-sfsemibold text-base ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton