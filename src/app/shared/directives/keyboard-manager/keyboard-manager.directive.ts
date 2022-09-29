import { KeyboardManagedItemDirective } from './keyboard-managed-item.directive';
import {
  ContentChildren,
  Directive,
  HostListener,
  QueryList,
} from '@angular/core';

@Directive({
  selector: '[appKeyboardManager]',
})
export class KeyboardManagerDirective {
  constructor() {}

  @ContentChildren(KeyboardManagedItemDirective)
  public items: QueryList<KeyboardManagedItemDirective>;

  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {
    console.log(this.items);
    console.log(event.key);
  }
}
