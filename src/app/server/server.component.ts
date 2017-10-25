import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId = 10;
  serverStatus = 'Offline';

  getServerStatus() {
    return this.serverStatus;
  }
  constructor() {
    /*assigns the serverStatus to a random value then checks if that value is greater than 0.5 and if it is then it sets
     the status to online and if not it sets it to offline*/
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' :  'red';
  }
}
