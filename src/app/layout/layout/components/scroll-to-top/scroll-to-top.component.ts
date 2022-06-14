import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styles: [
  ]
})
export class ScrollToTopComponent implements OnInit {
  windowScrolled: boolean = false;
  constructor(@Inject(DOCUMENT) private document: Document) { }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (document.documentElement.scrollTop > 500) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.scrollY || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }
  scrollToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.scrollTo(0, 0);
      }
    })();
  }

  ngOnInit(): void {
  }

}
