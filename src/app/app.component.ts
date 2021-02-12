import { Component } from '@angular/core';

export interface DATA {
  readonly b: boolean;
  readonly s: string;
  readonly id: number;
}

let nb = 0;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  L: Readonly<DATA[]> = [
    {b: false, s: 'a', id: 0},
    {b: false, s: 'b', id: 1}
  ];

  del(d: DATA): void {
    this.L = this.L.filter( e => e !== d );
  }

  update(d: DATA, u: Partial<DATA>): void {
    this.L = this.L.map(
      e => e !== d ? e : {...e, ...u}
    );
  }

  append(): void {
    const id = this.L.reduce( (i, e) => i <= e.id ? e.id + 1 : i, 0);
    this.L = [...this.L, {b: false, s: `item ${nb++}`, id}];
  }

  trackById(i: number, e: DATA): number {
    return e.id;
  }
}
