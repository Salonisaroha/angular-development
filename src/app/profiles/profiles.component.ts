import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profiles',
  standalone: true,
  imports: [],
  templateUrl: './profiles.component.html',
  styleUrl: './profiles.component.css'
})
export class ProfilesComponent {
  userName:string|null=""
  constructor(private route:ActivatedRoute){}
   ngOnInit(){
    // this.userName=this.route.snapshot.paramMap.get('name');
    // console.log(this.userName);

    this.route.queryParams.subscribe(params=>{
      this.userName=(params['name']);
    })
   }

}
