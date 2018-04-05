var a=0,b=1;
console.log(a+"\n"+b);
function fSeries(n){
    if(n>2) {
        var c=a+b;
        a=b;
        b=c;
        console.log(c);
        fSeries(n-1);
    }
}
fSeries(10);
