import { Component } from '@angular/core';

import { AboutPage } from '../camera/about';
import { ContactPage } from '../progress/contact';
import { HomePage } from '../home/home';
import { SignInPage } from '../sign-in/sign-in';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = SignInPage;

  constructor() {

  }
}
