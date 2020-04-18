// // topへ戻る
function scrollToTop(){
  scrollTo(0, 0);
}

// SKILLSへ飛ぶ
let headH = 
document.querySelector('.header').offsetHeight;
document.body.style.margintop = headH + "px";


let smoothScroll = (target, offset) => {
  let toY;
  let nowY = window.pageYOffset;
  const range = (divisor / 2) + 1;
  const targetRect = target.getBoundingClientRect();
  const targetY = targetRect.top + nowY - offset;
  (function(){
    let thisFunc = arguments.callee;
    toY = nowY + Math.round((targetY - nowY) / divisor);
    window.scrollTo(0, toY);
    nowY = toY;

    if(document.body.clientHeight - window.innerHeight < toY){
      window.scrollTo(0, document.body.clientHeight);
      return;
    }
    if(toY >= targetY + range || toY <= targetY - range){
      window.setTimeout(thisFunc, 10);
    }else{
      window.scrollTo(0, targetY);
    }
  })();
};

const smoothOffset = headH;
const links = document.querySelectorAll('a[href*="#"]');
for(let i = 0; i < links.length; i++){
  links[i].addEventListener('click', function(e){
    const href = e.currentTarget.getAttribute('href');
    const splitHref = href.split('#');
    const targetID = splitHref[1];
    const target = document.getElementById(targetID);

    if(target){
      smoothScroll(target, smoothOffset);
    }else{
      return true;
    }
    return false;
  });
}