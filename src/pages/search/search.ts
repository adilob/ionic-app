import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  colors: Array<string>;
  tags: Array<string> = [];
  selectedTags: Array<string> = [];
  search: string = '';

  @ViewChild('searchbox') searchBox: any;

  constructor(public navCtrl: NavController) {

  }

  addTag(tag) {
    if (this.search.length > 0) {
      this.search = '';
    }

    this.selectedTags.push(tag + ' X');

    let index = this.tags.indexOf(tag);
    this.tags.splice(index, 1);
  }

  removeSelectedTag(tag) {
    var startsWithHash = tag.startsWith('#');
    var endsWithX = tag.endsWith(' X');

    if (startsWithHash && endsWithX) {
      this.tags.push(tag.substr(0, tag.length - 2));
    }

    let index = this.selectedTags.indexOf(tag);
    this.selectedTags.splice(index, 1);
  }

  ionViewDidLoad() {
    this.colors = ['bp-yellow', 'bp-red', 'bp-blue', 'bp-green'];
    this.tags = [
      '#REMÉDIO', '#VACINA', '#DERMATO', '#CLINICA 24H', '#VACINAS', '#HOSPITAL',
      '#REMÉDIO', '#VACINA', '#DERMATO', '#CLINICA 24H', '#VACINAS', '#HOSPITAL',
      '#REMÉDIO', '#VACINA', '#DERMATO', '#CLINICA 24H', '#VACINAS', '#HOSPITAL'
    ];

    this.selectedTags = [];
    console.log('searchbox', this.searchBox);
  }

  addSelectedTag($event) {
    if ($event.keyCode == 13) {
      this.doSearch();
    }
  }

  resetSearchElements() {
    if (this.selectedTags.length <= 0) {
      this.search = '';
      this.searchBox.setFocus();
    } else {
      /*
      por agora "devolve" as tags para o array original.
      depois as tags virão do servidor e podem ser adicionadas diretamente de volta.
      */
      for (let i = this.selectedTags.length - 1; i >= 0; i--) {
        this.tags.unshift(this.selectedTags[i].substr(0, this.selectedTags[i].length - 2));
      }
      this.selectedTags = [];
    }
  }

  doSearch() {
    alert('fez a pesquisa!!');
    this.resetSearchElements();
  }

}
