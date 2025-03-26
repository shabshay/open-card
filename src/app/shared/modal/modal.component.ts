import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  imports: [
    NgClass
  ],
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements AfterViewInit {
  @Input() title: string = '';
  @Input() confirmText: string = 'סגור';
  @Output() close = new EventEmitter<void>();

  visible = true;

  ngAfterViewInit() {
    setTimeout(() => {
      const el = document.querySelector('.modal-backdrop') as HTMLElement;
      if (el) el.focus();
    }, 0);
  }

  onClose() {
    this.visible = false;
    setTimeout(() => this.close.emit(), 200);
  }
}
