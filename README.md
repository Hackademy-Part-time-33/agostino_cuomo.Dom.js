Traccia 1:
Lavora con il DOM:
crea una pagina HTML con 3 paragrafi e 3 bottoni.
Il primo bottone dovra’ cambiare il colore del testo dei paragrafi in modo casuale.
ogni paragrafo dovra' avere un colore diverso.
il secondo dovra’ rendere il testo dei paragrafi in grassetto.
il terzo dovra’ far scomparire e ricomparire i paragrafi.

TIPS:
ricordati della proprieta’ display: none in CSS!
i colori su CSS sono formati da R, G e B. Quindi puoi settare un colore random semplicemente randomizzando questi tre valori e mettendoli insieme. Scopri come.

Traccia 2:
Crea un file html con le seguenti caratteristiche:
un input per il titolo
una textarea per inserire un paragrafo
un bottone per creare l’articolo
Al click sul bottone, crea un articolo popolato dai valori prelevati dai due input
inserire nell’articolo anche la data di pubblicazione tramite questa istruzione → Date - JavaScript | MDN
let date = new Date();
let formatDate = date.toLocaleDateString()
