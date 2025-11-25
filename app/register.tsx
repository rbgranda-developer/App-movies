import { useState } from "react";
import { StyleSheet, TextInput, Pressable, Alert, Text, View } from "react-native";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { Link, router } from "expo-router"; // 👈 IMPORTANTE

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

    // 🔥 Navegar a INICIO después del registro
    router.push("/Inicio");
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
        placeholderTextColor="#888"
        value={nombre}
        onChangeText={setNombre}
      />

      {/* Usuario */}
      <ThemedText style={styles.label}>Usuario</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        placeholderTextColor="#888"
        value={usuario}
        onChangeText={setUsuario}
        autoCapitalize="none"
      />

      {/* Contraseña */}
      <ThemedText style={styles.label}>Contraseña</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Crea una contraseña"
        placeholderTextColor="#888"
        secureTextEntry={true}
        value={contrasena}
        onChangeText={setContrasena}
      />

      {/* Género */}
      <ThemedText style={styles.label}>Género</ThemedText>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={genero}
          onValueChange={(itemValue) => setGenero(itemValue)}
          style={styles.picker}
          dropdownIconColor="#ff0000"
        >
          <Picker.Item label="Selecciona tu género" value="" color="#000" />
          <Picker.Item label="Masculino" value="M" color="#000" />
          <Picker.Item label="Femenino" value="F" color="#000" />
          <Picker.Item label="Otro" value="O" color="#000" />
        </Picker>
      </View>

      {/* Fecha */}
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
          themeVariant="dark"
        />
      )}

      {/* Botón */}
      <Pressable style={styles.registerButton} onPress={handleRegister}>
        <ThemedText style={styles.registerButtonText}>Registrarme</ThemedText>
      </Pressable>

      {/* Login */}
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
    backgroundColor: "black",
  },
  title: {
    textAlign: "center",
    marginBottom: 15,
    color: "#ff0000",
    fontWeight: "bold",
    fontSize: 28,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  input: {
    height: 50,
    borderColor: "#ff0000",
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: "#1a1a1a",
    color: "white",
    fontSize: 16,
  },
  pickerWrapper: {
    borderWidth: 1.5,
    borderColor: "#ff0000",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  picker: {
    color: "black",
    height: 50,
  },
  dateButton: {
    height: 50,
    borderColor: "#ff0000",
    borderWidth: 1.5,
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    backgroundColor: "#1a1a1a",
  },
  dateButtonText: {
    fontSize: 16,
    color: "white",
  },
  registerButton: {
    backgroundColor: "#ff0000",
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
    color: "#ccc",
  },
  loginRedirectLink: {
    color: "#ff0000",
    fontWeight: "bold",
  },
});
