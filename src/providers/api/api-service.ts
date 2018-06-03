import 'rxjs/add/operator/map';

import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../../config/AppConfig';

@Injectable()
export class ApiService {
    public serviceUrl: string;
    private actionUrl: string;

    constructor(private http: HttpClient) {
        this.actionUrl = AppConfig.configApi.server + AppConfig.configApi.apiUrl;
    }

    public getAll<T>(): Observable<T> {
        return this.http.get<T>(this.actionUrl);
    }

    public getSingle<T>(id: number): Observable<T> {
        return this.http.get<T>(this.actionUrl + id);
    }

    public add<T>(model: Object): Observable<T> {
        return this.http.post<T>(this.actionUrl, model);
    }

    public update<T>(id: number, itemToUpdate: any): Observable<T> {
        return this.http
            .put<T>(this.actionUrl + id, JSON.stringify(itemToUpdate));
    }

    public delete<T>(id: number): Observable<T> {
        return this.http.delete<T>(this.actionUrl + id);
    }
}


@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        //req = req.clone({ headers: req.headers.set('Ocp-Apim-Subscription-Key','9bfb71e718c84386bb907b9f46e89d51') });
        console.log(JSON.stringify(req.headers));
        return next.handle(req);
    }
}