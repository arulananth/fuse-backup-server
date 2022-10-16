import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Biller, Global, Supplier} from '../models/index';
import {UserList} from '../models/user_list';


@Injectable()
export class BillerService {

  constructor(private http: HttpClient) { }
  getAll(limit, page): any {
    return this.http.get<Biller>(Global.API_ENDPOINT + '/v1/biller?limit=' + limit + '&page=' + page);
  }
  create(biller: Biller): any {
    return this.http.post(Global.API_ENDPOINT + '/v1/biller', biller);
  }
  pdf(): any {
    return this.http.get<Supplier>(Global.API_ENDPOINTQ + '/v1/quotation-pdf');
  }
  downloadInvoice(url: string): any {
    return this.http.get(url, { responseType: 'blob' });
  }
  getPagination(Url: string): any {
      return this.http.get<Supplier>(Url);
  }
}
