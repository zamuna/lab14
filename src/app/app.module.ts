import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyhttpServiceService } from './myhttp-service.service';
import { HttpModule} from '@angular/http'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,HttpModule
  ],
  providers: [MyhttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
