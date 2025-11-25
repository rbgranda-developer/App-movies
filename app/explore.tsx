import { StyleSheet, Text, TextInput, Pressable, Alert } from 'react-native';
import { useState } from 'react';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Link } from 'expo-router'; // 👈 Import necesario

export default function TabTwoScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Por favor ingresa usuario y contraseña');
      return;
    }
    Alert.alert('Éxito', `Bienvenido, ${username}`);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="person.fill"
          style={styles.headerImage}
        />
      }>
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Iniciar Sesión</ThemedText>
      </ThemedView>

      <ThemedView style={styles.formContainer}>
        <ThemedText style={styles.label}>Usuario</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu usuario"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <ThemedText style={styles.label}>Contraseña</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu contraseña"
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <Pressable style={styles.loginButton} onPress={handleLogin}>
          <ThemedText style={styles.loginButtonText}>Ingresar</ThemedText>
        </Pressable>

        {/* 🔹 Texto para registro */}
        <Link href="/register" asChild>
          <Pressable>
            <ThemedText style={styles.registerText}>
              ¿No tienes cuenta? <Text style={styles.registerLink}>Regístrate</Text>
            </ThemedText>
          </Pressable>
        </Link>

      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },
  formContainer: {
    gap: 12,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: '600',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#000',
  },
  loginButton: {
    backgroundColor: '#0a7ea4',
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
    color: '#555',
  },
  registerLink: {
    color: '#0a7ea4',
    fontWeight: 'bold',
  },
});
