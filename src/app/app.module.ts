import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CadmusMaterialModule } from '@myrmidon/cadmus-material';
import { CadmusLayersModule } from 'projects/myrmidon/cadmus-layers/src/public-api';

import { AppComponent } from './app.component';
import { LayerDemoComponent } from './components/layer-demo/layer-demo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgToolsModule } from '@myrmidon/ng-tools';

@NgModule({
  declarations: [AppComponent, LayerDemoComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // cadmus
    CadmusMaterialModule,
    CadmusLayersModule,
    BrowserAnimationsModule,
    NgToolsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
