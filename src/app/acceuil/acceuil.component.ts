import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  acceuil!: string;

  constructor() { }

  ngOnInit(): void {

    this.acceuil = 'assets/acceuil.jpg';
  }

}
