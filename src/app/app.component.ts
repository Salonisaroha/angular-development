import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // myFunction() {
  //   const input = prompt("Enter your age");
  //   const age = Number(input); 

  //   if (!isNaN(age)) {
  //     if (age > 18) {
  //       console.log("You are mature");
  //     } else {
  //       console.log("You need workout");
  //     }
  //   } else {
  //     console.log("Invalid age entered");
  //   }
  //   this.otherFunction()
  // }
  // otherFunction(){
  //   console.log("This is valid function!");
  // }

  // name:string|number="saloni"
  // updateName(){
  //   this.name = "saroha"
  //   this.name = 123
  // }
  // sum(a:number,b:number){
  //   console.log(a+b);
  // }
  // count = 0;
  // handleIncrement(){
  //   this.count = this.count + 1;
  // }
  // handleDecrement(){
  //   this.count = this.count-1;
  // }
  // reset(){
  //   this.count = this.count+2;
  // }
  // handleEvent(event:Event){
  //   console.log("Function called", event.type);
   

  // }

  name = "";
  displayName="";
  email="";
  displayEmail = "";
  getName(event:Event){
   this.name = (event.target as HTMLInputElement).value;
  
  }
  showName(){
     this.displayName = this.name;
  }
  setName(){
    this.name = "Sam";
  }
getEmail(val:string){
 this.email = val;
 console.log(this.email)
}
setEmail(){
  this.email="sami123@gmail.com";
}
display=true;
}


