document.addEventListener('DOMContentLoaded', function() {
    const carousel =document.querySelector('.carousel');
    const mainImg = document.getElementById('mainImg');
    const smallImg = document.querySelectorAll('.smallImg');
    let timeRunning = 1001;
    let runTimeOut;


  
    smallImg.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        carousel.classList.add('next');
        const smallImgSrc = this.src;
        mainImg.src = smallImgSrc;
        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
        carousel.classList.remove('next');
    }, timeRunning);
      });
    });
  });