import { Component, ViewChild } from '@angular/core';

import { SearchPage } from '../search/search';
import { Tabs, Events } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  @ViewChild('tabs') tabs: Tabs;

  tab1Root = SearchPage;
  tab5Root = ProfilePage;

  constructor(private events: Events) {
    this.events.subscribe('tabs:change', (data) => {
      this.tabs.select(data.tabIndex);
    });
   }
}
