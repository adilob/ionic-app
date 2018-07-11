import { Component, Input } from '@angular/core';

@Component({
  selector: 'profile-photo',
  templateUrl: 'profile-photo.html'
})
export class ProfilePhotoComponent {

  @Input('photoUrl') photoUrl;
  @Input('isPet') isPet;

  constructor() { }

}
