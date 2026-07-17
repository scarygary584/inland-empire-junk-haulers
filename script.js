const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const leadForm=document.querySelector("[data-lead-form]");const formStatus=document.querySelector("[data-form-status]");if(leadForm&&formStatus){leadForm.addEventListener("submit",async(event)=>{event.preventDefault();const button=leadForm.querySelector('button[type="submit"]');const label=button.textContent;button.disabled=true;button.textContent="Sending…";formStatus.textContent="";formStatus.className="form-status";try{const response=await fetch(leadForm.action,{method:"POST",body:new FormData(leadForm)});const result=await response.json();if(!response.ok||!result.success)throw new Error("Submission failed");leadForm.reset();formStatus.textContent="Thank you—your request was sent. Please keep your phone nearby.";formStatus.classList.add("is-success")}catch(error){formStatus.textContent="Your request could not be sent. Please call (951) 292-0732 instead.";formStatus.classList.add("is-error")}finally{button.disabled=false;button.textContent=label}})}
