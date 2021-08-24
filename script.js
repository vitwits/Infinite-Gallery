

// Unsplash API
const count = 1;
const apiKey = 'W9CiIHnKaAISQGdAxW5MfWOACigoAmKZ1qazXwBtiwg';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


// Get photos from unsplash api
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

getPhotos();

const resp = {
    "id": "jhNqYuPadow",
    "created_at": "2021-08-18T15:55:46-04:00",
    "updated_at": "2021-08-23T19:32:21-04:00",
    "promoted_at": "2021-08-20T06:11:15-04:00",
    "width": 6049,
    "height": 4033,
    "color": "#a60c0c",
    "blur_hash": "LSLS;xoLbaNu$%a|WCn*10fQNboK",
    "description": "@dannylines.visuals for more content",
    "alt_description": "woman in red long sleeve shirt",
    "urls": {
    "raw": "https://images.unsplash.com/photo-1629316464107-ec2702d7e10c?ixid=MnwyNTU5OTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Mjk4MzExMDg&ixlib=rb-1.2.1",
        "full": "https://images.unsplash.com/photo-1629316464107-ec2702d7e10c?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNTU5OTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Mjk4MzExMDg&ixlib=rb-1.2.1&q=85",
        "regular": "https://images.unsplash.com/photo-1629316464107-ec2702d7e10c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTU5OTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Mjk4MzExMDg&ixlib=rb-1.2.1&q=80&w=1080",
        "small": "https://images.unsplash.com/photo-1629316464107-ec2702d7e10c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTU5OTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Mjk4MzExMDg&ixlib=rb-1.2.1&q=80&w=400",
        "thumb": "https://images.unsplash.com/photo-1629316464107-ec2702d7e10c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTU5OTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Mjk4MzExMDg&ixlib=rb-1.2.1&q=80&w=200"
},
    "links": {
    "self": "https://api.unsplash.com/photos/jhNqYuPadow",
        "html": "https://unsplash.com/photos/jhNqYuPadow",
        "download": "https://unsplash.com/photos/jhNqYuPadow/download",
        "download_location": "https://api.unsplash.com/photos/jhNqYuPadow/download?ixid=MnwyNTU5OTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Mjk4MzExMDg"
},
    "categories": [],
    "likes": 23,
    "liked_by_user": false,
    "current_user_collections": [],
    "sponsorship": null,
    "user": {
    "id": "E62zUBdx8DQ",
        "updated_at": "2021-08-24T13:49:44-04:00",
        "username": "dannylines",
        "name": "Danny Lines",
        "first_name": "Danny",
        "last_name": "Lines",
        "twitter_username": "dlinesvisuals",
        "portfolio_url": "https://www.instagram.com/dannylines.visuals",
        "bio": "22 year old amateur photographer from the UK.\r\nSeeing where a camera, some free time & broken laptop can take me. If you want to help support me, prints are available for some images just get in touch. ",
        "location": null,
        "links": {
        "self": "https://api.unsplash.com/users/dannylines",
            "html": "https://unsplash.com/@dannylines",
            "photos": "https://api.unsplash.com/users/dannylines/photos",
            "likes": "https://api.unsplash.com/users/dannylines/likes",
            "portfolio": "https://api.unsplash.com/users/dannylines/portfolio",
            "following": "https://api.unsplash.com/users/dannylines/following",
            "followers": "https://api.unsplash.com/users/dannylines/followers"
    },
    "profile_image": {
        "small": "https://images.unsplash.com/profile-1612894844221-07aee3dd5953image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
            "medium": "https://images.unsplash.com/profile-1612894844221-07aee3dd5953image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
            "large": "https://images.unsplash.com/profile-1612894844221-07aee3dd5953image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
    },
    "instagram_username": "dannylines.visuals",
        "total_collections": 5,
        "total_likes": 232,
        "total_photos": 174,
        "accepted_tos": true,
        "for_hire": true,
        "social": {
        "instagram_username": "dannylines.visuals",
            "portfolio_url": "https://www.instagram.com/dannylines.visuals",
            "twitter_username": "dlinesvisuals",
            "paypal_email": null
    }
},
    "exif": {
    "make": "FUJIFILM",
        "model": "X-T4",
        "exposure_time": "1/100",
        "aperture": "3.2",
        "focal_length": "35.0",
        "iso": 4000
},
    "location": {
    "title": null,
        "name": null,
        "city": null,
        "country": null,
        "position": {
        "latitude": null,
            "longitude": null
    }
},
    "views": 154244,
    "downloads": 2212
}