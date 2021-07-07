const cars = ['Audi','Opel', 'Fiat'];
console.log(typeof cars);
console.log(cars);

const numbers1 = new Array(2,10);
const numbers2 = new Array(10); // uzunluğu 10 olan boş bir array verir
console.log(numbers1);
console.log(numbers2);


const cars2 = ['Audi','Opel', 'Fiat'];
cars2[2] = 'BMW'
console.log(cars2);


// .length property --> uzunluğunu verir

console.log(cars2.length);

// concat() method --> arrayleri birleştirir.

console.log(cars.concat(cars2,'Mercedes',2021));
console.log(cars+cars2); //string olarak işlem yapıyor



//sort() method---> herşeyi string olarak değerlendirir örn: "21">"133"*****çözüm yolu aşağıda


console.log([1,52,21,13,255].sort());
console.log([1,52,21,13,255].sort(function(a,b){return a-b}));//sayılarla ilgili sıkıntıyı çözüyor

//push()--> arrayin sonuna ekleme yapıyor
//pop()--> arrayin son elemanını siliyor.Parametre almaz

console.log(cars.push('Renault'));//********** */
console.log(cars);

console.log(cars.pop());//******** */
console.log(cars);



// shift() --> ilk elemanı silip, sildiği elemanı döndürür

console.log(cars.shift());
console.log(cars);

//unshift() --> en başa ekler.

console.log(cars.unshift('VW'));
console.log(cars);


/********************************************* */
const cars3 = ['Audi','Opel', 'Fiat'];
cars3[6] = 'VW';
console.log(cars3);
console.log(cars3[3]);

/********************************************* */

// splice() method --> arraye yeni elemanlar eklemek yada çıkarmak için kullanılır; sildiklerini döndürür

console.log(cars);
console.log(cars.splice(1,1,'VW'));
console.log(cars);
console.log(cars.splice(1,0,'BMW'));
console.log(cars);