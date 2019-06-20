import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  name = 'Angular';
  //slideNo = 0;
  //withAnim = true;
  //resetAnim = true;

  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    interval: {timing: 2000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2
  }
  carouselItems = [["Ubisoft - Front End Developer", "https://www.ubisoft.com", "url(assets/images/ubisoft.png)"], ["Bubba Blade - Business Analyst", "https://www.bubbablade.com", "url(assets/images/bubbablade.png)"], ["AbonamenteSali - Project Manager", "https://www.AbonamenteSali.ro", "url(assets/images/absali.png)"]];

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  ngOnInit() {

  }
}