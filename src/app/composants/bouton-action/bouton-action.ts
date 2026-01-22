import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bouton-action',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bouton-action.html',
  styleUrl: './bouton-action.scss',
})
export class BoutonAction implements OnInit {

  @Input()
  isNouveauVisible = true;
  @Input()
  isExporterVisible = true;
  @Input()
  isImporterVisible = true;

  @Output()
  clickEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  boutonNouveauClick(): void {
    this.clickEvent.emit();
  }
}