import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name:"desc"})
export class SortDescPipe
{
	transform(array:Array<number>, args:number):Array<number>
	{
		array.sort((a:any,b:any)=>
		{
			if(a[args]<b[args])
			{
				return 1;
			}
			else if(a[args]>b[args])
			{
				return -1;
			}
			else
			{
				return 0;
			}
		});
		return array;
	}
}