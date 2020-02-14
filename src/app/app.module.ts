import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PianoComponent } from './components/piano/piano.component';
import { KeypadComponent } from './components/keypad/keypad.component';
import { KeyComponent } from './components/key/key.component';
import { VolumeComponent } from './components/volume/volume.component';
import { PowerComponent } from './components/power/power.component';
import { SizeComponent } from './components/size/size.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PianoComponent,
    KeypadComponent,
    KeyComponent,
    VolumeComponent,
    PowerComponent,
    SizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
