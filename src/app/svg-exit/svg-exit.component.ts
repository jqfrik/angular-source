import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-svg-exit',
  templateUrl: './svg-exit.component.html',
  styleUrls: ['./svg-exit.component.css']
})
export class SvgExitComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  mouseOver: boolean = false;
  Logout() {
    this.auth.userIsAuth = false;
  }
}
