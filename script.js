// Code that changes the first word every 2 seconds

let changeWord = document.getElementById('changeWord');
const words = ['Novel', 'Junior', 'Neat', 'Novice', 'Next', 'New'];
let i = 0;
setInterval(() => {
    changeWord.innerHTML = words[i];
    if(i == (words.length-1)) {
        i = 0;
    } else if (i >= 0) {
        i++;
    }
}, 1500);
