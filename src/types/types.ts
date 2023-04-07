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
	icon: string;
	title: string;
	description: string;
}
