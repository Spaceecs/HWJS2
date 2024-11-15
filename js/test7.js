let price = parseFloat(prompt("Enter price"))
let result=0
if(price>=200&&price<=300)
{
    result=price-price*0.03
}
else if(price>=301&&price<=500)
{
    result=price-price*0.05
}
else
{
    result=price-price*0.07
}
alert(result)
