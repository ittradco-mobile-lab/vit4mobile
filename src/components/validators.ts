import { AbstractControl, ValidationErrors } from "@angular/forms";


export class CustomValidators{
    static passwordMatch(control: AbstractControl): ValidationErrors|null{
        //Get Passwords
        let password=control.get("password");
        let confPassword=control.get("confPassword");
        console.log(control);
        //Check Passwords
        if(password.value!==confPassword.value){
            //Set validation error to confPassword
            return {noMatch: true};
        }
        return null
    }
    static passwordValidate(control: AbstractControl): ValidationErrors|null{
        //Check if Password Contains numbers and Either an Uppercase Letter or a Symbol
        if(!/\d/.test(control.value) || (!/[A-Z]/.test(control.value) && !/[^A-Zaa-z]/.test(control.value))){
            return {invalidPass: true}
        }
        return null;
    }
    static checkEmail(control: AbstractControl): Promise<ValidationErrors|null>{
        //Async Validator
        return new Promise((resolve, reject)=>{
            //setTimeout Test => Creating AJAX Service Later 
            setTimeout(()=>{
                if(control.value==="someone@example.com"){
                    resolve({invalidEmail: true});
                }
                else{
                    resolve(null);
                }
            }, 2000);
        })
    }
}