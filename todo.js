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

2.for(let i=arr.length-1;i>=0;i--){//to elemenate all the occurances of num
    for(arr[i]==num){
        arr.splice(i,1);//for splice thing backward loop is the best ,though i: 0 upto one step ahead of end can also work too
    }
}

3.num=Math.floor(num/10);//to avoid decimal floating count unexpected times of number, satisfies num>0 properly

4.Number guess game 1 to Max
let max=Math.floor(Math.random()*10)+1;//I would take maximum number  from the used using prompt to a different named varibale
let f=0;//in 10's place i would replace it with Max
let abc=prompt("Enter your number: ");
while(true && abc != "quit"){
    if(max==abc){
        console.log("you guessed correctly");
        f=1;
        break;
    }
    // if(abc<max){//to give hint,without it ,it works without any issue
    //     abc=prompt("You guessed small!Enter again: ");
    // }
    // else{
    //     abc=prompt("You guessed large!Enter again: ");
    // }
}
if(f){
    console.log("Congrastulations");
}
else{
    console.log("You have quited,better luck next time");
}
