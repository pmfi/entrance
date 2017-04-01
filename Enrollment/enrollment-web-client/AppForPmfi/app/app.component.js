"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Student = (function () {
    function Student(surname, firstName, middleName, course1, course2, course3, score) {
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
    return Student;
}());
exports.Student = Student;
var Course = (function () {
    function Course(name, placeCount) {
        this.name = name;
        this.placeCount = placeCount;
    }
    return Course;
}());
exports.Course = Course;
var AppComponent = (function () {
    function AppComponent() {
        this.students = [
            { surname: "Богомаз", firstName: "Владислав", middleName: "Юрьевич", course1: "Программная инженерия", course2: "Автоматизированные системы управления", course3: "Информатика и вычислительная техника", score: 267, gMedal: true, diploma: true, apply: false },
            { surname: "Ерёменко", firstName: "Олег", middleName: "Константинович", course1: "Программная инженерия", course2: "Автоматизированные системы управления", course3: "Информатика и вычислительная техника", score: 223, gMedal: false, diploma: true, apply: false },
            { surname: "Зеленков", firstName: "Александр", middleName: "Сергеевич", course1: "Программная инженерия", course2: "Автоматизированные системы управления", course3: "Информатика и вычислительная техника", score: 237, gMedal: true, diploma: false, apply: true },
            { surname: "Зубов", firstName: "Антон", middleName: "Сергеевич", course1: "Программная инженерия", course2: "Автоматизированные системы управления", course3: "Информатика и вычислительная техника", score: 266, gMedal: false, diploma: false, apply: false },
            { surname: "Кишко", firstName: "Виктор", middleName: "Петрович", course1: "Программная инженерия", course2: "Автоматизированные системы управления", course3: "Информатика и вычислительная техника", score: 249, gMedal: true, diploma: true, apply: false },
            { surname: "Нейфельд", firstName: "Виктор", middleName: "Валерьевич", course1: "Программная инженерия", course2: "Автоматизированные системы управления", course3: "Информатика и вычислительная техника", score: 250, gMedal: false, diploma: true, apply: false },
            { surname: "Омаров", firstName: "Артем", middleName: "Евгеньевич", course1: "Программная инженерия", course2: "Автоматизированные системы управления", course3: "Информатика и вычислительная техника", score: 261, gMedal: true, diploma: false, apply: false },
            { surname: "Оноприенко", firstName: "Михаил", middleName: "Сергеевич", course1: "Программная инженерия", course2: "Автоматизированные системы управления", course3: "Информатика и вычислительная техника", score: 231, gMedal: false, diploma: false, apply: false },
            { surname: "Поленов", firstName: "Иван", middleName: "Юрьевич", course1: "Программная инженерия", course2: "Автоматизированные системы управления", course3: "Информатика и вычислительная техника", score: 261, gMedal: true, diploma: true, apply: false },
            { surname: "Тян", firstName: "Елизавета", middleName: "Александровна", course1: "Программная инженерия", course2: "Автоматизированные системы управления", course3: "Информатика и вычислительная техника", score: 238, gMedal: true, diploma: false, apply: false },
            { surname: "Фатхутдинов", firstName: "Владислав", middleName: "Андреевич", course1: "Программная инженерия", course2: "Автоматизированные системы управления", course3: "Информатика и вычислительная техника", score: 228, gMedal: false, diploma: true, apply: false },
            { surname: "Шкуркин", firstName: "Иван", middleName: "Игоревич", course1: "Программная инженерия", course2: "Автоматизированные системы управления", course3: "Информатика и вычислительная техника", score: 252, gMedal: false, diploma: false, apply: false }
        ];
        this.courses = [
            { name: "Фундаментальная информатика и информационные технологии", placeCount: 23 },
            { name: "Математическое обеспечение и администрирование информационных систем", placeCount: 23 },
            { name: "Информатика и выичслительная техника", placeCount: 66 },
            { name: "Прикладная информатика", placeCount: 25 },
            { name: "Программная инженерия", placeCount: 25 },
            { name: "Применение и эксплуатация автоматизированных систем специального назначения", placeCount: 20 },
            { name: "Автоматизация технологических процессов и производств", placeCount: 3 },
            { name: "Системный анализ и управление", placeCount: 11 },
            { name: "Управление в технических системах", placeCount: 13 }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.students.sort(function (student1, student2) {
            if (student1.score < student2.score) {
                return 1;
            }
            else if (student1.score > student2.score) {
                return -1;
            }
            else {
                return 0;
            }
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'selection-app',
            templateUrl: 'app/app.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map