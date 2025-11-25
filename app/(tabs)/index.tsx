import { useState } from "react";
import { StyleSheet, TextInput, Pressable, Text, View, Alert } from "react-native";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";
import { Link, router } from "expo-router";

export default function LoginScreen() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleLogin = () => {
    if (!usuario || !contrasena) {
      Alert.alert("Error", "Debes llenar todos los campos.");
      return;
    }

    router.replace("/Inicio");
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.innerContainer}>

        <TextInput
          style={styles.input}
          placeholder="Usuario"
          placeholderTextColor="#ccc"
          value={usuario}
          onChangeText={setUsuario}
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={contrasena}
          onChangeText={setContrasena}
        />

        <Pressable style={styles.loginButton} onPress={handleLogin}>
          <ThemedText style={styles.loginButtonText}>Ingresar</ThemedText>
        </Pressable>

        <Link href="/register" asChild>
          <Pressable>
            <Text style={styles.registerText}>
              ¿No tienes cuenta? <Text style={styles.registerLink}>Regístrate</Text>
            </Text>
          </Pressable>
        </Link>

      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",  // 🔥 Fondo negro total (elimina cualquier blanco)
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    width: "90%",
  },
  input: {
    height: 50,
    backgroundColor: "#1a1a1a",
    borderColor: "red",
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 15,
    color: "white",
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: "red",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerText: {
    marginTop: 15,
    textAlign: "center",
    color: "#bbb",
  },
  registerLink: {
    color: "red",
    fontWeight: "bold",
  },
});
