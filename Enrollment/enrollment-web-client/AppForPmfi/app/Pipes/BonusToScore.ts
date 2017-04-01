import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name:"Bonus"})
export class SortScorePipe
{
	transform(value1:any, value2:any, result:number):any
	{
		if((value1==true)||(value2==true))
		{
			result++;
		}
		else if ((value1==true)&&(value2==true))
		{
			result+=2;
		}
		return result;
	}
}