import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  task;
  mode = 1;
  constructor(private _auth: AuthenticationService) { }

  ngOnInit() {
  }

  onSaveTask(task){
    this._auth.saveTask(task)
      .subscribe(resp=>{
        this.task = resp;
        this.mode = 2;

      }, err =>{
        this.mode = 0;
      });
  }

}
