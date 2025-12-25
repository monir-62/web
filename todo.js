let arr=[];
let req=prompt("Enter what to do");
while(true){
    if(req=="quit"){
        console.log("quit");
        break;
    }
    else if(req=="add"){
        let push=prompt("What to add:");
        arr.push(push);
        console.log("task added");
    }
    else if(req=="list"){
        for(element of arr){
            console.log(element);
        }
    }
    else if(req=="delete"){
        let idx=prompt("Enter your index:");
        arr.splice(idx,1);
    }
    else{
        console.log("Not a valid request");
    }
    req=prompt("Enter what to do");
}
