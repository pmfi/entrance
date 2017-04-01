import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { Tab } from './tab';

@Component({
	selector: 'tabs',
	template:`
	<ul class="nav nav-tabs">
	<li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
	<a href="#">{{tab.title}}</a>
	</li>
	</ul>
	<ng-content></ng-content>
	`
})
export class Tabs implements AfterContentInit {
	
	@ContentChildren(Tab) tabs: QueryList<Tab>;
	
	ngAfterContentInit() {
		
		let activeTabs = this.tabs.filter((tab)=>tab.active);
		
		
		if(activeTabs.length === 0) {
			this.selectTab(this.tabs.first);
		}
	}
	
	selectTab(tab: Tab){
		
		this.tabs.toArray().forEach(tab => tab.active = false);
		
		tab.active = true;
	}

}
