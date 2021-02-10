var app = new Vue ({

    el: ('#app'),
    data: {
        movies: [],
        tvSeries: [],
        apiKey: '302a53c30542f331c5da295c0142c319',
        inputQuery: '',
        language: 'en-US',
        urlImg: 'https://image.tmdb.org/t/p/w185',
        visible: true
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
            })
            .catch((error) => alert('ERROR'));
        },

        // Change Language
        ita() {
            this.language = 'it-IT';
            console.log(this.language);
        },
        eng() {
            this.language = 'en-US';
            console.log(this.language);
        },
    },
    
});