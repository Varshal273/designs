let bg = document.getElementById('background');
for(let i=0;i<10*100;i++){
    bg.appendChild(document.createElement("div"));
}
// let hd = document.getElementById('header');
// let hd_str = [
//     {'str':'Welcome!'},
//     {'str':'Hello World!'},
//     {'str':'Web Designer'},
//     {'str':'Web Developer!'}
// ];
// let count = 0;
// setInterval(() => {
//     hd.children[0].innerText = hd_str[count].str;
//     count++;
//     if(count == hd_str.length){ count = 0;}
// }, 3000);