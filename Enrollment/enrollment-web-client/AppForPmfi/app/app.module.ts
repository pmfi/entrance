import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {SortDescPipe} from './Pipes/ScoreDesc';
import {SortScorePipe} from './Pipes/BonusToScore';
import {Tabs} from './Tabs/tabs';
import {Tab} from './Tabs/tab';

@NgModule (
{
	imports:[BrowserModule, FormsModule],
	declarations:[AppComponent,Tabs, Tab, SortDescPipe, SortScorePipe],
	bootstrap:[AppComponent]
})

export class AppModule
{
	
}