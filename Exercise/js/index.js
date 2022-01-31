console.log('We are in index.js');

let a = document.links[2].href.toString();

if (a.includes('com') == true) {
    document.getElementById('fid').innerHTML = `<br>Yay...Link Found
    <h3>${a}</h3>`;
} else {
    document.getElementById('fid').innerHTML = 'Not Found!'
}