import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  name:null|string=""
constructor(private route:ActivatedRoute){

}
ngOnInit(){
  this.route.params.subscribe((params)=>{
    console.log(params);
    this.name=params['name'];
  })
}

@Input() user:string='';
@Input() city:string='';
}
