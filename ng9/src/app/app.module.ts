import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LandingStartComponent } from './landing/start/start.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VideoComponent } from './video/video.component';
import { HttpClientModule } from '@angular/common/http';
import { VideoroomsModule } from '@bambustech/videorooms-ng';
import { FormsModule } from '@angular/forms';
import { LeftRoomComponent } from './left-room/left-room.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LandingStartComponent,
    VideoComponent,
    LeftRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    VideoroomsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
