import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  user:Developer = new Developer

  constructor() { }

  ngOnInit(): void {
  }

}
