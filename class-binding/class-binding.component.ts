import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})

export class ClassBindingComponent{
    isItalicAndBlue: boolean = false;

    toggleItalicAndBlue() {
      this.isItalicAndBlue = !this.isItalicAndBlue;
    }
  
}