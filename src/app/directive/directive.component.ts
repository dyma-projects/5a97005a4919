import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  dataBinding1: string = 'Ceci est une liaison de propriété';
  dataBinding2: string = 'Ceci est un double data binding';

  status: boolean = true;
  texts: string[] = ['un', 'deux', 'trois'];

  constructor() { }

  ngOnInit() {
  }

  changerValeur(): void {
    this.dataBinding1 = this.dataBinding2 = 'La valeur a été changée par une liaison d\'événement';
  }

  afficher(): void {
    this.status = !this.status;
  }

}
