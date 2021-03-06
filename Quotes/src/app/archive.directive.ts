import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appArchive]'
})
export class ArchiveDirective {

  constructor(private elem:ElementRef) {}

  @HostListener("click") onClicks() {
    this.textDeco("line-through")
  }

  @HostListener("dbclick") onDoubleClicks() {
    this.textDeco("highlight")
  }
  
  private textDeco(action: string) {
    this.elem.nativeElement.style.textDecoration = action;
  }

}
