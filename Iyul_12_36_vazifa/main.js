const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve(randomNumber); // Natija qaytarish
    } else {
      reject("Xato yuz berdi"); // Xato qaytarish
    }
  }, 2000);
});

promise.then(result => console.log("Natija:", result))


 
localStorage.setItem("username", "odilov");
localStorage.setItem("parol", "19851805");
localStorage.setItem("Firstname", "Obid");
localStorage.setItem("Lastname", "Odilov");
localStorage.setItem("Parents", [JSON.stringify({"dad":"ABdusattor","mom":"Qulpinisa"})]);
localStorage.setItem("childrens", [JSON.stringify({"boys":["ali","valig","g'ani"],"girls":["qulpinisa2","madina","marjona"]})]);
localStorage.setItem("Work", "unnamend");
localStorage.setItem("Workadress", "Tashkent");
localStorage.setItem("isPremium", true);
localStorage.setItem("Weight", "170lbs");
localStorage.setItem("Hobby", "hard work on garden");
localStorage.setItem("Girlfriend_name", "Rose");
localStorage.setItem("favorite_foods", ["plov,somsa,sumalak"]);
localStorage.setItem("phone", "iPhone se");
localStorage.setItem("Flower", "Roses");
localStorage.setItem("favorite_music", ["inter world metamarphosis","shilloh father forgivme"]);
localStorage.setItem("language", "uzbek");
localStorage.setItem("programming_languages", ["python","C","js",""]);
localStorage.setItem("birth_year", 2002);
localStorage.setItem("birth_moon", "August");
localStorage.setItem("birth_date", "17");
localStorage.setItem("favorite_games", ["minecraft"]);
localStorage.setItem("tg_user_name", "odilov");
localStorage.setItem("insta_user_name", "odilov");
localStorage.setItem("phone_number", "+123456789899");
localStorage.setItem("e_mail", "odilov@gmail.com");
localStorage.setItem("Friends", ["Manuchehr","Robinson Uwissumo","Otabek dev"]);
localStorage.setItem("Skill", ["Fullstackdev","Copy writer","Content maker"]);
localStorage.setItem("Fav_movies",["Oppenhimer","Barbie",""] );
localStorage.setItem("Fav_animes", ["Naruto",]);
localStorage.setItem("Fav_Social", "Misskey.uz");

//bu ishlarni for bilan qilsam bo'lardi faqat maqsad 40 ta qilish bo'lgani uchun yozib chiqdim 
const username = localStorage.getItem("username")
console.log(username)
const parol = localStorage.getItem("parol")
console.log(parol)
const Firstname = localStorage.getItem("Firstname")
console.log(Firstname)
const Lastname = localStorage.getItem("Lastname")
console.log(Lastname)
const Parents = JSON.parse(localStorage.getItem("Parents"))
console.log(Parents)
const childrens = JSON.parse(localStorage.getItem("childrens"))
console.log(childrens)
const Work = localStorage.getItem("Work")
console.log(Work)
const Workadress = localStorage.getItem("Workadress")
console.log(Workadress);
const isPremium = localStorage.getItem("isPremium")
console.log(isPremium)
const Weight = localStorage.getItem("Weight") 
console.log(Weight);
const Hobby = localStorage.getItem("Hobby")
console.log(Hobby);
const Girlfriend_name = localStorage.getItem("Girlfriend_name")
console.log(Girlfriend_name);
const favorite_foods = localStorage.getItem("favorite_foods")
console.log(favorite_foods);
const phone = localStorage.getItem("phone")
console.log(phone);
const Flower =localStorage.getItem("Flower")
console.log(Flower);
const favorite_music = localStorage.getItem("favorite_music")
console.log(favorite_music);
const language = localStorage.getItem("language")
console.log(language);
const programming_languages = localStorage.getItem("programming_languages")
console.log(programming_languages);
const birth_year = localStorage.getItem("birth_year")
console.log(birth_year);
const birth_moon = localStorage.getItem("birth_moon")
console.log(birth_moon);
const birth_date = localStorage.getItem("birth_date")
console.log(birth_date);
const favorite_games = localStorage.getItem("favorite_games")
console.log(favorite_games);
const tg_user_name = localStorage.getItem("tg_user_name")
console.log(tg_user_name);
const insta_user_name = localStorage.getItem("insta_user_name")
console.log(insta_user_name);
const phone_numbe = localStorage.getItem("phone_numbe")
console.log(phone_numbe);
const e_mail = localStorage.getItem("e_mail")
console.log(e_mail);
const Friends = localStorage.getItem("Friends")
console.log(Friends);
const Skill = localStorage.getItem("Skill")
console.log(Skill);
const Fav_movies = localStorage.getItem("Fav_movies")
console.log(Fav_movies);
const Fav_animes = localStorage.getItem("Fav_animes")
console.log(Fav_animes);
const Fav_Social = localStorage.getItem("Fav_Social")
console.log(Fav_Social);

