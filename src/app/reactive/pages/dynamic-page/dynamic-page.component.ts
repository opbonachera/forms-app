import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.css']
})
export class DynamicPageComponent {
    constructor(private fb: FormBuilder){}

    public dynamicForm: FormGroup = this.fb.group({
      name:['', [Validators.required, Validators.minLength(3)]],
      favoriteGames: this.fb.array([
        ['Fortnite', Validators.required],
        ['Metal Gear', Validators.required]
      ])
    })

    get favoriteGamesControl(){
      return this.dynamicForm.get('favoriteGames') as FormArray;
    }

    isValidField( field:string ){
      return this.dynamicForm.controls[field].errors && 
      this.dynamicForm.controls[field].touched
    }

    getFieldError(field:string): string | null{
      if( !this.dynamicForm.controls[field] ) return null;
  
      const errors = this.dynamicForm.controls[field].errors || {}
      
      for (const key of Object.keys(errors)) {
        switch(key){
          case 'required':
            return 'Field is required';
          case 'minlength':
            return 'Name has to be at least 3 characters long'
          default:
            return 'Error'
        }
      }
      return 'aaaaaa'
    }

    onSubmit():void{
      if(this.dynamicForm.invalid){
        this.dynamicForm.markAllAsTouched;
        return;
      }

      this.dynamicForm.reset()
    }
}
