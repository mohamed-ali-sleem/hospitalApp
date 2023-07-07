import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authenticationService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthenticationService) { }

  ngOnInit(): void {
    this._authService.login('', '').subscribe(res => {
      console.log(res);
    })

  }

}
