function dupStr(mystr){
var unik ='';
for(const chr of mystr)
{
    if(unik.includes(chr) == false){
        unik += chr;
    }
}
return unik;

}
console.log(dupStr('praveen'));