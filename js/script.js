var app = new Vue ({

    el: ('#app'),
    data: {
        searchedMovies: [],
        searchedTvSeries: [],
        apiKey: '302a53c30542f331c5da295c0142c319',
        inputQuery: '',
        appLanguages: ['en-US', 'it-IT', 'ja-JA', 'de-DE', 'es-ES', 'fr-FR', 'ru-RU'],
        languages: ['en', 'it', 'ja', 'de', 'es', 'fr', 'ru'],
        language: 'en-US',
        urlCover: 'https://image.tmdb.org/t/p/w342',
        activeClass: 'active',
    },
    methods: {

        // Search from Input
        search() {
            this.searchedMovies.splice(0);
            this.searchedTvSeries.splice(0);

            // Movies API
            axios
            .get('https://api.themoviedb.org/3/search/movie',{
                params: {
                    api_key: this.apiKey,
                    query: this.inputQuery,
                    language: this.language
                }
            })
            .then((result) => {
                this.searchedMovies.push(...result.data.results);
                this.inputQuery = '';
                this.vote(this.searchedMovies);
            })
            .catch((error) => alert('ERROR'));

            // TV series API
            axios
            .get('https://api.themoviedb.org/3/search/tv',{
                params: {
                    api_key: this.apiKey,
                    query: this.inputQuery,
                    language: this.language
                }
            })
            .then((result) => {
                this.searchedTvSeries.push(...result.data.results);
                this.inputQuery = '';
                this.vote(this.searchedTvSeries);

            })
            .catch((error) => alert('ERROR'));
        },

        // Vote rounding
        vote(array){

            array.forEach((element) => {
                element.vote_average = parseInt(element.vote_average / 2);
            });

        },

        // Change Language
        changeLanguage(language){

            this.language = language;
            document.getElementById('selected-language').innerHTML = language.toUpperCase();
            console.log(this.language);

        }
        
    },
    
});