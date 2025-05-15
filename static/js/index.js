$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/
    // preloadInterpolationImages();

    // $('#interpolation-slider').on('input', function(event) {
    //   setInterpolationImage(this.value);
    // });
    // setInterpolationImage(0);
    // $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

    bulmaSlider.attach();

})

document.addEventListener('DOMContentLoaded', function() {
  // Button to show/hide additional demos
  const showMoreButton = document.getElementById('show-extra-tasks');
  const additionalDemos = document.getElementById('extra-tasks');
  
  // 添加调试信息
  console.log('DOM loaded, initializing button functionality');
  console.log('Button found:', !!showMoreButton);
  console.log('Additional demos section found:', !!additionalDemos);
  
  if (showMoreButton && additionalDemos) {
    // 确保初始状态正确
    additionalDemos.style.display = 'none';
    
    // 设置初始按钮文本
    const buttonText = showMoreButton.querySelector('span:first-child');
    if (buttonText) {
      buttonText.innerHTML = '<strong>Show Extra Tasks</strong>';
    }
    
    showMoreButton.addEventListener('click', function(e) {
      e.preventDefault(); // 防止默认行为
      console.log('Button clicked');
      
      // 使用计算样式而不是内联样式来检查可见性
      const computedStyle = window.getComputedStyle(additionalDemos);
      const isHidden = computedStyle.display === 'none';
      console.log('Is hidden:', isHidden);
      
      // Toggle visibility
      additionalDemos.style.display = isHidden ? 'flex' : 'none';
      
      // Update button text and icon
      const buttonText = showMoreButton.querySelector('span:first-child');
      const buttonIcon = showMoreButton.querySelector('.fas');
      
      if (buttonText && buttonIcon) {
        if (isHidden) {
          buttonText.innerHTML = '<strong>Hide Extra Tasks</strong>';
          buttonIcon.classList.remove('fa-chevron-down');
          buttonIcon.classList.add('fa-chevron-up');
        } else {
          buttonText.innerHTML = '<strong>Show Extra Tasks</strong>';
          buttonIcon.classList.remove('fa-chevron-up');
          buttonIcon.classList.add('fa-chevron-down');
        }
      }
    });
    
    console.log('Button event listener attached');
  } else {
    console.error('Button or additional demos section not found');
  }
  
  // 添加备用初始化方法，以防DOMContentLoaded已经触发
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    console.log('Document already loaded, checking elements again');
    setTimeout(function() {
      const showMoreButton = document.getElementById('show-extra-tasks');
      const additionalDemos = document.getElementById('extra-tasks');
      
      if (showMoreButton && additionalDemos && !showMoreButton.hasAttribute('data-initialized')) {
        console.log('Initializing button after delay');
        showMoreButton.setAttribute('data-initialized', 'true');
        
        // 确保初始状态正确
        additionalDemos.style.display = 'none';
        
        showMoreButton.addEventListener('click', function(e) {
          e.preventDefault();
          const computedStyle = window.getComputedStyle(additionalDemos);
          const isHidden = computedStyle.display === 'none';
          
          additionalDemos.style.display = isHidden ? 'flex' : 'none';
          
          const buttonText = showMoreButton.querySelector('span:first-child');
          const buttonIcon = showMoreButton.querySelector('.fas');
          
          if (buttonText && buttonIcon) {
            if (isHidden) {
              buttonText.innerHTML = '<strong>Hide Extra Tasks</strong>';
              buttonIcon.classList.remove('fa-chevron-down');
              buttonIcon.classList.add('fa-chevron-up');
            } else {
              buttonText.innerHTML = '<strong>Show Extra Tasks</strong>';
              buttonIcon.classList.remove('fa-chevron-up');
              buttonIcon.classList.add('fa-chevron-down');
            }
          }
        });
      }
    }, 500);
  }
});