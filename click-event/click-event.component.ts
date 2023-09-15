import { Component } from "@angular/core";

@Component({
    selector: 'app-click-event',
    templateUrl: './click-event.component.html',
    styleUrls: ['./click-event.component.css']
  
})
export class ClickEventComponent{
    inputData: string = ''; // Property to store input data

    sendData(myvalue:string){
      console.log(myvalue)
    }
   }
