import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IStudentAddtion } from 'src/app/model/Student';
import { StudentService } from 'src/app/service/Student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  addform: FormGroup;
    std!:IStudentAddtion
  constructor(private stdService:StudentService, private router: Router) {
    this.addform = new FormGroup(
      {
        FirstName: new FormControl(this.std?.FirstName??"hebaa", [Validators.required,Validators.minLength(5)]),
        LastName: new FormControl(this.std?.LastName??"samyy", [Validators.required, Validators.minLength(5)]),
        Age: new FormControl(this.std?.Age??18, [Validators.required, Validators.min(18)]),
        NationalID: new FormControl(this.std?.NationalID??"111111111111111", [Validators.required]),
        Mobile: new FormControl(this.std?.Mobile??"102111111", [Validators.required]),
        Email: new FormControl(this.std?.Email??"Sample@Gmail.com", [Validators.required,Validators.email]),
      })
    }

  ngOnInit() {
    
  }
  
add(){
  this.std = this.addform.value as IStudentAddtion
  this.stdService.add(this.std).subscribe(
    {
      next:(value) =>{
        console.log(value)
        this.router.navigateByUrl("/students")
      },
      error:(error)=>{
        console.log(error)
      }
    }
  )
}
}
