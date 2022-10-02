window.addEventListener("load", () => {

    const colorItems = document.querySelectorAll('.color');
    colorItems.forEach( item => {
        item.addEventListener('click', function() {
            const idSelected = this.id;
            document.body.className = idSelected;
        })
    })

    const colorLinear = document.querySelectorAll('.theme');
    colorLinear.forEach( item => {
        item.addEventListener('click', function() {
            const idSelected = this.id;
            document.body.className = idSelected;
        })
    })

    const button = document.querySelector('.button');
    const staticPalette = document.querySelector('.container');
    const logoButton = document.querySelector('.logoButton');

    button.addEventListener('click', function(){
        staticPalette.classList.toggle('active');
        logoButton.classList.toggle('active');
    });
})
