export class Student {
    surname: string;
    firstName: string;
    middleName: string;
    course1: string;
    course2: string;
    course3: string;
    score: number;
    diploma: boolean;
    gMedal: boolean;
    apply: boolean;

    constructor(surname: string, firstName: string, middleName: string, course1: string, course2: string, course3: string, score: number) {
        this.surname = surname;
        this.firstName = firstName;
        this.middleName = middleName;
        this.course1 = course1;
        this.course2 = course2;
        this.course3 = course3;
        this.score = score;
        this.diploma = false;
        this.gMedal = false;
        this.apply = false;
    }
}