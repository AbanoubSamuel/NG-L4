import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToDoList } from 'src/app/model/ToDoList';
import { ToDoService } from 'src/app/service/ToDo.Service';

@Component({
    selector: 'app-to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
    subscription!: Subscription
    list: ToDoList[] = [];
    IsLoading!: Boolean;
    constructor(private ToDoService: ToDoService, private Router: Router) { }

    ngOnInit(): void {
        this.IsLoading = true;
        this.FetchData()
    }

    FetchData() {
        this.subscription = this.ToDoService.getAll().subscribe({
            next: (response) => {
                console.log(response)
                this.list = response.Data;
                this.IsLoading = false;
            },
            error: (error) => {
                console.log(error)
                if (error["status"] == 401)
                    this.Router.navigate(["/login"]);

            },
        })
    }
}
