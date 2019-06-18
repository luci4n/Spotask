import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../shared/scroll.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(private scrollService: ScrollService) { }

  ngOnInit() {
  }

}
