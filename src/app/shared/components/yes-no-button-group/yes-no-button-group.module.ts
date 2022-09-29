import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesNoButtonGroupComponent } from './yes-no-button-group.component';
import { KeyboardManagerDirectiveModule } from '../../directives/keyboard-manager/keyboard-manager.module';

@NgModule({
  declarations: [YesNoButtonGroupComponent],
  imports: [CommonModule, KeyboardManagerDirectiveModule],
  exports: [YesNoButtonGroupComponent],
})
export class YesNoButtonGroupModule {}
