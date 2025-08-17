import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
// constructor(private router:Router){

// }

//   goToProfile(){
//     this.router.navigate(['profile'],{ queryParams:{name:'Anil sidhu'}})
// }

users=[
  {
    id:'1',
    name:'anil',
    age:30,
    email:'aniltest@gmail.com'
  },
  {
    id:'2',
    name:'susi',
    age:33,
    email:'susitest@gmail.com'
  },
  {
    id:'3',
    name:'fifo',
    age:36,
    email:'fifo123@gmail.com'
  },
  {
    id:'4',
    name:'jiso',
    age:30,
    email:'jisotest@gmail.com'
  },
  {
    id:'5',
    name:'fizzy',
    age:39,
    email:'fizzy32@gmail.com'
  },

]
}
