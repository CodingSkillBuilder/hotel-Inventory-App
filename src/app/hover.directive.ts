import {AfterViewInit, Directive, ElementRef, Host, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit{

  @Input() color: string = 'rgba(169,169,236,0.79)';
  outlineColor: string = 'rgb(251,113,0)';
  mouseHourOutlineColor: string = 'rgb(132,255,118)';

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {
    console.log(this.elementRef.nativeElement);
  }

  ngOnInit(): void {
      this.elementRef.nativeElement.style.backgroundColor = this.color;
      this.renderer.setStyle(this.elementRef.nativeElement, 'border', '2px solid');
      this.renderer.setStyle(this.elementRef.nativeElement, 'border-color', this.outlineColor);
    }

    @HostListener('mouseenter') onMouseEnter(){ //Mind the "onMouseEnter" is a custom function name and it is the decoration that listens
    this.renderer.setStyle(this.elementRef.nativeElement, 'border-color', this.mouseHourOutlineColor);
    }

  @HostListener('mouseleave') onMouseLeave(){ //Mind the "onMouseLeave" is a custom function name and it is the decoration that listens
    this.renderer.setStyle(this.elementRef.nativeElement, 'border-color', this.outlineColor);
  }

}
