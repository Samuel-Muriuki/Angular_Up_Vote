import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appArchive]'
})
export class ArchiveDirective {

  constructor(private elem:ElementRef) {}

  @HostListener("click") onClicks() {
    this.textDeco("None")
  }

  @HostListener("dbclick") onDoubleClicks() {
    this.textDeco("line-through")
  }
  
  private textDeco(action: string) {
    this.elem.nativeElement.style.textDecoration = action;
  }

}
