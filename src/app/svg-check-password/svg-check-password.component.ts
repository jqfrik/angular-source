import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-svg-check-password',
  templateUrl: './svg-check-password.component.html',
  styleUrls: ['./svg-check-password.component.css']
})
export class SvgCheckPasswordComponent implements OnInit {

  constructor() { }
  showPasswordIcon: boolean = false;
  @Output() showPasswordIconOutput = new EventEmitter();
  svgColor: string = '#8C99B2';
  ngOnInit(): void {
  }
  onToggleShowPassword() {
    this.showPasswordIconOutput.emit(!this.showPasswordIcon);
    this.showPasswordIcon = !this.showPasswordIcon;
  }

}
