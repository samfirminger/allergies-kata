export class Allergies {
  private static scores = {
    eggs: 1,
    peanuts: 2,
    shellfish: 4,
    strawberries: 8,
    tomatoes: 16,
    chocolate: 32,
    pollen: 64,
    cats: 128
  }

  constructor(private score: number) {
  }

  public list(): string[] {
    return Object.keys(Allergies.scores).filter(allergen => this.allergicTo(allergen))
  }

  public allergicTo(arg): boolean {
    return Boolean(this.score & Allergies.scores[arg])
  }
}
