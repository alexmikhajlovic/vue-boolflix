var app = new Vue ({

    el: ('#app'),
    data: {
        movies: [],
        tvSeries: [],
        apiKey: '302a53c30542f331c5da295c0142c319',
        inputQuery: '',
        language: 'en-US',
        languages: ['en', 'it', 'ja', 'de', 'es', 'fr', 'ru'],
        urlImg: 'https://image.tmdb.org/t/p/w342',
        imgPath: 'img/languages/',
        imgFormat: '.svg',
        activeClass: 'active',
    },
    methods: {

        search() {
            this.movies.splice(0);
            this.tvSeries.splice(0);
            axios
            .get('https://api.themoviedb.org/3/search/movie',{
                params: {
                    api_key: this.apiKey,
                    query: this.inputQuery,
                    language: this.language
                }
            })
            .then((result) => {
                this.movies.push(...result.data.results);
                this.inputQuery = '';
                this.vote(this.movies);
            })
            .catch((error) => alert('ERROR'));

            axios
            .get('https://api.themoviedb.org/3/search/tv',{
                params: {
                    api_key: this.apiKey,
                    query: this.inputQuery,
                    language: this.language
                }
            })
            .then((result) => {
                this.tvSeries.push(...result.data.results);
                this.inputQuery = '';
                this.vote(this.tvSeries);

            })
            .catch((error) => alert('ERROR'));
        },

        // Vote rounding
        vote(array){
            array.forEach((element) => {
                element.vote_average = parseInt(element.vote_average * 5 / 10);
            });
        },

        // Change Language
        // eng() {
        //     this.language = 'en-US';
        //     document.getElementById('selected-language').innerHTML = 'ENG';
        // },
        // ita() {
        //     this.language = 'it-IT';
        //     document.getElementById('selected-language').innerHTML = 'ITA';
        // },
        // jap() {
        //     this.language = 'ja-JA';
        //     document.getElementById('selected-language').innerHTML = 'JPN';
        // },
        // de() {
        //     this.language = 'de-DE';
        //     document.getElementById('selected-language').innerHTML = 'DEU';
        // },
        // esp() {
        //     this.language = 'es-ES';
        //     document.getElementById('selected-language').innerHTML = 'ESP';
        // },
        // fr() {
        //     this.language = 'fr-FR';
        //     document.getElementById('selected-language').innerHTML = 'FR';
        // },
        // rus() {
        //     this.language = 'ru-RU';
        //     document.getElementById('selected-language').innerHTML = 'RUS';
        // },

        changeLanguage(language, nome){

            this.language = language;
            document.getElementById('selected-language').innerHTML = language.toUpperCase();
            console.log(this.language);


        }
        
    },
    
});