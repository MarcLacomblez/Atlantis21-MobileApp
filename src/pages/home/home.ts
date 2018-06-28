import { EliotProvider } from './../../providers/eliot/eliot';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  code: any;
  constructor(public navCtrl: NavController, public eliotProvider: EliotProvider) {
    
  }

  /*getCode() {
    this.eliotProvider.getAccessToken();
  }*/

  goToMenu() {
    this.navCtrl.push(MenuPage);
  }

}
