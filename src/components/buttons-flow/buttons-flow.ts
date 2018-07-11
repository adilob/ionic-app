import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'buttons-flow',
  templateUrl: 'buttons-flow.html'
})
export class ButtonsFlowComponent {

  @Input('confirmText') confirmText: any;
  @Input('cancelText') cancelText: any;

  @Output() onConfirm = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  constructor() { }

  confirm() {
    this.onConfirm.emit(null);
  }

  cancel() {
    this.onCancel.emit(null);
  }

}
