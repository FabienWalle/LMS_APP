import { StyleSheet, View } from "react-native";
import { Text, Button, Input, Icon } from "@rneui/themed";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthServices from "../../api/services/auth.services";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const Login = async () => {
    AsyncStorage.removeItem("token")
    setLoading(true)
    try {
      let res = await AuthServices.Login({ email, password })
      await AsyncStorage.setItem("token", res.data.token)
      res = await AuthServices.Me();
      await AsyncStorage.setItem("id", res.data.id.toString());
      navigation.navigate("BottomTabNavigator")
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }

  return (
    <View style={styles.login}>
      {loading ? (
        <Text>Ca charge</Text>
      ) : (
        <>
          <Text h3 style={styles.text}>
            Se connecter
          </Text>
          <Input
            leftIcon={<Icon name="email" size={40} marginRight={10} />}
            style={styles.input}
            placeholder="email"
            value={email}
            onChangeText={(e) => setEmail(e)}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Input
            leftIcon={<Icon name="lock" size={40} marginRight={10} />}
            style={styles.input}
            secureTextEntry
            placeholder="password"
            value={password}
            onChangeText={(e) => setPassword(e)}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Button
            buttonStyle={{
              backgroundColor: "black",
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 30,
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            titleStyle={{ fontWeight: "bold" }}
            title="Se connecter"
            onPress={Login}
          />
        </>
      )}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 50,
  },
  text: {
    fontWeight: "bold",
    marginBottom: 100,
    textTransform: "uppercase",
  },
  input: {
    color: "blue",
  },
});
