import { Component } from '@angular/core';
import { FukuroService } from './services/fukuro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private clivet:FukuroService){ }

}