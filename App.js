import {
  StyleSheet,
  Text,
  View,
  Button,
  ViewBase,
  TextInput,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import { StatusBar } from "react-native";

let loginButton;

export default function App(props) {
  const { onPressIn, title = "Logga in" } = props;
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Välkommen till Dennify</Text>
      </View>
      <View style={styles1.underContainer}>
        <View style={styles1.loginForm}>
          <Text style={styles1.logIn}>Logga in</Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 10,
              marginLeft: 20,
            }}>
            Logga in för att se vårat sortiment!
          </Text>
          <TextInput style={styles1.fname} placeholder="Ditt namn"></TextInput>
          <TextInput
            style={styles1.lname}
            placeholder="Ditt efternamn"></TextInput>
          <Pressable style={styles1.button} onPressIn={onPressIn}>
            <Text style={styles1.buttonText}>{title}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkblue",
  },

  headerContainer: {
    marginTop: 60,
    marginHorizontal: 10,
  },

  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
    margin: 30,
  },
});

const styles1 = StyleSheet.create({
  underContainer: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    borderRadius: 25,
  },

  loginForm: {
    backgroundColor: "white",
    textAlign: "center",
    height: "50%",
    marginTop: 100,
    marginLeft: 38,
    width: "80%",
    borderRadius: 30,
    borderColor: "grey",
    borderWidth: 3,
  },

  logIn: {
    color: "black",
    marginTop: 40,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  fname: {
    textAlign: "left",
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 30,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    height: 30,
  },

  lname: {
    textAlign: "left",
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
    height: 30,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "blue",
    marginTop: 50,
    marginLeft: 60,
    marginRight: 60,
  },
  buttonText: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
