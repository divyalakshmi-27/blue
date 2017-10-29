import { Component } from '@angular/core';
import { SuperTable, ISuperTableColumn } from 'ngx-super-table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Component({
  selector: 'demo-app',
  template: `<super-table
    [rows]="rows"
    [columns]="columns"
    [options]="options">
  </super-table>`
})
export class AppComponent {
  title = 'app';
}
export class DemoApp {
  rows = [
    { name: 'thing1', age: 7 },
    { name: 'thingx', age: 7 },
    { name: 'cat', age: 10 },
    { name: 'fish', age: 1 },
  ];
  columns: ISuperTableColumn[] = [
    {
      id: 'name',
      key: 'name',
      label: 'Name'
    },
    {
      id: 'age',
      key: 'age',
      label: 'Age'
    }
  ];
  options = {}
}


