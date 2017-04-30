export class Priority {
  order:number;
  specialityId:number;

  constructor(priority:number, specialityId:number) {
    this.order = priority;
    this.specialityId = specialityId;
  }
}
