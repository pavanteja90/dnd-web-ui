import { Injectable } from '@angular/core';
// import { ApiService, Email } from '@projekt/core';
// import { createTransport } from 'nodemailer';
// import { environment } from '../../environments/environment';

@Injectable()
export class EmailService {
	// emailEndPoint = environment.emailEndpoint;
	// constructor(private apiService: ApiService) {}

	// sendEmail(data: any) {
	// 	// return this.apiService.post(this.emailEndPoint, data);
	// 	// Send an email to gmail SMTP server
	// 	let transporter = createTransport({
	// 		service: 'gmail',
	// 		host: 'smtp.gmail.com',
	// 		port: 587,
	// 		secure: false, // true for 465, false for other ports
	// 		auth: {
	// 			user: 'admin@dianandapper.com',
	// 			pass: 'iaykfukncfcprhnw',
	// 		},
	// 	});

	// 	let mailOptions = {
	// 		from: 'pavanteja.bhatta@gmail.com',
	// 		to: 'admin@dianandapper.com',
	// 		subject: 'Sending Email using Node.js',
	// 		text: 'That was easy!',
	// 	};

	// 	transporter.sendMail(mailOptions, function (error, info) {
	// 		if (error) {
	// 			console.log(error);
	// 		} else {
	// 			console.log('Email sent: ' + info.response);
	// 		}
	// 	});
	// }
}
