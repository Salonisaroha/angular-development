import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UsersDataService } from './services/users-data.service'
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, FormsModule, UserComponent, FooterComponent, NgFor], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // profileForm: FormGroup;
  
  title='Service in Angular';
  users:any;
  constructor(
  private fb: FormBuilder,
  private userData: UsersDataService
) {
  // initialize form
  // this.profileForm = this.fb.group({
  //   name: ['', Validators.required],
  //   password: ['', [Validators.required, Validators.minLength(6)]],
  //   email: ['', [
  //     Validators.required,
  //     Validators.email,
  //     Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
  //   ]]
  // });

  // call service
  this.userData.users().subscribe((data) => {
    console.warn("data", data);
    this.users = data;
  });
}

//   get name() { return this.profileForm.get('name'); }
//   get password() { return this.profileForm.get('password'); }
//   get email() { return this.profileForm.get('email'); }

//   onSubmit() {
//     if (this.profileForm.valid) {
//       console.log(this.profileForm.value);
//     } else {
//       this.profileForm.markAllAsTouched();
//     }
//   }
// userDetails:any;
//   addDetails(val:NgForm){
//     console.log(val);
//     this.userDetails=val;
//   }
// userName="Bruce"
//   onUserChange(user:string){
//   this.userName=user
//   }
}
