import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user;
  @Output() catEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendCat = () =>{
    this.catEvent.emit("pasFélix");
  }
}
