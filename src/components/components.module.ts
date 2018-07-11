import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { ProfilePhotoComponent } from './profile-photo/profile-photo';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonsFlowComponent } from './buttons-flow/buttons-flow';

@NgModule({
	declarations: [ProfilePhotoComponent,
    ButtonsFlowComponent],
	imports: [BrowserModule, TranslateModule],
	exports: [ProfilePhotoComponent,
    ButtonsFlowComponent]
})
export class ComponentsModule {}
