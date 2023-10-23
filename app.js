function num(nub){
    let a=[4,1,8,3,5,6]
    let t=0
    let d
    for(let i=0;i<a.length;i++){
        if(nub-a[i]>0 && nub-a[i]<=t){
            t=nub-a[i]
            d=i
        }
    }
    return a[d]
}

console.log(num(5))
