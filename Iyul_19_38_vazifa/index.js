const id_text = document.getElementById("id");
console.log(id_text.textContent);

function by_id() {
  if (id_text.textContent !== "Text edited") {
    id_text.textContent = "Text edited";
  } else {
    id_text.textContent = "TEXT";
  }
}

const class_text = document.getElementsByClassName("class_text")[0];
console.log(class_text.textContent);

function by_class() {
  if (class_text.textContent !== "Text edited") {
    class_text.textContent = "Text edited";
  } else {
    class_text.textContent = "TEXT";
  }
}

const name_text = document.getElementsByName("name")[0];
console.log(name_text.textContent);

function by_name() {
  console.log("by name");
  if (name_text.textContent !== "Text edited") {
    name_text.textContent = "Text edited";
  } else {
    name_text.textContent = "TEXT";
  }
}

const name_tag_text = document.getElementsByTagName("h1")[3];
console.log(name_tag_text.textContent);

function by_tag_name() {
  console.log("by tag name");
  if (name_tag_text.textContent !== "Text edited") {
    name_tag_text.textContent = "Text edited";
  } else {
    name_tag_text.textContent = "TEXT";
  }
}

const id_selector_text = document.querySelector("#id_for_selector");

function by_id_selector() {
  let son = 1;
  id_selector_text.textContent = son;
  son++;
}

const class_selector_text = document.querySelector(".class_for_selector");
let son1 = 1;

function by_class_selector() {
  class_selector_text.textContent = son1;
  son1++;
}

const name_selector_text = document.querySelector("[name='name_for_selector']");
let son = 1;

function by_name_selector() {
  name_selector_text.textContent = son;
  son++;
}

const tag_name_selector_text = document.querySelectorAll("h1")[6];
let son2 = 1;

function by_tagname_selector() {
  tag_name_selector_text.textContent = son2;
  son2++;
}


const select_all = document.querySelectorAll(".querySelectorAll p");
function selectorall(){
    select_all[2].textContent = "va nihoyat tugadi";
}