import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appDisableControl]',
})
export class DisableControlDirective implements OnChanges {
  constructor(private ngControl: NgControl) {}

  @Input()
  public appDisableControl: boolean = true;

  ngOnChanges(changes: SimpleChanges): void {
   if(changes.appDisableControl){
        const action = this.appDisableControl ? 'disable' : 'enable';
        this.ngControl.control[action]();
   }
  }
}
