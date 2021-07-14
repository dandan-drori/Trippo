const gStays = [
    {
        "_id": "10001247",
        "name": "Furnished Studio in Manhattan",
        "imgUrls": [
            "../assets/imgs/stays/new_york/1/1.jpg",
            "../assets/imgs/stays/new_york/1/2.jpg",
            "../assets/imgs/stays/new_york/1/3.jpg",
            "../assets/imgs/stays/new_york/1/4.jpg",
            "../assets/imgs/stays/new_york/1/5.jpg"
        ],
        "price": 363.0,
        "summary": "Fantastic studio apartment with three bedrooms, located in Manhattan",
        "propertyType": "Apartment",
        "accommodates": 2,
        "amenities": [
            "TV",
            "Wifi",
            "Kitchen",
            "Pets allowed",
            "Washer",
            "Air conditioning",
            "Dryer",
            "Long term stays allowed"
        ],
        "host": { "_id": "51399391", "fullName": "Davit Pok", "imgUrl": "img.jpg" },
        "loc": {
            "country": "New York",
            "countryCode": "NY",
            "address": "Manhattan, New York",
            "lat": 40.73061,
            "lng": -73.935242
        },
        "reviews": [
            {
                "id": "madeId",
                "txt": "Very helpful hosts. Cooked traditional...",
                "rate": 4,
                "by": {
                    "_id": "u102",
                    "fullname": "user2",
                    "imgUrl": "/img/img2.jpg"
                }
            }
        ]
    }
],

const gOrder= [
    {
        "_id": "o1225",
        "_hostId": "u102",
        "createdAt": 9898989,
        "buyer": {
            "_id": "u101",
            "fullname": "User 1"
        },
        "totalPrice": 160,
        "startDate": "162818371828",
        "endDate": "162829321938",
        "guests": 5,
        "stay": {
            "_id": "h102",
            "name": "House Of Uncle My",
            "price": 80.0
        },
        "status": "pending"
    }
],

const gUsers= [
    {
        "_id": "u101",
        "fullname": "User 1",
        "imgUrl": "/img/img1.jpg",
        "isAdmin": false,
        "username": "user1",
        "password": "secret"
    }
]