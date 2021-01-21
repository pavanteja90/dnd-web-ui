import { Injectable } from '@angular/core';
import { ApiService, Email } from '@projekt/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class EmailService {
	emailEndPoint = environment.emailEndpoint;
	constructor(private apiService: ApiService) { }

	sendEmail(data: Email): Observable<any> {
		return this.apiService.post(this.emailEndPoint, data);
	}
}
