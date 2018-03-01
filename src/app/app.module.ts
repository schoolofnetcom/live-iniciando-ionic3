import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AlbumListPage} from "../pages/album-list/album-list";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage,
        AlbumListPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        FormsModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage,
        AlbumListPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
