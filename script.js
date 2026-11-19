const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.navigation');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close menu':'Open menu');});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=new Date().getFullYear();

// The gallery lightbox becomes active after image paths are added to the gallery items.
const lightbox=document.querySelector('.lightbox');
const lightboxImg=lightbox.querySelector('img');
document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>{
  const imagePath=item.dataset.image || item.querySelector('img').getAttribute('src');
  if(!imagePath)return;
  lightboxImg.src=imagePath;lightboxImg.alt=item.querySelector('img').alt;lightbox.hidden=false;
}));
function closeLightbox(){lightbox.hidden=true;lightboxImg.src='';}
lightbox.querySelector('.lightbox-close').addEventListener('click',closeLightbox);
lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox();});
