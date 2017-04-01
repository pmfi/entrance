import {Component, OnInit} from "@angular/core";
import {SortDescPipe} from './Pipes/ScoreDesc';
import {SortScorePipe} from './Pipes/BonusToScore';
import {Tabs} from './Tabs/tabs';
import {Tab} from './Tabs/tab';

export class Student
{
	surname:string;
	firstName:string;
	middleName:string;
	course1:string;
	course2:string;
	course3:string;
	score:number;
	diploma:boolean;
	gMedal:boolean;
	apply:boolean;



	constructor(surname:string,firstName:string,middleName:string,course1:string,course2:string,course3:string,score:number)
	{
		this.surname=surname;
		this.firstName=firstName;
		this.middleName=middleName;
		this.course1=course1;
		this.course2=course2;
		this.course3=course3;
		this.score=score;
		this.diploma=false;
		this.gMedal=false;
		this.apply=false;

	}
}

export class Course
{
	name:string;
	placeCount:number;

	constructor(name:string, placeCount:number)
	{
		this.name=name;
		this.placeCount=placeCount;
	}
}

@Component({
	selector: 'selection-app',
	templateUrl: 'app.component.html',
})

export class AppComponent
{
	students: Student[]=
	[
	{surname:"Богомаз", firstName:"Владислав", middleName:"Юрьевич", course1:"Программная инженерия", course2:"Автоматизированные системы управления", course3:"Информатика и вычислительная техника", score:267, gMedal:true, diploma:true, apply:false},
	{surname:"Ерёменко", firstName:"Олег", middleName:"Константинович", course1:"Программная инженерия", course2:"Автоматизированные системы управления", course3:"Информатика и вычислительная техника", score:223, gMedal:false, diploma:true, apply:false},
	{surname:"Зеленков", firstName:"Александр", middleName:"Сергеевич", course1:"Программная инженерия", course2:"Автоматизированные системы управления", course3:"Информатика и вычислительная техника", score:237, gMedal:true, diploma:false, apply:true},
	{surname:"Зубов", firstName:"Антон", middleName:"Сергеевич", course1:"Программная инженерия", course2:"Автоматизированные системы управления", course3:"Информатика и вычислительная техника", score:266, gMedal:false, diploma:false, apply:false},
	{surname:"Кишко", firstName:"Виктор", middleName:"Петрович", course1:"Программная инженерия", course2:"Автоматизированные системы управления", course3:"Информатика и вычислительная техника", score:249, gMedal:true, diploma:true, apply:false},
	{surname:"Нейфельд", firstName:"Виктор", middleName:"Валерьевич", course1:"Программная инженерия", course2:"Автоматизированные системы управления", course3:"Информатика и вычислительная техника", score:250, gMedal:false, diploma:true, apply:false},
	{surname:"Омаров", firstName:"Артем", middleName:"Евгеньевич", course1:"Программная инженерия", course2:"Автоматизированные системы управления", course3:"Информатика и вычислительная техника", score:261, gMedal:true, diploma:false, apply:false},
	{surname:"Оноприенко", firstName:"Михаил", middleName:"Сергеевич", course1:"Программная инженерия", course2:"Автоматизированные системы управления", course3:"Информатика и вычислительная техника", score:231, gMedal:false, diploma:false, apply:false},
	{surname:"Поленов", firstName:"Иван", middleName:"Юрьевич", course1:"Программная инженерия", course2:"Автоматизированные системы управления", course3:"Информатика и вычислительная техника", score:261, gMedal:true, diploma:true, apply:false},
	{surname:"Тян", firstName:"Елизавета", middleName:"Александровна", course1:"Программная инженерия", course2:"Автоматизированные системы управления", course3:"Информатика и вычислительная техника", score:238, gMedal:true, diploma:false, apply:false},
	{surname:"Фатхутдинов", firstName:"Владислав", middleName:"Андреевич", course1:"Программная инженерия", course2:"Автоматизированные системы управления", course3:"Информатика и вычислительная техника", score:228, gMedal:false, diploma:true, apply:false},
	{surname:"Шкуркин", firstName:"Иван", middleName:"Игоревич", course1:"Программная инженерия", course2:"Автоматизированные системы управления", course3:"Информатика и вычислительная техника", score:252, gMedal:false, diploma:false, apply:false}
	];

	courses:Course[]=
	[
	{name:"Фундаментальная информатика и информационные технологии", placeCount:23},
	{name:"Математическое обеспечение и администрирование информационных систем", placeCount:23},
	{name:"Информатика и выичслительная техника", placeCount:66},
	{name:"Прикладная информатика", placeCount:25},
	{name:"Программная инженерия", placeCount:25},
	{name:"Применение и эксплуатация автоматизированных систем специального назначения", placeCount:20},
	{name:"Автоматизация технологических процессов и производств", placeCount:3},
	{name:"Системный анализ и управление", placeCount:11},
	{name:"Управление в технических системах", placeCount:13}
	]

	ngOnInit()
	{
		this.students.sort(function(student1, student2)
		{
			if(student1.score<student2.score)
			{
				return 1;
			}
			else if(student1.score>student2.score)
			{
				return -1;
			}
			else
			{
				return 0;
			}
		});

	}
}
