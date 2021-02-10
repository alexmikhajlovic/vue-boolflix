var app = new Vue ({

    el: ('#app'),
    data: {
        apiKey: '302a53c30542f331c5da295c0142c319',
        inputQuery: '',
        language: 'en-US',
        movies: [],
        visible: true
    },
    methods: {

        search() {
            axios
            .get('https://api.themoviedb.org/3/search/movie',{
                params: {
                    api_key: this.apiKey,
                    query: this.inputQuery,
                    language: this.language
                }
            })
            .then((result) => {
                // console.log(result.data.results);
                // this.movies = (result.data.results);
                // this.movies.push(result.data.results);
                // console.log(movies)
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