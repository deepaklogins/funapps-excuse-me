import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useRouter, Stack } from 'expo-router';
import { categories } from '../src/data/excuses';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ title: 'Excuse Me' }} />

      <Text style={styles.heroEmoji}>🤥</Text>
      <Text style={styles.title}>Excuse Me!</Text>
      <Text style={styles.subtitle}>
        The perfect excuse for every situation
      </Text>

      <View style={styles.grid}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat.id}
            style={[styles.card, { borderColor: cat.color + '40' }]}
            activeOpacity={0.7}
            onPress={() =>
              router.push({ pathname: '/excuse', params: { categoryId: cat.id } })
            }
          >
            <Text style={styles.cardEmoji}>{cat.emoji}</Text>
            <Text style={styles.cardName}>{cat.name}</Text>
            <Text style={styles.cardCount}>{cat.excuses.length} excuses</Text>
            <View style={[styles.cardAccent, { backgroundColor: cat.color }]} />
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.footer}>Tap a category to get your excuse 😎</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f1a' },
  content: { padding: 20, alignItems: 'center', paddingBottom: 40 },
  heroEmoji: { fontSize: 72, marginTop: 20 },
  title: {
    fontSize: 34,
    fontWeight: '900',
    color: '#fff',
    marginTop: 8,
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 15,
    color: '#888',
    marginTop: 4,
    marginBottom: 28,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  card: {
    width: '48%',
    backgroundColor: '#1a1a2e',
    borderRadius: 20,
    padding: 20,
    marginBottom: 14,
    borderWidth: 1,
    overflow: 'hidden',
  },
  cardEmoji: { fontSize: 36 },
  cardName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#fff',
    marginTop: 10,
  },
  cardCount: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  cardAccent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  footer: {
    color: '#555',
    fontSize: 13,
    marginTop: 10,
  },
});
