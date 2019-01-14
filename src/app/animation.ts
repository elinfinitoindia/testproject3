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
        state('in', style({ transform: 'translateX(0)' })),
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
