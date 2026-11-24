/* Novena de Aguinaldos completa + villancicos tradicionales
   Texto tradicional de la Novena: Fray Fernando de Jesús Larrea (s. XVIII), con la revisión de la Madre María Ignacia (comienzos del s. XX).
   Las consideraciones de cada día van en lenguaje actual, siguiendo los temas tradicionales. */

const NOVENA = {
es: {
  titulo: "Novena de Aguinaldos",
  orden: "Se reza cada noche del 16 al 24 de diciembre, en este orden:",
  inicio: {
    t: "Señal de la cruz y Acto de contrición",
    p: [
      "Por la señal de la Santa Cruz, de nuestros enemigos líbranos, Señor, Dios nuestro. En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén.",
      "Señor mío Jesucristo, Dios y hombre verdadero, Creador, Padre y Redentor mío; por ser vos quien sois, bondad infinita, y porque os amo sobre todas las cosas, me pesa de todo corazón haberos ofendido; también me pesa porque podéis castigarme con las penas del infierno. Ayudado de vuestra divina gracia, propongo firmemente nunca más pecar, confesarme y cumplir la penitencia que me fuere impuesta. Amén."
    ]
  },
  todosLosDias: {
    t: "Oración para todos los días",
    p: [
      "Benignísimo Dios de infinita caridad, que tanto amasteis a los hombres, que les disteis en vuestro Hijo la mejor prenda de vuestro amor, para que hecho hombre en las entrañas de una Virgen naciese en un pesebre para nuestra salud y remedio; yo, en nombre de todos los mortales, os doy infinitas gracias por tan soberano beneficio.",
      "En retorno de él os ofrezco la pobreza, humildad y demás virtudes de vuestro Hijo humanado, suplicándoos por sus divinos méritos, por las incomodidades en que nació y por las tiernas lágrimas que derramó en el pesebre, que dispongáis nuestros corazones con humildad profunda, con amor encendido, con tal desprecio de todo lo terreno, para que Jesús recién nacido tenga en ellos su cuna y more eternamente. Amén."
    ],
    nota: "Se reza tres veces el Gloria al Padre."
  },
  virgen: {
    t: "Oración a la Santísima Virgen",
    p: [
      "Soberana María, que por vuestras grandes virtudes y especialmente por vuestra humildad, merecisteis que todo un Dios os escogiera por madre suya, os suplico que vos misma preparéis y dispongáis mi alma, y la de todos los que en este tiempo hicieren esta novena, para el nacimiento espiritual de vuestro adorado Hijo.",
      "¡Oh dulcísima Madre! Comunicadme algo del profundo recogimiento y divina ternura con que lo aguardasteis vos, para que nos hagáis menos indignos de verle, amarle y adorarle por toda la eternidad. Amén."
    ],
    nota: "Se reza nueve veces el Avemaría."
  },
  jose: {
    t: "Oración a San José",
    p: [
      "¡Oh santísimo José, esposo de María y padre adoptivo de Jesús! Infinitas gracias doy a Dios porque os escogió para tan altos ministerios y os adornó con todos los dones proporcionados a tan excelente grandeza.",
      "Os ruego, por el amor que tuvisteis al Divino Niño, me abraséis en fervorosos deseos de verle y recibirle sacramentalmente, mientras en su divina esencia le veo y le gozo en el cielo. Amén."
    ],
    nota: "Se reza un Padrenuestro, un Avemaría y un Gloria al Padre."
  },
  gozos: {
    t: "Gozos",
    coro: "Dulce Jesús mío, mi Niño adorado, ¡ven a nuestras almas! ¡Ven, no tardes tanto!",
    coroCorto: "Ven, ven, ven, ven a nuestras almas, Jesús, ven, ven, ven.",
    estrofas: [
      "¡Oh Sapiencia suma del Dios soberano, que a nivel de un niño te hayas rebajado! ¡Oh Divino Niño, ven para enseñarnos la prudencia que hace verdaderos sabios!",
      "¡Oh Adonai potente, que a Moisés hablando, de Israel al pueblo diste los mandatos! ¡Ah, ven prontamente para rescatarnos, y que un niño débil muestre fuerte brazo!",
      "¡Oh raíz sagrada de Jesé, que en lo alto presentas al orbe tu fragante nardo! ¡Dulcísimo Niño, que has sido llamado lirio de los valles, bella flor del campo!",
      "¡Llave de David, que abre al desterrado las cerradas puertas del regio palacio! ¡Sácanos, oh Niño, con tu blanca mano, de la cárcel triste que labró el pecado!",
      "¡Oh lumbre de Oriente, sol de eternos rayos, que entre las tinieblas tu esplendor veamos! ¡Niño tan precioso, dicha del cristiano, luzca la sonrisa de tus dulces labios!",
      "¡Espejo sin mancha, santo de los santos, sin igual imagen del Dios soberano! ¡Borra nuestras culpas, salva al desterrado, y en forma de niño da al mísero amparo!",
      "¡Rey de las naciones, Emmanuel preclaro, de Israel anhelo, Pastor del rebaño! ¡Niño que apacientas con suave cayado ya la oveja arisca, ya el cordero manso!",
      "¡Ábranse los cielos y llueva de lo alto bienhechor rocío como riego santo! ¡Ven, hermoso Niño, ven, Dios humanado! ¡Luce, hermosa estrella! ¡Brota, flor del campo!",
      "¡Ven, que ya María previene sus brazos, do su Niño vean en tiempo cercano! ¡Ven, que ya José, con anhelo sacro, se dispone a hacerse de tu amor sagrario!",
      "¡Del débil auxilio, del doliente amparo, consuelo del triste, luz del desterrado! ¡Vida de mi vida, mi dueño adorado, mi constante amigo, mi divino hermano!",
      "¡Ven ante mis ojos, de ti enamorados! ¡Bese ya tus plantas, bese ya tus manos! ¡Prosternado en tierra, te tiendo los brazos, y aun más que mis frases te dice mi llanto!",
      "¡Ven, Salvador nuestro, por quien suspiramos! ¡Ven a nuestras almas! ¡Ven, no tardes tanto!"
    ]
  },
  nino: {
    t: "Oración al Niño Jesús",
    p: [
      "Acuérdate, ¡oh dulcísimo Niño Jesús!, que dijiste a la venerable Margarita del Santísimo Sacramento, y en persona suya a todos tus devotos, estas palabras tan consoladoras para nuestra pobre humanidad agobiada y doliente: «Todo lo que quieras pedir, pídelo por los méritos de mi infancia y nada te será negado».",
      "Llenos de confianza en ti, ¡oh Jesús!, que eres la misma verdad, venimos a exponerte toda nuestra miseria. Ayúdanos a llevar una vida santa, para conseguir una eternidad bienaventurada. Concédenos, por los méritos infinitos de tu encarnación y de tu infancia, la gracia de la cual necesitamos tanto.",
      "Nos entregamos a ti, ¡oh Niño omnipotente!, seguros de que no quedará frustrada nuestra esperanza, y de que, en virtud de tu divina promesa, acogerás y despacharás favorablemente nuestra súplica. Amén."
    ],
    nota: "Se termina con la señal de la cruz y se cantan villancicos."
  },
  basicas: {
    t: "Oraciones que se repiten",
    items: [
      ["Padrenuestro", "Padre nuestro, que estás en el cielo, santificado sea tu nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal. Amén."],
      ["Avemaría", "Dios te salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén."],
      ["Gloria al Padre", "Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén."]
    ]
  },
  dias: [
    ["Primer día · 16 de diciembre", "El Verbo eterno en el seno del Padre",
     "Antes de que existiera el mundo, el Verbo, el Hijo de Dios, vivía en el seno del Padre, en lo más alto de los cielos. Por Él fueron hechas todas las cosas: la luz, la tierra, los mares, las estrellas y el hombre mismo. Era feliz con una felicidad que no le faltaba nada.",
     "Y sin embargo, viendo al hombre perdido por el pecado, quiso bajar hasta él. No vino por necesidad, sino por amor. Ese Dios inmenso, que no cabe en los cielos, decidió hacerse pequeño para caber en un pesebre y en nuestro corazón.",
     "Pensemos esta noche en lo grande que es Aquel que viene, y en lo pequeños que somos nosotros. Preparémonos con humildad para recibirlo, como quien espera la visita más importante de su vida."],
    ["Segundo día · 17 de diciembre", "El Verbo se hace hombre en el seno de María",
     "Llegada la plenitud de los tiempos, Dios envió al ángel Gabriel a Nazaret, a una joven llamada María, desposada con José. El ángel la saludó llena de gracia y le anunció que concebiría y daría a luz un hijo, al que pondría por nombre Jesús.",
     "María, turbada pero confiada, preguntó cómo sería eso, y el ángel le explicó que el Espíritu Santo vendría sobre ella. Entonces pronunció el sí que cambió la historia: «He aquí la esclava del Señor, hágase en mí según tu palabra». En ese instante el Verbo se hizo carne.",
     "Aprendamos de María a decir sí a Dios aunque no entendamos todo. Su humildad abrió la puerta del cielo a la tierra."],
    ["Tercer día · 18 de diciembre", "Jesús en el seno de María",
     "Durante nueve meses, el Hijo de Dios vivió escondido en el seno de María. Ella fue el primer sagrario del mundo. Allí, en silencio, el Niño crecía y su Madre lo adoraba sin que nadie más lo supiera.",
     "María seguía con sus oficios de cada día en Nazaret: barría, cocinaba, iba por agua. Pero todo lo hacía con el corazón puesto en el Niño que llevaba dentro. Su vida sencilla se volvió oración continua.",
     "También nosotros podemos llevar a Jesús por dentro en medio del trabajo y las ocupaciones. Pidamos a María que nos enseñe ese recogimiento, para que nuestro corazón sea un lugar digno donde Él quiera quedarse."],
    ["Cuarto día · 19 de diciembre", "María visita a su prima Isabel",
     "Apenas supo que su prima Isabel, ya anciana, esperaba un hijo, María se puso en camino de prisa por las montañas de Judea para ayudarla. No pensó en su cansancio ni en el largo viaje: pensó en quien la necesitaba.",
     "Al oír el saludo de María, el niño Juan saltó de gozo en el vientre de Isabel, y ella, llena del Espíritu Santo, exclamó: «Bendita tú entre las mujeres y bendito el fruto de tu vientre». María respondió con el canto del Magníficat, alabando a Dios que mira la humildad de sus siervos.",
     "Donde llega María, llega Jesús, y con Él la alegría. Que esta Navidad nuestra casa también lleve a Jesús a los que están solos, enfermos o tristes."],
    ["Quinto día · 20 de diciembre", "San José, el esposo fiel",
     "José, hombre justo, se encontró ante un misterio que no entendía. Antes de que le hablara el ángel, pensó en apartarse de María en silencio para no exponerla. Pero en sueños el ángel le dijo: «No temas recibir a María, tu esposa, porque lo que en ella ha sido concebido es obra del Espíritu Santo».",
     "José despertó e hizo lo que el ángel le había mandado. No dijo palabras: obedeció. Desde entonces cuidó a María y al Niño con trabajo, paciencia y ternura, sin buscar nunca ser el centro.",
     "Pidamos a San José que proteja a nuestras familias, que nos enseñe a confiar cuando no entendemos y a servir sin hacer ruido."],
    ["Sexto día · 21 de diciembre", "El viaje a Belén",
     "El emperador César Augusto ordenó que todos se empadronaran, cada uno en su ciudad de origen. José, que era de la familia de David, tuvo que viajar de Nazaret a Belén con María, que estaba a punto de dar a luz.",
     "Fueron varios días de camino por senderos difíciles, con frío de noche y sol de día. María, en su estado, aceptó las incomodidades sin quejarse, sabiendo que así se cumplían las profecías: el Mesías nacería en Belén, la ciudad de David.",
     "Dios se vale aun de las órdenes de los poderosos para cumplir sus planes. Acompañemos esta noche a María y a José en su camino, y ofrezcamos nuestras propias fatigas con la misma paciencia."],
    ["Séptimo día · 22 de diciembre", "No había lugar en la posada",
     "Al llegar a Belén, cansados y de noche, José fue de puerta en puerta buscando dónde pasar la noche. Pero el pueblo estaba lleno de gente por el empadronamiento, y en todas partes le cerraron la puerta. No había lugar para ellos en la posada.",
     "El que es dueño del mundo no encontró sitio entre los suyos. Y sin embargo, María y José no perdieron la paz: siguieron buscando, confiando en que Dios proveería.",
     "Preguntémonos con sinceridad si en nuestra vida hay lugar para Jesús, o si lo tenemos todo tan lleno de afanes, cosas y ruido que también le cerramos la puerta. Abrámosle hoy el corazón."],
    ["Octavo día · 23 de diciembre", "El portal de Belén",
     "Rechazados en el pueblo, José y María salieron a las afueras y encontraron una cueva que servía de establo para los animales. Era un lugar pobre, frío y oscuro, con un pesebre donde comían el buey y la mula.",
     "José limpió como pudo el lugar, preparó un poco de paja y María dispuso los pañales para el Niño que estaba por nacer. Ese establo humilde iba a convertirse en el lugar más santo de la tierra.",
     "Dios no escogió un palacio, sino la pobreza. Así nos enseña que lo que vale no es lo que tenemos, sino el amor con que recibimos. Preparemos nuestro corazón como un pesebre: limpio, sencillo y dispuesto."],
    ["Noveno día · 24 de diciembre", "El nacimiento del Niño Dios",
     "A la medianoche, en el silencio de Belén, María dio a luz a su Hijo, lo envolvió en pañales y lo acostó en el pesebre. El Hijo eterno de Dios nació pequeño, pobre y necesitado de abrigo, para que nadie tuviera miedo de acercarse a Él.",
     "En los campos cercanos, unos pastores que cuidaban sus rebaños vieron una gran luz, y un ángel les dijo: «Os anuncio una gran alegría: hoy os ha nacido un Salvador, que es Cristo el Señor». Y una multitud de ángeles cantaba: «Gloria a Dios en las alturas y en la tierra paz a los hombres que ama el Señor». Los pastores fueron corriendo y encontraron a María, a José y al Niño.",
     "Esta es la noche que hemos esperado. Acerquémonos al pesebre como los pastores, con sencillez y alegría, y digámosle al Niño que se quede para siempre en nuestro hogar."]
  ]
},
en: {
  titulo: "Christmas Novena (Novena de Aguinaldos)",
  orden: "Prayed every night from December 16 to 24, in this order. (English translation for reference; the traditional prayers are in Spanish.)",
  inicio: { t: "Sign of the cross and Act of contrition", p: [
    "By the sign of the Holy Cross, deliver us from our enemies, Lord our God. In the name of the Father, and of the Son, and of the Holy Spirit. Amen.",
    "My Lord Jesus Christ, true God and true man, my Creator, Father and Redeemer: because you are who you are, infinite goodness, and because I love you above all things, I am heartily sorry for having offended you. With the help of your grace I firmly resolve never to sin again, to go to confession and to do the penance given to me. Amen."] },
  todosLosDias: { t: "Prayer for every day", p: [
    "Most kind God of infinite charity, who so loved mankind that you gave us your Son as the greatest pledge of your love, so that, made man in the womb of a Virgin, he might be born in a manger for our salvation: in the name of all people, I give you endless thanks for so great a gift.",
    "In return I offer you the poverty, humility and every virtue of your Son made man, and I ask you, by his merits, by the hardships in which he was born and by the tender tears he shed in the manger, to prepare our hearts with deep humility, burning love and detachment from earthly things, so that the newborn Jesus may have his cradle in them and dwell there forever. Amen."],
    nota: "Pray the Glory Be three times." },
  virgen: { t: "Prayer to the Blessed Virgin", p: [
    "Sovereign Mary, who by your great virtues, and especially by your humility, were chosen by God himself to be his mother: I ask you to prepare my soul, and the souls of all who pray this novena, for the spiritual birth of your beloved Son.",
    "O sweetest Mother, share with us something of the deep recollection and tenderness with which you awaited him, so that we may be less unworthy to see him, love him and adore him for all eternity. Amen."],
    nota: "Pray the Hail Mary nine times." },
  jose: { t: "Prayer to Saint Joseph", p: [
    "O most holy Joseph, spouse of Mary and foster father of Jesus: I thank God for choosing you for so high a mission and for adorning you with every gift it required.",
    "By the love you had for the Divine Child, set my heart on fire with the desire to see him and receive him, until I see and enjoy him in heaven. Amen."],
    nota: "Pray one Our Father, one Hail Mary and one Glory Be." },
  gozos: { t: "Gozos (sung in Spanish)", coro: "Sweet Jesus of mine, my beloved Child, come into our souls! Come, do not delay!", coroCorto: "Come, come, come into our souls, Jesus, come, come, come.", estrofas: null },
  nino: { t: "Prayer to the Child Jesus", p: [
    "Remember, O sweetest Child Jesus, that you said to Venerable Margaret of the Blessed Sacrament, and through her to all your devotees, these comforting words: \"Whatever you ask, ask it through the merits of my childhood and nothing will be denied you.\"",
    "Full of trust in you, O Jesus, who are truth itself, we come to lay before you all our needs. Help us to lead a holy life and reach eternal happiness. Grant us, through the merits of your incarnation and childhood, the grace we need so much.",
    "We give ourselves to you, O all-powerful Child, sure that our hope will not be disappointed and that, by your divine promise, you will hear and grant our prayer. Amen."],
    nota: "Finish with the sign of the cross and sing carols." },
  basicas: { t: "Repeated prayers", items: [
    ["Our Father", "Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen."],
    ["Hail Mary", "Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen."],
    ["Glory Be", "Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen."]] },
  dias: [
    ["Day 1 · December 16", "The eternal Word with the Father", "Before the world existed, the Word, the Son of God, lived with the Father. Through him all things were made.", "Seeing mankind lost in sin, he chose to come down to us, not out of need but out of love. The God the heavens cannot hold chose to become small enough to fit in a manger and in our hearts.", "Tonight let us think of how great is the One who comes, and prepare to receive him with humility."],
    ["Day 2 · December 17", "The Word becomes man in Mary", "God sent the angel Gabriel to Nazareth, to a young woman named Mary, engaged to Joseph, to announce that she would bear a son named Jesus.", "Troubled but trusting, Mary said the yes that changed history: \"Behold the handmaid of the Lord; be it done to me according to your word.\" In that moment the Word became flesh.", "Let us learn from Mary to say yes to God even when we don't understand everything."],
    ["Day 3 · December 18", "Jesus in Mary's womb", "For nine months the Son of God lived hidden in Mary, the world's first tabernacle, growing in silence while his Mother adored him.", "Mary kept doing her daily tasks in Nazareth, but everything was done with her heart set on the Child within her.", "We too can carry Jesus within us amid our work. Let us ask Mary to teach us that inner stillness."],
    ["Day 4 · December 19", "Mary visits Elizabeth", "When Mary learned that her elderly cousin Elizabeth was expecting, she hurried through the hills of Judea to help her.", "At Mary's greeting, the child John leapt for joy, and Elizabeth cried out, \"Blessed are you among women!\" Mary answered with the Magnificat.", "Wherever Mary goes, Jesus goes, and joy with him. May our home bring Jesus to those who are lonely, sick or sad."],
    ["Day 5 · December 20", "Saint Joseph, the faithful husband", "Joseph, a just man, faced a mystery he did not understand, until an angel told him in a dream, \"Do not be afraid to take Mary as your wife.\"", "Joseph woke up and did as the angel commanded. He said nothing; he obeyed, and cared for Mary and the Child with work, patience and tenderness.", "Let us ask Saint Joseph to protect our families and teach us to trust and to serve quietly."],
    ["Day 6 · December 21", "The journey to Bethlehem", "Caesar Augustus ordered a census, and Joseph, of the house of David, had to travel from Nazareth to Bethlehem with Mary, who was about to give birth.", "Days of hard roads, cold nights and hot sun. Mary accepted the hardships without complaint, and so the prophecy was fulfilled: the Messiah would be born in Bethlehem.", "Let us walk with Mary and Joseph tonight and offer our own weariness with the same patience."],
    ["Day 7 · December 22", "No room at the inn", "Arriving at night, Joseph went door to door looking for shelter, but the town was full and every door was closed.", "The Lord of the world found no place among his own. Yet Mary and Joseph kept their peace and trusted God.", "Is there room for Jesus in our lives, or are they so full of worries and noise that we shut the door too? Let us open our hearts today."],
    ["Day 8 · December 23", "The stable of Bethlehem", "Turned away, Joseph and Mary found a cave used as a stable, poor, cold and dark, with a manger for the animals.", "Joseph cleaned it as best he could and Mary prepared the swaddling clothes. That humble stable would become the holiest place on earth.", "God chose poverty, not a palace. Let us prepare our hearts like a manger: clean, simple and ready."],
    ["Day 9 · December 24", "The birth of the Christ Child", "At midnight, in the silence of Bethlehem, Mary gave birth to her Son, wrapped him in swaddling clothes and laid him in the manger.", "Shepherds in the fields saw a great light, and an angel said, \"I bring you good news of great joy: today a Savior is born to you, Christ the Lord.\" A multitude of angels sang, \"Glory to God in the highest, and on earth peace.\" The shepherds hurried and found Mary, Joseph and the Child.", "This is the night we have waited for. Let us come to the manger like the shepherds and ask the Child to stay in our home forever."]
  ]
}
};

/* Villancicos tradicionales (dominio público). Se cantan en español. */
const VILLANCICOS = [
  { t: "Ven a nuestras almas", en: "The Novena's own carol", coro: "Ven, ven, ven, ven a nuestras almas, Jesús, ven, ven, ven.", v: [
    "Dulce Jesús mío, mi Niño adorado, ¡ven a nuestras almas! ¡Ven, no tardes tanto!"] },
  { t: "Los peces en el río", en: "The fish in the river", coro: "Pero mira cómo beben los peces en el río, pero mira cómo beben por ver a Dios nacido. Beben y beben y vuelven a beber, los peces en el río por ver a Dios nacer.", v: [
    "La Virgen se está peinando entre cortina y cortina; los cabellos son de oro y el peine de plata fina.",
    "La Virgen lava pañales y los tiende en el romero; los pajarillos cantando y el romero floreciendo.",
    "La Virgen está lavando con un poquito jabón; se le picaron las manos, manos de mi corazón."] },
  { t: "Campana sobre campana", en: "Bell upon bell", coro: "Belén, campanas de Belén, que los ángeles tocan, ¿qué nuevas me traéis?", v: [
    "Campana sobre campana, y sobre campana una, asómate a la ventana, verás al Niño en la cuna.",
    "Recogido tu rebaño, ¿adónde vas, pastorcillo? Voy a llevar al portal requesón, manteca y vino.",
    "Campana sobre campana, y sobre campana dos, asómate a esa ventana, porque está naciendo Dios.",
    "Caminando a medianoche, ¿dónde caminas, pastor? Le llevo al Niño que nace, como a Dios, mi corazón.",
    "Campana sobre campana, y sobre campana tres, en una cruz a esta hora el Niño va a padecer."] },
  { t: "Tutaina", en: "Traditional Colombian carol", coro: "Tutaina tuturumá, tutaina tuturumaina, tutaina tuturumá, turumá, tutaina tuturumaina.", v: [
    "Los pastores de Belén vienen a adorar al Niño; la Virgen y San José los reciben con cariño.",
    "Tres reyes vienen también con incienso, mirra y oro, a ofrendar a Dios su bien como el más grande tesoro."] },
  { t: "Ande, ande, ande, la Marimorena", en: "Go on, go on, it's Christmas Eve", coro: "Ande, ande, ande, la Marimorena, ande, ande, ande, que es la Nochebuena.", v: [
    "En el portal de Belén hay estrellas, sol y luna; la Virgen y San José y el Niño que está en la cuna.",
    "En el portal de Belén gitanillos han entrado, y al Niño que está en la cuna los pañales le han robado."] },
  { t: "Dime, Niño, ¿de quién eres?", en: "Tell me, Child, whose are you?", coro: "Resuenen con alegría los cánticos de mi tierra, y viva el Niño de Dios que nació en la Nochebuena.", v: [
    "Dime, Niño, ¿de quién eres, todo vestidito de blanco? Soy de la Virgen María y del Espíritu Santo."] },
  { t: "Hacia Belén va una burra", en: "A donkey goes to Bethlehem", coro: "Yo me remendaba, yo me remendé, yo me eché un remiendo, yo me lo quité.", v: [
    "Hacia Belén va una burra, rin, rin, cargada de chocolate.",
    "Lleva su chocolatera, rin, rin, su molinillo y su anafre.",
    "María, María, ven acá corriendo, que el chocolatillo se lo están comiendo."] },
  { t: "A la nanita nana", en: "Lullaby for the Child Jesus", coro: "A la nanita nana, nanita ea, nanita ea, mi Jesús tiene sueño, bendito sea, bendito sea.", v: [
    "Fuentecilla que corres clara y sonora, ruiseñor que en la selva cantando lloras, callad mientras la cuna se balancea. A la nanita nana, nanita ea."] },
  { t: "Noche de paz", en: "Silent Night (Spanish version)", coro: "", v: [
    "Noche de paz, noche de amor, todo duerme en derredor. Entre los astros que esparcen su luz, bella anunciando al Niñito Jesús, brilla la estrella de paz, brilla la estrella de paz.",
    "Noche de paz, noche de amor, oye humilde el fiel pastor coros celestes que anuncian salud, gracias y glorias en gran plenitud, por nuestro buen Redentor, por nuestro buen Redentor.",
    "Noche de paz, noche de amor, ved qué bello resplandor luce en el rostro del Niño Jesús, en el pesebre, del mundo la luz, astro de eterno fulgor, astro de eterno fulgor."] }
];
