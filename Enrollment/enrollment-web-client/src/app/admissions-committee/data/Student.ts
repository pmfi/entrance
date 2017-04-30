import {Priority} from './Priority';

export class Student {
  surname:string;
  firstName:string;
  middleName:string;
  score:number;
  diploma:boolean;
  gMedal:boolean;
  apply:boolean;
  priorities:Priority[];

  constructor(surname:string,
              firstName:string,
              middleName:string,
              score:number,
              priorities:Priority[]) {
    this.surname = surname;
    this.firstName = firstName;
    this.middleName = middleName;
    this.score = score;
    this.diploma = false;
    this.gMedal = false;
    this.apply = false;
    this.priorities = priorities;
  }
}
