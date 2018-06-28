import { EliotProvider } from './../../providers/eliot/eliot';
import { ModalPage } from './../modal/modal';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the DevicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-device',
  templateUrl: 'device.html',
})
export class DevicePage {

  users: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public eliotProvider: EliotProvider) {
    this.getUsersList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicePage');
  }

  getUsersList() {
    this.eliotProvider.getUserList()
    .then(data => {
      this.users = data;
    })
  }

  public goToDeviceModal(user) {
    let deviceModal = this.modalCtrl.create(ModalPage, {user: user});
    deviceModal.present();
  }
}

