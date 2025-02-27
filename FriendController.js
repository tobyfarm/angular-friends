angular.module("app").controller('FriendController',function($scope){
  $scope.optionsArray = [{name: 'Name', value: 'name'},{name: '#Friends', value: 'friend_count'},{name: 'City', value: 'current_location.city'},{name: 'State', value: 'current_location.state'},{name: 'Country', value: 'current_location.country' }]
  $scope.friends = [
    {
      "name": "Preston McNeil",
      "pic_square": "http://free-profile-pics.com/profile-pictures/01232014/images/albert-einstein-profile-picture-133x133.PNG",
      "current_location": {
        "city": "Houston",
        "state": "Texas",
        "country": "United States",
        "zip": "",
        "latitude": "29.7629",
        "longitude": "-95.3832",
        "id": "115963528414384",
        "name": "Houston, Texas"
      },
      "status": null,
      "friend_count": 628,
      "$$hashKey": "005"
    },
    {
      "name": "Ryan Rasmussen",
      "pic_square": "http://free-profile-pics.com/profile-pictures/01232014/images/bruce-lee-profile-picture-133x133.PNG",
      "current_location": {
        "city": "New York",
        "state": "New York",
        "country": "United States",
        "zip": "",
        "latitude": "40.7167",
        "longitude": "-74",
        "id": "108424279189115",
        "name": "New York, New York"
      },
      "status": null,
      "friend_count": 994,
      "$$hashKey": "008"
    },
    {
      "name": "Terri Ruff",
      "pic_square": "http://free-profile-pics.com/profile-pictures/01232014/images/chuck-norris-profile-picture-133x133.PNG",
      "current_location": {
        "city": "Sandy",
        "state": "Utah",
        "country": "United States",
        "zip": "",
        "latitude": "40.5724",
        "longitude": "-111.86",
        "id": "105496622817769",
        "name": "Sandy, Utah"
      },
      "status": {
        "message": "Cannot wait for Hawaii! Excited to b away from work! I'm getting tired of all the drama!! Big news coming soon!!!",
        "time": "1381115766",
        "status_id": "10101839870247153",
        "comment_count": "0"
      },
      "friend_count": 268,
      "$$hashKey": "009"
    },
    {
      "name": "Lindsey Mayer",
      "pic_square": "http://free-profile-pics.com/profile-pictures/01232014/images/alf-profile-picture-133x133.PNG",
      "current_location": null,
      "status": null,
      "friend_count": 870,
      "$$hashKey": "00A"
    },
    {
      "name": "Peter John Renslow",
      "pic_square": "http://free-profile-pics.com/profile-pictures/01242014/images/justin-bieber-profile-picture-133x133.PNG",
      "current_location": {
        "city": "West Lafayette",
        "state": "Indiana",
        "country": "United States",
        "zip": "",
        "latitude": "40.4419",
        "longitude": "-86.9124",
        "id": "112305682116972",
        "name": "West Lafayette, Indiana"
      },
      "status": {
        "message": "The movie Gravity: decent. The orbital mechanics in the movie Gravity: not so much.",
        "time": "1380945498",
        "status_id": "10102928220609321",
        "comment_count": "0"
      },
      "friend_count": 549,
      "$$hashKey": "00I"
    },
    {
      "name": "Craig Carroll",
      "pic_square": "http://free-profile-pics.com/profile-pictures/01242014/images/magnum-pi-profile-picture-133x133.PNG",
      "current_location": {
        "city": "Tempe",
        "state": "Arizona",
        "country": "United States",
        "zip": "",
        "latitude": "33.4294",
        "longitude": "-111.943",
        "id": "112887355389124",
        "name": "Tempe, Arizona"
      },
      "status": null,
      "friend_count": 249,
      "$$hashKey": "00K"
    },
    {
      "name": "Jesse Morrison",
      "pic_square": "http://free-profile-pics.com/profile-pictures/01252014/images/doc-profile-picture-133x133.PNG",
      "current_location": null,
      "status": {
        "message": "I'm pretty excited at the prospect of having the option for cold water out of the faucet. Not just turning it all the way to the right and getting \"less hot\" water",
        "time": "1380735264",
        "status_id": "10102919605598871",
        "comment_count": "0"
      },
      "friend_count": 393,
      "$$hashKey": "00N"
    },
    {
      "name": "Michelle Key",
      "pic_square": "http://free-profile-pics.com/profile-pictures/01242014/images/mr-acid-man-profile-picture-133x133.PNG",
      "current_location": null,
      "status": null,
      "friend_count": 928,
      "$$hashKey": "00O"
    },
    {
      "name": "Abe Itty",
      "pic_square": "http://free-profile-pics.com/profile-pictures/01252014/images/leo-dicaprio-profile-picture-133x133.PNG",
      "current_location": null,
      "status": null,
      "friend_count": 1427,
      "$$hashKey": "011"
    },
    {
      "name": "Ken Peng",
      "pic_square": "http://free-profile-pics.com/profile-pictures/01252014/images/fighter-jet-profile-picture-133x133.PNG",
      "current_location": {
        "city": "Tucson",
        "state": "Arizona",
        "country": "United States",
        "zip": "",
        "latitude": "32.2217",
        "longitude": "-110.926",
        "id": "109570449061083",
        "name": "Tucson, Arizona"
      },
      "status": null,
      "friend_count": 376,
      "$$hashKey": "013"
    },
    {
      "name": "John Dohyung Kwon",
      "pic_square": "http://free-profile-pics.com/profile-pictures/01262014/images/walking-dead-rick-profile-picture-133x133.PNG",
      "current_location": null,
      "status": null,
      "friend_count": 79,
      "$$hashKey": "01D"
    },
    {
      "name": "Dan Sullivan",
      "pic_square": "http://free-profile-pics.com/profile-pictures/01232014/images/eagle-profile-picture-133x133.PNG",
      "current_location": {
        "city": "Cambridge",
        "state": "Massachusetts",
        "country": "United States",
        "zip": "",
        "latitude": "42.3737",
        "longitude": "-71.1106",
        "id": "108056275889020",
        "name": "Cambridge, Massachusetts"
      },
      "status": null,
      "friend_count": 527,
      "$$hashKey": "01M"
    },
    {
      "name": "Chad Bennett",
      "pic_square": "http://free-profile-pics.com/profile-pictures/01262014/images/wolf-profile-picture-133x133.PNG",
      "current_location": null,
      "status": null,
      "friend_count": 1885,
      "$$hashKey": "01P"
    },
    {
      "name": "Kirk Hill",
      "pic_square": "http://free-profile-pics.com/profile-pictures/01232014/images/furby-profile-picture-133x133.PNG",
      "current_location": {
        "city": "Pearland",
        "state": "Texas",
        "country": "United States",
        "zip": "",
        "latitude": "29.5543",
        "longitude": "-95.296",
        "id": "109297442421359",
        "name": "Pearland, Texas"
      },
      "status": null,
      "friend_count": 185,
      "$$hashKey": "01Q"
    },
    {
      "name": "Joseph 'Moses' Craven",
      "pic_square": "http://free-profile-pics.com/profile-pictures/01232014/images/mr-bean-profile-picture-133x133.PNG",
      "current_location": {
        "city": "Ardmore",
        "state": "Oklahoma",
        "country": "United States",
        "zip": "",
        "latitude": "34.1812",
        "longitude": "-97.1294",
        "id": "107705532592043",
        "name": "Ardmore, Oklahoma"
      },
      "status": null,
      "friend_count": 708,
      "$$hashKey": "01R"
    },
    {
      "name": "Jeremy James",
      "pic_square": "http://free-profile-pics.com/images/free-blackberry-bbm-profile-picture_246.png",
      "current_location": {
        "city": "Provo",
        "state": "Utah",
        "country": "United States",
        "zip": "",
        "latitude": "40.2444",
        "longitude": "-111.661",
        "id": "106066949424984",
        "name": "Provo, Utah"
      },
      "status": null,
      "friend_count": 555,
      "$$hashKey": "01U"
    },
    {
      "name": "Heather Clouse",
      "pic_square": "http://free-profile-pics.com/profile-pictures/01242014/images/painted-kitten-profile-picture-133x133.PNG",
      "current_location": {
        "city": "Orem",
        "state": "Utah",
        "country": "United States",
        "zip": "",
        "latitude": "40.2988",
        "longitude": "-111.696",
        "id": "103787786326610",
        "name": "Orem, Utah"
      },
      "status": {
        "message": "Last night I had a dream that my mother-in-law Angie Clouse unexpectedly stopped by my house and gave me a cleaning to do list.  Apparently it is time to clean my bathroom.",
        "time": "1380826754",
        "status_id": "10101094816311309",
        "comment_count": "0"
      },
      "friend_count": 366,
      "$$hashKey": "01W"
    },
    {
      "name": "Joel Gardner",
      "pic_square": "http://free-profile-pics.com/profile-pictures/01242014/images/lamborghini-profile-picture-133x133.PNG",
      "current_location": {
        "city": "Provo",
        "state": "Utah",
        "country": "United States",
        "zip": "",
        "latitude": "40.2444",
        "longitude": "-111.661",
        "id": "106066949424984",
        "name": "Provo, Utah"
      },
      "status": null,
      "friend_count": 518,
      "$$hashKey": "027"
    },
    {
      "name": "Lance Winward",
      "pic_square": "http://free-profile-pics.com/profile-pictures/01242014/images/purple-tiger-profile-picture-133x133.PNG",
      "current_location": {
        "city": "American Fork",
        "state": "Utah",
        "country": "United States",
        "zip": "",
        "latitude": "40.3842",
        "longitude": "-111.792",
        "id": "105675929465006",
        "name": "American Fork, Utah"
      },
      "status": null,
      "friend_count": 482,
      "$$hashKey": "029"
    },
    {
      "name": "JD Clark",
      "pic_square": "http://free-profile-pics.com/profile-pictures/01252014/images/darthvader-profile-picture-133x133.PNG",
      "current_location": {
        "city": "Provo",
        "state": "Utah",
        "country": "United States",
        "zip": "",
        "latitude": "40.2444",
        "longitude": "-111.661",
        "id": "106066949424984",
        "name": "Provo, Utah"
      },
      "status": {
        "message": "Internet, why you so distracting?? Stahhp",
        "time": "1381246997",
        "status_id": "10101102301306319",
        "comment_count": "0"
      },
      "friend_count": 665,
      "$$hashKey": "02B"
    },
    {
      "name": "Spencer Mooso",
      "pic_square": "http://free-profile-pics.com/profile-pictures/01242014/images/sponge-bob-profile-picture-133x133.PNG",
      "current_location": {
        "city": "Lehi",
        "state": "Utah",
        "country": "United States",
        "zip": "",
        "latitude": "40.4017",
        "longitude": "-111.859",
        "id": "105988932766243",
        "name": "Lehi, Utah"
      },
      "status": null,
      "friend_count": 579,
      "$$hashKey": "02C"
    },
    {
      "name": "Andrew Wiggins",
      "pic_square": "http://free-profile-pics.com/profile-pictures/01252014/images/fighter-jet-profile-picture-133x133.PNG",
      "current_location": {
        "city": "Salt Lake City",
        "state": "Utah",
        "country": "United States",
        "zip": "",
        "latitude": "40.75",
        "longitude": "-111.883",
        "id": "106057819434480",
        "name": "Salt Lake City, Utah"
      },
      "status": null,
      "friend_count": 658,
      "$$hashKey": "02F"
    },
    {
      "name": "Brittany Brown",
      "pic_square": "http://free-profile-pics.com/profile-pictures/01242014/images/kat-von-d-profile-picture-133x133.PNG",
      "current_location": null,
      "status": {
        "message": "Any of my wondeful friends know how to change a water pump on a ford explorer?? :) I will pay and provide delicious treats",
        "time": "1381104137",
        "status_id": "10101099840792209",
        "comment_count": "0"
      },
      "friend_count": 690,
      "$$hashKey": "02G"
    },
    {
      "name": "Nick Petersen",
      "pic_square": "http://free-profile-pics.com/images/free-blackberry-bbm-profile-picture_290.png",
      "current_location": {
        "city": "Jupiter",
        "state": "Florida",
        "country": "United States",
        "zip": "",
        "latitude": "26.926",
        "longitude": "-80.105",
        "id": "109307099087536",
        "name": "Jupiter, Florida"
      },
      "status": {
        "message": "Very grateful for the wisdom shared during the conferences of the church #ldsgeneralconference",
        "time": "1381031808",
        "status_id": "10101098585343139",
        "comment_count": "0"
      },
      "friend_count": 707,
      "$$hashKey": "02H"
    },
    {
      "name": "Jeffrey Swindle",
      "pic_square": "http://free-profile-pics.com/profile-pictures/01242014/images/pumba-profile-picture-133x133.PNG",
      "current_location": {
        "city": "Ann Arbor",
        "state": "Michigan",
        "country": "United States",
        "zip": "",
        "latitude": "42.2745",
        "longitude": "-83.7393",
        "id": "105479049486624",
        "name": "Ann Arbor, Michigan"
      },
      "status": null,
      "friend_count": 1167,
      "$$hashKey": "02I"
    },
    {
      "name": "Travis Epperson",
      "pic_square": "http://free-profile-pics.com/images/bbm_avatar_107.png",
      "current_location": {
        "city": "Phoenix",
        "state": "Arizona",
        "country": "United States",
        "zip": "",
        "latitude": "33.4483",
        "longitude": "-112.074",
        "id": "105540216147364",
        "name": "Phoenix, Arizona"
      },
      "status": null,
      "friend_count": null,
      "$$hashKey": "02M"
    },
    {
      "name": "Matt LeGare",
      "pic_square": "http://free-profile-pics.com/images/bbm_avatar_117.png",
      "current_location": null,
      "status": null,
      "friend_count": 350,
      "$$hashKey": "02P"
    },
    {
      "name": "Karla Jensen Pratt",
      "pic_square": "http://free-profile-pics.com/images/free-blackberry-bbm-profile-picture_175.png",
      "current_location": null,
      "status": null,
      "friend_count": 855,
      "$$hashKey": "02U"
    }
  ]

})
