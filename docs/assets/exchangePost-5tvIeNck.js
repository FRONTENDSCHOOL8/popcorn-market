import"./tailwind-75xaDfuL.js";import{g as o,a as u}from"./delay-g6vF19wW.js";import{i as m}from"./insert-vWB_d1l7.js";import{g as f,s as w}from"./storage-eNv634Ip.js";import{s as y}from"./setDocumentTitle-_OwlDZqT.js";import{p as r}from"./pocketbase-UOLpUAtS.js";function x(e){if(typeof e=="string"&&(e=o(e)),e.nodeName==="INPUT"||e.nodeName==="TEXTAREA"){e.value="";return}e.textContent=""}y("엔터이듬 ㆍ 상품 추가");const E=o(".exchangePost-back");E.addEventListener("click",()=>window.location.href="/src/pages/exchange/");const N=await r.collection("users").getFullList(),I=await f("phoneNumber"),k=I;async function h(){let e=N.find(n=>n.phoneNumber===k);return w("userId",e.id),e.id}async function F(){const e=await f("userId"),n=await r.collection("users").getOne(e);console.log(n);const a=`
  <option value="${n.locationFirst}">${n.locationFirst}</option>
  <option value="${n.locationSecond}">${n.locationSecond}</option>
  `;m("#place",a)}async function P(){const e=await h(),n=o(".exchangePost-submit"),a=o("#imgField"),d=o(".exchangePost-img-container label");let p=null;const g=u(".exchangePost-li button");g.forEach(t=>{t.addEventListener("click",function(){g.forEach(s=>s.closest("li").classList.remove("active","bg-secondary")),this.closest("li").classList.add("active","bg-secondary"),p=this.textContent})});async function b(){const t=new FormData;t.append("images",a.files[0]),t.append("title",o("#title").value),t.append("price",o("#price").value),t.append("alt",a.files[0].name),t.append("type",p);let i=o("#textField").value.replace(/\n/g,"<br>");t.append("contents",i),t.append("userPost",e);let l=o("#place").value;l==="place1"?t.append("locationFirst",l):t.append("locationSecond","location2");try{await r.collection("products").create(t),location.href="/src/pages/exchange/"}catch{alert("상품 정보를 올바르게 입력해 주세요.")}}function v(t){const{files:s}=t.target,i=Array.from(s).map(c=>({image:URL.createObjectURL(s[0]),label:c.name}));x(".render"),i.forEach(c=>{const L=`
      <img src="${c.image}" alt="${c.label}" class="w-full h-full object-cover cursor-pointer" />
      `;m(".render",L)}),d&&(d.style.display="none"),u(".render img").forEach(c=>{c.addEventListener("click",()=>{a.click()})})}a.addEventListener("change",v),n.addEventListener("click",b)}h();F();P();
