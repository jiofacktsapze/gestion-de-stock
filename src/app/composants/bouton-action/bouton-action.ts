import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-bouton-action',
  imports: [],
  templateUrl: './bouton-action.html',
  styleUrl: './bouton-action.scss',
})
export class BoutonAction implements OnInit {

  @Output()
  clickEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  boutonNouveauClick(): void {
    this.clickEvent.emit();
  }
}