import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlbumCreatePage } from './album-create';

@NgModule({
  declarations: [
    AlbumCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(AlbumCreatePage),
  ],
})
export class AlbumCreatePageModule {}
