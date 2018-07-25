import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks;
  constructor(
                 public _auth: AuthenticationService,
                 private _router: Router
             )
  { }

  ngOnInit() {
    this._auth.getTasks()
      .subscribe(data =>{
        this.tasks = data;
      },err=>{
        this._auth.logout();
        this._router.navigateByUrl('/login');
      })
  }

  onNewtask(){
    this._router.navigateByUrl('/new-task');
  }

}
