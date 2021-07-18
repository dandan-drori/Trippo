import { httpService } from './http.service.js'

export const gStays = [
	{
		_id: '10001247',
		name: 'Furnished Studio in Manhattan',
		imgFolder: 1,
		imgUrls: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
		price: 363.0,
		summary: 'Fantastic studio apartment with three bedrooms, located in Manhattan',
		propertyType: 'Apartment',
		accommodates: 2,
		amenities: [
			{ txt: 'TV', icon: 'el-icon-monitor' },
			{ txt: 'Wifi', icon: 'wifi', fa: true },
			{ txt: 'Kitchen', icon: 'el-icon-knife-fork' },
			{ txt: 'Pets allowed', icon: 'paw', fa: true },
			{ txt: 'Shower', icon: 'shower', fa: true },
			{
				txt: 'Air conditioning',
				icon: 'snowflake',
				fa: true,
			},
			{ txt: 'Smoking allowed', icon: 'el-icon-smoking' },
		],
		host: { _id: '51399391', fullName: 'Davit Pok', imgUrl: 'img.jpg' },
		loc: {
			country: 'New York',
			countryCode: 'NY',
			address: 'New York, New York',
			lat: 40.73061,
			lng: -73.935242,
		},
		reviews: [
			{
				id: 'madeId',
				txt: 'Very helpful hosts. Cooked traditional...',
				rate: 4,
				at: 1608192831,
				by: {
					_id: 'u102',
					fullname: 'user2',
					imgUrl: '/img/img2.jpg',
				},
			},
			{
				id: 'madeId1',
				txt: 'Very helpful hosts. Cooked traditional...',
				rate: 4,
				at: 1608192831,
				by: {
					_id: 'u102',
					fullname: 'user2',
					imgUrl: '/img/img2.jpg',
				},
			},
			{
				id: 'madeId2',
				txt: 'Very helpful hosts. Cooked traditional...',
				rate: 4,
				at: 1608192831,
				by: {
					_id: 'u102',
					fullname: 'user2',
					imgUrl: '/img/img2.jpg',
				},
			},
		],
	},
	{
		_id: '11212889',
		imgFolder: 2,
		name: 'Best Quiet Apartment in Manhattan',
		imgUrls: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
		price: 256.0,
		summary: 'Quiet Studio Apartment with PRIVATE KITCHEN & SHOWER ROOM with tub',
		propertyType: 'Apartment',
		accommodates: 3,
		amenities: [
			{ txt: 'TV', icon: 'el-icon-monitor' },
			{ txt: 'Wifi', icon: 'wifi', fa: true },
			{ txt: 'Kitchen', icon: 'el-icon-knife-fork' },
			{ txt: 'Pets allowed', icon: 'paw', fa: true },
			{ txt: 'Shower', icon: 'shower', fa: true },
			{
				txt: 'Air conditioning',
				icon: 'snowflake',
				fa: true,
			},
			{ txt: 'Smoking allowed', icon: 'el-icon-smoking' },
		],
		host: { _id: '51399391', fullName: 'Davit Pok', imgUrl: 'img.jpg' },
		loc: {
			country: 'New York',
			countryCode: 'NY',
			address: 'New York, New York',
			lat: 40.73061,
			lng: -73.935242,
		},
		reviews: [],
	},
	{
		_id: '11333552',
		imgFolder: 3,
		name: 'Large studio near Central Park',
		imgUrls: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
		price: 295.0,
		summary:
			"Great, bright and clean studio in Hell's Kitchen, one of the nicest streets, near the famous Original Soup Man Store.",
		propertyType: 'Apartment',
		accommodates: 3,
		amenities: [
			{ txt: 'TV', icon: 'el-icon-monitor' },
			{ txt: 'Wifi', icon: 'wifi', fa: true },
			{ txt: 'Kitchen', icon: 'el-icon-knife-fork' },
			{ txt: 'Pets allowed', icon: 'paw', fa: true },
			{ txt: 'Shower', icon: 'shower', fa: true },
			{
				txt: 'Air conditioning',
				icon: 'snowflake',
				fa: true,
			},
			{ txt: 'Smoking allowed', icon: 'el-icon-smoking' },
		],
		host: { _id: '51399391', fullName: 'Davit Pok', imgUrl: 'img.jpg' },
		loc: {
			country: 'New York',
			countryCode: 'NY',
			address: 'New York, New York',
			lat: 40.73061,
			lng: -73.935242,
		},
		reviews: [],
	},
	{
		_id: '12241141',
		imgFolder: 4,
		name: 'Fantastic studio in Time Square',
		imgUrls: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
		price: 230.0,
		summary: 'Entire home to yourself',
		propertyType: 'Apartment',
		accommodates: 1,
		amenities: ['Wifi', 'Kitchen', 'Pets allowed', 'Long term stays allowed'],
		host: { _id: '51399391', fullName: 'Davit Pok', imgUrl: 'img.jpg' },
		loc: {
			country: 'New York',
			countryCode: 'NY',
			address: 'New York, New York',
			lat: 40.73061,
			lng: -73.935242,
		},
		reviews: [],
	},
	{
		_id: '11212131',
		imgFolder: 5,
		name: 'Cozy apartment in the heart of Downtown Manhattan',
		imgUrls: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
		price: 213.0,
		summary: 'Cozy two bedroom apartment in the heart of downtown',
		propertyType: 'Apartment',
		accommodates: 3,
		amenities: [
			{ txt: 'TV', icon: 'el-icon-monitor' },
			{ txt: 'Wifi', icon: 'wifi', fa: true },
			{ txt: 'Kitchen', icon: 'el-icon-knife-fork' },
			{ txt: 'Pets allowed', icon: 'paw', fa: true },
			{ txt: 'Shower', icon: 'shower', fa: true },
			{
				txt: 'Air conditioning',
				icon: 'snowflake',
				fa: true,
			},
			{ txt: 'Smoking allowed', icon: 'el-icon-smoking' },
		],
		host: { _id: '51399391', fullName: 'Davit Pok', imgUrl: 'img.jpg' },
		loc: {
			country: 'New York',
			countryCode: 'NY',
			address: 'New York, New York',
			lat: 40.73061,
			lng: -73.935242,
		},
		reviews: [],
	},
	{
		_id: '10',
		name: 'ROOF TOP STUDIO',
		imgFolder: 1,
		imgUrls: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
		price: 197,
		summary:
			'Rooftop studio in Paris,, a lot of bars and restaurants great place to discover Paris,, kitchen',
		propertyType: 'Apartment',
		accommodates: 6,
		amenities: [
			{ txt: 'TV', icon: 'el-icon-monitor' },
			{ txt: 'Wifi', icon: 'wifi', fa: true },
			{ txt: 'Kitchen', icon: 'el-icon-knife-fork' },
			{ txt: 'Pets allowed', icon: 'paw', fa: true },
			{ txt: 'Shower', icon: 'shower', fa: true },
			{
				txt: 'Air conditioning',
				icon: 'snowflake',
				fa: true,
			},
			{ txt: 'Smoking allowed', icon: 'el-icon-smoking' },
		],
		host: { _id: '51399391', fullName: 'Davit Pok', imgUrl: 'img.jpg' },
		loc: {
			country: 'France',
			countryCode: 'FR',
			address: 'Paris, France',
			lat: 48.8566,
			lng: 2.3522,
		},
		reviews: [
			{
				id: 'madeId',
				txt: 'Very helpful hosts. Cooked traditional...',
				rate: 4,
				by: { _id: 'u102', fullName: 'user2', imgUrl: '/img/img2.jpg' },
			},
		],
	},
	{
		_id: '11',
		imgFolder: 1,
		name: 'Un superbe appartement ',
		imgUrls: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
		price: 159,
		summary:
			'Il est situé à 5 mn du metro Jules Joffrin, 4 mn à Porte de Clignancourt, 3 mn à rue du Poteau et 17 m au Sacré-Coeur. Tout est à pied.',
		propertyType: 'House',
		accommodates: 2,
		amenities: [
			{ txt: 'TV', icon: 'el-icon-monitor' },
			{ txt: 'Wifi', icon: 'wifi', fa: true },
			{ txt: 'Kitchen', icon: 'el-icon-knife-fork' },
			{ txt: 'Pets allowed', icon: 'paw', fa: true },
			{ txt: 'Shower', icon: 'shower', fa: true },
			{
				txt: 'Air conditioning',
				icon: 'snowflake',
				fa: true,
			},
			{ txt: 'Smoking allowed', icon: 'el-icon-smoking' },
		],
		host: { _id: '51399391', fullName: 'Davit Pok', imgUrl: 'img.jpg' },
		loc: {
			country: 'France',
			countryCode: 'FR',
			address: 'Paris, France',
			lat: 48.8566,
			lng: 2.3522,
		},
		reviews: [
			{
				id: 'madeId',
				txt: 'Very helpful hosts. Cooked traditional...',
				rate: 4,
				by: { _id: 'u102', fullName: 'user2', imgUrl: '/img/img2.jpg' },
			},
		],
	},
	{
		_id: '12',
		imgFolder: 2,
		name: 'Studio White + balcon - La Défense',
		imgUrls: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
		price: 195,
		summary:
			'Petit studio maximum 2 personnes !! pour aller en concert à l"U Arena" ou pour travailler à la "Défense". Le trajet n\'est que 10 minutes à pied de l\'appartement.',
		propertyType: 'Hotel',
		accommodates: 8,
		amenities: [
			{ txt: 'TV', icon: 'el-icon-monitor' },
			{ txt: 'Wifi', icon: 'wifi', fa: true },
			{ txt: 'Kitchen', icon: 'el-icon-knife-fork' },
			{ txt: 'Pets allowed', icon: 'paw', fa: true },
			{ txt: 'Shower', icon: 'shower', fa: true },
			{
				txt: 'Air conditioning',
				icon: 'snowflake',
				fa: true,
			},
			{ txt: 'Smoking allowed', icon: 'el-icon-smoking' },
		],
		host: { _id: '51399391', fullName: 'Davit Pok', imgUrl: 'img.jpg' },
		loc: {
			country: 'France',
			countryCode: 'FR',
			address: 'Paris, France',
			lat: 48.8566,
			lng: 2.3522,
		},
		reviews: [
			{
				id: 'madeId',
				txt: 'Very helpful hosts. Cooked traditional...',
				rate: 4,
				by: { _id: 'u102', fullName: 'user2', imgUrl: '/img/img2.jpg' },
			},
		],
	},
	{
		_id: '13',
		imgFolder: 3,
		name: 'Cool, Contemporary Duplex in Le Marais',
		imgUrls: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
		price: 410,
		summary:
			'Wake up on the cozy mezzanine level, then open the windows downstairs and people-watch at this modern duplex in the heart of historic Paris,. Clean, pure decor and historic elements combine on a quiet pedestrian street in the charming LeMarais district.',
		propertyType: 'House',
		accommodates: 5,
		amenities: [
			{ txt: 'TV', icon: 'el-icon-monitor' },
			{ txt: 'Wifi', icon: 'wifi', fa: true },
			{ txt: 'Kitchen', icon: 'el-icon-knife-fork' },
			{ txt: 'Pets allowed', icon: 'paw', fa: true },
			{ txt: 'Shower', icon: 'shower', fa: true },
			{
				txt: 'Air conditioning',
				icon: 'snowflake',
				fa: true,
			},
			{ txt: 'Smoking allowed', icon: 'el-icon-smoking' },
		],
		host: { _id: '51399391', fullName: 'Davit Pok', imgUrl: 'img.jpg' },
		loc: {
			country: 'France',
			countryCode: 'FR',
			address: 'Paris, France',
			lat: 48.8566,
			lng: 2.3522,
		},
		reviews: [
			{
				id: 'madeId',
				txt: 'Very helpful hosts. Cooked traditional...',
				rate: 4,
				by: { _id: 'u102', fullName: 'user2', imgUrl: '/img/img2.jpg' },
			},
		],
	},
	{
		_id: '14',
		imgFolder: 4,
		name: 'Unobstructed Views in the Prestigious 6th Arrondissement',
		imgUrls: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
		price: 230,
		summary:
			'Gather around the Eames-style dining table for traditional pastries from the local boulangerie before a morning of browsing the stores on famous shopping street rue de Rennes. This urban oasis combines a sleek, black kitchen with smooth marble.',
		propertyType: 'Loft',
		accommodates: 3,
		amenities: [
			{ txt: 'TV', icon: 'el-icon-monitor' },
			{ txt: 'Wifi', icon: 'wifi', fa: true },
			{ txt: 'Kitchen', icon: 'el-icon-knife-fork' },
			{ txt: 'Pets allowed', icon: 'paw', fa: true },
			{ txt: 'Shower', icon: 'shower', fa: true },
			{
				txt: 'Air conditioning',
				icon: 'snowflake',
				fa: true,
			},
			{ txt: 'Smoking allowed', icon: 'el-icon-smoking' },
		],
		host: { _id: '51399391', fullName: 'Davit Pok', imgUrl: 'img.jpg' },
		loc: {
			country: 'France',
			countryCode: 'FR',
			address: 'Paris, , France',
			lat: 48.8566,
			lng: 2.3522,
		},
		reviews: [
			{
				id: 'madeId',
				txt: 'Very helpful hosts. Cooked traditional...',
				rate: 4,
				by: { _id: 'u102', fullName: 'user2', imgUrl: '/img/img2.jpg' },
			},
		],
	},
	{
		_id: '15',
		imgFolder: 5,
		name: 'View the Eiffel Tower Through the Trees From a Block Away',
		imgUrls: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
		price: 1500,
		summary:
			'Open the floor-to-ceiling windows to admire the iconic sights from the Juliet balcony with a cup of Nespresso in hand. The interior is air-conditioned, rare in Paris,,.',
		propertyType: 'Vila',
		accommodates: 2,
		amenities: [
			{ txt: 'TV', icon: 'el-icon-monitor' },
			{ txt: 'Wifi', icon: 'wifi', fa: true },
			{ txt: 'Kitchen', icon: 'el-icon-knife-fork' },
			{ txt: 'Pets allowed', icon: 'paw', fa: true },
			{ txt: 'Shower', icon: 'shower', fa: true },
			{
				txt: 'Air conditioning',
				icon: 'snowflake',
				fa: true,
			},
			{ txt: 'Smoking allowed', icon: 'el-icon-smoking' },
		],
		host: { _id: '51399391', fullName: 'Davit Pok', imgUrl: 'img.jpg' },
		loc: {
			country: 'France',
			countryCode: 'FR',
			address: 'Paris,, France',
			lat: 48.8566,
			lng: 2.3522,
		},
		reviews: [
			{
				id: 'madeId',
				txt: 'Very helpful hosts. Cooked traditional...',
				rate: 4,
				by: { _id: 'u102', fullName: 'user2', imgUrl: '/img/img2.jpg' },
			},
		],
	},
	{
		_id: '11006546',
		imgFolder: 1,
		name: 'Citiez Hotel Amsterdam: Cozy Queen Room',
		imgUrls: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
		price: 110,
		summary: 'Fantastic duplex apartment with three bedrooms, located in...',
		propertyType: 'House',
		accommodates: 3,
		amenities: [
			{ txt: 'TV', icon: 'el-icon-monitor' },
			{ txt: 'Wifi', icon: 'wifi', fa: true },
			{ txt: 'Kitchen', icon: 'el-icon-knife-fork' },
			{ txt: 'Pets allowed', icon: 'paw', fa: true },
			{ txt: 'Shower', icon: 'shower', fa: true },
			{
				txt: 'Air conditioning',
				icon: 'snowflake',
				fa: true,
			},
			{ txt: 'Smoking allowed', icon: 'el-icon-smoking' },
		],
		host: { _id: '51399391', fullName: 'Davit Pok', imgUrl: 'img.jpg' },
		loc: {
			country: 'Netherlands',
			countryCode: 'NL',
			address: 'Amsterdam, Netherlands',
			lat: 52.377956,
			lng: 4.89707,
		},
		reviews: [],
	},
	{
		_id: '12006546',
		imgFolder: 2,
		name: 'Luxurious Canal House studio City center',
		imgUrls: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
		price: 120,
		summary:
			'This is a luxurious private canal studio, located right in the middle of Amsterdam Jordaan.',
		propertyType: 'House',
		accommodates: 3,
		amenities: [
			{ txt: 'TV', icon: 'el-icon-monitor' },
			{ txt: 'Wifi', icon: 'wifi', fa: true },
			{ txt: 'Kitchen', icon: 'el-icon-knife-fork' },
			{ txt: 'Pets allowed', icon: 'paw', fa: true },
			{ txt: 'Shower', icon: 'shower', fa: true },
			{
				txt: 'Air conditioning',
				icon: 'snowflake',
				fa: true,
			},
			{ txt: 'Smoking allowed', icon: 'el-icon-smoking' },
		],
		host: { _id: '51399391', fullName: 'Davit Pok', imgUrl: 'img.jpg' },
		loc: {
			country: 'Netherlands',
			countryCode: 'NL',
			address: 'Amsterdam, Netherlands',
			lat: 52.377956,
			lng: 4.739298,
		},
		reviews: [],
	},
	{
		_id: '13006546',
		imgFolder: 3,
		name: 'Luxury ground floor apartement amsterdam',
		imgUrls: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
		price: 150,
		summary:
			'Nice bright apartment on the ground floor , With one in the bathroom a bath and shower.',
		propertyType: 'House',
		accommodates: 3,
		amenities: [
			{ txt: 'TV', icon: 'el-icon-monitor' },
			{ txt: 'Wifi', icon: 'wifi', fa: true },
			{ txt: 'Kitchen', icon: 'el-icon-knife-fork' },
			{ txt: 'Pets allowed', icon: 'paw', fa: true },
			{ txt: 'Shower', icon: 'shower', fa: true },
			{
				txt: 'Air conditioning',
				icon: 'snowflake',
				fa: true,
			},
			{ txt: 'Smoking allowed', icon: 'el-icon-smoking' },
		],
		host: { _id: '51399391', fullName: 'Davit Pok', imgUrl: 'img.jpg' },
		loc: {
			country: 'Netherlands',
			countryCode: 'NL',
			address: 'Amsterdam, Netherlands',
			lat: 52.377956,
			lng: 4.739298,
		},
		reviews: [],
	},
	{
		_id: '14006546',
		imgFolder: 4,
		name:
			'Lovely BNB apartment in the heart of Amsterdam just off the Prinsengracht canal and around the famous 9 streets.',
		imgUrls: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
		price: 130,
		summary: 'Fantastic duplex apartment with three bedrooms, located in...',
		propertyType: 'House',
		accommodates: 5,
		amenities: [
			{ txt: 'TV', icon: 'el-icon-monitor' },
			{ txt: 'Wifi', icon: 'wifi', fa: true },
			{ txt: 'Kitchen', icon: 'el-icon-knife-fork' },
			{ txt: 'Pets allowed', icon: 'paw', fa: true },
			{ txt: 'Shower', icon: 'shower', fa: true },
			{
				txt: 'Air conditioning',
				icon: 'snowflake',
				fa: true,
			},
			{ txt: 'Smoking allowed', icon: 'el-icon-smoking' },
		],
		host: { _id: '51399391', fullName: 'Davit Pok', imgUrl: 'img.jpg' },
		loc: {
			country: 'Netherlands',
			countryCode: 'NL',
			address: 'Amsterdam, Netherlands',
			lat: 52.377956,
			lng: 4.89707,
		},
		reviews: [],
	},
	{
		_id: '15006546',
		imgFolder: 5,
		name: 'The Weber Collection - Luxurieus Design Studio ',
		imgUrls: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
		price: 80,
		summary:
			'Serviced Studio suites in the city centre of Amsterdam. We aim to deliver a home away from home experience topped with the best service and hospitality.',
		propertyType: 'House',
		accommodates: 3,
		amenities: [
			{ txt: 'TV', icon: 'el-icon-monitor' },
			{ txt: 'Wifi', icon: 'wifi', fa: true },
			{ txt: 'Kitchen', icon: 'el-icon-knife-fork' },
			{ txt: 'Pets allowed', icon: 'paw', fa: true },
			{ txt: 'Shower', icon: 'shower', fa: true },
			{
				txt: 'Air conditioning',
				icon: 'snowflake',
				fa: true,
			},
			{ txt: 'Smoking allowed', icon: 'el-icon-smoking' },
		],
		host: { _id: '51399391', fullName: 'Davit Pok', imgUrl: 'img.jpg' },
		loc: {
			country: 'Netherlands',
			countryCode: 'NL',
			address: 'Amsterdam, Netherlands',
			lat: 52.377956,
			lng: 4.89707,
		},
		reviews: [],
	},
]

export const stayService = {
	query,
	getById,
	remove,
	save,
	getEmptyStay,
}

const BASE_URL = 'stay/'

async function query(filterBy) {
	return await httpService.get(BASE_URL, filterBy)

	// if (!staysInStorage || !staysInStorage.length) {
	// 	utilService.saveToStorage(STAY_KEY, gStays)
	// 	return gStays
	// }

	// if (filterBy) {
	// 	var staysToShow = staysInStorage.filter(stay => {
	// 		var isTypeIncluded = false
	// 		var isAmenityIncluded = true
	// 		if (!filterBy.types.length) isTypeIncluded = true
	// 		filterBy.types.forEach(type => {
	// 			if (stay.propertyType === type) {
	// 				isTypeIncluded = true
	// 			}
	// 		})
	// 		filterBy.amenities.forEach(amenity => {
	// 			if (!stay.amenities.includes(amenity)) {
	// 				isAmenityIncluded = false
	// 			}
	// 		})
	// 		return (
	// 			stay.price >= filterBy.price[0] &&
	// 			stay.price <= filterBy.price[1] &&
	// 			isTypeIncluded &&
	// 			isAmenityIncluded &&
	// 			stay.loc.address
	// 				.split(',')[0]
	// 				.trim()
	// 				.includes(filterBy.city)
	// 		)
	// 	})
	// }
	// return staysToShow
}

async function getById(stayId) {
	return await httpService.get(`${BASE_URL}${stayId}`)
}

async function remove(stayId) {
	return await httpService.delete(`${BASE_URL}${stayId}`)
}

async function save(stay) {
	return stay._id
		? await httpService.put(BASE_URL + stay._id, stay)
		: await httpService.post(BASE_URL, stay)
}

function getEmptyStay() {
	return {
		name: '',
		price: 0,
		summary: '',
		imgUrls: [],
		propertyType: '',
		accommodates: 0,
		amenities: [],
		loc: {
			country: '',
			address: '',
		},
		reviews: [],
	}
}
