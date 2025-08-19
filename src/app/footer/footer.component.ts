import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  users: any;

  constructor(private userData: UsersDataService) {}

  
  ngOnInit(): void {
    this.userData.users().subscribe((data) => {
      console.warn("data from footer:", data);
      this.users = data;
    });
  }
}
