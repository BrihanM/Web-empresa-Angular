import { Component } from '@angular/core';
import { ServicesComponent } from '../services/services.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ServicesComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
