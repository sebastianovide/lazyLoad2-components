import { NgModule } from '@angular/core';
import { MusicCardComponent } from './music-card/music-card'
import { MusicItemComponent } from './music-item/music-item'
import {IonicModule}  from 'ionic-angular'
import { PipesModule } from '../pipes/pipes.module'
import { PopoverModule } from './popover/popover.module'
import { PopoverComponent } from './popover/popover'
import { HelloComponent } from "./hello/hello";

@NgModule({
  declarations: [MusicCardComponent, MusicItemComponent, HelloComponent],
  imports: [PipesModule, IonicModule, PopoverModule],
  exports: [MusicCardComponent, MusicItemComponent, HelloComponent],
  entryComponents: [PopoverComponent]
})
export class ComponentsModule { }
