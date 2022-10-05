import { ChildComponent } from './../child/child.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  public parentMessage = '';
  @ViewChild('childFirst') childFirst = ChildComponent | undefined;
  @ViewChild('childSecond') childSecond = ChildComponent | undefined;

  constructor() {}

  ngOnInit(): void {}
  public childResponse(name: string) {
    this.parentMessage = 'This is ' + name + ' Component';
  }
  public pingChild() {
    this.childFirst?.pingChild(10);
    this.childSecond?.pingChild(20);
  }
}
