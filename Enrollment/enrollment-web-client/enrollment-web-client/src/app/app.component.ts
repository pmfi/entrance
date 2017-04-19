import {Component, OnInit} from "@angular/core";
import {SortDescPipe} from './Pipes/ScoreDesc';
import {SortScorePipe} from './Pipes/BonusToScore';
import {Tabs} from './Tabs/tabs';
import {Tab} from './Tabs/tab';

@Component({
	selector: 'selection-app',
	templateUrl: 'app.component.html',
})

export class AppComponent
{
	students: null;

	courses:null;
	

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
