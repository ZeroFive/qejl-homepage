import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppDownloadComponent } from './appDownload.component'

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    AppDownloadComponent,
  ],
  providers: [],
  exports: [
    AppDownloadComponent
  ]
})
export class AppDownloadModule { }
