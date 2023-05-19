/* Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue. */

/* Bonus:
1- al click su una thumb, visualizzare in grande l’immagine corrispondente
2- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce */

const{createApp} = Vue
createApp({
    data(){
        return {
            activePosition: 2,
            games: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morales',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]
        }
    },
    methods: {
        buttonDownFunc() {
            if (this.activePosition === this.games.length - 1) {
                //reset activePosition
                this.activePosition = 0;        
            } else {
                //incrementare il valore di activePosition
                this.activePosition++;
            }
        },
        buttonUpFunc() {
            if (this.activePosition === 0) {
                //reset activePosition
                this.activePosition = this.games.length - 1;
                
            } else {
                //incrementare il valore di activePosition
                this.activePosition--;
            }
        }
    },
    mounted() {
	  //code
        console.log("ho caricato l'app");
    }
}).mount("#app")