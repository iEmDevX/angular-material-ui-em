import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../commons/globals';

@Injectable()
export class AjaxService {

  public static URL_PATH = '';
  public static URL_PATH_API = '';

  constructor(
    private httpClient: HttpClient,
    private globals: Globals,
  ) { }

  async get(url: string) {
    this.globals.loading = true;
    const response = await this.httpClient.get(AjaxService.URL_PATH_API + url).toPromise();
    this.globals.loading = false;
    return response;
  }
}
