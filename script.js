const questions = [
{q:"Sana aldığım ilk hediye neydi?", a:"creeper"},
{q:"İlk izlediğimiz filmin adı neydi?", a:"sinners"},
{q:"İlk buluşmada giydiklerimin renkleri neydi?(2 renk yaz)", a:"siyahmavi"},
{q:"En sevdiğim yemek nedir?", a:"biberdolması"},
{q:"Birlikte yaşamak istediğimiz ülke?", a:"ispanya"},
{q:"Birlikte çekildiğimiz ilk fotoğrafta neredeydik?", a:"coffelab"},
{q:"Uzak mesafede geçirdiğimiz toplam gün sayısı?", a:"yetmişsekiz"},
{q:"Resmi olarak tanıştığımız yer?", a:"fiziklaboratuvarı"},
{q:"Beni hep sevicekmisiiğnnn??", a:"evet"},
{q:"Sen benim ...........'sin.?", a:"herşeyim"}
];


const qDiv = document.getElementById("questions");

questions.forEach((x,i)=>{

let inputs = "";

for(let j=0;j<x.a.length;j++){
inputs += `<input maxlength="1" oninput="move(this)" onkeydown="back(event,this)">`;
}

qDiv.innerHTML += `
<div class="question-box">
<label>${i+1}. ${x.q}</label>
<div class="answer" id="a${i}">
${inputs}
</div>
</div>
`;

});



function start(){
document.getElementById("overlay").style.display="none";
document.getElementById("quiz").classList.remove("hidden");
}

function checkAnswers(){

let correct=true;

questions.forEach((x,i)=>{
let letters=document.querySelectorAll(`#a${i} input`);
let user="";

letters.forEach(l=>user+=l.value.toLowerCase());

if(user!==x.a.toLowerCase()) correct=false;
});

if(correct){
document.getElementById("quiz").classList.add("hidden");
document.getElementById("envelope").classList.remove("hidden");
}else{
alert("Bazı cevaplar yanlış 😅");
}

}

function openEnvelope(){

  const photos = document.querySelectorAll(".photo");
  const letter = document.getElementById("letter");

  letter.style.display = "block";

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const offsetX = 400;   // mektuba yatay mesafe
  const offsetY = 180;   // fotoğraflar arası dikey mesafe

  const positions = [

    // SOL TARAF
    {x: centerX - offsetX - 150, y: centerY - offsetY},
    {x: centerX - offsetX - 150, y: centerY},
    {x: centerX - offsetX - 150, y: centerY + offsetY},

    // SAĞ TARAF
    {x: centerX + offsetX, y: centerY - offsetY},
    {x: centerX + offsetX, y: centerY},
    {x: centerX + offsetX, y: centerY + offsetY}

  ];

  photos.forEach((photo,index)=>{

    photo.style.left = positions[index].x + "px";
    photo.style.top = positions[index].y + "px";
    photo.style.opacity = 1;

    const rot = Math.random()*10 - 5;
    photo.style.transform = `rotate(${rot}deg) scale(1)`;

  });

}



function move(el){

if(el.value.length==1){
el.classList.add("filled");

let next = el.nextElementSibling;
if(next) next.focus();
}

}


function back(e,el){

if(e.key==="Backspace"){
el.classList.remove("filled");

if(el.value===""){
let prev = el.previousElementSibling;
if(prev) prev.focus();
}
}

}


