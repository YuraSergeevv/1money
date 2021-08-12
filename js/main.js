window.onload = function () {
    // document.addEventListener('click',eventClick)
    // function eventClick(e){
    //     const targetElement =e.target;
    //     console.log(e.target);
    //   if(targetElement.classList.contains('bills_block')) {
    //       targetElement.classList.toggle('hide');
    //   }
    // }
    let button = document.querySelector('.bills_block')
    button.addEventListener('click',function(e){
        button.querySelector('.bill_body').classList.toggle('hide');
    })
};

