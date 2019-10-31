import { Component, OnInit } from '@angular/core';
import {TasksService} from './tasks.Service';
import { Task } from './task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers:[TasksService]
})
export class TasksComponent implements OnInit {
	tasks:Task[];
	editTask:Task;

  constructor(private taskService:TasksService) { }

  ngOnInit() {
  	this.getTasks()
  }
  getTasks (): void {
  	this.taskService.getTask().subscribe(tasks=>(this.tasks=tasks))
  }
  add(title:string):void{
  	this.editTask=undefined
  	title=title.trim()
  	if(!title){
  		return
  	}
  	const newTask:Task ={title} as Task 
  	this.taskService.addTask(newTask).subscribe(task=>this.tasks.push(task))
  }

  delete(task:Task):void {
  	this.tasks=this.tasks.filter(h=>h !==task);
  	this.taskService.deleteTask(task._id).subscribe();
  }
  edit(task){
  	this.editTask=task;
  }
  update(){
  	if(this.editTask){
  		this.taskService.updateTask(this.editTask).subscribe(Task=>{
  			const ix=Task ? this.tasks.findIndex(h=>h._id === Task._id): -1;
  			if(ix > -1){
  				this.tasks[ix]=Task;
  			}
  		})
  		this.editTask=undefined;
  	}
  }

}
