import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC8ALHm1c0ucE7qRqbhkQCDLBl2GQKvxls",
    authDomain: "expensify-14598.firebaseapp.com",
    databaseURL: "https://expensify-14598-default-rtdb.firebaseio.com",
    projectId: "expensify-14598",
    storageBucket: "expensify-14598.appspot.com",
    messagingSenderId: "927263487186",
    appId: "1:927263487186:web:0f6241d083c0ff0881290b"
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();


export {
    firebase,
    database as default
}



// database.ref('expenses').once('value').then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     })
//     console.log(expenses);
// })


// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })


// database.ref('expenses').on('value',
//     (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({ id: childSnapshot.key, ...childSnapshot.val() })
//         })
//         console.log(expenses);
//     }
// )


//database.ref('expenses').push({ description: 'esto es una descripcion', note: 'esto es una nota', amount: 0, createdAt: 0 });

// const data = database.ref().on('value', (snapshot) => {
//     const { name, job } = snapshot.val();
//     console.log(`${name} is a '${job.title}' at ${job.company}`);
// })
// database.ref().off(data);

// database.ref().once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val());
//     }).catch((error) => {
//         console.log(error);
//     })


// database.ref().set({
//     name: "danilo carena",
//     age: 32,
//     isSingle: false,
//     stressLevel: 6,
//     job: {
//         title: 'software developer',
//         company: 'AMCO'
//     },
//     location: {
//         city: "caba",
//         country: "argentina"
//     }
// }).then(() => {
//     console.log('done!')
// }).catch((e) => {
//     console.log('!done', e);
// })



// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'mercado libre',
//     'location/city': 'merlo'
// })


//database.ref('/isSingle').remove();


