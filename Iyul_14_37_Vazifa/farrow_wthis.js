var obj = {
  salom : 'salom',
  func: function() {
    var innerFunc = () => {
      console.log(this.salom);
    };
    innerFunc();
  }
}

obj.func(); 

var obj = {
  age : 18,
  name : "Akaikumogo",
  func :function(){
    var innerFunc = ()=>{
        console.log(`${this.name} ${this.age} yoshda`)
    };
    innerFunc()
  }  
}
obj.func(); 

var obj = {
  type : "Modern",
  name : "GOJO",
  func :function(){
    var innerFunc = ()=>{
        console.log(`${this.name} ${this.type} tipida`)
    };
    innerFunc()
  }  
}
obj.func(); 

var obj = {
  color : "red",
  style : "classic",
  func :function(){
    var innerFunc = ()=>{
        console.log(`${this.color} ${this.style} dagi kiym`)
    };
    innerFunc()
  }  
}

obj.func(); 
var obj = {
  uzb : "salom",
  jap : "おハイよ",
  func :function(){
    var innerFunc = ()=>{
        console.log(`${this.uzb} ${this.to} deyiladi`)
    };
    innerFunc() 
  }  
}

obj.func(); 
var obj = {
  num1 : 18,
  num2 : 12,
  func :function(){
    var innerFunc = ()=>{
        console.log(this.num1+this.num2)
    };
    innerFunc()
  }  
}

obj.func(); 
var obj = {
  status: "painful",
  cause : "still learned",
  func :function(){
    var innerFunc = ()=>{
        console.log(`${this.status} ${this.cause} `)
    };
    innerFunc()
  }  
}

obj.func(); 
var obj = {
  age : 180,
  name : "Ao",
  func :function(){
    var innerFunc = ()=>{
        console.log(`${this.name} ${this.age} yoshda`)
    };
    innerFunc()
  }  
}
obj.func(); 

var obj = {
  platform : "github",
  username_name : "Akaikumogo",
  func :function(){
    var innerFunc = ()=>{
        console.log(`${this.platform}:${this.username_name}`)
    };
    innerFunc()
  }  
}
obj.func();

var obj = {
  password :12345678,
  password2 : 12345679,
  func :function(){
    var innerFunc = ()=>{
        this.password === this.password2?console.log("login"):console.log("${this.password2} no to'gri")
    };
    innerFunc()
  }  
}
obj.func(); 