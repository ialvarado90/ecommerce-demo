import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-pre-loader',
  templateUrl: './pre-loader.component.html',
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
export class PreLoaderComponent implements OnInit {

  @Input() preLoader: boolean = false;
  @Input() postLoader: boolean = true;


  constructor() { }

  ngOnInit(): void {

  }

}
