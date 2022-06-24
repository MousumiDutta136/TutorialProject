import { Component, Input, OnInit } from '@angular/core';
import { WelcomeUserService } from 'src/app/services/welcome-user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
@Input() title='';
guest:String="Sara";
  constructor(private welcmServc:WelcomeUserService) { }
 
  ngOnInit(): void {
    this.welcmServc.name.subscribe(data=>{
      this.guest = data;
    });
  }
 
}
