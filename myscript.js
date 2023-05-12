const userName = prompt ('Insert your name');


const userSurname = prompt ('Insert your Surname');

let userFavColor = prompt ('Insert your favourite color');

let UserInfo = userName + userSurname + userFavColor + '23';

document.getElementById('name-surname-fav-color') .innerHTML = UserInfo;


