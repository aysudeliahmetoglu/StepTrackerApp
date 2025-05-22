import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import * as Pedometer from 'expo-sensors/build/Pedometer';

export default function StepCounter() {
  const [stepCount, setStepCount] = useState(0);

  useEffect(() => {
    const subscription = Pedometer.watchStepCount(result => {
      setStepCount(result.steps);
    });

    return () => subscription.remove();
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 32 }}>{stepCount} adım</Text>
    </View>
  );
}
