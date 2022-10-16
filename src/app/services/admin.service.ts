import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { User, Global} from '../models';
//import {Order} from '../models';
import { catchError} from 'rxjs/operators';
import {Chaininstance} from "../models/chaininstance";
@Injectable({providedIn: 'root'})
@Injectable()
export class AdminService {

  constructor(private http: HttpClient) { }
  // getAll(): any {
  //   return this.http.get<User>(Global.API_ENDPOINT + '/api/v1/admin/admins');
  // }
  // getAllClient(): any {
  //   return this.http.get<User>(Global.API_ENDPOINT + '/api/admin/client');
  // }
  // getAllBooking(): any {
  //   return this.http.get<User>(Global.API_ENDPOINT + '/api/admin/booking');
  // }
  // getAllPromoAdmins(): any {
  //   return this.http.get<User[]>(Global.API_ENDPOINT + '/api/v1/admin/promo-code-admins');
  // }
  // getById(id: number): any {
  //   return this.http.get(Global.API_ENDPOINT + '/api/v1/admin/users/' + id);
  // }
  //
  // create(user: User): any {
  //   return this.http.post(Global.API_ENDPOINT + '/api/v1/admin/add', user);
  // }
  forgot(email: User): any {
    return this.http.post(Global.API_ENDPOINT + '/api/v1/reset', email);
  }
  reset(user: User): any {
    return this.http.post(Global.API_ENDPOINT + '/api/v1/reset/' + user.token, user);
  }
  addChainInstance(form):any{
    return this.http.post(Global.API_ENDPOINT + '/api/chainInstance/',form)
  }
  listChainInstance(){
    return this.http.get<Chaininstance>(Global.API_ENDPOINT + '/api/chainInstance/');
     
  }
  getList(url,params){
    if(!params) params={}
    return this.http.get<any>(Global.API_ENDPOINT + '/api/'+url,params);
     
  }
  sendPost(url,params):any{
    return this.http.post(Global.API_ENDPOINT + '/api/'+url,params)
  }
  sendPatch(url,params):any{
    return this.http.patch(Global.API_ENDPOINT + '/api/'+url,params)
  }
 
  sendDelete(url):any{
    return this.http.delete(Global.API_ENDPOINT + '/api/'+url)
  }
}
