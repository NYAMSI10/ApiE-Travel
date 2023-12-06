import {userSchema} from "./user.js";
import {annonceSchema} from "./annonce.js";
import {imageSchema} from "./image.js";


export default [userSchema,annonceSchema,imageSchema]


 /* {
    "newAnnonce": {
    "title": "Voyage",
        "description": "Bon voyage avec notre agence",
        "startcity": "Paris",
        "startend": "Marseille",
        "hourstart": "14:20",
        "hourend": "20:30",
        "datedepart": "15-08-2023",
        "placedispo": 50,
        "price": 50.5,
        "images":[
        "photo1.jpg",
        "photo2.png"
    ],
        "userId": 4
}
}
*/
  