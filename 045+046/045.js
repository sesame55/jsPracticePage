//45 : 使用 JavaScript 語法，操控點擊後，能夠轉址到對應網站去
const google = document.querySelector('.google');
const yahoo = document.querySelector('.yahoo');

let linkGoogle = () => {
    location.href = 'https://www.google.com.tw/';
}
let linkYahoo = () => {
    location.href = 'https://tw.yahoo.com/';
}

google.addEventListener('click', linkGoogle);
yahoo.addEventListener('click', linkYahoo);


//46-1 : 部落格推薦連結，請抓取 data-id 的值後進行轉址
const hexSchool = 'https://www.hexschool.com/'; //共通的網址
const Tom = document.querySelector('.google-Tom');
const John = document.querySelector('.yahoo-John');

// let TomId = Tom.getAttribute('data-id'); //抓data-id的值
// let JohnId = John.getAttribute('data-id');

//抓data-id使用方訊改寫
let getDataId = data => {
    return data.getAttribute('data-id');
}

let linkTom = () => {
    // location.href = `${hexSchool}?recommend=${TomId}`;
    location.href = `${hexSchool}?recommend=${getDataId(Tom)}`;
};
Tom.addEventListener('click', linkTom);

let linkJohn = () => {
    // location.href = `${hexSchool}?recommend=${JohnId}`;
    location.href = `${hexSchool}?recommend=${getDataId(John)}`;
};
John.addEventListener('click', linkJohn);


//46-2 :網址規則是https://www.hexschool.com/?recommend="值"，該如何取出 recommend 的值？
//#1
const url = 'https://www.hexschool.com/?recommend=tom';
const getValue = document.querySelector('.getValue');
const show = document.querySelector('.show'); //顯示位置
show.textContent = `目前的網址路徑：${location.pathname}`;

// let urlValue = () => { //無參數
//     let str = '';
//     str = `${url.split('=')[1]}`;
//     // console.log(str);
//     show.textContent=str;
// }
// getValue.addEventListener('click', urlValue);

let urlValue = data => { //使用參數
    let str = '';
    str = `${data.split('=')[1]}`;
    show.textContent = str;
}
getValue.addEventListener('click', function () { //要包起來否則會直接執行
    urlValue(url);
});

//#2
const addValue = document.querySelector('.addValue');
const getValueTwo = document.querySelector('.getValueTwo');

let add = () => {
    location.href = location.pathname + `?recommend=Sesame`;
    //location.href直接+=`?recommend=Sesame`會出現無限增加
    //目前的理解是把網址路徑(location.pathname)加上指定的字串放到(location.href)，而前方的網域似乎要看開啟環境
    //參考資料https://erica1123.github.io/JS/day44-46.html
}
addValue.addEventListener('click',add);

let showValue = ()=>{
    let str='';
    str = location.search.split('=')[1];
    //用location.search取得網址參數，亦即?後的值，再用split分割
    show.textContent =str;
}
getValueTwo.addEventListener('click',showValue);


