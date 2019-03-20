import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appTick]'
})
export class TickDirective implements OnInit {

  constructor(private elementRef: ElementRef, private  renderer: Renderer2) { }

  ngOnInit(): void {
    let li = this.elementRef.nativeElement;
    this. renderer.setStyle(li, 'list-style-image', 'url(/assets/tick.png)');
  }
}
