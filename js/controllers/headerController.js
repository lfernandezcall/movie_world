angular.module('mainApp')
    .controller('headerController', function($scope, $rootScope, dataService) {

        $scope.getData = function(e) {
            e.preventDefault()
            var _movieName = $scope.userSearch
            dataService.getMoviesArray(_movieName)
                .then(function(response) {
                    var movieObjectArray = response.data.results
                    var newMovieObjectArray = []
                    console.log(movieObjectArray)
                    movieObjectArray.forEach(function(movie, key) {
                        if (movie.poster_path) {
                            newMovieObjectArray.push(movieObjectArray[key])
                        }
                    })
                    $rootScope.movies = newMovieObjectArray
                })

            var _tvName = $scope.userSearch

            dataService.getTVArray(_tvName)
                .then(function(response) {
                    var tvObjectArray = response.data.results
                    var newTvObjectArray = []
                    console.log(tvObjectArray)
                    tvObjectArray.forEach(function(tv, key) {
                        if (tv.poster_path) {
                            newTvObjectArray.push(tvObjectArray[key])
                        }
                    })
                    $rootScope.tvs = newTvObjectArray
                })

            dataService.getGenreIdMovie()
                .then(function(response) {
                    var genresIdArrayMovie = response.data.genres
                    var idCode = $scope.movies
                        // console.log(response.data.genres)
                        // console.log(idCode)
                    var arrayGenre = []
                    idCode.forEach(function(genreA, keyA) {
                        genresIdArrayMovie.forEach(function(genreB, keyB) {
                            for (var i = 0; i <= idCode.length; i++) {
                                if (genreA.genre_ids[i] === genreB.id) {
                                    arrayGenre.push(genreB.name)
                                    console.log(genreB.name)

                                }
                            }
                        })
                        console.log(arrayGenre)
                    })
                })


            dataService.getGenreIdTv()
                .then(function(response) {
                    console.log(response.data.genres)
                })

        }



    })
