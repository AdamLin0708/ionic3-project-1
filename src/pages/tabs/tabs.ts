import { Component } from '@angular/core';

import { APIPage } from '../api/api';
import { QrPage } from '../qr/qr';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = APIPage;
  tab2Root = QrPage;

  constructor() {

  }
}
