import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
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
hide(){
  this.display=false;
}
show(){
  this.display=true;
}
toggle(){
  this.display=!this.display;
}
color='red';
// handleColor(val:number){
//   this.color=val;
// }
// handleInput(event: Event) {
//   this.color = parseInt((event.target as HTMLInputElement).value, 10);
//   console.log(this.color);
// }
// handleSwitch(val:string){
//   this.color = val;
// }
// handleEvent(event:Event){
// this.color=(event.target as HTMLInputElement).value;
// }

users =["alpha", "beta", "gamma","sin", "cos","cot", "tan", "cosec", "sec"];
students = [
 {name:'anil', age:12, email:'fufu@123gmail.com'},
 {name:'lili', age:13, email:'lili@123gmail.com'},
 {name:'yolo', age:14, email:'peter@gmail.com'},
{name:'keema', age:15, email:'keema@gmail.com'},
 {name:'hippo', age:16, email:'hippo@gmail.com'}
]
handleEvent(){

}
count = signal(10);
x = 20;
updateValue(){
  this.x=50;
}

}



