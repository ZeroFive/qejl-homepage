import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module'
import { BannerModule } from './banner/banner.module'
import { IntroduceModule } from './introduce/introduce.module'
import { AppDownloadModule} from './appDownload/appDownload.module'
import { QuestionModule} from './question/question.module'
import { CantactModule} from './cantact/cantact.module'
import { NavigaterService } from './navigaterService'
import { MCarouselModule }  from './mcarousel/m-carousel.module'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MCarouselModule.forRoot(),
    HeaderModule,
    BannerModule,
    IntroduceModule,
    AppDownloadModule,
    QuestionModule,
    CantactModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [NavigaterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
