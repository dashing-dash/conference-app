import { Link } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <TouchableOpacity style={styles.button}>
        <Link href="/auth/login" style={styles.buttonText}>Login</Link>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Link href="/auth/signup" style={styles.buttonText}>Signup</Link>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Link href="/(home)" style={styles.buttonText}>Home</Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#841584",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});
