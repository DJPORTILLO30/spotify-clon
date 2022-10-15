import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderuserComponent } from './components/headeruser/headeruser.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';



@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderuserComponent,
    CardPlayerComponent,
    SectionGenericComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SideBarComponent,
    MediaPlayerComponent,
    HeaderuserComponent,
    CardPlayerComponent,
    SectionGenericComponent
  ]
})
export class SharedModule { }
