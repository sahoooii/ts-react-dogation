export enum SelectedPage {
	Home = 'home',
	Services = 'services',
	Facilities = 'facilities',
	ContactUs = 'contactus',
}

export interface LinksType {
	id: number;
	link: string;
}

export interface ServicesType {
	id: number;
	icon: string;
	title: string;
	description: string;
}

export interface FacilitiesType {
	title: string;
	description: string;
	image: string;
}
