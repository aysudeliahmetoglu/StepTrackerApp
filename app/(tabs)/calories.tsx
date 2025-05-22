import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CaloriesScreen() {
  const [stepCount, setStepCount] = useState<number>(0);
  const [caloriesBurned, setCaloriesBurned] = useState<number>(0);

  useEffect(() => {
    const calculateCalories = async () => {
      const steps = await AsyncStorage.getItem('stepCount');
      const profile = await AsyncStorage.getItem('profile');

      const stepCountNum = steps ? parseInt(steps, 10) : 0;
      setStepCount(stepCountNum);

      if (profile) {
        const { weight } = JSON.parse(profile);
        const weightNum = parseFloat(weight);
        // Ortalama: 0.04 kalori/step * kg başına
        const calories = (stepCountNum * 0.04 * (weightNum / 70));
        setCaloriesBurned(parseFloat(calories.toFixed(2)));
      }
    };

    calculateCalories();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kalori Hesaplama</Text>
      <Text style={styles.info}>Bugünkü Adım Sayısı: {stepCount}</Text>
      <Text style={styles.info}>Tahmini Yakılan Kalori: {caloriesBurned} kcal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  info: { fontSize: 18, marginBottom: 10 },
});
