<?php

Route::apiResource('product','api\ProductController');

Route::post('product/{id}/update','api\ProductController@update');
Route::delete('product/{id}/delete','api\ProductController@destroy');

Route::apiResource('quotations','api\QuotationsController');
Route::apiResource('orders','api\OrdersController');

Route::get('correios','api\CorreiosController@store');