export class Speciality {
  id: number;
  name: string;
  budgetPlacesCount: number;

  constructor(id: number, name: string, placeCount: number) {
    this.id = id;
    this.name = name;
    this.budgetPlacesCount = placeCount;
  }
}
