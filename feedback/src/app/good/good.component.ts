import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.css']
})
export class GoodComponent implements OnInit {
  heading="Do You like shine?";
  username="Himanshu";
  constructor() { }

  ngOnInit() {
  }

}
