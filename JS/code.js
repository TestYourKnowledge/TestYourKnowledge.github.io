function getRandom(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
};
var space = "&nbsp&nbsp&nbsp&nbsp";
var x = new Array();
var n1;
var n2;
var n3;
var v;
var t;
var i;
var y;
var s;



var et = document.getElementById("ET1");
var ans1 = 0;
var a = getRandom(1,4);
do {
	n1 = getRandom(128,255);
	n2 = getRandom(128,255);
} while (n1<n2)
switch (a) {
	case 1:
		et.innerHTML = space + "Сколько единиц в двоичной записи десятичного числа " + n1 + "?";
		n1 = n1.toString(2);
		for (i=0; i<=n1.length; i++) {
			if (n1[i] == 1) {
				ans1 = ans1 + 1;
			}
		}
		break;
	case 2:
		et.innerHTML = space + "Вычислите разность чисел х и у при x = " + n1.toString(16) + "<sub>16</sub>, у = " + n2.toString(2) + "<sub>2</sub>. Результат представьте в десятичной системе счисления.";
		ans1 = n1 - n2;
		break;
	case 3:
		et.innerHTML = space + "Сколько существует натуральных чисел x, для которых выполнено неравенство " + n2.toString(2) + "<sub>2</sub> ≤ x ≤ " + n1.toString(16) + "<sub>16</sub>? В ответе укажите только количество чисел, сами числа писать не нужно.";
		ans1 = n1 - n2 + 1;
		break;
}




et = document.getElementById("ET5");
a = getRandom(1,4);
var ans5;
n1 = getRandom(0,2);
n2 = getRandom(0,2);
if (n1 == 0) {
	n2 = "1" + n2.toString(2);
}
else {
	n2 = "0" + n2.toString(2);
}
switch (a) {
	case 1:
		et.innerHTML = space + "Для кодирования некоторой последовательности, состоящей из букв К, Л, М, Н решили использовать неравномерный двоичный код, удовлетворяющий условию Фано. Для буквы Н использовали кодовое слово " + n1 + ", для буквы К — кодовое слово " + n2 + ". Какова наименьшая возможная суммарная длина всех четырёх кодовых слов?<br><br><strong>Примечание:</strong><br><br>" + space + "Условие Фано означает, что никакое кодовое слово не является началом другого кодового слова. Это обеспечивает возможность однозначной расшифровки закодированных сообщений.";
		ans5 = 9;
		break;
	case 2:
		et.innerHTML = space + "Для кодирования некоторой последовательности, состоящей из букв А, Б, В, Г, Д решили использовать неравномерный двоичный код, удовлетворяющий условию Фано. Для буквы В использовали кодовое слово " + n1 + ", для буквы Д — кодовое слово " + n2 + ". Какова наименьшая возможная суммарная длина всех пяти кодовых слов?<br><br><strong>Примечание:</strong><br><br>" + space + "Условие Фано означает, что никакое кодовое слово не является началом другого кодового слова. Это обеспечивает возможность однозначной расшифровки закодированных сообщений.";
		ans5 = 14;
		break;
	case 3:
		et.innerHTML = space + "Для кодирования некоторой последовательности, состоящей из букв О, П, Р, С, Т, У решили использовать неравномерный двоичный код, удовлетворяющий условию Фано. Для буквы Р использовали кодовое слово " + n1 + ", для буквы У — кодовое слово " + n2 + ". Какова наименьшая возможная суммарная длина всех шести кодовых слов?<br><br><strong>Примечание:</strong><br><br>" + space + "Условие Фано означает, что никакое кодовое слово не является началом другого кодового слова. Это обеспечивает возможность однозначной расшифровки закодированных сообщений.";
		ans5 = 19;
		break;
}



et = document.getElementById("ET6");
var ans6;
//a = getRandom(1,4);
a = 1;
switch (a) {
	case 1:
		t = getRandom(5,8);
		s = "1";
		for (i=0;i<t;i++) {
			s += "0"
		}
		if (getRandom(0,2) == 0) {
			if (getRandom(0,4) == 0) {
				n1 = getRandom(1,t-1);
				y = s;
				s = "";
				for (i=0;i<y.length;i++) {
					if (i == n1) {
						s += "1"
					}
					else {
						s += y[i];
					}
				}
			}
			else {
				n1 = getRandom(3,t-1);
				y = s;
				s = "";
				for (i=0;i<y.length;i++) {
					if ((i == n1)||(i == 1)||(i == 2)) {
						s += "1"
					}
					else {
						s += y[i];
					}
				}
			}
		}
		else {
			y = s;
			s = "";
			for (i=0;i<y.length;i++) {
				if (i == t-1) {
					s += "1";
				}
				else {
					s += y[i];
				}
			}
			if (t != 7) {
				n1 = getRandom(3,t-1);
				y = s;
				s = "";
				for (i=0;i<y.length;i++) {
					if ((i == n1)||(i == 1)) {
						s += "1"
					}
					else {
						s += y[i];
					}
				}
			}
			else {
				n1 = getRandom(4,6);
				y = s;
				s = "";
				for (i=0;i<y.length;i++) {
					if ((i == n1)||(i == 1)||(i == 2)||(i == 3)) {
						s += "1"
					}
					else {
						s += y[i];
					}
				}
			}
		}
		ans6 = parseInt(s,2);
		do {
			s = parseInt(s,2);
			s -= 1;
			s = s.toString(2);
			v = 0;
			for (y=0;y<t-1;y++) {
				v += parseInt(s[y],2);
			}
			if ((s[t-1] == 1)&&(s[t] == 0)) {
				if (v%2 != 0) {
					break;
				}
			}
			else if ((s[t-1] == 0)&&(s[t] == 0)) {
				if (v%2 == 0) {
					break;
				}
			}
		} while (1 == 1)
		et.innerHTML = space + "На вход алгоритма подаётся натуральное число N. Алгоритм строит по нему новое число R следующим образом.<br>" + space + "1) Строится двоичная запись числа N.<br>" + space + "2) К этой записи дописываются справа ещё два разряда по следующему правилу:<br>" + space + space + "а) складываются все цифры двоичной записи, и остаток от деления суммы на 2 дописывается в конец числа (справа). Например, запись 11100 преобразуется в запись 111001;<br>" + space + space + "б) над этой записью производятся те же действия — справа дописывается остаток от деления суммы цифр на 2.<br>" + space + "Полученная таким образом запись (в ней на два разряда больше, чем в записи исходного числа N) является двоичной записью искомого числа R.<br>" + space + "Укажите минимальное число R, которое превышает " + parseInt(s,2) + " и может являться результатом работы алгоритма. В ответе это число запишите в десятичной системе.";
		break;
	case 2:
		
		break;
	case 3:

		break;
}



/*et = document.getElementById("ET7");
var ans7;
var e = getRandom(1,5);
a = getRandom(1,5);
var arr = [[1,2,3,4],[10,20,30,40],[100,200,300,400],[1000,2000,3000,4000],[10000,20000,30000,40000]];
if (e-a<0) {
	
}
else if (e-a == 0){

}
else {
	
}*/



et = document.getElementById("ET8");
et.innerHTML = space + "Запишите число, которое будет напечатано в результате выполнения следующей программы. Для Вашего удобства программа представлена на пяти языках программирования.";
var ans8;
a = getRandom(1,3);
t = 0;
switch (a) {
	case 1:
		y = getRandom(23,41)*5;
		s = getRandom(7,10)*10;
		v = 0;
		if (getRandom(0,2) == 0) {
			do {
				n1 = getRandom(5,21);
				n2 = getRandom(5,21);
				t += 1;
				if (t>30) {
					et.innerHTML = "Всё полетело1"
					break;
				}
			} while ((n1-n2)<5);
			ans8 = document.getElementById("Python8");
			ans8.innerHTML = "s = " + s + "<br>n = 0" + "<br>while s - n < " + y + ":<br>" + space + "s = s + " + n1 + "<br>" + space + "n = n + " + n2 + "<br>print(n)";
			ans8 = document.getElementById("Pascal8");
			ans8.innerHTML = "var s, n: integer;<br><br>" + "begin<br>" + "s := " + s + ";<br>n := 0;<br>" + "while s - n < " + y + " do<br>" + space + "begin<br>" + space + space + "s := s + " + n1 + ";<br>" + space + space + "n := n + " + n2 + ";<br>" + space + "end;<br>" + "writeln(n);<br>end.";
			while ((s - v)<y) {
				s += n1;
				v += n2;
				if (s>1000) {
					break;
				}
			}
			ans8 = v;
		}
		else {
			n1 = getRandom(5,16);
			n2 = getRandom(5,16);
			ans8 = document.getElementById("Python8");
			ans8.innerHTML = "s = " + s + "<br>" + "n = 0" + "<br>" + "while s + n < " + y + ":<br>" + space + "s = s + " + n1 + "<br>" + space + "n = n + " + n2 + "<br>" + "print(n)";
			ans8 = document.getElementById("Pascal8");
			ans8.innerHTML = "var s, n: integer;<br><br>" + "begin<br>" + "s := " + s + ";<br>n := 0;<br>" + "while s + n < " + y + " do<br>" + space + "begin<br>" + space + space + "s := s + " + n1 + ";<br>" + space + space + "n := n + " + n2 + ";<br>" + space + "end;<br>" + "writeln(n);<br>end.";
			while ((s + v)<y) {
				s += n1;
				v += n2;
				if (s>1000) {
					break;
				}
			}
			ans8 = v;
		}
		break;
	case 2:
		y = getRandom(7,10)*5;
		s = getRandom(23,41)*10;
		v = 0;
		if (getRandom(0,2) == 0) {
			do {
				n1 = getRandom(2,7);
				n2 = getRandom(7,21);
				t += 1;
				if (t>30) {
					et.innerHTML = "Всё полетело1"
					break;
				}
			} while ((n2-n1)<5);
			ans8 = document.getElementById("Python8");
			ans8.innerHTML = "s = " + s + "<br>n = 0" + "<br>while s - n > " + y + ":<br>" + space + "s = s - " + n1 + "<br>" + space + "n = n + " + n2 + "<br>print(n)";
			ans8 = document.getElementById("Pascal8");
			ans8.innerHTML = "var s, n: integer;<br><br>" + "begin<br>" + "s := " + s + ";<br>n := 0;<br>" + "while s - n > " + y + " do<br>" + space + "begin<br>" + space + space + "s := s - " + n1 + ";<br>" + space + space + "n := n + " + n2 + ";<br>" + space + "end;<br>" + "writeln(n);<br>end.";
			while ((s - v)>y) {
				s -= n1;
				v += n2;
				if (v>1000) {
					break;
				}
			}
			ans8 = v;
		}
		else {
			do {
				n1 = getRandom(2,7);
				n2 = getRandom(7,21);
				t += 1;
				if (t>30) {
					et.innerHTML = "Всё полетело1"
					break;
				}
			} while ((n2-n1)<5);
			ans8 = document.getElementById("Python8");
			ans8.innerHTML = "s = " + s + "<br>" + "n = 0" + "<br>" + "while s + n > " + y + ":<br>" + space + "s = s - " + n1 + "<br>" + space + "n = n + " + n2 + "<br>" + "print(n)";
			ans8 = document.getElementById("Pascal8");
			ans8.innerHTML = "var s, n: integer;<br><br>" + "begin<br>" + "s := " + s + ";<br>n := 0;<br>" + "while s + n > " + y + " do<br>" + space + "begin<br>" + space + space + "s := s - " + n1 + ";<br>" + space + space + "n := n + " + n2 + ";<br>" + space + "end;<br>" + "writeln(n);<br>end.";
			while ((s + v)>y) {
				s -= n1;
				v += n2;
				if (v>1000) {
					break;
				}
			}
			ans8 = v;
		}
		break;
}



et = document.getElementById("ET9");
var ans9;
//a = getRandom(1,5);
a = 1;
switch (a) {
	case 1:
		i = getRandom(1,3)*2;
		n1 = getRandom(1,9);
		v = getRandom(1,9)*16;
		n2 = getRandom(20,501);
		ans9 = i*n1*n2*v*1000/(1024*1024);
		ans9 = Math.round(ans9);
		t = ans9*1024*1024/(i*n1*v*1000);
		t = Math.round(t);
		if (i == 2) {
			i = "двухканальная";
		}
		else {
			i = "четырехканальная";
		}
		n2 = getRandom(1,3);
		switch (n2) {
			case 1:
				et.innerHTML = space + "Производится " + i + " звукозапись с частотой дискретизации " + v + " кГц и " + n1*8 + "-битным разрешением. Запись длится " + t + " секунд, её результаты записываются в файл, сжатие данных не производится. Определите приблизительно размер полученного файла (в Мбайт). В качестве ответа укажите ближайшее к размеру файла целое число.";
				break;
			case 2:
				et.innerHTML = space + "Производилась " + i + " звукозапись с частотой дискретизации " + v + " кГц и " + n1*8 + "-битным разрешением. В результате был получен файл размером " + ans9 + " Мбайт, сжатие данных не производилось. Определите приблизительно, сколько времени (в секундах) проводилась запись. В качестве ответа укажите ближайшее к времени записи целое число.";
				ans9 = t;
				break;
		}
		break;
	case 2:
		break;
	case 3:
		break;
	case 4:
		break;
}



et = document.getElementById("ET10");
var ans10 = "";
a = 1;
//a = getRandom(1,3);
switch (a) {
	case 1:
		i = getRandom(4,7);
		n1 = getRandom(4,6);
		v = getRandom(50,200) - 1;
		y = v;
		s = "ЛМНРТ";
		let f = "";
		let m;
		let b;
		let s2 = "";
		for (t=0;t<n1;t++) {
			ans10 += s[t] + ", ";
		}
		while (v>0) {
			b = v%n1;
			m = s[b+1];
			v = (v - b)/n1;
			f += m;
		}
		while (f.length<i) {
			f += s[1];
		}
		while (s2.length<i-1) {
			s2 += s[0];
		}
		et.innerHTML += "Все " + i + "-буквенные слова, составленные из букв " + ans10 + " записаны в алфавитном порядке. Вот начало списка:<br>";
		et.innerHTML += "1. " + s2 + "Л<br>";
		et.innerHTML += "2. " + s2 + "М<br>";
      	et.innerHTML += "3. " + s2 + "Н<br>";
     	et.innerHTML += "4. " + s2 + "Р<br>";
     	et.innerHTML += "……<br>";
     	y++;
     	et.innerHTML += "Запишите слово, которое стоит на " + y + "-м месте от начала списка.";
     	ans10 = f;
		break;
	case 2:

		break;
}



et = document.getElementById("ET11");
var ans11;
a = getRandom(1,4);
i = getRandom(5,9);
n1 = getRandom(1,4);
n2 = getRandom(1,4);
x = new Array();
function ex111 (e1) {
	x.push(e1);
	if (e1<i) {
		ex111(e1+n1);
		ex111(e1+n2);
	}
}
function ex112 (e1) {
	x.push(e1);
	if (e1>0) {
		ex112(e1-n1);
		ex112(e1-n2);
	}
}
function ex113 (e1) {
	if (e1>2) {
		x.push(e1);
		ex113(e1-n1);
		ex113(e1-n2);
	}
}
switch (a) {
	case 1:
		v = getRandom(1,4);
		ex111(v);
		ans11 = document.getElementById("Python11");
		ans11.innerHTML = "def F(n):<br>" + space + "print(n)<br>" + space + "if n<" + i + ":<br>" + space + space + "F(n + " + n1 + ")<br>" + space + space + "F(n + " + n2 + ")";
		ans11 = document.getElementById("Pascal11");
		ans11.innerHTML = "procedure F(n: integer);<br>" + space + "begin<br>" + space + space + "writeln(n);<br>" + space + space + "if n < " + i + " then<br>" + space + space + space + "begin<br>" + space + space + space + space + "F(n + " + n1 + ");<br>" + space + space + space + space + "F(n + " + n2 + ")<br>" + space + space + space + "end<br>" + space + "end";
		break;
	case 2:
		v = i;
		ex112(v);
		ans11 = document.getElementById("Python11");
		ans11.innerHTML = "def F(n):<br>" + space + "print(n)<br>" + space + "if n>0:<br>" + space + space + "F(n - " + n1 + ")<br>" + space + space + "F(n - " + n2 + ")";
		ans11 = document.getElementById("Pascal11");
		ans11.innerHTML = "procedure F(n: integer);<br>" + space + "begin<br>" + space + space + "writeln(n);<br>" + space + space + "if n > 0 then<br>" + space + space + space + "begin<br>" + space + space + space + space + "F(n - " + n1 + ");<br>" + space + space + space + space + "F(n - " + n2 + ")<br>" + space + space + space + "end<br>" + space + "end";
		break;
	case 3:
		v = i;
		ex113(v);
		ans11 = document.getElementById("Python11");
		ans11.innerHTML = "def F(n):<br>" + space + "if n>2:<br>" + space + space + "print(n)<br>" + space + space + "F(n - " + n1 + ")<br>" + space + space + "F(n - " + n2 + ")";
		ans11 = document.getElementById("Pascal11");
		ans11.innerHTML = "procedure F(n: integer);<br>" + space + "begin<br>" + space + space + "if n > 2 then<br>" + space + space + space + "begin<br>" + space + space + space + space + "writeln(n);<br>" + space + space + space + space + "F(n - " + n1 + ");<br>" + space + space + space + space + "F(n - " + n2 + ")<br>" + space + space + space + "end<br>" + space + "end";
		break;
}
t = getRandom(1,3);
if (t == 1) {
	et.innerHTML = space + "Чему равна сумма напечатанных на экране чисел при выполнении вызова F(" + v + ")?";
	ans11 = 0;
	for (i=0;i<x.length;i++) {
		ans11 += x[i];
	}
}
else {
	et.innerHTML = space + "Что выведет программа при вызове F(" + v + ")? В ответе запишите последовательность выведенных цифр слитно (без пробелов).";
	ans11 = "";
	for (i=0;i<x.length;i++) {
		ans11 += x[i].toString();
	}
}



et = document.getElementById("ET12");
et.innerHTML = space + "В терминологии сетей TCP/IP маской сети называется 32-разрядная двоичная последовательность, определяющая, какая часть IP-адреса узла сети относится к адресу сети, а какая – к адресу самого узла в этой сети. При этом в маске сначала (в старших разрядах) стоят единицы, а затем с некоторого места нули.<br>" + space + "Адрес сети получается в результате применения поразрядной конъюнкции к заданному IP-адресу узла и маске. Обычно маска записывается по тем же правилам, что и IP-адрес – в виде четырёх байтов, причём каждый байт записывается в виде десятичного числа.<br>";
var ans12 = "";
a = getRandom(1,3);
i = getRandom(2,7);
do{
	n1 = getRandom(111,243);
	n2 = getRandom(30,150);
} while (n1<=n2);
v = n1.toString() + "." + n2.toString() + ".";
do{
	n1 = getRandom(111,243);
	n2 = getRandom(111,243);
} while (n1==n2);
n1 = n1.toString(2);
n2 = n2.toString(2);
for (t=0;t<=i;t++) {
	n2[t]=n1[t];
}
n2 = parseInt(n2,2);
n1 = parseInt(n1,2);
for (t=0;t<=7;t++) {
	if (t<=i) {
	 	ans12 += "1";
	}
	else {
	 	ans12 += "0";
	}
}
ans12 = parseInt(ans12,2);
switch (a) {
	case 1:
		et.innerHTML += space + "Для узла с IP-адресом " + v + n1 + "." + getRandom(111,200) + ". адрес сети равен " + v + n2 + ".0. Чему равен третий слева байт маски? Ответ запишите в виде десятичного числа.";
		break;
	case 2:
		et.innerHTML += space + "Для узла с IP-адресом " + v + n1 + "." + getRandom(111,200) + ". маска равна 255.255." + ans12 + ".0. Чему равен максимально возможный третий слева байт адреса сети? Ответ запишите в виде десятичного числа.";
		ans12 = "";
		n1 = n1.toString(2);
		for (t=0;t<=7;t++) {
			if (t<=i) {
				ans12 += n1[t];
			}
			else {
				ans12 += "1";
			}
		}
		ans12 = parseInt(ans12,2);
		break;
}


et = document.getElementById("ET13");
var ans13 = "";
a = getRandom(10,41);
n1 = getRandom(5,11);
n2 = getRandom(0,2)*10;
i = n1 + n2;
t = 0;
x = "АБВГДЕЖЗИК";
for (v=0;v<n1;v++) {
	ans13 += x[v] + ", ";
	//ans13 += x[v+1];
}
while (i>0) {
	i = (i-i%2)/2;
	t++;
}
y = getRandom(1,11)*8;
n = y*t*a/8;
n = Math.floor(n);
et. innerHTML = space + "При регистрации в компьютерной системе каждому пользователю выдаётся пароль, состоящий из " + a + " символов и содержащий только символы " + ans13;
if (n2==10) {
	et.innerHTML += " и все цифры десятичной системы исчисления";
}
et.innerHTML += ". Каждый такой пароль в компьютерной программе записывается минимально возможным и одинаковым целым количеством байт, при этом используют посимвольное кодирование и все символы кодируются одинаковым и минимально возможным количеством бит.<br>";
et.innerHTML += "Определите, сколько байт необходимо для хранения " + y + " паролей.";
ans13 = n;



/*et = document.getElementById("ET15");
var ans15;*/



et = document.getElementById("ET16");
var ans16;
a = getRandom(1,3);
x = [["единиц","двоичной"],["двоек","троичной"],["троек","четверичной"],["четвёрок","пятеричной"],["пятёрок","шестеричной"],["шестёрок","семеричной"]];
switch (a) {
	case 1:
		n1 = getRandom(101,411)*10;
		n2 = getRandom(2001,2020);
		n3 = getRandom(2,6);
		s = getRandom(2,8);
		ans16 = 1 + n2 - n3;
		n3 = Math.pow(s,n3);
		et.innerHTML = "Сколько " + x[s-2][0] + " содержится в " + x[s-2][1] + " записи значения выражения: " + s*s + "<sup>" + n1 + "</sup> + " + s + "<sup>" + n2 + "</sup> - " + n3 +"?";
		break;
	case 2:
		s = getRandom(2,9);
		do {
			n1 = getRandom(4,7);
			n2 = getRandom(6,12);
		} while (!(n1*3!=n2*2));
		do {
			n3 = getRandom(12,17);
		} while (!((n1*3!=n3)&&(n2*2!=n3)));
		n1 = n1*3;
		n2 = n2*2;
		if (n1>n2) {
			if (n1>n3) {
				y = n1;
			} else {
				y = n3;
			}
		} else {
			if (n2>n3) {
				y = n2;
			} else {
				y = n3;
			}
		};
		ans16 = y - 2;
		et.innerHTML = "Значение арифметического выражения: <br><br>" + space + space + space + Math.pow(s,3) + "<sup>" + n1/3 + "</sup> + " + Math.pow(s,2) + "<sup>" + n2/2 + "</sup> + " + s + "<sup>" + n3 + "</sup>" + "<br><br> записали в системе счисления с основанием " + s + ". Сколько значащих нулей содержит эта запись?";
		break;
	case 3:
		//
		break;
}



et = document.getElementById("ET17");
var ans17;
a = getRandom(1,2);
et.innerHTML = space + "В языке запросов поискового сервера для обозначения логической операции «ИЛИ» используется символ «|», а для обозначения логической операции «И» — символ «&».<br>" + space + "В таблице приведены запросы и количество найденных по ним страниц некоторого сегмента сети Интернет.";
switch (a) {
	case 1:
		n1 = getRandom(440,527);
		n2 = getRandom(440,527);
		n3 = getRandom(511,626);
		ans17 = document.getElementById("Nr1");
		ans17.innerHTML = n1;
		ans17 = document.getElementById("Nr2");
		ans17.innerHTML = n2;
		ans17 = document.getElementById("Nr4");
		ans17.innerHTML = n3;
		ans17 = n1 + n2 - n3;
		break;
	case 2:

		break;
}



et = document.getElementById("ET18");
var ans18;
a = getRandom(1,4);
switch (a) {
	case 1:
		n1 = getRandom(5,14);
		et.innerHTML = "Для какого <b>наибольшего</b> целого числа А формула<br><br>";
		et.innerHTML += space + space + space + "((x ≤ " + n1 + ") →(x ⋅ x ≤ A)) ⋀ ((y ⋅ y ≤ A) → (y ≤ " + n1 + "))<br><br>";
		et.innerHTML += "тождественно истинна, то есть принимает значение 1 при любых целых неотрицательных x и y?";
		ans18 = n1*n1 + 2*n1;
		break;
	case 2:
		do {
			n1 = getRandom(2,7);
			n2 = getRandom(2,7);
			n3 = getRandom(65,131);
			t = getRandom(2,5);
			i = getRandom(2,5);
		} while (!((i*n3)%(n1*t+i*n2)==0));
		et.innerHTML = "Укажите <b>наибольшее</b> целое значение числа А, при котором выражение:<br><br>";
		et.innerHTML += space + space + "(" + n1 + "y + " + n2 + "x ≠ " + n3 + ") ∨ (" + t + "x > A) ∨ (" + i + "y > A)<br><br>";
		et.innerHTML += "истинно для любых целых положительных значений x и y.";
		ans18 = (t*i*n3)/(n1*t+i*n2);
		ans18 -= 1;
		break;
	case 3:
		n1 = getRandom(2,7);
		n2 = getRandom(2,7);
		t = getRandom(20,61);
		i = getRandom(20,61);
		et.innerHTML = "Для какого <b>наименьшего</b> целого неотрицательного числа А выражение:<br><br>";
		et.innerHTML += space + space + "(" + n1 + "y + " + n2 + "x < A) ∨ (x > " + t + ") ∨ (y > " + i + ")<br><br>";
		et.innerHTML += "тождественно истинно, то есть принимает значение 1 при любых целых неотрицательных x и y?";
		ans18 = n1*i + n2*t + 1;
		break;
}



et = document.getElementById("ET19");
var ans19 = 0;
a = getRandom(1,3);
x = new Array();
for (i = 0; i <= 9; i++) {
	x.push(getRandom(0,11));
};
switch (a) {
	case 1:
		et.innerHTML = space + "Представленный ниже на двух языках программирования фрагмент программы обрабатывает элементы одномерного целочисленного массива A с индексами от 0 до 9. Перед началом выполнения данного фрагмента эти элементы массива имели значения ";
		for (i = 0; i <= 8; i++) {
			et.innerHTML += x[i] + ", ";
		};
		et.innerHTML += x[9];
		et.innerHTML += " (т. е. A[0] = "  + x[0] +", A[1] = " + x[1] + ", …, A[9] = " + x[9] + "). Определите значение переменной s после выполнения фрагмента.";
		n1 = getRandom(2,4);
		ans19 = document.getElementById("Python19");
		ans19.innerHTML = "n = 10<br>s = 0<br>for i in range(1,n):<br>" + space + "if A[i-1] > " + n1 + "*A[i]:<br>" + space + space + "A[i] = " + n1 + "*A[i-1]<br>" + space + space + "s = s + A[i]";
		ans19 = document.getElementById("Pascal19");
		ans19.innerHTML = "N := 10;<br>s := 0;<br>for i := 1 to N-1 do<br>" + space + "begin<br>" + space + space + "if A[i-1] > " + n1 + "*A[i] then<br>" + space + space + space + "begin<br>" + space + space + space + space + "A[i] := " + n1 + "*A[i-1];<br>" + space + space + space + space + "s := s + A[i];<br>" + space + space + space + "end;<br>" + space + space + "end;";
		ans19 = 0;
		for (i = 1; i <= 9; i++) {
			if (x[i-1]>2*x[i]) {
				x[i] = 2*x[i-1];
				ans19 = ans19 + x[i];
			}
		};
		break;
	case 2:
		x.push(getRandom(0,11));
		et.innerHTML = space + "В программе используется одномерный целочисленный массив A с индексами от 0 до 10. Значения элементов равны ";
		for (i = 0; i <= 9; i++) {
			et.innerHTML += x[i] + ", ";
		};
		et.innerHTML += x[10];
		et.innerHTML += "  соответственно, т.е. A[0] = " + x[0] + ", A[1] = " + x[1] + " и т.д.<br>" + space + "Определите значение переменной c после выполнения следующего фрагмента этой программы, записанного ниже на пяти языках программирования.";
		ans19 = document.getElementById("Python19");
		ans19.innerHTML = "c = 0<br>for i in range(1,11):<br>" + space + "if A[i-1] > A[i]:<br>" + space + space + "c = c + 1<br>" + space + space + "t = A[i]<br>" + space + space + "A[i] = A[i - 1]<br>" + space + space + "A[i-1] = t<br>";
		ans19 = document.getElementById("Pascal19");
		ans19.innerHTML = "c := 0;<br>for i := 1 to 10 do<br>" + space + "begin<br>" + space + space + "if A[i-1] > A[i] then<br>" + space + space + space + "begin<br>" + space + space + space + space + "c := c + 1;<br>" + space + space + space + space + "t := A[i];<br>" + space + space + space + space + "A[i] := A[i-1];<br>"+ space + space + space + space + "A[i-1] := t;<br>" + space + space + space + "end;<br>" + space + space + "end;";
		n1 = 0;
		ans19 = 0;
		for (i = 1; i <= 10; i++) {
			if (x[i-1]>x[i]) {
				ans19 = ans19 + 1;
				n1 = x[i];
				x[i] = x[i-1];
				x[i-1] = n1;
			}
		};
		break;
}



et = document.getElementById("ET21");
var ans21 = 0;
a = getRandom(1,2);
et.innerHTML = "Определите, какое число будет напечатано в результате выполнения следующего алгоритма: ";
switch (a) {
	case 1:
		n1 = getRandom(6,10);
		n2 = getRandom(10,19);
		t = getRandom(3,9);
		ans21 = document.getElementById("Python21");
		ans21.innerHTML = "def f(x):<br>" + space + "return x*x - " + n1 + "*x + " + n2 + "<br>" + "a = -" + t + "<br>b = " + t + "<br>M=a<br>R=f(a)<br>for t in range(a, b+1):<br>" + space + "if (f(t) > R):<br>" + space + space + "M = t<br>" + space + space + "R = f(t)<br>" + "print(R)";
		ans21 = document.getElementById("Pascal21");
		ans21.innerHTML = "Function F(x:integer): integer;<br>" + space + "begin<br>" + space + space + "F := x*x - " + n1 + "*x + " + n2 + ";<br>" + space + "end;<br>begin<br>" + space + "a := -" + t + "; b := " + t + ";<br>" + space + "M := a; R := F(a);<br>" + space + "for t := a to b do<br>" + space + space + "begin<br>" + space + space + space + "if (F(t) > R) then<br>" + space + space + space + space + "begin<br>" + space + space + space + space + space + "M := t;<br>" + space + space + space + space + space + "R := F(t)<br>" + space + space + space + space + "end;<br>" + space + space + "end;<br>" + space + space + "write(R);<br>" + "end.";
		function parabola (ex) {
			return (ex*ex-n1*ex+n2);
		}
		v = (-1)*t;
		et.innerHTML += space + space + space + parabola(v);
		ans21 = parabola(v);
		for (i = v; i<= t; i++) {
			if (parabola(i) > ans21) {
				ans21 = parabola(i);
			}
		};
		et.innerHTML += space + space + space + ans21;
		break;
	case 2:
		
		break;
}



var sect;
var inp;
var colg = "153,255,102";
function Answer () {
	inp = document.getElementById("EA1").value;
	sect = document.getElementById("b1");
	if (inp == ans1) {
		sect.style.backgroundColor = "rgb(" + colg + ")";
	}
	else if (inp == "") {
		sect.style.backgroundColor = "rgb(255,255,153)";
	}
	else {
		sect.style.backgroundColor = "rgb(205,92,92)";
	}

	inp = document.getElementById("EA5").value;
	sect = document.getElementById("b5");
	if (inp == ans5) {
		sect.style.backgroundColor = "rgb(" + colg + ")";
	}
	else if (inp == "") {
		sect.style.backgroundColor = "rgb(255,255,153)";
	}
	else {
		sect.style.backgroundColor = "rgb(205,92,92)";
	}


	inp = document.getElementById("EA6").value;
	sect = document.getElementById("b6");
	if (inp == ans6) {
		sect.style.backgroundColor = "rgb(" + colg + ")";
	}
	else if (inp == "") {
		sect.style.backgroundColor = "rgb(255,255,153)";
	}
	else {
		sect.style.backgroundColor = "rgb(205,92,92)";
	}


	inp = document.getElementById("EA8").value;
	sect = document.getElementById("b8");
	if (inp == ans8) {
		sect.style.backgroundColor = "rgb(" + colg + ")";
	}
	else if (inp == "") {
		sect.style.backgroundColor = "rgb(255,255,153)";
	}
	else {
		sect.style.backgroundColor = "rgb(205,92,92)";
	}


	inp = document.getElementById("EA9").value;
	sect = document.getElementById("b9");
	if (inp == ans9) {
		sect.style.backgroundColor = "rgb(" + colg + ")";
	}
	else if (inp == "") {
		sect.style.backgroundColor = "rgb(255,255,153)";
	}
	else {
		sect.style.backgroundColor = "rgb(205,92,92)";
	}


	inp = document.getElementById("EA10").value;
	sect = document.getElementById("b10");
	if (inp == ans13) {
		sect.style.backgroundColor = "rgb(" + colg + ")";
	}
	else if (inp == "") {
		sect.style.backgroundColor = "rgb(255,255,153)";
	}
	else {
		sect.style.backgroundColor = "rgb(205,92,92)";
	}


	inp = document.getElementById("EA11").value;
	sect = document.getElementById("b11");
	if (inp == ans11) {
		sect.style.backgroundColor = "rgb(" + colg + ")";
	}
	else if (inp == "") {
		sect.style.backgroundColor = "rgb(255,255,153)";
	}
	else {
		sect.style.backgroundColor = "rgb(205,92,92)";
	}

	inp = document.getElementById("EA12").value;
	sect = document.getElementById("b12");
	if (inp == ans12) {
		sect.style.backgroundColor = "rgb(" + colg + ")";
	}
	else if (inp == "") {
		sect.style.backgroundColor = "rgb(255,255,153)";
	}
	else {
		sect.style.backgroundColor = "rgb(205,92,92)";
	}


	inp = document.getElementById("EA13").value;
	sect = document.getElementById("b13");
	if (inp == ans13) {
		sect.style.backgroundColor = "rgb(" + colg + ")";
	}
	else if (inp == "") {
		sect.style.backgroundColor = "rgb(255,255,153)";
	}
	else {
		sect.style.backgroundColor = "rgb(205,92,92)";
	}


	inp = document.getElementById("EA16").value;
	sect = document.getElementById("b16");
	if (inp == ans16) {
		sect.style.backgroundColor = "rgb(" + colg + ")";
	}
	else if (inp == "") {
		sect.style.backgroundColor = "rgb(255,255,153)";
	}
	else {
		sect.style.backgroundColor = "rgb(205,92,92)";
	}



	inp = document.getElementById("EA17").value;
	sect = document.getElementById("b17");
	if (inp == ans17) {
		sect.style.backgroundColor = "rgb(" + colg + ")";
	}
	else if (inp == "") {
		sect.style.backgroundColor = "rgb(255,255,153)";
	}
	else {
		sect.style.backgroundColor = "rgb(205,92,92)";
	}


	inp = document.getElementById("EA18").value;
	sect = document.getElementById("b18");
	if (inp == ans18) {
		sect.style.backgroundColor = "rgb(" + colg + ")";
	}
	else if (inp == "") {
		sect.style.backgroundColor = "rgb(255,255,153)";
	}
	else {
		sect.style.backgroundColor = "rgb(205,92,92)";
	}



	inp = document.getElementById("EA19").value;
	sect = document.getElementById("b19");
	if (inp == ans19) {
		sect.style.backgroundColor = "rgb(" + colg + ")";
	}
	else if (inp == "") {
		sect.style.backgroundColor = "rgb(255,255,153)";
	}
	else {
		sect.style.backgroundColor = "rgb(205,92,92)";
	}



	inp = document.getElementById("EA21").value;
	sect = document.getElementById("b21");
	if (inp == ans21) {
		sect.style.backgroundColor = "rgb(" + colg + ")";
	}
	else if (inp == "") {
		sect.style.backgroundColor = "rgb(255,255,153)";
	}
	else {
		sect.style.backgroundColor = "rgb(205,92,92)";
	}
}