'use strict'

// const food = [
//     'borsóleves',
//     'krumplileves',
//     'bableves',
//     'paradicsomleves',
//     'zöldbableves',
//     'frankfurti leves',
//     'zöldségleves',
//     'tökkrémleves',
//     'borsófőzelék',
//     'krumplifőzelék',
//     'zöldbabfőzelék',
//     'répafőzelék',
//     'spenótfőzelék',
//     'paradicsomos káposzta',
//     'káposztástészta',
//     'pörkölt + feltét',
//     'töltött paprika',
//     'lecsó',
//     'rakott krumpli',
//     'sült zöldség',
//     'pizza',
//     'lencsehurka',
//     'lasagne',
//     'palanéca',

// ]


const foodObj = [
    {
        name: 'borsóleves',
        img: 'https://teljesetel-teljeselet.com/wp-content/uploads/2021/03/borso_leves_kozel.jpg',
        ingredients: '1 vörös vagy lilahagyma<br \>1 gerezd fokhagyma<br \>500g sárgarépa<br \>1000g zöldvorsó<br \>200 g tészta<br \>2 ek. vegamix<br \>2 tk. paprika<br \>0,5-1 tk kurkuma<br \>0,5 tk. bors<br \>1 tk. szárított petrezselyem<br \>1 tk oregano<br \>0,5 tk. borsikafű<br \>ízlés szerint só<br \><br \>opciók: zeller, fehérrépa, karalábé',
        preparation: 'Megpucoljuk és felvágjuk a zöldségeket. A hagymát és a fokhagymát vizen megpároljuk. Ha szép barna, akkor mehet rá a sárgarépa és a többi zöldség és pirítjuk egy picit miközben kevergetjük. Ezután beletesszük a borsót és felöntjük vízzel. Fűszerezzük és addig főzzük, míg minden összetevő puha lesz. Ha szeretnénk, hogy megmaradjon a leve, akkor a tésztát külön főzzük meg és tálalásnál tesszük csak a levesbe.',
        link: 'https://teljesetel-teljeselet.com/',
    },
    {
        name: 'mungóbabos krumplileves',
        img: 'https://teljesetel-teljeselet.com/wp-content/uploads/2021/03/krumpli_leves_kozel-1536x1152.jpg',
        ingredients: '1 vörös vagy lilahagyma<br \>1 gerezd fokhagyma<br \>800g krumpli<br \>6-7db sárgarépa<br \>100g száraz mungóbab<br \>200 g tészta<br \>2 ek. vegamix<br \>2 tk. paprika<br \>0,5-1 tk kurkuma<br \>0,5 tk. bors<br \>1 tk. szárított petrezselyem<br \>1 tk oregano<br \>0,5 tk. borsikafű<br \>ízlés szerint só<br \><br \>opciók: zeller, fehérrépa, karalábé',
        preparation: 'Előző nap beáztatjuk a mungóbabot hideg vízbe, ha elfelejtjük, akkor 1-2 óra melegvízben áztatás is segíthet a főzési idő rövidítésében, illetve kevésbe fog puffasztani. Kuktában 10 perc alatt meg lehet főzni, sima edényben kicsit hosszabb idő. Közben megpucoljuk és felvágjuk a zöldségeket. A hagymát és a fokhagymát vizen megpároljuk. Ha szép barna, akkor mehet rá a sárgarépa és a többi zöldség és pirítjuk egy picit miközben kevergetjük. Ezután beletesszük a krumplit és felöntjük vízzel. Fűszerezzük és addig főzzük, míg minden összetevő puha lesz. Ha szeretnénk, hogy megmaradjon a leve, akkor a tésztát külön főzzük meg és tálalásnál tesszük csak a levesbe.',
        link: 'https://teljesetel-teljeselet.com/',
    },
    {
        name: 'paradicsomleves',
        img: 'https://teljesetel-teljeselet.com/wp-content/uploads/2021/03/paradicsom_leves_kozel.jpg',
        ingredients: '1 vörös vagy lilahagyma<br \>1 l paradicsomlé<br \>2 ek csicseriborsó/ vörölencseliszt<br \>2 tk eritrit <br \>1/2 mk. bors<br \>1 tk oregano<br \>1 tk bazsalikom<br \>tészta<br \>ízlés szerint só<br \>víz',
        preparation: 'Megpucoljuk és felvágjuk a  hagymát és vizen megpároljuk. Ha szép barna, akkor mehet rá a paradicsomlé és víz, majd fűszerezzük 10 perc főzés után beletesszük a tésztát. Ha megfőtt a csicserilisztből habarást készítünk és beleöntjük. Pár percig még főzzük és készen is van. ',
        link: 'https://teljesetel-teljeselet.com/',
    },
    {
        name: 'bableves',
        img: 'img/kisspng-fizzy-drinks-computer-icons-meal-food-lunch-food-icon-5ac500dc6676c0.3955393615228602524197.jpg',
        ingredients: '',
        preparation: '',
        link: '',
    },
    {
        name: 'zöldbableves',
        img: 'img/kisspng-fizzy-drinks-computer-icons-meal-food-lunch-food-icon-5ac500dc6676c0.3955393615228602524197.jpg',
        ingredients: '',
        preparation: '',
        link: '',
    },
    {
        name: 'frankfurti leves',
        img: 'img/kisspng-fizzy-drinks-computer-icons-meal-food-lunch-food-icon-5ac500dc6676c0.3955393615228602524197.jpg',
        ingredients: '',
        preparation: '',
        link: '',
    },
    {
        name: 'tökkrémleves',
        img: 'https://teljesetel-teljeselet.com/wp-content/uploads/2021/03/tokkremleves-1024x768.jpg',
        ingredients: '1 vörös vagy lilahagyma<br \>1 gerezd fokhagyma<br \>750g tök<br \>250 g vöröslencse<br \>1-2 db sárgarépa<br \>2 ek. vegamix<br \>0,5-1 tk kurkuma<br \>0,5 tk. bors<br \>1/2 tk.római kömény<br \>1/2 tk szerecsendió<br \>1/2 tk. gyömbér<br \>ízlés szerint só',
        preparation: 'Megpucoljuk és felvágjuk a zöldségeket. A hagymát és a fokhagymát vizen megpároljuk. Ha szép barna, akkor mehet rá a sárgarépa és pirítjuk egy picit miközben kevergetjük. Ezután beletesszük a tököt és a vöröslencsét, majd felöntjük vízzel. Fűszerezzük és addig főzzük, míg minden összetevő puha lesz. Kuktában 15 perc alatt szétfő és utána már szinte alig kell turmixolni.',
        link: 'https://teljesetel-teljeselet.com/',
    },
    {
        name: 'zöldségleves',
        img: 'img/kisspng-fizzy-drinks-computer-icons-meal-food-lunch-food-icon-5ac500dc6676c0.3955393615228602524197.jpg',
        ingredients: '',
        preparation: '',
        link: '',
    },
    {
        name: 'tökfőzelék',
        img: 'https://teljesetel-teljeselet.com/wp-content/uploads/2021/02/Tokfozelek_kozel-1024x768.jpg',
        ingredients: '1 vörös vagy lilahagyma<br \>ca. 1 kg tök/cukkini<br \>2 tk. kapor<br \>2 ek. hajdinaliszt<br \>1/4 tk. bors<br \>1 tk borsikafű<br \>1/2 tk. kurkuma<br \>1 tk. paprika<br \>150 ml szójatej<br \>só, víz',
        preparation: 'Lereszeljük a tököt . A hagymát vizen megdinszteljük, ha szép barna, akkor mehetnek bele a lereszelt tök.  Fűszerezzük és megfőzzük.  Ha a tök megfőtt , akkor a hajdinalisztet összekeverjük a szójatejjel és behabarjuk.',
        link: 'https://teljesetel-teljeselet.com/',
    },
    {
        name: 'kelkáposzta főzelék',
        img: 'https://teljesetel-teljeselet.com/wp-content/uploads/2021/02/plutyka_kozel-1024x768.jpg',
        ingredients: '(4-5 adag)<br \>1 vörös vagy lilahagyma<br \>1 kis fej kelkáposzta<br \>4-5 db közepes krumpli<br \>2 ek. hajdinaliszt<br \>1/4 tk. bors<br \>1 tk borsikafű<br \>1/2 tk. kurkuma<br \>1 tk. paprika<br \>1/2 tk. kömény (egészben vagy por)<br \>150 ml szójatej<br \>só, víz',
        preparation: 'Apró darabokra vágjuk a kelkáposztát és a megpucolt krumplit. A hagymát vizen megdinszteljük, ha szép barna, akkor mehetnek bele a feldarabolt zöldségek és víz.  Fűszerezzük és megfőzzük.  Ha a kelkáposzta már-már szétfő, akkor a hajdinalisztet összekeverjük a szójatejjel és behabarjuk. (Kuktában kb. 15 percig főztem.) ',
        link: 'https://teljesetel-teljeselet.com/',
    },
    {
        name: 'lencsefőzelék',
        img: 'https://teljesetel-teljeselet.com/wp-content/uploads/2021/02/Lencse-fozelek-kozel-1024x768.jpg',
        ingredients: '(4-5 adag)<br \>1 vörös vagy lilahagyma<br \>500g lencse<br \>2 ek. hajdinaliszt<br \>1/4 tk. bors<br \>1 tk. borsikafű<br \>1 tk. rómaikömény<br \>1/2 tk. kurkuma<br \>1 tk. oregano<br \>1 tk. paptika<br \>1 tk. bazsalikom<br \>150 ml szójatej<br \>(fekete)só',
        preparation: 'Előző este beáztatjuk a lencsét, majd főzés előtt jól lemossuk. A hagymát és a fokhagymát vizen megdinszteljük, ha szép barna, akkor mehet a vöröslencse meg annyi víz, hogy ellepje a lencsét.  Fűszerezzük és megfőzzük.  Ha a lencse puha, akkor a hajdinalisztet összekeverjük a szójatejjel és behabarjuk. ',
        link: 'https://teljesetel-teljeselet.com/',
    },
    {
        name: 'vöröslencse főzelék',
        img: 'https://teljesetel-teljeselet.com/wp-content/uploads/2021/03/voroslencse_fozelek_kozel-768x576.jpg',
        ingredients: '(4-5 adag)<br \>1 vörös vagy lilahagyma<br \>2 gerezd fokhagyma<br \>5 db sárgarépa<br \>500g vöröslencse<br \>1/4 tk. bors<br \>1 tk borsikafű<br \>1 tk rómaikömény<br \>2 db babárlevél<br \>szójatej<br \>só',
        preparation: 'A hagymát és a fokhagymát vizen megpároljuk. Megpucoljuk a répát és felvágjuk. Ha szép barna, akkor mehet a répa bele, ha az is megpirult picit utána beleöntjük a vöröslencsét meg egy kis vizet. Ha szükség van még folyadékra, akkor beleöntjük a növényi tejet. Fűszerezzük és megfőzzük.  ',
        link: 'https://teljesetel-teljeselet.com/',
    },
    {
        name: 'borsófőzelék',
        img: 'https://teljesetel-teljeselet.com/wp-content/uploads/2021/03/borsofozelek_kozelitt-768x553.jpg',
        ingredients: '(4-5 adag)<br \>1 vörös vagy lilahagyma<br \>2 gerezd fokhagyma<br \>2 db sárgarépa<br \>800g borsó<br \>200g vöröslencse<br \>2 ek zabpehely/liszt<br \>5 dl szójatej<br \>só<br \>1/4 tk. bors<br \>1 tk borsikafű<br \>3 tk paprika<br \>',
        preparation: 'A hagymát és a fokhagymát vizen megpároljuk. Ha szép barna, akkor mehet borsó meg egy kis víz bele.  Fűszerezzük és megfőzzük. Közben megpucoljuk a répát, felvágjuk és a vöröslencsével együtt kis vízzel megfőzzük. Ha megfütt beletesszük a turmixba a szójatejjel és a zabpehellyek együtt és üsszeturmixoljuk; mint a habarást beleöntjök. Pár percig még összefőzzük az egészet. ',
        link: 'https://teljesetel-teljeselet.com/',
    },
    {
        name: 'vöröslencsés répafőzelék',
        img: 'https://teljesetel-teljeselet.com/wp-content/uploads/2021/03/voroslencses_repafozelek_kozel-768x528.jpg',
        ingredients: '(4-5 adag)<br \>2 vörös vagy lilahagyma<br \>1 gerezd fokhagyma<br \>1000-1200g sárgarépa<br \>300g vöröslencse<br \>500 ml növényitej<br \>só<br \>1/4 tk. bors<br \>1 tk borsikafű<br \>1 ek paprika<br \>csipet római kömény és garam masala fűszerkeverék',
        preparation: 'A hagymát és a fokhagymát vizen megpároljuk. Ha szép barna, akkor mehet a megpucolt és felvágott sárgarépa és vöröslencse rá és egy kis víz bele. Fűszerezzük és beleöntjük a majd ha megfőtt, a szójatejet is belerakjuk. Pár percig még összefőzzük az egészet.',
        link: 'https://teljesetel-teljeselet.com/',
    },
    {
        name: 'spenótfőzelék',
        img: 'https://teljesetel-teljeselet.com/wp-content/uploads/2021/03/spenot_fozelekkozel-768x528.jpg',
        ingredients: '(4-5 adag)<br \>2 vörös vagy lilahagyma<br \>2 gerezd fokhagyma<br \>1kg spenót (fagyasztott is jó) <br \>1 l növényi tej<br \>100g zabliszt<br \>só<br \>bors',
        preparation: 'A hagymát és a fokhagymát vizen megpároljuk. Ha szép barna, akkor mehet a spenót és egy kis víz, majd a tej. Fűszerezzük majd ha megfőtt, botturmix-szal kicsit összeturmixolhatjuk és zablissztel behabarjuk.  Tofukockákkal tálalhatjuk.',
        link: 'https://teljesetel-teljeselet.com/',
    },
    {
        name: 'kithari',
        img: 'https://teljesetel-teljeselet.com/wp-content/uploads/2021/02/kitchari_kozel-1024x768.jpg',
        ingredients: '2 fej vörös vagy lilahagyma<br \>1,5 bögre barnarizs <br \>1,5 bögre feles sárga mungóbab (moong daal) <br \>1 púpos tk. mustármag<br \>1 púpos tk. római kömény<br \>2/3 tk. kurkuma <br \>2/3 tk. gyömbér por<br \>2/3 tk fokhagymapor<br \>2/3 tk. fekete kömény<br \>1/2 mk. bors<br \>só, víz',
        preparation: 'A szemes fűszereket kicsit megpirítjuk szárazon, majd a hagymát is hozzárakjuk és megdinszteljük egy kis vízzel. Hozzáadjuk a rizst, a mungóbabot, a fűszereket és felöntöm vízzel. Kuktába 10 percig főzzük, majd miután lezártuk, hagyjuk még az edénybe egy kicsit. ',
        link: 'https://teljesetel-teljeselet.com/',
    },
    {
        name: 'sült zöldség',
        img: 'https://teljesetel-teljeselet.com/wp-content/uploads/2021/03/sult_zoldseg_kozel-768x512.jpg',
        ingredients: '4-5 nagy krumpli<br \>2 édesburgonya<br \>3-4 cékla<br \>4-5 nagy répa<br \><br \>2-3 csésze főtt bab<br \>1 kis csokor petrezselyem',
        preparation: 'A babot előző este beáztatjuk és külön megfőzzük. A többi zöldséget megpucoljuk és hasábokra vágjuk. Érdemes a céklát és a répát először külön kb. 20 percre betenni a sütőbe, majd utána rá a krumplikat, mert nem egyforma a sülési idejük. Friss petrezselyemmel, paradicsom vagy spenót szósszal tálaljuk. ',
        link: 'https://teljesetel-teljeselet.com/',
    },
    {
        name: 'ricset',
        img: 'https://teljesetel-teljeselet.com/wp-content/uploads/2021/03/ricset_kozel-768x576.jpg',
        ingredients: '2 fej vörös vagy lilahagyma<br \>4 nagy fokhagyma<br \>1 koncerv paradicsom<br \>15 dkg rizs<br \>3 répa<br \>30 dkg bab (fehér,tartka, fekete, mungó, szója, vörös)<br \>40 dkg gomba<br \>2 db babárlevél<br \>1/2 mk. bors<br \>1 mk. őrölt kömény<br \>1 tk. paprika<br \>1/2 tk. kurkuma<br \>majoranna<br \>füst<br \>só',
        preparation: 'A babokat és a rizst előző este beáztatjuk. Aznap kuktában a babokat 10 percben előfüzzük. Közben a hagymákat csipet sóval, pici vízzel megdinszteljük, fűszerezzük, hozzáadjuk a gombát és a rizst, meg a babokat, majd  kuktában 15-20 perc alatt készre főzzük. Kukta nélkül addig főzzük, míg meg nem puhulnak a zöldségek.',
        link: 'https://teljesetel-teljeselet.com/',
    },
    {
        name: 'káposztás tészta',
        img: 'https://teljesetel-teljeselet.com/wp-content/uploads/2021/03/kaposztas_teszta_kozelrol-768x576.jpg',
        ingredients: '1 fej vöröshagyma<br \>1 kisfej kápoaszta<br \>250 g tk tészta<br \>bors<br \>só<br \>örölt kömény<br \>eritritt',
        preparation: 'A tésztát feltesszük egy kis sóval főzni. Közben a hagymát megpucoljuk és felvágjuk, a káposztát lereszeljük és együtt egy serpenyőbe megpirítjuk. Ha készen vannak egy edényben összekeverjük és főszerezzük. ',
        link: 'https://teljesetel-teljeselet.com/',
    },
    {
        name: 'rizibizi',
        img: 'https://teljesetel-teljeselet.com/wp-content/uploads/2021/03/rizibiz_kozel-1024x768.jpg',
        ingredients: '200 g rizs<br \>1 konzerv/fagyasztott (250 g) borsó<br \>1 konzerv kukorica<br \>1 konzerv/4-5 db gomba<br \>brokkoli, karfiol, zellerszár stb',
        preparation: 'A rizst előző este beáztatjuk, hogy csökkentsük az arzéntartalmát és hogy könnyebben megfőjön. Kuktában elég 10 perc hozzá.  A fagyasztott borsót megpároljuk, a gombát felszeleteljük és enyhén sós vízben megfőzzük. A végén mindet összekeverünk egy edénybe. Nagyon finom hozzá valemilyen fasírt. ',
        link: 'https://teljesetel-teljeselet.com/',
    },
    {
        name: 'Tócsni, lepcsánka, röszti, cicege, göhöny, kremzli...',
        img: 'https://teljesetel-teljeselet.com/wp-content/uploads/2021/03/tocsni_2-1024x768.jpg',
        ingredients: '(2-3 adag)<br \><br \>3 db krumpli<br \>1 kis cukkini<br \>1 bögre csicseriborsó<br \>1/2 mk bors<br \>(fekete)só<br \>fokhagyma, hagymapor ízlés szerint',
        preparation: 'Megpucoljuk a zöldségeket, majd megreszeljük. Összekeverjük az összes hozzávalóval és tapadásmentes serpenyőben vagy tepsiben kisütjük. A cukkini opcionális, lehet helyette 2 krumplit használni. ',
        link: 'https://teljesetel-teljeselet.com/',
    },
    {
        name: 'sztrapacska',
        img: 'https://teljesetel-teljeselet.com/wp-content/uploads/2021/03/sztrapacska_kozel-1024x614.jpg',
        ingredients: '(2-3 adag)<br \>30 dkg krumpli finomra reszelve<br \>20-25 dkg teljes kiőrlésű búzaliszt/csicseriborsóliszt<br \>1 darab füstölt tofu lereszelve<br \>2-3 ek. citromlé<br \>só, fekete só<br \>bors<br \>fokhagymagranulátum  vöröshagymapor<br \>200ml szójajoghurt vagy magtejföl',
        preparation: 'A reszelt krumplit kevés sóval és a liszttel sűrű masszává keverjük, majd deszkáról a forró vízbe szaggatva kifőzzük. (Minél kisebbre, annál jobban el tudjuk keverni a tofus cuccban.) A tofut lereszeljük, kikeverjük citromlével, fekete sóval, borssal, fokhagyma és vöröshagymaporral, valamint szójajoghurttal, összeforgatjuk az időközben kifőtt galuskákkal. Gombapörkölttel, savanyúkáposutával és pirított káposztával nagyon ízletes. ',
        link: 'https://teljesetel-teljeselet.com/',
    },
    {
        name: 'spenótos tészta',
        img: 'https://teljesetel-teljeselet.com/wp-content/uploads/2021/03/spenotos_teszta_kozel-1024x768.jpg',
        ingredients: '(2-3 adag)<br /><br />250 g teljeskiőrlésű vagy gluténmentes (hüvelyesből, kölesből, barnarizsből készült) tészta<br />3-4 marék spenót (fagyasztott)<br />1 tofu<br />1 ek. szójatej<br />2 ek. zabliszt<br />1 vöröshagyma<br />2 tk. misopaszta<br />1 mk. fokhagymapor<br />1/2 mk. szerecsendió<br />1 csipet bors<br />1 tk. fekete só',
        preparation: 'A tésztát külön megfőzzük. A vöröshagymát vizen megprirítjuk. Belerakjuk a spenótot, főzzük, amíg puhára megfő, közben készítünk egy öntetet (szójatej, zabliszt, fűszerek)és összevágjuk a tofut, majd beleborítjuk az öntetet a tésztával együtt és a tofut. Picit főzzük még egybe is őket és kész is.',
        link: 'https://teljesetel-teljeselet.com/',
    },
    {
        name: 'diófasírt',
        img: 'https://teljesetel-teljeselet.com/wp-content/uploads/2021/03/diofasirt_kozel-768x538.jpg',
        ingredients: '2 főtt krumpli összetörve<br \>1 nagy bögre dió darálva<br \>2 ek lenmag darálva<br \>3 kisebb vagy 2 nagyobb szelet kenyér<br \>1 füstölt tofu lereszelve<br \>2 nagy vagy több kicsi gerezd fokhagyma reszelve<br \>2 tk só<br \>2 tk pirospaprika<br \>1 tk majoránna<br \>1/2 tk bors<br \>1/2 tk kurkuma<br \>1/2 tk őrölt kömény<br \>zabliszt sűrítéshez<br \>zsemlemorzsa<br \>gondolomnyi füstaroma',
        preparation: 'A kenyeret beáztatjuk majd kicsavarjuk a vizet majd összekeverjük az összetevőket. Vizet extra nem adunk hozzá, a kenyérből is inkább kicsavarjuk amit lehet. Összegyúrjuk, és addig adunk hozzá zablisztet, amíg egy viszonylag kemény tésztává válik. Majd vizes kézzel kis kolbászkákat formázunk, majd zsemlemorzsába (vagy zablisztbe) forgatva sütőpapiros tepsibe tesszük. Kb 25 percig sütöttem, majd 5 percre még megforgatva visszatettem, de az idő a sütőtól függ. Nekünk egy régi gázsütőnk van mindenféle extra nélkül. ',
        link: 'https://teljesetel-teljeselet.com/',
    },
    {
        name: 'lilakáposztafasírt',
        img: 'https://teljesetel-teljeselet.com/wp-content/uploads/2021/03/voroskaposzta_fasirt_kozel-1024x768.jpg',
        ingredients: '500g lilakáposzta<br \>100g dió<br \>1 nagy vörös vagy lilahagyma<br \>1 gerezd fokhagyma<br \>100g zabliszt/hajdinaliszt<br \>50g csicseri liszt<br \>50g hajdinaliszt/ kukoricaliszt/rizsliszt<br \>1/2 tk. kurkuma<br \>1 tk paprika<br \>1 cs. puffasztott amarant<br \>1/2 mk. bors<br \>1-2 zellerszár<br \>növényi tej, ha szükséges<br \>só ízlés szerint',
        preparation: 'Lereszeljük a lilakáposztát. A hagymákat kicsit megdinszteljük. A diót megdaráljuk. Majd az üsszes hozzávalót egy tálban összekeverjük. Ha túl híg, akkor rakhatunk bele egy kis puffasztott amarantot, ha nem áll egészen össze, akkor egy kis növényi tejet.  Tapadásmentes serpenyőben vagy tepsiben kisütjük. ',
        link: 'https://teljesetel-teljeselet.com/',
    }
    // {
    //     name: '',
    //     img: '',
    //     ingredients: '',
    //     preparation: '',
    // }
    
]



// const levesek = [
//     'borsóleves',
//     'krumplileves',
//     'bableves',
//     'paradicsomleves',
//     'zöldbableves',
//     'frankfurti leves',
//     'zöldségleves',
//     'tökkrémleves',
// ]

// const fozelekek = [
//     'borsófőzelék',
//     'krumplifőzelék',
//     'zöldbabfőzelék',
//     'répafőzelék',
//     'spenótfőzelék',
// ]

// const egytaletelek = [
//     'paradicsomos káposzta',
//     'káposztástészta',
//     'pörkölt + feltét',
//     'töltött paprika',
//     'lecsó',
// ]

// const sultek = [
//     'rakott krumpli',
//     'sült zöldség',
//     'pizza',
//     'lencsehurka',
//     'lasagne',
// ]