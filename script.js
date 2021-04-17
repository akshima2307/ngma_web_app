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
    console.log(num);
    console.log("Hey");
    if(num === 'info-btn_1'){
        console.log("Hello");
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
    // console.log(ele);
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

}
const hideBtn = function(ele){
  const btn = ele.childNodes[5];
  btn.style.display = "none";
}

// Navbar position fixed
var height = document.getElementById("artCollection").offsetTop;
console.log(height);
console.log(window.pageYOffset);


window.onscroll = function(){
  const navigationLogo = document.querySelector('.navigation_logo');
  if (window.pageYOffset >= height) {
    document.getElementById('navbar').classList.add('fixed');
    // const navLinks = document.getElementsByClassName('nav_link');
    // const navLink = [...navLinks];
    
    // navLink.map(function(el){
    //    el.style.color = "white";
    //  });

    //  navigationLogo.style.visibility = "visible";

  }
  else {
    document.getElementById('navbar').classList.remove('fixed');
    // const navLinks = document.getElementsByClassName('nav_link');
    // const navLink = [...navLinks];
    
    // navLink.map(function(el){
    //    el.style.color = "#304991";
    //  });
    //  navigationLogo.style.visibility = "hidden";

  }
};

