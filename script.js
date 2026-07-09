const foods={한식:["김치찌개","된장찌개","제육볶음","비빔밥","갈비탕","부대찌개","닭갈비","보쌈","삼겹살","칼국수"],일식:["초밥","라멘","우동","돈카츠","규동","가츠동","텐동","소바"],중식:["짜장면","짬뽕","탕수육","볶음밥","마라탕","깐풍기","유린기"],양식:["파스타","리조또","피자","햄버거","스테이크","샐러드","오므라이스"]};
let current=null,last="";
const chat=document.getElementById("chat");
function add(t,c){let d=document.createElement("div");d.className="msg "+c;d.innerHTML=t;chat.appendChild(d);chat.scrollTop=chat.scrollHeight;}
function type(cb){let d=document.createElement("div");d.className="msg bot";d.innerHTML="● ● ●";chat.appendChild(d);chat.scrollTop=chat.scrollHeight;setTimeout(()=>{d.innerHTML=cb();chat.scrollTop=chat.scrollHeight;},800);}
function pick(cat){let arr=foods[cat],m;do{m=arr[Math.floor(Math.random()*arr.length)]}while(arr.length>1&&m===last);last=m;return `오늘은 <b>${m}</b> 어떠세요?<br><small>${cat} 추천</small>`;}
function choose(cat){current=cat;add(cat+" 추천 부탁해","user");type(()=>pick(cat));}
function again(){if(!current){type(()=>"먼저 한식·중식·일식·양식을 선택하거나 '점심 뭐 먹지?'를 입력해 주세요 😊");return;}type(()=>pick(current));}
function send(){let i=q,t=i.value.trim();if(!t)return;add(t,"user");i.value="";type(()=>{if(t.includes("한식")){current="한식";return pick("한식");}
if(t.includes("일식")){current="일식";return pick("일식");}
if(t.includes("중식")){current="중식";return pick("중식");}
if(t.includes("양식")){current="양식";return pick("양식");}
if(t.includes("점심")||t.includes("추천")||t.includes("먹")){let ks=Object.keys(foods);current=ks[Math.floor(Math.random()*ks.length)];return "생각해봤어요! 😄<br><br>"+pick(current)+"<br><br>원하면 아래 버튼으로 음식 종류를 선택하거나 '다른 메뉴'를 눌러보세요.";}
return "점심 추천을 원하면 '점심 뭐 먹지?' 또는 '한식 추천'처럼 말씀해 주세요 😊";});}
q.addEventListener("keydown",e=>{if(e.key==="Enter")send();});
