import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Nf404Component } from './nf404/nf404.component';
import { ToolbarComponent } from './map/toolbar/toolbar.component';
import { ZoomInBtnComponent } from './map/toolbar/zoom-in-btn/zoom-in-btn.component';
import { TaskbarComponent } from './map/taskbar/taskbar.component';
import { ZoomOutBtnComponent } from './map/toolbar/zoom-out-btn/zoom-out-btn.component';
import { MapService } from './map/services/map.service';
import { LogoComponent } from './shared/logo/logo.component';
import { GoHomeBtnComponent } from './map/toolbar/go-home-btn/go-home-btn.component';
import { MeasureLineComponent } from './map/toolbar/measure-line/measure-line.component';
import { MeasureAreaComponent } from './map/toolbar/measure-area/measure-area.component';
import { GoToXYComponent } from './map/toolbar/go-to-xy/go-to-xy.component';
import { FeatureInfoComponent } from './map/toolbar/feature-info/feature-info.component';
import { FeatureIntersectionComponent } from './map/toolbar/feature-intersection/feature-intersection.component';
import { DialogPanesComponent } from './map/dialog-panes/dialog-panes.component';
import { DialogMeasureLineComponent } from './map/dialog-panes/dialog-measure-line/dialog-measure-line.component';
import { DialogMeasureAreaComponent } from './map/dialog-panes/dialog-measure-area/dialog-measure-area.component';
import { DialogGoToXyComponent } from './map/dialog-panes/dialog-go-to-xy/dialog-go-to-xy.component';

import { LegendComponent } from './map/legend/legend.component';
import { BasemapsComponent } from './map/legend/basemaps/basemaps.component';
import { LayersComponent } from './map/legend/layers/layers.component';
import { LayerItemComponent } from './map/legend/layers/layer-item/layer-item.component';
import { DialogFeatureInfoComponent } from './map/dialog-panes/dialog-feature-info/dialog-feature-info.component';
import { DialogFeatureIntersectionComponent } from './map/dialog-panes/dialog-feature-intersection/dialog-feature-intersection.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent,
    LoginComponent,
    Nf404Component,
    ToolbarComponent,
    ZoomInBtnComponent,
    TaskbarComponent,
    ZoomOutBtnComponent,
    LogoComponent,
    GoHomeBtnComponent,
    MeasureLineComponent,
    MeasureAreaComponent,
    GoToXYComponent,
    FeatureInfoComponent,
    FeatureIntersectionComponent,
    DialogPanesComponent,
    DialogMeasureLineComponent,
    DialogMeasureAreaComponent,
    DialogGoToXyComponent,
    LegendComponent,
    BasemapsComponent,
    LayersComponent,
    LayerItemComponent,
    DialogFeatureInfoComponent,
    DialogFeatureIntersectionComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [MapService],
  bootstrap: [AppComponent],
})
export class AppModule {}
