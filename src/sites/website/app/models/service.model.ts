interface ServicesListInterface {
    maleServices: ServiceSectionInterface;
    femaleServices: ServiceSectionInterface
}

interface ServiceSectionInterface {
	id: string;
	title: string;
	locations: string[];
	list: ServiceInterface[];
}

interface ServiceInterface {
	id: string;
	title: string;
	price: PriceInterface[];
}

interface PriceInterface {
	default: number;
	member: number;
	hairSize?: string;
}

export { ServicesListInterface, ServiceSectionInterface, ServiceInterface, PriceInterface };
