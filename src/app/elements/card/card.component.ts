import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() image: any;
  @Input() title: any;
  @Input() description: any;
  constructor() { }

  ngOnInit(): void {
  }

}
