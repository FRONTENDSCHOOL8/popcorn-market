import"./tailwind-CJxIFdyF.js";import{g as i}from"./delay-JyFhHnao.js";import{g as n}from"./index-35H_NU9g.js";function l(e,a){typeof e=="string"&&(e=i(e)),e.insertAdjacentHTML("afterbegin",a)}const t=i(".exchange-button");let o=!1;function u(){o?n.to(".exchange-button-ul > ul > li",{y:30,opacity:0,stagger:.05,onComplete:()=>{t.classList.add("exchange-button-no"),n.to(t,{backgroundColor:"rgb(55 63 103)",duration:.2}),s(),t.classList.remove("exchange-button-active")}}):(n.to(t,{backgroundColor:"rgb(255 255 255)",duration:.6}),t.classList.remove("exchange-button-no"),t.classList.add("exchange-button-active"),c(),n.from(".exchange-button-ul > ul > li",{y:30,opacity:0,stagger:{each:.05,from:"end"}})),o=!o}function c(){const e=`
  <img src="/public/images/plusTapActive.svg" alt="" />
  `,a=`
  <ul>
    <li class="exchange-headset exchange-li-button">
      <button type="button" aria-label="헤드셋 품목만 정렬">
      🎧헤드셋
      </button>
    </li>
    <li class="exchange-keyboard exchange-li-button">
      <button type="button" aria-label="키보드 품목만 정렬">
      ⌨키보드
      </button>
    </li>
    <li class="exchange-mouse exchange-li-button">
      <button type="button" aria-label="마우스 품목만 정렬">
      🖱️마우스
      </button>
    </li>
    <li class="exchange-computer exchange-li-button">
      <button type="button" aria-label="컴퓨터 품목만 정렬">
      💻컴퓨터
      </button>
    </li>
    <li class="exchange-etc exchange-li-button">
      <button type="button" aria-label="기타 품목만 정렬">
      🎈기타 등등
      </button>
    </li>
    <li class="exchange-write exchange-li-write">
      <button type="button" aria-label="글쓰기">
      📃작성하기
      </button>
    </li>
  </ul>
  `;t.innerHTML=e,l(".exchange-button-ul",a)}function s(){const e=document.querySelector(".exchange-button-ul");t.innerHTML='<img src="/public/images/plusTap.svg" alt="" />',e.innerHTML=""}t.addEventListener("click",u);
