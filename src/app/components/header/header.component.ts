import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  linkCv() {
    window.open(
      'https://drive.google.com/file/d/1oGvTmbScF3PGeH5aGZA5dXxwaM6fZl6X/view?usp=sharing',
      '_blank'
    );
  }

  linkIn() {
    window.open(
      'https://www.linkedin.com/in/matias-lenci-228828186/',
      '_blank'
    );
  }
}
