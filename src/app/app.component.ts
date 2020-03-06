import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng7';

  enable3d: boolean = true;
  data = [
    ['Bananas', 8],
    ['Kiwi', 3],
    ['Mixed nuts', 1],
    ['Oranges', 6],
    ['Apples', 8],
    ['Pears', 4],
    ['Clementines', 4],
    ['Reddish (bag)', 1],
    ['Grapes (bunch)', 1]
  ];


  test() {
    this.title = 'Hello'
  }
}
