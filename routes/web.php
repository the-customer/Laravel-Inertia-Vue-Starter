<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Home')->name('home');

Route::inertia('/about','About')->name('about');
//------------------
Route::inertia('/courses','About')->name('courses');
Route::inertia('/details','Course/Details')->name('courses.show');
//-----------------
Route::inertia('/contact','About')->name('contact');
