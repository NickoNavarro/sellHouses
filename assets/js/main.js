/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SWIPER POPULAR ===============*/


/*=============== VALUE ACCORDION ===============*/

const accordionItems = document.querySelectorAll('.value__acordion-item')


accordionItems.forEach((item)=>{
  const acordionHeader = item.querySelector('.value__acordion-header')
  acordionHeader.addEventListener('click',()=>{

  
    toggle(item)
  })
})

const toggle = (item) =>{
  const acordionContent= item.querySelector('.value__acordion-content')

  if(item.classList.contains('acordion-open')){

    acordionContent.removeAttribute('style')
    item.classList.remove('acordion-open')
  }else{
    acordionContent.style.height = acordionContent.scrollHeight + 'px'

    item.classList.add('acordion-open')
  }

}
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
