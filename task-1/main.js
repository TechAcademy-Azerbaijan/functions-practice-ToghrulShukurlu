function sum(n){
    let totalPrice=0
    while(n>0){
        if(n>=100){
            totalPrice+=100
            n-=100
        }
        else if(n>=20){
        totalPrice+=30
        n-=20
        }
        else{
            totalPrice+=n*2
            n-=n
        }
    }
    return totalPrice
}
let res = sum(123)
console.log(res);
