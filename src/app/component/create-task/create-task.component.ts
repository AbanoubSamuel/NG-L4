import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToDoList } from 'src/app/model/ToDoList';
import { ToDoService } from 'src/app/service/ToDo.Service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
    selector: 'app-create-task',
    templateUrl: './create-task.component.html',
    styleUrls: ['./create-task.component.css']
})


export class CreateTaskComponent implements OnInit {
    addTaskForm: FormGroup;
    Task!: ToDoList;
    constructor(
        private ToDoService: ToDoService, private Router: Router
    ) {
        this.addTaskForm = new FormGroup(
            {
                Id: new FormControl(this.Task?.ID ?? 0, [Validators.required]),
                Title: new FormControl(this.Task?.Title ?? " ", [Validators.required]),
                IsDone: new FormControl(this.Task?.IsDone ?? false, [Validators.required]),
                CreatedDate: new FormControl(this.Task?.CreatedDate ?? " ", [Validators.required]),
            })
    }

    ngOnInit(): void {
    }

    add() {
        this.Task = this.addTaskForm.value as ToDoList
        this.ToDoService.add(this.Task).subscribe(
            {
                next: (value) => {
                    console.log(value)
                    this.Router.navigateByUrl("/students")
                },
                error: (error) => {
                    console.log(error)
                }
            }
        )
    }


}


