import {Inject, Injectable, Optional, PLATFORM_ID} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {ResponseData} from "./core/_interfaces/responseData.interface";
import {DOCUMENT, isPlatformBrowser} from "@angular/common";
import {Meta, Title} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private _http: HttpClient,
    private _meta: Meta,
    private _title: Title,
    @Inject(PLATFORM_ID) private _platformId: Object,
    @Inject(DOCUMENT) private doc: Document,
    @Optional() @Inject('serverUrl') protected serverUrl: string) { }

  public getData(): Observable<ResponseData> {
    const baseUrl = isPlatformBrowser(this._platformId) ? '' : this.serverUrl;
    return this._http.get<ResponseData>(`${baseUrl}/assets/static/responseData.json`)
      .pipe(
        tap((response: ResponseData) => {
          this._title.setTitle(response.title)
          response.hreflangs.forEach(langObj => {
            const lang = Object.keys(langObj)[0];
            const href = Object.values(langObj)[0];
            this.createLink(lang,href)
          })
        })
      )
  }

  public createLink(lang: string,href: string): void {
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'arternate');
    link.setAttribute('hreflang', lang);
    link.setAttribute('href', href);
    this.doc.head.appendChild(link);
  }
}
