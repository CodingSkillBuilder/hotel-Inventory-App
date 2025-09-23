import {AfterViewInit, Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit{

  color: string = 'rgba(169,169,236,0.79)';
  outlineColor: string = 'rgb(251,113,0)';

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

}
