import { NgModule } from '@angular/core';
import { MusicCardComponent } from './music-card/music-card'
import { MusicItemComponent } from './music-item/music-item'
import {IonicModule}  from 'ionic-angular'
import { PipesModule } from '../pipes/pipes.module'
import { PopoverComponent } from './popover/popover'

@NgModule({
  declarations: [MusicCardComponent, MusicItemComponent, PopoverComponent],
  imports: [PipesModule, IonicModule],
  exports: [MusicCardComponent, MusicItemComponent, PopoverComponent],
  // entryComponents: [PopoverComponent]
})
export class ComponentsModule { }
