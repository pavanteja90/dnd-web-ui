import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
	constructor(private http: HttpClient) { }
	headers = new HttpHeaders({ 'Content-Type': 'application/json' });
	get(endpoint: string): Observable<any> {
		return this.http.get(endpoint, { headers: this.headers });
	}

	post(endpoint: string, model: any): Observable<any> {
		return this.http.post(endpoint, model, { headers: this.headers });
	}
}