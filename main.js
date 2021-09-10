const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

function randomHex(){
    let color = '#';
    for(i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
    document.querySelector('h1').innerHTML = color;
}
