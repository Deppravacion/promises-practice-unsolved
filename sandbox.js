
// ******************** DBZ API TEST
const gohan = 'gohan'
const vegeta = 'vegeta'
// const dbzTest = fetch(`https://unofficialdbzapi.cyclic.app/api/${gohan, vegeta}`)
// .then(res => res.json())
// .then(data => console.log(data))
// .catch((err) => console.log(err))




// ************************************ CREATE A PROMISE
// const myPromise = new Promise((res, rej) => {
//   // res(`hck yea broahh`)
//   setTimeout(() => {
//     rej(`no no no data bro, thats a lot of yeezies`)
//   }, 2000)
// })

// myPromise
// .then((data) => console.log(data))
// .catch((err) => console.log(err))





// ***************** MANY PROMISES 

// const ytPost = { id: 1, comment: 'do more video'}
// const hobbies = ['driving', 'solving']

// const post = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(ytPost)
//   },5000)
// }
// )
// const post2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(hobbies)
//   },2000)
// })

// Promise
// .all([post, post2])
// .then((data) => {
//   const [YT, myHobbies] = data
//   console.log(YT, myHobbies);
// })

// **next lesson

// const pokeCall = fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
// const dbzTest = fetch(`https://unofficialdbzapi.cyclic.app/api/vegeta`)
// const chuck = fetch(`https://api.chucknorris.io/jokes/random`)



// Promise
// .all([pokeCall, dbzTest, chuck])
// .then((response) => {
//   return Promise.all(response.map((res) => res.json()))
// })
// .then((data) => {

//   const [poke, dbz, ck] = data
//   console.log(`${ck.value}`)

// })

//  const getPromise = (bulalo) => {
//   const yolo = new Promise((res, rej) => {
//     if (bulalo) {
//       res(`The PROMISE was RESOLVED`)
//     } else if (!bulalo) {
//       rej(`The PROMISE was REJECTED`)
//     }
//   })
//   return yolo
// };

// const executor = (resolve, _reject) => {
//   setTimeout(() => {
//     resolve(`The PROMISE was RESOLVED`)
//   }, 1000)
// }

// const createProm = new Promise(executor)

// const logAndReturn = (message) => {
//   console.log(message)
//   return message
// }

// const tysonTime = createProm
//   .then(logAndReturn)
//   .then(message => message.split(''))

//   async function someFunc(){
//     console.log(await tysonTime);
//   }
// someFunc()

// _______________________________________________________________________

// function parsePromised(json_string) {
//   // Your code goes here...
//   return new Promise((resolve, reject) => {
//     try {
//       resolve(JSON.parse(json_string))
//     } catch (err) {
//       reject(err)
//     }
//   })  
// }

// function onReject(err) {
//   // Your code goes here...
//   console.log(err.message);
// }

// const handlePromise = (prom) => {
//   // Your code goes here...
//   return new Promise((rez, rej) => {
//     prom
//     .then((result) => resolve(result))
//     .catch((error) => console.log(error))
//   })

// }

// console.log(handlePromise());
// console.log('testlog');

// _______________________________________________________________________



import fetch from "node-fetch"
const usersUrl = 'http://localhost:3000/users/'

const data =  {
  "users": [
    {
      "id": 1,
      "login": "user1@test.com",
      "isActive": false
    },
    {
      "id": 2,
      "login": "user2@test.com",
      "isActive": false
    },
    {
      "id": 3,
      "login": "user3@test.com",
      "isActive": true
    },
    {
      "id": 4,
      "login": "user4@test.com",
      "isActive": false
    }
  ],
  "planets": [
    {
      "id": 1,
      "name": "Earth",
      "hasMoons": true
    },
    {
      "id": 2,
      "name": "Mercury",
      "hasMoons": false
    },
    {
      "id": 2,
      "name": "Saturne",
      "hasMoons": true
    }
  ]
}


// const getLoginList = (zimzum) => {
//   // Your code goes here...
//   let userLogins = []
//   zimzum.users.forEach((zum) => userLogins.push(zum.login))
//   console.log(userLogins)
//   return userLogins 
// }

// const getData = fetch(usersUrl)

// const result = getData
//   .then(res => res.json())
//   .then((data) => getLoginList(data))


// result


// const manson = (twiggy) => {
//  let userLogs = []
//  twiggy.users.forEach((elm) => userLogs.push(elm.login))
//  console.log(userLogs)
//  return userLogs

// }

// manson(data)