import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {albumListModel} from '../../app/albuns-list-model'
/**
 * Generated class for the AlbumCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-album-create',
  templateUrl: 'album-create.html',
})
export class AlbumCreatePage {

  albumName = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlbumCreatePage');
  }

  create(){
    albumListModel.list.push(this.albumName)
  }

}
