import {
  Directive,
  Input,
  ElementRef,
  HostListener,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input('appTooltip') tooltipText = '';
  @Input() tooltipPosition: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() tooltipDelay = 200;
  @Input() tooltipHideDelay = 100;

  private tooltipEl?: HTMLElement;
  private showTimeout: any;
  private hideTimeout: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    clearTimeout(this.hideTimeout);
    this.showTimeout = setTimeout(() => this.createTooltip(), this.tooltipDelay);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    clearTimeout(this.showTimeout);
    this.hideTimeout = setTimeout(() => this.destroyTooltip(), this.tooltipHideDelay);
  }

  createTooltip() {
    if (this.tooltipEl || !this.tooltipText) return;

    const tooltip = this.renderer.createElement('span');
    tooltip.innerText = this.tooltipText;

    this.renderer.setStyle(tooltip, 'position', 'absolute');
    this.renderer.setStyle(tooltip, 'background', '#333');
    this.renderer.setStyle(tooltip, 'color', '#fff');
    this.renderer.setStyle(tooltip, 'padding', '6px 10px');
    this.renderer.setStyle(tooltip, 'borderRadius', '6px');
    this.renderer.setStyle(tooltip, 'fontSize', '13px');
    this.renderer.setStyle(tooltip, 'whiteSpace', 'nowrap');
    this.renderer.setStyle(tooltip, 'zIndex', '1000');
    this.renderer.setStyle(tooltip, 'opacity', '0');
    this.renderer.setStyle(tooltip, 'transition', 'opacity 0.2s');

    // מיקום לפי הטולטיפ
    const pos = this.tooltipPosition;
    if (pos === 'top') {
      this.renderer.setStyle(tooltip, 'bottom', '110%');
      this.renderer.setStyle(tooltip, 'left', '50%');
      this.renderer.setStyle(tooltip, 'transform', 'translateX(-50%)');
    } else if (pos === 'bottom') {
      this.renderer.setStyle(tooltip, 'top', '110%');
      this.renderer.setStyle(tooltip, 'left', '50%');
      this.renderer.setStyle(tooltip, 'transform', 'translateX(-50%)');
    } else if (pos === 'left') {
      this.renderer.setStyle(tooltip, 'right', '110%');
      this.renderer.setStyle(tooltip, 'top', '50%');
      this.renderer.setStyle(tooltip, 'transform', 'translateY(-50%)');
    } else if (pos === 'right') {
      this.renderer.setStyle(tooltip, 'left', '110%');
      this.renderer.setStyle(tooltip, 'top', '50%');
      this.renderer.setStyle(tooltip, 'transform', 'translateY(-50%)');
    }

    this.tooltipEl = tooltip;
    this.renderer.appendChild(this.el.nativeElement, tooltip);
    this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');

    // טריגר לפתיחה הדרגתית
    requestAnimationFrame(() => {
      this.renderer.setStyle(tooltip, 'opacity', '1');
    });
  }

  destroyTooltip() {
    if (this.tooltipEl) {
      this.renderer.removeChild(this.el.nativeElement, this.tooltipEl);
      this.tooltipEl = undefined;
    }
  }
}
