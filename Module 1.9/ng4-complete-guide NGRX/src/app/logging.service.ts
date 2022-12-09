import { Injectable } from "@angular/core";
import { last } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  laslog: string;

  printLog(message: string) {
    console.log(message);
    console.log(this.laslog);
    this.laslog = message;
  }
}
