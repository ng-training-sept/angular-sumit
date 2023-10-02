import { Directive, ElementRef, inject } from '@angular/core';
// import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[Special]',
  standalone: true,
})
export class SpecialDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'deeppink';
  }
}

@Directive({
  selector: '[appSpecial]',
  standalone: true,
})
export class SpecialDirective2 {
  private readonly el = inject(ElementRef);

  @HostListener('mouseenter') onMouseEnter(): void {
    this.applySpecialColor('deeppink');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.applySpecialColor('');
  }

  private applySpecialColor(color: string): void {
    this.el.nativeElement.style.color = color;
  }
}
