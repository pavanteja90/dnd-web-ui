export interface Email {
	senderName: string;
	senderEmail: string;
	senderPasswordHash: string;
	receiverEmail: string;
	subject: string;
	message: string;
}