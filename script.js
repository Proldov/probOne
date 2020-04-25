document.querySelector('.block-1').addEventListener('touchstart', myTouch);
function myTouch (e) {
    console.log(e)
    console.log('touch');
    document.querySelector('.out-1').innerHTML = 'hello';
    document.querySelector('.out-2').innerHTML = e.touches.length;

}