import { View, TextInput } from 'react-native';

const FormField = ({ placeholder, value, handleChangeText, otherStyles, inputMode, maxLength, ...props }) => {
    return (
        <View className={`${otherStyles}`}>
            <View className="border-2 border-gray-200 w-full bg-white h-14 rounded-2xl px-5 focus:border-primary items-center flex flex-row">
                <TextInput
                    className="flex-1 font-sfmedium text-base"
                    value={value}
                    placeholder={placeholder}
                    onChangeText={handleChangeText}
                    inputMode={inputMode}
                    maxLength={maxLength}
                />
            </View>
        </View>
    )
}

export default FormField