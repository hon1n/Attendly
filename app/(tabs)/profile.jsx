import { View, Text, StyleSheet } from 'react-native';

const UserPage = () => {
  return (
    <View style={styles.container}>
      <Text>User page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF"
  }
});


export default UserPage