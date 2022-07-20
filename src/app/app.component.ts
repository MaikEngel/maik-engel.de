import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images = ['earth0.jpg', 'earth1.jpg', 'earth2.jpg'];
  headline = ['Bring engineering to the next level!', 'Born to code!', 'Developer from heart!']
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
    
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;

      setTimeout(() => {
        this.showImage = true;
      }, 1);
    }, 7999)
  }
}
