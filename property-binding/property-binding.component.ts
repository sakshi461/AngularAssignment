import { Component, OnInit } from "@angular/core";

@Component({
    selector:'app-property-binding',
    templateUrl:'./property-binding.component.html',
})
export class PropertyBindingComponent implements OnInit{
    link: string = 'https://google.com';

 constructor() { }

  ngOnInit(): void {
  }

}