let bg = document.getElementById('background');
for(let i=0;i<10*100;i++){
    bg.appendChild(document.createElement("div"));
}
let ab = document.getElementById('about_statement');
let ab_scroll_count = 0;
function ab_scroll(a){
    console.log(a);
    if(a == 'up'){
        if(ab_scroll_count <= 0){
            ab_scroll_count = 0;
        }
        else{
            ab_scroll_count--;
            ab_scroll_up(ab_scroll_count * 260);
        }
    }
    if(a == 'down'){
        if(ab_scroll_count >= 3){
            ab_scroll_count = 3;
        }
        else{
            ab_scroll_count++;
            ab_scroll_down(ab_scroll_count * 260);
        }
    }
}
function ab_scroll_up(n){
    // ab.scroll(0, 100);
    ab.scrollTo({
        top: n,
        left: 0,
        behavior: "smooth",
    });
}
function ab_scroll_down(n){
    ab.scrollTo({
        top: n,
        left: 0,
        behavior: "smooth",
    });
}
let ab_arrow = document.querySelector('.down_arrow');

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