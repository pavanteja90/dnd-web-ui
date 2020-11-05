export class Config {
	appVersion: string;
	// This is default meta data setup if the app routing doesn't provide any
	name: string;
	site: {
		title: string;
		description: string;
		logo: string;
		locale: string;
	};
	custom: any;
}