import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { Interceptor } from './shared/configs/interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [
   {
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
