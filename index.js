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

let key2 = document.createElement('div');
key2.classList.add('key');
row1.appendChild(key2);

let key3 = document.createElement('div');
key3.classList.add('key');
row1.appendChild(key3);

let key4 = document.createElement('div');
key4.classList.add('key');
row1.appendChild(key4);

let key5 = document.createElement('div');
key5.classList.add('key');
row1.appendChild(key5);

let key6 = document.createElement('div');
key6.classList.add('key');
row1.appendChild(key6);

let key7 = document.createElement('div');
key7.classList.add('key');
row1.appendChild(key7);

let key8 = document.createElement('div');
key8.classList.add('key');
row1.appendChild(key8);

let key9 = document.createElement('div');
key9.classList.add('key');
row1.appendChild(key9);

let key10 = document.createElement('div');
key10.classList.add('key');
row1.appendChild(key10);

let key11 = document.createElement('div');
key11.classList.add('key');
row1.appendChild(key11);

let key12 = document.createElement('div');
key12.classList.add('key');
row1.appendChild(key12);

let key13 = document.createElement('div');
key13.classList.add('key');
row1.appendChild(key13);

let back = document.createElement('div');
back.classList.add('back');
row1.appendChild(back);

// 2d row

let tab = document.createElement('div');
tab.classList.add('tab');
row2.appendChild(tab);

let key14 = document.createElement('div');
key14.classList.add('key');
row2.appendChild(key14);

let key15 = document.createElement('div');
key15.classList.add('key');
row2.appendChild(key15);

let key16 = document.createElement('div');
key16.classList.add('key');
row2.appendChild(key16);

let key17 = document.createElement('div');
key17.classList.add('key');
row2.appendChild(key17);

let key18 = document.createElement('div');
key18.classList.add('key');
row2.appendChild(key18);

let key19 = document.createElement('div');
key19.classList.add('key');
row2.appendChild(key19);

let key20 = document.createElement('div');
key20.classList.add('key');
row2.appendChild(key20);

let key21 = document.createElement('div');
key21.classList.add('key');
row2.appendChild(key21);

let key22 = document.createElement('div');
key22.classList.add('key');
row2.appendChild(key22);

let key23 = document.createElement('div');
key23.classList.add('key');
row2.appendChild(key23);

let key24 = document.createElement('div');
key24.classList.add('key');
row2.appendChild(key24);

let key25 = document.createElement('div');
key25.classList.add('key');
row2.appendChild(key25);

let key26 = document.createElement('div');
key26.classList.add('key');
row2.appendChild(key26);

let del = document.createElement('div');
del.classList.add('del');
row2.appendChild(del);

// 3rd row

let caps = document.createElement('div');
caps.classList.add('caps');
row3.appendChild(caps);

let key28 = document.createElement('div');
key28.classList.add('key');
row3.appendChild(key28);

let key29 = document.createElement('div');
key29.classList.add('key');
row3.appendChild(key29);

let key30 = document.createElement('div');
key30.classList.add('key');
row3.appendChild(key30);

let key31 = document.createElement('div');
key31.classList.add('key');
row3.appendChild(key31);

let key32 = document.createElement('div');
key32.classList.add('key');
row3.appendChild(key32);

let key33 = document.createElement('div');
key33.classList.add('key');
row3.appendChild(key33);

let key34 = document.createElement('div');
key34.classList.add('key');
row3.appendChild(key34);

let key35 = document.createElement('div');
key35.classList.add('key');
row3.appendChild(key35);

let key36 = document.createElement('div');
key36.classList.add('key');
row3.appendChild(key36);

let key37 = document.createElement('div');
key37.classList.add('key');
row3.appendChild(key37);

let key38 = document.createElement('div');
key38.classList.add('key');
row3.appendChild(key38);

let key39 = document.createElement('div');
key39.classList.add('key');
row3.appendChild(key39);

let ent = document.createElement('div');
ent.classList.add('ent');
row3.appendChild(ent);

// 4th row

let shi = document.createElement('div');
shi.classList.add('shi');
row4.appendChild(shi);

let key40 = document.createElement('div');
key40.classList.add('key');
row4.appendChild(key40);

let key41 = document.createElement('div');
key41.classList.add('key');
row4.appendChild(key41);

let key42 = document.createElement('div');
key42.classList.add('key');
row4.appendChild(key42);

let key43 = document.createElement('div');
key43.classList.add('key');
row4.appendChild(key43);

let key44 = document.createElement('div');
key44.classList.add('key');
row4.appendChild(key44);

let key45 = document.createElement('div');
key45.classList.add('key');
row4.appendChild(key45);

let key46 = document.createElement('div');
key46.classList.add('key');
row4.appendChild(key46);

let key47 = document.createElement('div');
key47.classList.add('key');
row4.appendChild(key47);

let key48 = document.createElement('div');
key48.classList.add('key');
row4.appendChild(key48);

let key49 = document.createElement('div');
key49.classList.add('key');
row4.appendChild(key49);

let up = document.createElement('div');
up.classList.add('up');
row4.appendChild(up);

let shi2 = document.createElement('div');
shi2.classList.add('shi');
row4.appendChild(shi2);

// 5th row

let ctrl1 = document.createElement('div');
ctrl1.classList.add('ctrl');
row5.appendChild(ctrl1);

let win = document.createElement('div');
win.classList.add('win');
row5.appendChild(win);

let alt1 = document.createElement('div');
alt1.classList.add('alt');
row5.appendChild(alt1);

let space = document.createElement('div');
space.classList.add('space');
row5.appendChild(space);

let alt2 = document.createElement('div');
alt2.classList.add('alt');
row5.appendChild(alt2);

let left = document.createElement('div');
left.classList.add('left');
row5.appendChild(left);

let down = document.createElement('div');
down.classList.add('down');
row5.appendChild(down);

let right = document.createElement('div');
right.classList.add('right');
row5.appendChild(right);

let ctrl2 = document.createElement('div');
ctrl2.classList.add('ctrl');
row5.appendChild(ctrl2);
