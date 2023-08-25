const a = [2,3,4,5,6,7,8,9]
 

 const b = a.reduce((accu,cvalue)=>{
    return accu + cvalue
});
console.log(b);


const product=[
    {productid:1 , name:"sacree" , price:45000},
    {productid:2 , name:"laptop" , price:35000},
    {productid:3 , name:"led" , price:30000},
]

const totalprice = product.reduce((total,pvalue)=>{
    return pvalue.price + total;
},1000);
console.log(totalprice)