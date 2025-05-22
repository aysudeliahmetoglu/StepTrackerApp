import { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    const loadProfile = async () => {
      const profile = await AsyncStorage.getItem('profile');
      if (profile) {
        const { height, weight, age } = JSON.parse(profile);
        setHeight(height);
        setWeight(weight);
        setAge(age);
      }
    };
    loadProfile();
  }, []);

  const saveProfile = async () => {
    if (!height || !weight || !age) {
      Alert.alert('Eksik Bilgi', 'Lütfen tüm alanları doldurun.');
      return;
    }

    const profile = { height, weight, age };
    await AsyncStorage.setItem('profile', JSON.stringify(profile));
    Alert.alert('Başarılı', 'Profil bilgileri kaydedildi.');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Profil Bilgileri</Text>
      <TextInput
        placeholder="Boy (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Kilo (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Yaş"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Kaydet" onPress={saveProfile} />
    </View>
  );
}
