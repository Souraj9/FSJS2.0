# _DOM Assignment - 1_

___
### _After Update Final Output_ :

![Output Image](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/full-opt.png)

## _Task 1_:

### **Solution :**
```JavaScript
let element = document.createElement("li");
element.innerHTML= "<a>Hire Me</a>" ;
'<a>Hire Me</a>'
let parent = document.querySelector("header nav ul");
parent.appendChild(element); 
```



## _Task 2_:

### **Solution :**
```JavaScript
let s= document.querySelector(".search-field input")
s.placeholder='Search My Project' ;
```


## _Task 3_:

### **Solution :**
```JavaScript
let x = document.querySelectorAll(".hero-left-section p span");
x[1].innerText= 'an Employee' ;
x[2].innerText= 'iNeuron Intelligence Pvt Ltd' ;
```


## _Task 4_:

### **Solution :**
```JavaScript
let y= document.querySelector(".hero-right-section img");
y.src="https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg";
```

## _Task 5_:

### **Solution :**
```JavaScript
let par =document.querySelector(".hero-right-section-btns");
let bt= document.createElement("button");
bt.innerText='Support Me';
par.appendChild(bt);
```
---



# _DOM Assignment - 2_

___
### _After Update Final Output_ :

![Output Image]()


## _Task 1_:

### **Solution :**
```JavaScript
let h= document.querySelectorAll(".accordian h3");
let p= document.querySelectorAll(".accordian p");
h.forEach((x) => {x.style.backgroundColor ="#dadaf8"}) ;
p.forEach((x) => {x.style.backgroundColor ="#dadaf8"}) ;
```


## _Task 2_:

### **Solution :**
```JavaScript
let parent= document.querySelector(".accordian-wrapper");
let div= document.createElement("div");
let h= document.createElement("h3");
let p= document.createElement("p");
div.classList.add("accordian");
h.innerText= 'Skills' ;
p.innerText= 'I posses avery good command over the Full Stack Development technologies like MERN which can be see in my work over the Github' ;
parent.appendChild(div);
div.appendChild(h);
div.appendChild(p);
h.style.backgroundColor ="#dadaf8" ;
p.style.backgroundColor ="#dadaf8" ;
```


----

# _DOM Assignment - 3_

___
### _After Update Final Output_ :

![Output Image](./thirdAssignmentImage/Screenshot%202023-01-31%20113936.png)

## _Task 1_:

### **Solution :**
```JavaScript
let form= document.querySelectorAll('form') ;
form[1].addEventListener('submit' , (x) => {x.preventDefault();
  let name= document.querySelector('.userName');
  let email= document.querySelector('.userEmail');
  let msg= document.querySelector('.userMessage');

  let on=document.querySelector('.enterName');
  let oe=document.querySelector('.enterMail');                              let om= document.querySelector('.enterMessage');

   on.value= name.value;                                         
   oe.value= email.value;
   om.value= msg.value ;
                        })
```




----

# _DOM Assignment - 4_

___
### _After Update Final Output_ :

![Output Image]()

## _Task 1_:

### **Solution :**
```JavaScript
let bar = document.querySelector('.clash-card__unit-stats--barbarian');
bar.style.backgroundColor= '#eb9e2a';

let arch = document.querySelector('.clash-card__unit-stats--archer');
arch.style.backgroundColor= '#e84393';

let gai = document.querySelector('.clash-card__unit-stats--giant');
gai.style.backgroundColor= '#d35400';

let gob = document.querySelector('.clash-card__unit-stats--goblin');
gob.style.backgroundColor= '#4cd137';

let wiz = document.querySelector('.clash-card__unit-stats--wizard');
wiz.style.backgroundColor= '#00a8ff';

bar.style.color='#fff';
arch.style.color='#fff';
gai.style.color='#fff';
gob.style.color='#fff';
wiz.style.color='#fff';

```


----

# _DOM Assignment - 5_

___
### _After Update Final Output_ :

![Output Image](./05_DOM%20Project/05_DOM%20Project/Output/Screenshot%201.png)
![Output Image](./05_DOM%20Project/05_DOM%20Project/Output/Screenshot%202.png)

## _Task 1_:

### **Solution :**
```JavaScript
//nav bar
const nav = document.querySelector(".nav-center");
let div = document.createElement("div");
let btn = document.createElement("a");
btn.classList.add("btn");
btn.textContent="Pro Subscription";
div.append(btn);
nav.appendChild(div);
//Recipe 
let rec= document.querySelector(".tags-container > div");
let a=document.createElement("a");
a.innerText='Chinese (7)';
rec.appendChild(a);
//add
let a= document.querySelector(".recipe-gallery");
let b= document.createElement("div");
let c=document.createElement("h4");
b.classList.add("card");
c.innerText='add 6th card here';
b.append(c);
a.appendChild(b);
```

----

# _DOM Assignment - 6_

___
### _After Update Final Output_ :

![Output Image](./06_DOM%20Project/06_DOM%20Project/assets/Screenshot%203.png)
![Output Image](./06_DOM%20Project/06_DOM%20Project/assets/Screenshot%204.png)

## _Task 1_:

### **Solution :**
```JavaScript
//logo
let a=document.querySelector("header");
a.removeChild(a.firstElementChild);
let img = document.createElement("img");
img.src="./assets/ineuron-logo.png";
a.appendChild(img);
```

## _Task 2_:

### **Solution :**
```JavaScript
let x=document.querySelector(".app_price > span ");
x.innerText='$10';
```



----

# _DOM Assignment - 7_

___
### _After Update Final Output_ :

![Output Image]()

## _Task 1_:

### **Solution :**
```JavaScript

```

## _Task 2_:

### **Solution :**
```JavaScript
let s= document.querySelector(".main__form-input")
let k= document.querySelector(".main__form-btn").disabled=false;
let a= document.querySelector('button').addEventListener('click', () =>{ window.location.reload(true)});
```



----

# _DOM Assignment - 8_

___
### _After Update Final Output_ :

1.![Output Image](./DOM%20P8/DOM%20P8/images/Screenshot%205.png)
2.![Output Image](./DOM%20P8/DOM%20P8/images/Screenshot%206.png)
3.![Output Image](./DOM%20P8/DOM%20P8/images/Screenshot%207.png)

## _Task 1_:

### **Solution :**
```JavaScript
let a=document.querySelector("aside");
//hr
let hr= document.createElement('hr');
hr.classList.add('hr-line');
a.appendChild(hr);
//h2
let h2= document.createElement('h2');
h2.classList.add('new-head');
h2.innerText='This is my custom heading';
a.appendChild(h2);
//bar
a.style.overflow='auto';
//border
a.style.border='thick solid #E21717';

```

## _Task 2_:

### **Solution :**
```JavaScript
let body=document.querySelector('body');
body.style.backgroundImage='none';
'none'
```
## _Task 3_:

### **Solution :**
```JavaScript
let nav = document.getElementsByClassName("navbar-toggler");
let i;

for (i = 0; i < nav.length; i++) {
  nav[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let navContent = this.nextElementSibling;
    if (navContent.style.display === "block") {
      navContent.style.display = "none";
    } else {
      navContent.style.display = "block";
    }
  });
}
```


----

# _DOM Assignment - 9_

___
### _After Update Final Output_ :

![Output Image](./DOM%20P9/DOM%20P9/images/Screenshot%208.png)

## _Task 1_:

### **Solution :**
```JavaScript
let h=document.querySelector('h1');
h.style.color='#E21717';
```

## _Task 2_:

### **Solution :**
```JavaScript
let p=document.querySelector('.add-to-cart');
p.style.backgroundColor='#E21717';
```