"use strict";


const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


let lastFilm1 = prompt("Один из последних просмотренных фильмов?", ""),
    yourRate1 = prompt("На сколько оцените его?", ""),
    lastFilm2 = prompt("Один из последних просмотренных фильмов?", ""),
    yourRate2 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastFilm1] = yourRate1;
personalMovieDB.movies[lastFilm2] = yourRate2;

console.log(personalMovieDB);


