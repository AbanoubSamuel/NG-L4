
import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[Imgbox]'
})
export class ImgboxDirective implements OnChanges {
  @Input('Imgbox') color: string = "red";
  @Input() hovercolor: string = "red";

  constructor(private elm: ElementRef) {
    // elm.nativeElement.style.border = `solid 2px ${this.color}`
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.elm.nativeElement.style.border = `solid 2px ${this.color}`

  }
  @HostListener("mouseover") hover() {
    this.elm.nativeElement.style.border = `solid 2px ${this.hovercolor}`
  }
  @HostListener("mouseout") out() {
    this.elm.nativeElement.style.border = `solid 2px ${this.color}`
  }

}
