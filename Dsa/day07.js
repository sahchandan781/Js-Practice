//DAY 7 CHALLENGE 
// 🔹 1. Insert New Delivery Order
// 📦 Problem:
// You are managing a food delivery dashboard. 
// Orders are stored in an array sorted by delivery time. 
// A new order comes in, 
// and you need to insert it in the correct position to keep the array sorted by delivery time.


// 📝 Input: An array of objects like
// let arr=[
//   { orderId: 1, deliveryTime: "12:00" },
//   { orderId: 2, deliveryTime: "12:30" }
// ];
// let newOrder = { orderId: 3, deliveryTime: "12:15" };

// for(let i = 0; i<arr.length; i++){
//     if(newOrder.deliveryTime < arr[i].deliveryTime){
//         arr.splice(i, 0, newOrder)
//         break;
//     }
// }

// console.log(arr);

// 🔹 2. Remove Inactive Users 
// 👥 Problem:
// You are building a social media cleanup tool.
//  Given an array of user accounts with an isActive boolean flag,
//  remove all users who are inactive.
// 📝 Input:

// let users=[
//   { username: "ali", isActive: true },
//   { username: "sara", isActive: false },
//   { username: "john", isActive: true }
// ]

// // 🧩 Task: Return a new array without the inactive users.

// const inActive = users.filter(ele => ele.isActive === false )
// console.log(inActive);



// 🔹 3. Movie Pair Watch Time 
// 🎬 Problem:
// You and your friend have exactly targetTime minutes to watch two movies. You're given an array of movie durations. 
// Find if there are two different movies you can watch back-to-back within the exact targetTime.

// 📝 Input:

let arr = [100, 85, 75, 60, 120, 150, 125];  
let target = 250;


function hasPairWithSum(arr,target) {
    arr.sort((a,b) => a-b)

    let left = 0
    let right = arr.length -1

    while (right>left) {
        let sum = arr[left] + arr[right]

        if(sum === target){
            return [arr[left], arr[right]];
        } else if(sum < target) {
            left++;
        }else{
            right--;
        }
    }
    return false;
}

console.log(hasPairWithSum(arr, target));

