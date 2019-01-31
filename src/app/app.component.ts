import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Um mundo de aventuras';
  hero = 'Zed';


  ngOnInit(){
    console.log("This is my hero: "+this.hero)
  }
}
