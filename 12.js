const fs = require('fs');
const readline = require('readline');

let arr = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function заповнитиМасив() {
    let obj = {
        name: '',
        surname: '',
        birthday: '',
        mail: '',
    };

    rl.question('\x1b[32mВведіть ім\'я:\x1b[0m ', (rl1) => {
        obj.name = rl1;

        rl.question('\x1b[32mВведіть прізвище:\x1b[0m ', (rl2) => {
            obj.surname = rl2;

            rl.question('\x1b[32mВведіть день народження (рік-місяць-день):\x1b[0m ', (rl3) => {
                obj.birthday = rl3;

                rl.question('\x1b[32mВведіть електронну пошту:\x1b[0m ', (rl4) => {
                    obj.mail = rl4;
                    console.log('Дані збережено');
                    rl.close();
                    arr.push(obj);
                    fs.writeFileSync('person.txt', JSON.stringify(arr, null, 2)); 
                    вивестиІнформацію();
                });
            });
        });
    });
}

function вивестиІнформацію() {
    let текст = fs.readFileSync('person.txt', 'utf-8');

    try {
        arr = JSON.parse(текст);
    } catch (помилка) {
        console.error('Помилка парсингу JSON:', помилка.message);
        process.exit(1);
    }

    arr.forEach((особа, індекс) => {
        console.log(`${індекс + 1}. ${особа.name} ${особа.surname} ${особа.birthday} ${особа.mail}`);
    });
}

заповнитиМасив();
