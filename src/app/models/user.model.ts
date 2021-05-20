export interface User{
    id:number,
    name:string,
    username:string,
    email:string,
    profile:string,
    address:{
        street:string,
        suite:string,
        city:string,
        zipcode:string
    },
    phone:string,
    website:string,
    company:string
}