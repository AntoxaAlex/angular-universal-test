import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AppService } from './app.service';
import { ResponseData } from './core/_interfaces/responseData.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public responseData$!: Observable<ResponseData>
  constructor(private _appService: AppService) {
  }

  ngOnInit() {
    this.responseData$ = this._appService.getData();
  }
}
