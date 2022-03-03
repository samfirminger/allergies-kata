"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Allergies = void 0;
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
class Allergies {
    constructor(allergyScore) {
        this.allergyScore = allergyScore;
    }
    list() {
        throw new Error('Implement this method!');
    }
    allergicTo(allergen) {
        throw new Error('Implement this method!');
    }
}
exports.Allergies = Allergies;
//# sourceMappingURL=allergies.js.map