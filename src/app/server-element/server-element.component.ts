import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
  serverElements = [{type : 'server', name : 'testserver', content : 'just a test'}];
  constructor() { }

  ngOnInit() {
  }

}
