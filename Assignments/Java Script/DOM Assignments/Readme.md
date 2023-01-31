# _DOM Assignment - 1_

___
### _After Update Final Output_ :

![Output Image](./firstAssignmentImage/full-opt.png)

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

```