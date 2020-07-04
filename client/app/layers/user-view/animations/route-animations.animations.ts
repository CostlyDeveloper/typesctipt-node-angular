import { animate, query, style, transition, trigger } from '@angular/animations';

export const routerTransition =

  trigger('routeAnimations', [

      transition('* => *', [

        style({ position: 'relative' }),

        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ], {optional: true}),

        query(':enter',
          [
            style({opacity: 0})
          ],
          {optional: true}
        ),

        query(':leave',
          [
            style({opacity: 1}),
            animate('0.2s', style({opacity: 0}))
          ],
          {optional: true}
        ),

        query(':enter',
          [
            style({opacity: 0}),
            animate('0.2s', style({opacity: 1}))
          ],
          {optional: true}
        )

      ])

  ]);
