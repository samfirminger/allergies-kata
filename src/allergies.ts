const allergens = {
  eggs: 1,
  peanuts: 2,
  shellfish: 4,
  strawberries: 8,
  tomatoes: 16,
  chocolate: 32,
  pollen: 64,
  cats: 128,
};

// [[eggs, 1], ..., []]
const sortedAllergens = Object.entries(allergens).sort((a, b) => b[1] - a[1]);

function sum(a: number, b: number) {
  return a + b;
}

function removeUnknownAllergens(allergyScore: number) {
  let remainingAllergyScore = allergyScore;
  const maxAllergyScore = sortedAllergens.map(([_, score]) => score).reduce(sum, 0);
  if (allergyScore > maxAllergyScore) {
    let n = 1;
    while (n <= allergyScore) {
      n = n * 2;
    }
    if (n === allergyScore) {
      remainingAllergyScore = 0;
    } else {
      remainingAllergyScore = remainingAllergyScore - n / 2;
    }
  }
  return remainingAllergyScore;
}

function getAllergens(allergyScore: number) {
  return getAllergensImperative(allergyScore);
  // return getAllergensRecursive(allergyScore);
  // return getAllergensReduce(allergyScore);
}

function getAllergensImperative(allergyScore: number) {
  let remainingAllergyScore = removeUnknownAllergens(allergyScore);

  const allergicTo = [];
  for (const allergen of sortedAllergens) {
    if (remainingAllergyScore && allergen[1] <= remainingAllergyScore) {
      allergicTo.push(allergen[0]);
      remainingAllergyScore = remainingAllergyScore - allergen[1];
    }
  }

  return allergicTo.reverse();
}

function getAllergensRecursive(allergyScore: number) {
  const baseAllergyScore = removeUnknownAllergens(allergyScore);

  function iter(allergyScore: number, allergens: Array<[string, number]>) {
    if (!allergens.length) {
      return [];
    }
    const allergen = allergens[0];
    if (allergyScore <= allergen[1]) {
      return [allergen[0]].concat(iter(allergyScore - allergen[1], allergens.slice(1)))
    } else {
      return iter(allergyScore - allergen[1], allergens.slice(1));
    }
  }

  return iter(baseAllergyScore, sortedAllergens);
}

export class Allergies {
  constructor(private allergyScore: number) {}

  public list(): string[] {
    return getAllergens(this.allergyScore);
  }

  public allergicTo(allergen: string) {
    return this.list().includes(allergen);
  }
}
