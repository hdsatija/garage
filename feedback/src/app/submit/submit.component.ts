import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute}from "@angular/router";


@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  
  x : any;
  
  constructor(private route: ActivatedRoute) { 
    this.x=this.route.snapshot.paramMap.get('id');
    console.log(this.x);
  }

  ngOnInit() {
  }

}
