const animationDuration = 1500;
const frameDuration = 1000 / 60;
const totalFrames = Math.round(animationDuration / frameDuration);
const easeOutQuad = t => t * (2 - t);

const animateCountUp = el => {
  let frame = 0;
  const countTo = parseInt(el.innerHTML, 10);
  
  const counter = setInterval(() => {
    frame++;
    const progress = easeOutQuad(frame / totalFrames);
    const currentCount = Math.round(countTo * progress);

    if (parseInt(el.innerHTML, 10) !== currentCount) {
      el.innerHTML = currentCount;
    }

    if (frame === totalFrames) {
      clearInterval(counter);
    }
  }, frameDuration);
};

const runAnimations = () => {
	const countupEls = document.querySelectorAll('.countup');
  
	const options = {
	  threshold: 0.5 // Adjust this threshold as needed
	};
  
	const observerCallback = (entries, observer) => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  animateCountUp(entry.target);
		  observer.unobserve(entry.target); // Stop observing after animation
		}
	  });
	};
  
	const observer = new IntersectionObserver(observerCallback, options);
  
	countupEls.forEach(el => {
	  observer.observe(el);
	});
  };
  
  // Run the animations when the page is loaded
  window.addEventListener('DOMContentLoaded', runAnimations);
  