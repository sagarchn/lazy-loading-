import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SelectivePreloadingStrategy implements PreloadingStrategy {

/**
 * 
 * In any routing module if router data has loadKaruKya flag as true then it will be preloaded 
 * 
 * 
 * */

  preload(route: Route, load: () => Observable<any>): Observable<any> {
      if (route.data && route.data['loadKaruKya']) {
       
      

      return load();
    } else { 
      return Observable.of(null);
    }
  }
}