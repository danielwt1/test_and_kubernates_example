import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent  implements OnInit{
  title = 'docker_example_angular';
  result:number=0;
  form =   this._fb.group({
    numero1:['',[Validators.required]],
    numero2:['',[Validators.required]]
  }); 
  constructor (private _fb:FormBuilder){

  }
  ngOnInit(): void {
  }

  
  public suma(){
    const num1: number = parseFloat(this.form.controls.numero1.value!);
    const num2: number = parseFloat(this.form.controls.numero2.value!);
    console.log(num1, num2)  
    this.result = num1+num2;
  
    return this.result;
  }



}
