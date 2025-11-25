import { StyleSheet, Text, TextInput, Pressable, Alert, Image, View, ScrollView } from 'react-native';
import { useState } from 'react';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function ExploreScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Por favor ingresa usuario y contraseña');
      return;
    }

    Alert.alert('Éxito', `Bienvenido, ${username}`);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
      <ThemedView style={styles.container}>

        {/* LOGO */}
        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/moviesland.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* TÍTULO */}
        <ThemedText type="title" style={styles.title}>
          Iniciar Sesión
        </ThemedText>

        {/* FORMULARIO */}
        <ThemedView style={styles.formContainer}>
          <ThemedText style={styles.label}>Usuario</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Escribe tu usuario"
            placeholderTextColor="#888"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />

          <ThemedText style={styles.label}>Contraseña</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Escribe tu contraseña"
            placeholderTextColor="#888"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <Pressable style={styles.loginButton} onPress={handleLogin}>
            <ThemedText style={styles.loginButtonText}>Ingresar</ThemedText>
          </Pressable>

          <Link href="/register" asChild>
            <Pressable>
              <ThemedText style={styles.registerText}>
                ¿No tienes cuenta? <Text style={styles.registerLink}>Regístrate</Text>
              </ThemedText>
            </Pressable>
          </Link>
        </ThemedView>

      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: 'black',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 260,
    height: 260,
  },
  title: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#ff0000',
    fontWeight: 'bold',
  },
  formContainer: {
    marginTop: 10,
    gap: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  input: {
    height: 50,
    borderColor: '#ff0000',
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: '#1a1a1a',
    color: 'white',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#ff0000',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerText: {
    marginTop: 15,
    fontSize: 16,
    textAlign: 'center',
    color: '#cccccc',
  },
  registerLink: {
    color: '#ff0000',
    fontWeight: 'bold',
  },
});
