import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [
  ],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 0 }),
            animate('1s ease-out',
              style({ height: 300, opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ height: 300, opacity: 1 }),
            animate('1s ease-in',
              style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class LayoutComponent implements OnInit {

  preLoader: boolean = true;
  postLoader: boolean = false;

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.postLoader = true;
      setTimeout(() => {
        this.preLoader = false;
      }, 500);
    }, 1600);
  }

}
