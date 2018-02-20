import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ChnageTextDirective } from './chnage-text.directive';
import { DatapipeComponent } from './datapipe/datapipe.component';
import { SqrtPipe } from "./app.sqrt";
import { LocalDataService } from "./local-data.service";
import { UserDataComponent } from './user-data/user-data.component';


@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    ChnageTextDirective,
    DatapipeComponent,
    SqrtPipe,
    UserDataComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
    {
      path: 'drop-down',
      component: DropdownComponent
    }])
  ],
  providers: [LocalDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
