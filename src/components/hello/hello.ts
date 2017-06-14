import { Component } from '@angular/core';
import { PopoverComponent } from '../popover/popover'
import { PopoverController } from 'ionic-angular';
@Component({
  selector: 'hello',
  templateUrl: 'hello.html'
})
export class HelloComponent {
  constructor(private popoverCtrl: PopoverController) {
  }

  openPopover() {
    this.popoverCtrl.create(PopoverComponent).present();
  }
}
