import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeviceCommandPage } from './device-command';

@NgModule({
  declarations: [
    DeviceCommandPage,
  ],
  imports: [
    IonicPageModule.forChild(DeviceCommandPage),
  ],
})
export class DeviceCommandPageModule {}
