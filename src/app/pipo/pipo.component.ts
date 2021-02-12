import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipo',
  templateUrl: './pipo.component.html',
  styleUrls: ['./pipo.component.css']
})
export class PipoComponent implements OnInit {
  color = 'black';

  constructor() { }

  ngOnInit() {
  }

}