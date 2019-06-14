import { Component, OnInit  } from '@angular/core';
import { NgbRatingConfig, NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.css'],
  providers: [NgbModalConfig, NgbModal]

})
export class GoodComponent implements OnInit {
  heading="Do You like shine?";
  username="Himanshu";
 
  currentRate =0;
constructor(config: NgbModalConfig, private modalService: NgbModal,config1: NgbRatingConfig, private _router : Router ) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
    config1.max = 5;

  }

  open(content) {
    this.modalService.open(content);
  }
  
  getraiting(){
    console.log(this.currentRate);
   // routerLink="/"
  
   this._router.navigate(['feedback/',this.currentRate]);

  }
  ngOnInit() {
  }
  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }
}
