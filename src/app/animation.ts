import {
    trigger,
    state,
    style,
    animate,
    transition,
    keyframes
} from '@angular/animations';

export const flyin = [
    trigger("flyin", [
      state('true', style({ transform: 'translateX(0)' })),
      
        transition(':enter', [
            animate(500, keyframes([
                style({
                    transform: 'rotate(-360deg)',
                    opacity: 0
                }),
                style({
                    transform: 'rotate(0)',
                    opacity: 1
                })
            ]))
        ]),
        transition(':leave', [
            animate(700, keyframes([
                style({
                    transform: 'rotate(0)',
                    opacity: 1, offset: 0
                }),
                style({
                    transform: 'rotate(-360deg)',
                    opacity: 0, offset: 1.0
                })
            ]))
        ])
    ])];


export const slideIn = [
  trigger("slideIn", [
    transition(':enter', [
      style({ opacity: 0 }),
      animate(800, keyframes([
        style({
          transform: 'translateX(-1000px)',
          opacity: 0, offset: 0
        }),
        style({
          transform: 'translateX(0px)',
          opacity: 1, offset: 1.0
        })
      ])),
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate(800, keyframes([
        style({
          transform: 'translateX(0px)',
          opacity: 1, offset: 0
        }),
        style({
          transform: 'translateX(1000px)',
          opacity: 0, offset: 1.0
        })
      ])
      )
    ])
  ])];
export const animation = [
trigger('animation', [
  state('void', style({ opacity: 0, })),
  state('*', style({ opacity: 1, })),
  transition(':enter', animate(`1000ms ease-out`)),
  transition(':leave', animate(`1000ms ease-in`))
])
];

export const flyItems = [
  trigger('flyItems', [
    state('in', style({ transform: 'translateX(0)' })),
 
    transition('void => *', [
      animate(700, keyframes([
        style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
        style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
      ]))
    ]),
    transition('* => void', [
      animate(500, keyframes([
        style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
        style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
      ]))
    ])
  ])
];  
