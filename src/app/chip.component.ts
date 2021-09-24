import { Component, Input } from '@angular/core';

@Component({
  selector: 'chip',
  template: `
  <ul>
      <li *ngFor="let item of items; let i = index" [attr.data-index]="i">
      <span (click)="_removeItem(i)"></span>{{item}}</li>
    </ul>
    <input (keydown)="_addItem($event)" />
  `,
  styleUrls: ['./app.component.css'],
})
export class ChipComponent {
  @Input() name: string;
  items: any = ['test', 'nidhin', 'gifty', 'vibin'];

  _addItem = (e) => {
    if (e.which === 13 && e.target.value) {
      if (this.items.includes(e.target.value)) {
        return false;
      } else {
        this.items.push(e.target.value);
        e.target.value = '';
      }
    }
  };

  _removeItem = (i) => {
    this.items.splice(i, 1);
  };
}
