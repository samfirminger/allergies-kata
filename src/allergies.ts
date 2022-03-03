type Allergy = { allergen: string; score: number };

const allergyScores: Array<Allergy> = [
  { allergen: 'eggs', score: 1 },
  { allergen: 'peanuts', score: 2 },
  { allergen: 'shellfish', score: 4 },
  { allergen: 'strawberries', score: 8 },
  { allergen: 'tomatoes', score: 16 },
  { allergen: 'chocolate', score: 32 },
  { allergen: 'pollen', score: 64 },
  { allergen: 'cats', score: 128 },
];

export class Allergies {
  allergies: string[];

  constructor(score: number) {
    this.allergies = Allergies.getAllergies(score);
  }

  private static getAllergies(score: number): string[] {
    const nextPowerOf2 = 2 * Math.max(...allergyScores.map(({ score }) => score));

    return allergyScores
      .sort((a, b) => b.score - a.score)
      .reduce(
        (acc, allergy) => {
          const isAllergic = allergy.score <= acc.remainingScore;

          if (isAllergic) {
            return {
              allergies: [allergy.allergen, ...acc.allergies],
              remainingScore: acc.remainingScore - allergy.score,
            };
          }
          return acc;
        },
        { allergies: [], remainingScore: score % nextPowerOf2 }
      ).allergies;
  }

  public list(): string[] {
    return this.allergies;
  }

  public allergicTo(allergen: string): boolean {
    return this.allergies.includes(allergen);
  }
}
