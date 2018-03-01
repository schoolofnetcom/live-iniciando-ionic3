import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {albumListModel} from '../../app/albuns-list-model';

/**
 * Generated class for the AlbumListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-album-list',
  templateUrl: 'album-list.html',
})
export class AlbumListPage {
  listAlbum = albumListModel;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlbumListPage');
  }

}
