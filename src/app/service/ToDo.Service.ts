import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APIResponse } from '../ViewModel/Apiresult';
import { ToDoList } from '../model/ToDoList';

@Injectable({
    providedIn: 'root'
})
export class ToDoService {

    constructor(private http: HttpClient) { }
    getAll(): Observable<APIResponse<ToDoList[]>> {
        //return this.http.get<APIResponse<ToDo[]>>("https://api.mohamed-sadek.com/Job/Get")
        return this.http.get<APIResponse<ToDoList[]>>(environment.APIURl + "/Task/Get")
    }


    add(Task: ToDoList) {
        console.log(Task)
        return this.http.post(environment.APIURl + "/Task/POST", Task)
    }
}
