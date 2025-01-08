// // 2-AMALIYOT
// // 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const person = prompt("Enter your name.");
// const age = +prompt("Enter your age.");

// let days = age * 365
// let minutes = days * 60
// alert(`Dear ${person}, you are ${age} years old. Birth year: ${2025 - age}, lived months: ${age * 12}, weeks: ${age * 52}, days: ${days}, hours: ${days * 24}, minutes: ${minutes}, seconds: ${minutes * 60}`)



// // 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const kimKerak = prompt("Kim kerak:").toLowerCase();
// const ismlar = ["Madina", "Mubina", "Muslima", "Maryam"];

// if (ismlar.includes(kimKerak)) {
//   alert(`${kimKerak} ismi bor😊`);
// } else {
//   alert(`${kimKerak} ismi yo'q🙁`);
// }

// // 3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const names = ['Akhror', 'Sardor', 'Doniyor'];
// for(let i = 0; i < names.length; i++){
//     let result = names[i]
//     console.log(`${result}bek`);
// }


// // 4 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const viloyatNomi = prompt("Viloyat nomini kiriting.")

// switch (viloyatNomi.toLowerCase()){
//     case "Andijon".toLowerCase():
//         alert("Andijon aholisi 3 420 000 kishini tashkil qiladi.")
//         break
//     case "Farg'ona".toLowerCase():
//         alert("Andijon aholisi 4 0123 000  kishini tashkil qiladi.")
//         break
//     case "Namangan".toLowerCase():
//         alert("Namangan aholisi 3,115,300  kishini tashkil qiladi.")
//         break
//     case "Samarqand".toLowerCase():
//         alert("Samarqand aholisi 4 275,300  kishini tashkil qiladi.")
//         break
//     case "Buxoro".toLowerCase():
//         alert("Buxoro aholisi 2 044 000  kishini tashkil qiladi.")
//         break
//     case "Xorazm".toLowerCase():
//         alert("Xorazm aholisi 1 995,600  kishini tashkil qiladi.")
//         break
//     case "Toshkent".toLowerCase():
//         alert("Toshkent aholisi 3 040,800  kishini tashkil qiladi.")
//         break
//     case "Navoiy".toLowerCase():
//         alert("Andijon aholisi 161 300  kishini tashkil qiladi.")
//         break
//     default:
//         alert(`Hozircha ba'zada ${viloyatNomi} viloyati mavjud emas :)`)
// }




// // 5 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const belgilar = prompt("Type here.....");
// let meyor = 15;

// if(belgilar.length < meyor){
//     alert(`Siz ${belgilar.length}ta belgi kiritdingiz. Yana ${meyor - belgilar.length}ta belgi kiritishingiz kerak!`)
// }else{
//     alert(`Siz ${meyor}ta belgi kiritishingiz kerak. Sizda belgilar soni ${belgilar.length - meyor}taga ko'p. Qisqartiring!`)
// }





// 3-AMALIYOT
// 1 =======================================================================
const myArray = [[false, true], [1,2], 99, "yaxshi"]
for(let i = 0; i < myArray.length; i++){
    if(typeof myArray[i] == "string") { 
        console.log((`String indexi: ${i}`))
    }
}

// 2 =======================================================================
const data = [[1,2,3], 'qizil', [4,5,6], true, false];
let newData = [];

data.forEach((i) => {
    const result = Array.isArray(i);
    if(result){
        i.forEach((num) => {
            newData.push(num)
        })
    }
})
console.log(newData);


// 3 ======================================================================
const checkData = [null, 'false', 0, 99, false, undefined, '', NaN, '0'];
const falseV = [];
// for(let i = 0; i < checkData.length; i++){
//     if(!checkData[i]){
//         falseV.push(checkData[i])
//         console.log(falseV);
//     }
// }


checkData.forEach((item) => {
    if(!item){
        falseV.push(item)
    }
})
console.log(falseV);




// 4 ======================================================================
let city = "samarqand";
let splitWord = city.split('').reverse()
let newWord = '';
for(let i = 0; i < splitWord.length; i++){
    newWord += splitWord[i]
}
console.log(newWord);




// 5 ======================================================================
const word = "AsSSalamu AlAyKUM YaxShimisiz";
const splitSentence = word.split(' ');
let newSentence = ''; 
splitSentence.forEach((item) => {
    const starter = item.charAt().toLowerCase();
    const body = item.slice(1).toUpperCase();

    newSentence += ' ' + starter + body;
})
console.log(newSentence.trim());























