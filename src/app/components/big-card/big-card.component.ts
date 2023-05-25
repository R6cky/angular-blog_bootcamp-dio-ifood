import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent {
  @Input()
  titleBigCard: string = '';

  @Input()
  contentBigCard: string = '';
}
