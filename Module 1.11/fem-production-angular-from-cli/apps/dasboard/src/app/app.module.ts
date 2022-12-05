import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreDataModule } from '@fem/core-data';
import { CoreStateModule } from '@fem/core-state';
import { MaterialModule } from '@fem/material';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WidgetDetailsComponent } from './widgets/widget-details/widget-details.component';
import { WidgetsListComponent } from './widgets/widgets-list/widgets-list.component';
import { WidgetsComponent } from './widgets/widgets.component';

@NgModule({
  declarations: [AppComponent, WidgetsComponent, WidgetsListComponent, WidgetDetailsComponent, HomeComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreDataModule,
    CoreStateModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
