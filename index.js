let tit = document.createElement('h1');
tit.classList.add('tit');
tit.textContent = 'Virtual Keyboard';
document.body.prepend(tit);

let info = document.createElement('img');
info.classList.add('info');
info.title = 'Keyboard was created in Windows. For changing the language: shift + alt. Клавиатура создана в системе Windows. Для смены языка: shift + alt. '
document.body.prepend(info);
info.src = '/assets/info.png'

//create the main div

let fun = document.createElement('div');
fun.classList.add('fun')
document.body.appendChild(fun);

//create textarea input

let inp = document.createElement('textarea');
inp.classList.add('inp');
fun.appendChild(inp);

//create main div for keys

let keydiv = document.createElement('div');
fun.appendChild(keydiv);
keydiv.classList.add('keydiv')

// create divs-rows for keys

let row1 = document.createElement('div');
row1.classList.add('row');
keydiv.appendChild(row1);

let row2 = document.createElement('div');
row2.classList.add('row');
keydiv.appendChild(row2);

let row3 = document.createElement('div');
row3.classList.add('row');
keydiv.appendChild(row3);

let row4 = document.createElement('div');
row4.classList.add('row');
keydiv.appendChild(row4);

let row5 = document.createElement('div');
row5.classList.add('row');
keydiv.appendChild(row5);

// create divs for every key

// 1st row

let key1 = document.createElement('div');
key1.classList.add('key');
row1.appendChild(key1);

let p1 = document.createElement('p');
p1.classList.add('pi');
key1.appendChild(p1);
p1.textContent = '`';
p1.dataset.val = 'Tick';

let key2 = document.createElement('div');
key2.classList.add('key');
row1.appendChild(key2);

let p2 = document.createElement('p');
p2.classList.add('pi');
key2.appendChild(p2);
p2.textContent = '1';
p1.dataset.val = 'One';

let key3 = document.createElement('div');
key3.classList.add('key');
row1.appendChild(key3);

let p3 = document.createElement('p');
p3.classList.add('pi');
key3.appendChild(p3);
p3.textContent = '2';
p3.dataset.val = 'Two';

let key4 = document.createElement('div');
key4.classList.add('key');
row1.appendChild(key4);

let p4 = document.createElement('p');
p4.classList.add('pi');
key4.appendChild(p4);
p4.textContent = '3';
p4.dataset.val = 'Three';

let key5 = document.createElement('div');
key5.classList.add('key');
row1.appendChild(key5);

let p5 = document.createElement('p');
p5.classList.add('pi');
key5.appendChild(p5);
p5.textContent = '4';
p5.dataset.val = 'Four';

let key6 = document.createElement('div');
key6.classList.add('key');
row1.appendChild(key6);

let p6 = document.createElement('p');
p6.classList.add('pi');
key6.appendChild(p6);
p6.textContent = '5';
p6.dataset.val = 'Five';

let key7 = document.createElement('div');
key7.classList.add('key');
row1.appendChild(key7);

let p7 = document.createElement('p');
p7.classList.add('pi');
key7.appendChild(p7);
p7.textContent = '6';
p7.dataset.val = 'Six';

let key8 = document.createElement('div');
key8.classList.add('key');
row1.appendChild(key8);

let p8 = document.createElement('p');
p8.classList.add('pi');
key8.appendChild(p8);
p8.textContent = '7';
p8.dataset.val = 'Seven';

let key9 = document.createElement('div');
key9.classList.add('key');
row1.appendChild(key9);

let p9 = document.createElement('p');
p9.classList.add('pi');
key9.appendChild(p9);
p9.textContent = '8';
p9.dataset.val = 'Eight';

let key10 = document.createElement('div');
key10.classList.add('key');
row1.appendChild(key10);

let p10 = document.createElement('p');
p10.classList.add('pi');
key10.appendChild(p10);
p10.textContent = '9';
p10.dataset.val = 'Nine';

let key11 = document.createElement('div');
key11.classList.add('key');
row1.appendChild(key11);

let p11 = document.createElement('p');
p11.classList.add('pi');
key11.appendChild(p11);
p11.textContent = '0';
p11.dataset.val = 'Zero';

let key12 = document.createElement('div');
key12.classList.add('key');
row1.appendChild(key12);

let p12 = document.createElement('p');
p12.classList.add('pi');
key12.appendChild(p12);
p12.textContent = '-';
p12.dataset.val = 'Minus';

let key13 = document.createElement('div');
key13.classList.add('key');
row1.appendChild(key13);

let p13 = document.createElement('p');
p13.classList.add('pi');
key13.appendChild(p13);
p13.textContent = '=';
p13.dataset.val = 'Is';

let back = document.createElement('div');
back.classList.add('back');
back.classList.add('key1');
row1.appendChild(back);

let back1 = document.createElement('p');
back1.classList.add('back1');
back.appendChild(back1);
back1.textContent = 'Back';
back1.dataset.val = 'Back';

// 2d row

let tab = document.createElement('div');
tab.classList.add('tab');
tab.classList.add('key1');
row2.appendChild(tab);

let tab1 = document.createElement('p');
tab1.classList.add('tab1');
tab.appendChild(tab1);
tab1.textContent = 'Tab';
tab1.dataset.val = 'Tab';

let key14 = document.createElement('div');
key14.classList.add('key');
row2.appendChild(key14);

let p14 = document.createElement('p');
p14.classList.add('pi');
key14.appendChild(p14);
p14.textContent = 'Q';
p14.dataset.val = 'Keyq';

let key15 = document.createElement('div');
key15.classList.add('key');
row2.appendChild(key15);

let p15 = document.createElement('p');
p15.classList.add('pi');
key15.appendChild(p15);
p15.textContent = 'W';
p15.dataset.val = 'Keyw';

let key16 = document.createElement('div');
key16.classList.add('key');
row2.appendChild(key16);

let p16 = document.createElement('p');
p16.classList.add('pi');
key16.appendChild(p16);
p16.textContent = 'E';
p16.dataset.val = 'Keye';

let key17 = document.createElement('div');
key17.classList.add('key');
row2.appendChild(key17);

let p17 = document.createElement('p');
p17.classList.add('pi');
key17.appendChild(p17);
p17.textContent = 'R';
p17.dataset.val = 'Keyr';

let key18 = document.createElement('div');
key18.classList.add('key');
row2.appendChild(key18);

let p18 = document.createElement('p');
p18.classList.add('pi');
key18.appendChild(p18);
p18.textContent = 'T';
p18.dataset.val = 'Keyt';

let key19 = document.createElement('div');
key19.classList.add('key');
row2.appendChild(key19);

let p19 = document.createElement('p');
p19.classList.add('pi');
key19.appendChild(p19);
p19.textContent = 'Y';
p19.dataset.val = 'Keyy';

let key20 = document.createElement('div');
key20.classList.add('key');
row2.appendChild(key20);

let p20 = document.createElement('p');
p20.classList.add('pi');
key20.appendChild(p20);
p20.textContent = 'U';
p20.dataset.val = 'Keyu';

let key21 = document.createElement('div');
key21.classList.add('key');
row2.appendChild(key21);

let p21 = document.createElement('p');
p21.classList.add('pi');
key21.appendChild(p21);
p21.textContent = 'I';
p21.dataset.val = 'Keyi';

let key22 = document.createElement('div');
key22.classList.add('key');
row2.appendChild(key22);

let p22 = document.createElement('p');
p22.classList.add('pi');
key22.appendChild(p22);
p22.textContent = 'O';
p22.dataset.val = 'Keyo';

let key23 = document.createElement('div');
key23.classList.add('key');
row2.appendChild(key23);

let p23 = document.createElement('p');
p23.classList.add('pi');
key23.appendChild(p23);
p23.textContent = 'P';
p23.dataset.val = 'Keyp';

let key24 = document.createElement('div');
key24.classList.add('key');
row2.appendChild(key24);

let p24 = document.createElement('p');
p24.classList.add('pi');
key24.appendChild(p24);
p24.textContent = '[';
p24.dataset.val = 'Key[';

let key25 = document.createElement('div');
key25.classList.add('key');
row2.appendChild(key25);

let p25 = document.createElement('p');
p25.classList.add('pi');
key25.appendChild(p25);
p25.textContent = ']';
p25.dataset.val = ']';

let key26 = document.createElement('div');
key26.classList.add('key');
row2.appendChild(key26);

let p26 = document.createElement('p');
p26.classList.add('pi');
key26.appendChild(p26);
p26.textContent = '\\';
p26.dataset.val = 'Key\\';

let del = document.createElement('div');
del.classList.add('del');
del.classList.add('key1');
row2.appendChild(del);

let del1 = document.createElement('p');
del1.classList.add('pi');
del.appendChild(del1);
del1.textContent = 'Del';
del1.dataset.val = 'Keydel';

// 3rd row

let caps = document.createElement('div');
caps.classList.add('caps');
caps.classList.add('key1');
row3.appendChild(caps);

let caps1 = document.createElement('p');
caps1.classList.add('caps1');
caps.appendChild(caps1);
caps1.textContent = 'Caps';
caps1.dataset.val = 'caps1';

let key27 = document.createElement('div');
key27.classList.add('key');
row3.appendChild(key27);

let p27 = document.createElement('p');
p27.classList.add('pi');
key27.appendChild(p27);
p27.textContent = 'A';
p27.dataset.val = 'Keya';

let key28 = document.createElement('div');
key28.classList.add('key');
row3.appendChild(key28);

let p28 = document.createElement('p');
p28.classList.add('pi');
key28.appendChild(p28);
p28.textContent = 'S';
p28.dataset.val = 'Keys';

let key29 = document.createElement('div');
key29.classList.add('key');
row3.appendChild(key29);

let p29 = document.createElement('p');
p29.classList.add('pi');
key29.appendChild(p29);
p29.textContent = 'D';
p29.dataset.val = 'Keyd';

let key30 = document.createElement('div');
key30.classList.add('key');
row3.appendChild(key30);

let p30 = document.createElement('p');
p30.classList.add('pi');
key30.appendChild(p30);
p30.textContent = 'F';
p30.dataset.val = 'Keyf';

let key31 = document.createElement('div');
key31.classList.add('key');
row3.appendChild(key31);

let p31 = document.createElement('p');
p31.classList.add('pi');
key31.appendChild(p31);
p31.textContent = 'G';
p31.dataset.val = 'Keyg';

let key32 = document.createElement('div');
key32.classList.add('key');
row3.appendChild(key32);

let p32 = document.createElement('p');
p32.classList.add('pi');
key32.appendChild(p32);
p32.textContent = 'H';
p32.dataset.val = 'Keyh';

let key33 = document.createElement('div');
key33.classList.add('key');
row3.appendChild(key33);

let p33 = document.createElement('p');
p33.classList.add('pi');
key33.appendChild(p33);
p33.textContent = 'J';
p33.dataset.val = 'Keyj';

let key34 = document.createElement('div');
key34.classList.add('key');
row3.appendChild(key34);

let p34 = document.createElement('p');
p34.classList.add('pi');
key34.appendChild(p34);
p34.textContent = 'K';
p34.dataset.val = 'Keyk';

let key35 = document.createElement('div');
key35.classList.add('key');
row3.appendChild(key35);

let p35 = document.createElement('p');
p35.classList.add('pi');
key35.appendChild(p35);
p35.textContent = 'L';
p35.dataset.val = 'Keyl';

let key36 = document.createElement('div');
key36.classList.add('key');
row3.appendChild(key36);

let p36 = document.createElement('p');
p36.classList.add('pi');
key36.appendChild(p36);
p36.textContent = ';';
p36.dataset.val = 'Key;';

let key37 = document.createElement('div');
key37.classList.add('key');
row3.appendChild(key37);

let p37 = document.createElement('p');
p37.classList.add('pi');
key37.appendChild(p37);
p37.textContent = '\'';
p37.dataset.val = 'Keytic';

let ent = document.createElement('div');
ent.classList.add('ent');
ent.classList.add('key1');
row3.appendChild(ent);

let ent1 = document.createElement('p');
ent1.classList.add('pi');
ent.appendChild(ent1);
ent1.textContent = 'Enter';
ent1.dataset.val = 'ent';

// 4th row

let shi = document.createElement('div');
shi.classList.add('shi');
shi.classList.add('key1');
row4.appendChild(shi);

let shi1 = document.createElement('p');
shi1.classList.add('pi');
shi.appendChild(shi1);
shi1.textContent = 'Shift';
shi1.dataset.val = 'shi1';

let key38 = document.createElement('div');
key38.classList.add('key');
row4.appendChild(key38);

let p38 = document.createElement('p');
p38.classList.add('pi');
key38.appendChild(p38);
p38.textContent = 'Z';
p38.dataset.val = 'Keyz';

let key39 = document.createElement('div');
key39.classList.add('key');
row4.appendChild(key39);

let p39 = document.createElement('p');
p39.classList.add('pi');
key39.appendChild(p39);
p39.textContent = 'X';
p39.dataset.val = 'Keyx';

let key40 = document.createElement('div');
key40.classList.add('key');
row4.appendChild(key40);

let p40 = document.createElement('p');
p40.classList.add('pi');
key40.appendChild(p40);
p40.textContent = 'C';
p40.dataset.val = 'Keyc';

let key41 = document.createElement('div');
key41.classList.add('key');
row4.appendChild(key41);

let p41 = document.createElement('p');
p41.classList.add('pi');
key41.appendChild(p41);
p41.textContent = 'V';
p41.dataset.val = 'Keyv';

let key42 = document.createElement('div');
key42.classList.add('key');
row4.appendChild(key42);

let p42 = document.createElement('p');
p42.classList.add('pi');
key42.appendChild(p42);
p42.textContent = 'B';
p42.dataset.val = 'Keyb';

let key43 = document.createElement('div');
key43.classList.add('key');
row4.appendChild(key43);

let p43 = document.createElement('p');
p43.classList.add('pi');
key43.appendChild(p43);
p43.textContent = 'N';
p43.dataset.val = 'Keyn';

let key44 = document.createElement('div');
key44.classList.add('key');
row4.appendChild(key44);

let p44 = document.createElement('p');
p44.classList.add('pi');
key44.appendChild(p44);
p44.textContent = 'M';
p44.dataset.val = 'Keym';

let key45 = document.createElement('div');
key45.classList.add('key');
row4.appendChild(key45);

let p45 = document.createElement('p');
p45.classList.add('pi');
key45.appendChild(p45);
p45.textContent = ',';
p45.dataset.val = 'Key,';

let key46 = document.createElement('div');
key46.classList.add('key');
row4.appendChild(key46);

let p46 = document.createElement('p');
p46.classList.add('pi');
key46.appendChild(p46);
p46.textContent = '.';
p46.dataset.val = 'Key.';

let key47 = document.createElement('div');
key47.classList.add('key');
row4.appendChild(key47);

let p47 = document.createElement('p');
p47.classList.add('pi');
key47.appendChild(p47);
p47.textContent = '/';
p47.dataset.val = 'Key/';

let up = document.createElement('div');
up.classList.add('up');
up.classList.add('key1');
row4.appendChild(up);

let up1 = document.createElement('p');
up1.classList.add('pi');
up.appendChild(up1);
up1.textContent = '▲';
up1.dataset.val = 'Keyup';

let shi2 = document.createElement('div');
shi2.classList.add('shi');
shi2.classList.add('key1');
row4.appendChild(shi2);

let shi3 = document.createElement('p');
shi3.classList.add('shi3');
shi2.appendChild(shi3);
shi3.textContent = 'Shift';
shi3.dataset.val = 'shi3';

// 5th row

let ctrl = document.createElement('div');
ctrl.classList.add('ctrl');
ctrl.classList.add('key1');
row5.appendChild(ctrl);

let ctrl1 = document.createElement('p');
ctrl1.classList.add('pi');
ctrl.appendChild(ctrl1);
ctrl1.textContent = 'Ctrl';
ctrl1.dataset.val = 'ctrl1';

let win = document.createElement('div');
win.classList.add('win');
win.classList.add('key1');
row5.appendChild(win);

let win1 = document.createElement('p');
win1.classList.add('pi');
win.appendChild(win1);
win1.textContent = 'Win';
win1.dataset.val = 'win';

let alt = document.createElement('div');
alt.classList.add('alt');
alt.classList.add('key1');
row5.appendChild(alt);

let alt1 = document.createElement('p');
alt1.classList.add('pi');
alt.appendChild(alt1);
alt1.textContent = 'Alt';
alt1.dataset.val = 'alt1';

let space = document.createElement('div');
space.classList.add('space');
space.classList.add('key1');
row5.appendChild(space);

let alt2 = document.createElement('div');
alt2.classList.add('alt');
alt2.classList.add('key1');
row5.appendChild(alt2);

let alt3 = document.createElement('p');
alt3.classList.add('pi');
alt2.appendChild(alt3);
alt3.textContent = 'Alt';
alt3.dataset.val = 'alt3';

let ctrl2 = document.createElement('div');
ctrl2.classList.add('ctrl');
ctrl2.classList.add('key1');
row5.appendChild(ctrl2);

let ctrl3 = document.createElement('p');
ctrl3.classList.add('pi');
ctrl2.appendChild(ctrl3);
ctrl3.textContent = 'Ctrl';
ctrl3.dataset.val = 'ctrl3';

let left = document.createElement('div');
left.classList.add('left');
left.classList.add('key1');
row5.appendChild(left);

let left1 = document.createElement('p');
left1.classList.add('pi');
left.appendChild(left1);
left1.textContent = '◄';
left1.dataset.val = 'left';

let down = document.createElement('div');
down.classList.add('down');
down.classList.add('key1');
row5.appendChild(down);

let down1 = document.createElement('p');
down1.classList.add('pi');
down.appendChild(down1);
down1.textContent = '▼';
down1.dataset.val = 'down';

let right = document.createElement('div');
right.classList.add('right');
right.classList.add('key1');
row5.appendChild(right);

let right1 = document.createElement('p');
right1.classList.add('pi');
right.appendChild(right1);
right1.textContent = '►';
right1.dataset.val = 'right1';

// features

inp.focus();

let arr = [key1, key2, key3, key4, key5, key6, key7, key8, key9, key10, key11, key12, key13, key14, key15, key16, key17, key18, key19, key20, key21, key22, key23, key24, key25, key26, key27, key28, key29, key30, key31, key32, key33, key34, key35, key36, key37,, key38, key39, key40, key41, key42, key43, key44, key45, key46, key47, up, left, down, right];


let arr1 = arr.forEach((elem) => elem.addEventListener('click', function addEvent () {
    inp.value += elem.textContent.toLowerCase();
    elem.classList.add('active');
    setTimeout( () => {
        elem.classList.remove('active');
   }, 100)
    inp.focus();
}));

