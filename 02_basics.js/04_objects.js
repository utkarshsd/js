// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isloggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "utkarsh",
            lastname: "pandey"

        }

    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1,...obj2}
//console.log(obj3);


const users = [
    {
        id: 1,
        email: "utkarsh@google.com"

    },
    {
        id: 1,
        email: "utkarsh@google.com"

    },
    {
        id: 1,
        email: "utkarsh@google.com"

    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isloggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "utkarsh"
}

// course.courseInstructor
const{courseInstructor: instructor} = course 

// console.log(courseInstructor);
console.log(instructor);

// const navbar = ({company}) => {
 //                                   => destructure
// }
// navbar(company = "utkarsh")

// {
//     "name": "utkarsh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
[
    {},
    {},
    {}
]