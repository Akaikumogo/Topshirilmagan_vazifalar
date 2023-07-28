
const funksiya_1 = yosh => console.log(yosh);
funksiya_1(150);
const funksiya_2 = (a,b)=> {
  return a+b;
}
console.log(funksiya_2(3,5)) ;

const funksiya_3 = (date)=> console.log(date)
funksiya_3(new Date())

const funksiya_4 = (id)=> {
  const index = [
    "python",
    "javascript",
    "c++",
    "c#",
    ]
  console.log(index[id])
}
funksiya_4(3)

const funksiya_5 =(n)=>{
  for (var i = n; i > 0; i--) { 
    n--;
    console.log(i)
  }
}
funksiya_5(9)

const funksiya_6 = (login,parol)=>{
  if (login && parol) {
    console.log("login bajarildi");
  } else if(!login && !parol){
    console.log("parol va login no to'g'ri")
  }else if (login && !parol) {
    console.log("parol no to'g'ri")
  } else if (!login && parol){
    console.log("login no to'g'ri")
  }
}
funksiya_6(true,true)


const funksiya_7 = year => year > 2005 && year <= 2019 ? console.log(':)') : console.log(":(");
funksiya_7(2009);

const hatake={
  from:"Akaikumogo",
  to:"Akumaru",
  txt:"The copy ninja Hatake Kakashi"
}
  
const funksiya_8 = (msg)=>{
  console.log(`${msg.from} dan ${msg.to} ga habar keldi. Habar: ${msg.txt}`)
}
funksiya_8(hatake);

const robery = {
  age : 21,
  name : "Patrick Betman",
  height: "1.75m"}

const {age,name,height}=robery;
const funksiya_9 = (age,name,height)=>{
  if (age ==  21 && name =="Patrick Betman" && height == "1.75m"){
    console.log(name);
    console.log("qo'lga tushding",`${name}`)
  }else {
    console.log(name)
    console.log("o'tishingiz mumkun hurmatli",`${name}`)
  }
}
funksiya_9(age,name,height)

const hour = new Date("1995-12-25T23:15:30")
const funksiya_10=(hour)=>{
  if (hour.getHours()==='11'){
    console.log("xa endi dam olaqol");
  }else{
    console.log("hali vaqt bor ishni qil immilamasdan! E...")
  }
}
funksiya_10(hour)
