import { Image } from 'expo-image';
import { StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      
      {/* Contenedor del Título */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">¡Bienvenido a App Movies!</ThemedText>
      </ThemedView>

      {/* Contenedor del contenido y botón */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText>
          ¡Bienvenido a nuestra aplicacion de películas!
          Aquí encontrarás una variedad para ti que seguro te encantará
          Ponte cómodo y ve por tus palomitas!
     
        </ThemedText>

        {/* Botón de navegación usando Link */}
        {/* href="/explore" dirige al archivo explore.tsx dentro de (tabs) */}
        <Link href="/explore" asChild>
          <Pressable style={styles.button}>
            <ThemedText style={styles.buttonText}>Inicio</ThemedText>
          </Pressable>
        </Link>
      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
  },
  stepContainer: {
    gap: 16, // Espacio entre el texto y el botón
    marginBottom: 8,
    alignItems: 'center',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  // Estilos nuevos para el botón
  button: {
    backgroundColor: '#0a7ea4',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 10,
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
