import { user } from "./userRegistration.js";
import { car } from "./cars.js";

function main(){
    let new_user = user("Don", 45);
    console.log(new_user.money);
    for(let i=0; i<car.length; i++){
        if(new_user.money >= car[i].price){
            console.log(`${new_user.name} can afford ${car[i].model}`)
        } else if(new_user.money < car[i].price) {
            console.log(`${new_user.name} can not afford ${car[i].model} car!`)
        }
    }
}

main();
