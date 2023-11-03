import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
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

    public newFavorite: FormControl = new FormControl('', Validators.required);

    get favoriteGamesControl(){
      return this.dynamicForm.get('favoriteGames') as FormArray;
    }

    isValidField( field:string ){
      return this.dynamicForm.controls[field].errors && 
      this.dynamicForm.controls[field].touched
    }

    isValidFieldInArray( formArray: FormArray, index:number ){
      return formArray.controls[index].errors && formArray.controls[index].touched
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

    onAddFavorite( ):void{
      if( this.newFavorite.invalid ) return;
      const newFavorite = this.newFavorite.value;

      this.favoriteGamesControl.push(this.fb.control(newFavorite, Validators.required))
      this.newFavorite.reset()
    }

    onDeleteFavorite(index:number){
      return this.favoriteGamesControl.removeAt(index);
    }

    onSubmit():void{
      if(this.dynamicForm.invalid){
        this.dynamicForm.markAllAsTouched;
        return;
      }
      (this.dynamicForm.controls["favoriteGames"] as FormArray) = this.fb.array([])
      this.dynamicForm.reset()
    }
}
