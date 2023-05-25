function divider(inputInfo) { // получаем инфу
    inputInfo = inputInfo.toLowerCase(); // приводим всё к нижнему регистру для удобства
    let split = inputInfo.length;
    //console.log(split);
    let result = Array();

    for (let i = 0; i < split; i++) {
        if (inputInfo[i].length >=2) {
            inputInfo[i] = ' '
            //console.log('asd');
        } else {
            result.push(inputInfo[i])   
        }
    }
    return result // получаем массивиз строки опять же для удобства работы
}

let a = Array(`∀`, `₳`, `Ä`, `Ꭿ`, `₳`, `Ǻ`, `Å`, `À`, `Á`, `Â`, `Ã`, `ᗩ`, `@`, `Ⱥ`, `Ǟ`);
let b = Array(`Ᏸ`, `β`, `฿`, `ß`);
let c = Array(`ℭ`, 'Ç', `Ꮸ`, `₡`);
let d = Array(`Ɗ`, `Ď`, `Đ`);
let e = Array(`£`, `Ē`, `ξ`, `Ê`, `È`, `€`, `É`, `∑`, `Ế`, `Ề`, `Ể`, `Ễ`);
let f = Array(`ℱ`, `₣`, `ƒ`, `∮`, `Ḟ`, `ჶ`);
let g = Array(`Ꮹ`, `Ꮆ`, `Ǥ`, `₲`);
let h = Array(`ℍ`, `ℋ`, `ℌ`, `ዙ`, `Ĥ`, `Ħ`);
let i = Array(`ℐ`, `ℑ`, `Ï`);
let j = Array(`ჟ`, `Ĵ`);
let k = Array(`₭`, `Ꮶ`, `Ќ`, `Ķ`, `Ҝ`, `ﻸ`);
let l = Array(`ℒ`, `ℓ`, `Ŀ`, `£`, `λ`, `₤`, `Ł`, `Ꮭ`, `￡`, `Ꮑ`);
let m = Array(`ℳ`, `ʍ`, `Ḿ`, `爪`);
let n = Array(`ℕ`, `η`, `Ñ`, `Ŋ`, `Ń`, `ℵ`, `₦`);
let o = Array(`ტ`, `Ǿ`, `Θ`, `Ø`, `Ό`, `Ở`, `Ờ`, `Ớ`, `Ổ`);
let p = Array(`ℙ`, `℘`, `þ`, `尸`, `Ҏ`, `₱`);
let q = Array(`ℚ`, `Q`, `Q`);
let r = Array(`ℝ`, `ℜ`, `ℛ`, `℟`, `ჩ`, `Ꮢ`, `尺`);
let s = Array(`Ꮥ`, `Ṧ`, `ى`, `§`, `Ś`, `Ŝ`, `₰`, `∫`, `$`, `ֆ`);
let t = Array(`₸`, `†`, `T`, `Ţ`, `Ŧ`, `ィ`, `干`, `Ṫ`, `テ`, `₮`);
let u = Array(`∪`, `Ũ`, `⋒`, `Ủ`, `Ừ`, `Ử`, `Ữ`, `Ự`, `Џ`);
let v = Array(`∨`, `√`, `Ꮙ`, `Ṽ`, `\/`, `℣`);
let w = Array(`₩`, `Ẃ`, `Ẁ`, `ώ`, `ω`, `Ŵ`, `Ꮤ`, `Ꮃ`, `ฬ`, `Ẅ`, `ѡ`, `Ꮚ`, `Ꮗ`, `ผ`, `ฝ`, `พ`, `ฟ`);
let x = Array(`χ`, `ჯ`, `Ẍ`, `ẍ`, `ᶍ`);
let y = Array(`ɣ`, `Ꭹ`, `Ꮍ`, `Ẏ`, `ẏ`, `ϒ`, `ɤ`, `￥`, `り`);
let z = Array(`ℤ`, `ℨ`, `ჳ`, `乙`, `Ẑ`, `ẑ`, `ɀ`, `Ꮓ`);

let а = Array(`Ꭿ`, `₳`, `Ǻ`, `Å`, `À`, `Á`, `Â`, `Ã`, `ᗩ`, `@`, `Ⱥ`, `Ǟ`);
let б = Array(`Ҕ`, `ҕ`, `Ϭ`, `চ`, `ঢ়`, `ƃ`, `ɓ`);
let в = Array(`ℬ` ,`Ᏸ`, `β`, `฿`, `ß`, `ᗷ`, `ᗽ`, `ᗾ`, `ᗿ`, `Ɓ`, `Ᏸ`, `ᗸ`, `ᗹ`, `ᛔ`);
let г = Array(`୮`, `ℾ`);
let д = Array(`ℊ`, `∂`, `D`, `Đ`);
let е = Array(`ℰ`, `ໂ`, `६`, `Ē`, `Ê`, `È`, `€`, `É`, `Ế`, `Ề`, `Ể`, `Ễ`, `ع`, `Є`);
let ё = Array(`ℰ`, `ໂ`, `६`, `Ē`, `Ê`, `È`, `€`, `É`, `Ế`, `Ề`, `Ể`, `Ễ`, `ع`, `Є`);
let ж = Array(`ᛤ`, `♅`, `Җ`);
let з = Array(`Յ`, `ℨ`, `ჳ`);
let и = Array(`น`, `ự`);
let й = Array(`Ũ`, `Ӥ`, `Ҋ`);
let к = Array(`ᛕ`, `₭`, `Ꮶ`, `Ќ`, `Ķ`, `Ҝ`);
let л = Array(`ለ`, `ሉ`, `ሊ`, `ሌ`, `ል`, `ሎ`, `Ꮧ`, `Ꮑ`);
let м = Array(`ጠ`, `ᛖ`, `ℳ`, `ᗰ`, `ᙢ`, `爪`);
let н = Array(`ਮ`, `ዘ`, `ዙ`, `ዚ`, `ዛ`, `ዜ`, `ዝ`, `ዞ`, `ዟ`, `ℍ`, `ℋ`, `ℎ`, `ℌ`, `ℏ`, `ዙ`, `Ꮵ`, `Ĥ`, `Ħ`, `Ή`, `Ḩ`, `Ӈ` );
let о = Array(`ტ`, `Ǿ`, `Θ`, `Ø`, `Ό`, `Ở`, `Ờ`, `Ớ`, `Ổ`);
let п = Array(`Ո`, `ग`, `ກ`, `⋒`, `Ҧ`,);
let р = Array(`ℙ`, `℘`, `þ`, `尸`, `Ҏ`, `₱`);
let с = Array(`ℭ`, 'Ç', `Ꮸ`, `₡`);
let т = Array(`₸`, `†`, `T`, `Ţ`, `Ŧ`, `ィ`, `干`, `Ṫ`, `テ`, `₮`);
let у = Array(`ɣ`, `Ꭹ`, `Ꮍ`, `Ẏ`, `ẏ`, `ϒ`, `ɤ`, `￥`, `り`);
let ф = Array(`Փ`, `փ`, `Ⴔ`, `ቁ`, `ቂ`, `ቃ`, `ቄ`, `ቅ`, `ቆ`, `ቇ`, `ቈ`, `ᛄ`);
let х = Array(`χ`, `ჯ`, `Ẍ`, `ẍ`, `ᶍ`);
let ц = Array(`Ա`, `ų`);
let ч = Array(`Կ`, `կ`, `੫`, `Ⴁ`, `Ӵ`, `4`);
let ш = Array(`ש`, `ᗯ`, `ᙡ`, `ω`, `₩`, `Ẃ`, `Ẁ`, `ώ`, `ω`, `Ŵ`, `Ꮤ`, `Ꮃ`, `ฬ`, `Ẅ`, `ѡ`, `Ꮚ`, `Ꮗ`, `ผ`, `ฝ`, `พ`, `ฟ`);
let щ = Array(`պ`, `ખ`);
let ъ = Array(`Ѣ`, `ѣ`, `৮`);
let ы = Array(`Ӹ`, `Ы`);
let ь = Array(`b`, `Ь`, `|o`);
let э = Array(`∋`, `∌`, `∍`, `ヨ`, `Ӭ`, `ӭ`, `℈`);
let ю = Array(`ਠ`, `|-0`, `Ю`);
let я = Array(`R`, `Я`, `/|`, `⋌`);

let num = Array(`.`, `,`, `:`, `;`, `/`, `\\`, `!`, `@`, `"`, `'`, `#`, `$`, `%`, ` `, `^`, `&`, `?`, `*`, `(`, `)`, `-`, `_`, `+`, `=`, `|`, `[`, `[`, `{`, `}`, `\``, `~`, `№`, `<`, `>`, ` `)

function load(arr) { // Функция "заряжания" массива
    for (let i = 0; i < 10; i ++) {
        arr.push(String(i));
    }
}

load(num); // Заряжаем массивв проверки на число

// console.log(eval(num));

function randomElem(array) {
    if ( array != undefined) {
        result = array[Math.floor(Math.random() * (array.length - 1))]
        //console.log(result);
        return result   
    }
}

function check (array, string, loop) {
    if (!contains(array, string[loop])) {
        try {
            eval(string[loop])
        } catch(err) {
            if (err != null) {
                return false
            } else {
                return true
            }
        }
    }
}

function contains(arr, elem) { // проверка на нахождение даного элемента в массиве
    return arr.indexOf(elem) != -1;
}

function generateword(input) {
    let leak = divider(input);
    console.log(leak);
    let afterEff = "";

    for (let loop = 0; loop < leak.length; loop ++) { // легкая логика для генератора
        if (contains(num, leak[loop]) || check(num, leak, loop) == false) {
            //console.log(leak[loop], 'worj1');]
            afterEff += leak[loop];
            //console.log(loop);
        } else {
            if (randomElem(eval(leak[loop])) == undefined) {
                afterEff += ''
            } else {
                afterEff += randomElem(eval(leak[loop]))                
            }

            //console.log(leak[loop], 'work2');
            //console.log(loop);
        }
    }
    console.log(afterEff, afterEff.length,);
    return afterEff
}

let events = {
    form: document.getElementById('inp'),
    btn: document.getElementById('button'),
    text: document.getElementById('text')
}

// console.log(events.btn.innerHTML);

events.btn.addEventListener('click', () => {
    // console.log('btn clicked!');
    let val = events.form.value;
    if (val == '') {
        events.text.innerHTML = 'Вы ничего не ввели!';
    } else {
        val = generateword(val);
        events.text.innerHTML = val;        
    }

})

document.addEventListener('keypress', (event) => {
    let keyCode = event.keyCode ? event.keyCode : event.which;
    if (keyCode == 13) {
        events.btn.click()
    }
})
