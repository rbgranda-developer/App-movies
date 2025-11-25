import { useState } from "react";
import { StyleSheet, TextInput, Pressable, Alert, Text } from "react-native";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { Link } from "expo-router";

export default function RegisterScreen() {
  const [nombre, setNombre] = useState("");
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [genero, setGenero] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState(new Date());
  const [mostrarPickerFecha, setMostrarPickerFecha] = useState(false);

  const handleRegister = () => {
    if (!nombre || !usuario || !contrasena || !genero) {
      Alert.alert("Error", "Por favor completa todos los campos.");
      return;
    }

    if (contrasena.length < 6) {
      Alert.alert("Contraseña inválida", "La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    const hoy = new Date();
    if (fechaNacimiento >= hoy) {
      Alert.alert("Fecha inválida", "La fecha de nacimiento debe ser anterior a hoy.");
      return;
    }

    Alert.alert("Registro exitoso", `Bienvenido, ${nombre}`);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Crear Cuenta
      </ThemedText>

      {/* Nombre */}
      <ThemedText style={styles.label}>Nombre completo</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        placeholderTextColor="#999"
        value={nombre}
        onChangeText={setNombre}
      />

      {/* Usuario */}
      <ThemedText style={styles.label}>Usuario</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        placeholderTextColor="#999"
        value={usuario}
        onChangeText={setUsuario}
        autoCapitalize="none"
      />

      {/* Contraseña */}
      <ThemedText style={styles.label}>Contraseña</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Crea una contraseña"
        placeholderTextColor="#999"
        secureTextEntry={true}
        value={contrasena}
        onChangeText={setContrasena}
      />

      {/* Género */}
      <ThemedText style={styles.label}>Género</ThemedText>
      <Picker
        selectedValue={genero}
        onValueChange={(itemValue) => setGenero(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Selecciona tu género" value="" />
        <Picker.Item label="Masculino" value="M" />
        <Picker.Item label="Femenino" value="F" />
        <Picker.Item label="Otro" value="O" />
      </Picker>

      {/* Fecha de nacimiento */}
      <ThemedText style={styles.label}>Fecha de nacimiento</ThemedText>

      <Pressable
        style={styles.dateButton}
        onPress={() => setMostrarPickerFecha(true)}
      >
        <Text style={styles.dateButtonText}>
          {fechaNacimiento.toLocaleDateString()}
        </Text>
      </Pressable>

      {mostrarPickerFecha && (
        <DateTimePicker
          mode="date"
          value={fechaNacimiento}
          onChange={(event, selectedDate) => {
            setMostrarPickerFecha(false);
            if (selectedDate) setFechaNacimiento(selectedDate);
          }}
        />
      )}

      {/* Botón Registrar */}
      <Pressable style={styles.registerButton} onPress={handleRegister}>
        <ThemedText style={styles.registerButtonText}>Registrarme</ThemedText>
      </Pressable>

      {/* Ir al login */}
      <Link href="/explore" asChild>
        <Pressable>
          <ThemedText style={styles.loginRedirect}>
            ¿Ya tienes cuenta?{" "}
            <Text style={styles.loginRedirectLink}>Inicia sesión</Text>
          </ThemedText>
        </Pressable>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
  },
  title: {
    textAlign: "center",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    color: "#000",
    fontSize: 16,
  },
  picker: {
    backgroundColor: "#fff",
    borderRadius: 8,
    height: 50,
    marginBottom: 5,
  },
  dateButton: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  dateButtonText: {
    fontSize: 16,
    color: "#000",
  },
  registerButton: {
    backgroundColor: "#0a7ea4",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginRedirect: {
    marginTop: 15,
    fontSize: 16,
    textAlign: "center",
    color: "#555",
  },
  loginRedirectLink: {
    color: "#0a7ea4",
    fontWeight: "bold",
  },
});
