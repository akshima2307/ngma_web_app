const imgChange = function(ele){
    ele.setAttribute('src', './image/dg_2.jpg');
}
const imgChange2 = function(ele){
    ele.setAttribute('src', './image/dg_1.jpg');
}


// Info Section

const infoImg = document.querySelector('.info-img');
const infoBtn1 = document.querySelector('.info-btn_1');
const infoBtn2 = document.querySelector('.info-btn_2');
const infoBtn3 = document.querySelector('.info-btn_3');


const move = function(num){
    if(num === 'info-btn_1'){
        infoImg.classList.add('hover');
        infoBtn1.style.borderBottom = '6px solid #2d4386';
    }
    if(num === 'info-btn_2'){
        infoImg.classList.add('hover-1');
        infoBtn2.style.borderBottom = '6px solid #2d4386';
    }
    if(num === 'info-btn_3'){
        infoImg.classList.add('hover-2');
        infoBtn3.style.borderBottom = '6px solid #2d4386';
    }
}

const removeClasses = function(num){
    if(num === 'info-btn_1'){
        infoImg.classList.remove('hover');
        infoBtn1.style.borderBottom = 'none';
    }
    if(num === 'info-btn_2'){
        infoImg.classList.remove('hover-1');
        infoBtn2.style.borderBottom = 'none';
    }
    if(num === 'info-btn_3'){
        infoImg.classList.remove('hover-2');
        infoBtn3.style.borderBottom = '0';
    }
}

// Video Section

const videoContainerHeading = document.getElementsByClassName('.videoContainer_heading');
const videoContainersmall = document.getElementsByClassName('.videoContainer_small');

const addClass = function(ele){
    const vd = ele.childNodes[1];
    vd.play();
    ele.classList.add('lg-width');
};

const removeClass = function(ele){
    const vd = ele.childNodes[1];
    vd.pause();
    ele.classList.remove('lg-width');
};



// events Section
const leftArr = document.getElementById('left-arrow');
const rightArr = document.getElementById('right-arrow');
const newsCards = document.querySelector('.news_cards');

const moveRight = function(count){
  if(count === 1){
    newsCards.style.transform = 'translateX(-6rem)';
  }
  if(count === 2){
    newsCards.style.transform = 'translateX(-33rem)';
  }
}
const moveleft = function (count){
  if(count === 1){
    newsCards.style.transform = 'translateX(6rem)';
  }
  if(count === 2){
    newsCards.style.transform = 'translateX(33rem)';
  }
}


const showBtn = function(ele){
  const btn = ele.childNodes[5];
  btn.style.display = "block";
  ele.childNodes[1].style.transform = 'scale(1.1)';
}
const hideBtn = function(ele){
  const btn = ele.childNodes[5];
  btn.style.display = "none";
  ele.childNodes[1].style.transform = 'scale(1)';
}

// Navbar position fixed
var height = document.getElementById("collection").offsetTop;
console.log(height);
window.onscroll = function(){
  const navigationLogo = document.querySelector('.navigation_logo');
  if (window.pageYOffset > height) {
    document.getElementById('navbar').classList.add('fixed');
    document.getElementById('navbar').style.display = "flex";

  }
  else {
    document.getElementById('navbar').classList.remove('fixed');
    document.getElementById('navbar').style.display = "none";
  }
};


//Timeline
const tabItems = document.querySelectorAll('.timeline-tab-item');
const tabContentItems = document.querySelectorAll('.timeline-tab-content-item');

function selectItem(e) {
  removeShow();
  removeBorder();
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  const tabItem = document.querySelector(`#${this.id}`);
  tabContentItem.classList.add('show');
  tabItem.childNodes[5].style.opacity = "1";
}

function removeBorder() {
  tabItems.forEach(item => {
    item.childNodes[5].style.opacity = "0";
  })
}

function removeShow() {
  tabContentItems.forEach(item => {
    item.classList.remove('show');
  });
}

tabItems.forEach(item => {
  item.addEventListener('click', selectItem);
})

