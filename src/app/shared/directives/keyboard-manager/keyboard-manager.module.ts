import { KeyboardManagedItemDirective } from './keyboard-managed-item.directive';
import { KeyboardManagerDirective } from './keyboard-manager.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [KeyboardManagerDirective, KeyboardManagedItemDirective],
  imports: [CommonModule],
  exports: [KeyboardManagerDirective, KeyboardManagedItemDirective],
})
export class KeyboardManagerDirectiveModule {}
