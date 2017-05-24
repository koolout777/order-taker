import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {billPage} from '../pages/bill/bill';
import {menuPage} from '../pages/menu/menu';
import {icePage} from '../pages/ice/ice';
import {onesetPage} from '../pages/one-set/one-set';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController) {
  		billpage(){
  			this.navCtrl.push(billPage);
  		}
  }



}
