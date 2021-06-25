import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  @HostListener('window:unload', ['$event'])
  unloadHandler(event: any) {
    this.PostCall();
  }
  @HostListener('window:beforeunload', ['$event']) 
  beforeUnloadHander(event: any) {
    return false;
  }

  PostCall() {  
    localStorage.clear()
  }
}
