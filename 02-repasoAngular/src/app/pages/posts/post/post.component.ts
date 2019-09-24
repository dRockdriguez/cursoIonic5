import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post;
  @Output() postClicked = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {

  }

  clickPost() {
    this.postClicked.emit(this.post.id);
  }

}
