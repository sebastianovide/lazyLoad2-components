import { Component, Input } from '@angular/core';
import { PopoverComponent } from '../popover/popover'
import { PopoverController } from 'ionic-angular';
@Component({
  selector: 'music-item',
  templateUrl: 'music-item.html'
})
export class MusicItemComponent {
  @Input() track
  constructor(private popoverCtrl: PopoverController) {
    this.popoverCtrl.create(PopoverComponent).present();
  }
}
