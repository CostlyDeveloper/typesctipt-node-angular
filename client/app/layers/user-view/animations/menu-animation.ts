import { animate, state, style, transition, trigger } from '@angular/animations';

export const menuAnimation =

                 trigger('toggleHeight', [
                     state('hide', style({
                         height  : '0px',
                         opacity : '0',
                         overflow: 'hidden'
                         // display: 'none'
                     })),
                     state('show', style({
                         height : '*',
                         opacity: '1'
                         // display: 'block'
                     })),
                     transition('hide => show', animate('200ms ease-in')),
                     transition('show => hide', animate('200ms ease-out'))
                 ]);
