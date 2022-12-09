import { Component } from '@angular/core';
import { timeInterval } from 'rxjs';

@Component({
  //selector: '[app-servers]',
  //selector: '.app-servers',
  selector: 'app-servers',
  //template: `
  //  <app-server></app-server>
  //  <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  userName = '';
  serverCreated = false;
  servers = ['testServer', 'TestServer 2'];
  value = false;
  logs = [];

  
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUserName() {
    this.userName = '';
  }

  onAction() {
    this.value = !this.value;
    //this.logs.push(this.logs[this.logs.length - 1] + 1)
    this.logs.push(new Date())
  }

  getLogsColor() {
    return this.logs.length > 4 ? 'blue' : 'white';
  }

}
