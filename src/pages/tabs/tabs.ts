import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FukuiPage } from '../fukui/fukui';
import { SelectPage } from '../select/select';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = FukuiPage;
  tab5Root = SelectPage;

  constructor() {

  }
}
