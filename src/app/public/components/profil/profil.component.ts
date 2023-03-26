import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/UserModel';
import { AuthService } from 'src/app/shared/services/authService/auth.service';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  user!: User;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(data => {
      this.user = data;
      console.log(this.user);
      
    })
  }

}
