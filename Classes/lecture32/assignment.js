// var cart = [{ id: 1, name: 'iphone 16', price: 164000, qty : 1},
//     { id: 2, name: 'iphone 15', price: 84000, qty : 1}

// ];
// let sum =0;
// let b = cart.map(function(i){
//     sum+= i.price* i.qty;
//     return sum;
// })
// console.log(sum);
// let a = cart.reduce(function(sum,i){
//     return sum+ i.price* i.qty;
// },0)
// console.log(a);

////
// let eg =  [1,2,3,4,5,6,7,8,9,10,11,16,18,20,36,40,49];
// let ans = eg.filter(function(i){
//     return Math.sqrt(i)%1 === 0;
// })
// console.log(ans);


// 4th
// const menu = [
//     "Kadai Paneer",
//     "Dal Makhni",
//     "Masala Dosa",
//     "Chicken Soup",
//     "Chicken Butter Masala",
//     "Veg Chowmein",
//     "Egg Curry",
//     "Egg Maggie",
//     "Chicken Fry",
//     "Chicken Biryani",
//     "Khichdi",
//     "Handi Paneer",
//     "Onion Paratha",
//     "Garlic Naan",
//     "Onion Pizza",
//     "Garlic Bread",
//     "Onion Rings",
//     "Chilli Paneer",
//   ];

//   let a = menu.filter(function(i){
//     if(i.includes("Chicken") == 0 && i.includes("Egg") == 0){
//         return i;
//     }
//   })

//   console.log(a)


//5th
// let ans = []
// function fun(id,name,desig){
//     for(let i = 0; i<3; i++){
//         let temp = {
//             id: id,
//             name: name,
//             desig: desig
//         }
//         ans.push(temp);
//         }
//     }
    

// fun(1,"Ansh","Developer");
// console.log(ans);

// let a = "ansh";
// if('a' in a){
//     console.log("yes");
// }


//3rd;

// let user = ['Amit', 'Ajay','Mukesh'];
// // let boom = []

// function ans(a,i){
//     let pika = Math.floor(Math.random()*10 +1);
//     let obj = {
//         id : i+1,
//         name : a[i],
//         rew: pika
//     }
//     // boom.push(obj);
// }
// let boom = user.map(ans(user,i));


// // for(let i = 0;i<user.length;i++){
// //     ans(user,i);
// // }

// console.log(boom);

