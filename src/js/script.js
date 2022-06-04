'use strict'

document.addEventListener('click', e => {
    let target = e.target

    if(target.closest('.mobile-plus')){
        target.closest('.mobile-item').classList.add('mobile-item-active')
    }

    if(target.closest('.back-side')){
        target.closest('.mobile-item').classList.remove('mobile-item-active')
    }

})