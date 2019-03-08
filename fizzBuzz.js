for(var i=1;i<=100;i++){
    if(isDivisible(i,3)){
        document.write("<b>Fizz</b>");
    }
    if(isDivisible(i,5)){
        document.write("<b>Buzz</b>");
    }
    if(!isDivisible(i,3)&&!isDivisible(i,5)){
        document.write(i);
    }
    document.write("<br>");
}

function isDivisible(dividend,divisor){
    return(dividend%divisor==0);
}