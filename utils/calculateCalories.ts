export function calculateCalories(steps: number, weightKg: number): number {
    const MET = 0.05; // basitleştirilmiş MET katsayısı
    return steps * MET * (weightKg / 70);
  }
  