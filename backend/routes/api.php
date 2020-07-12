<?php

Route::apiResource('product','api\ProductController');

Route::post('product/{id}/update','api\ProductController@update');
Route::delete('product/{id}/delete','api\ProductController@destroy');

Route::apiResource('quotations','api\QuotationsController');

Route::apiResource('orders','api\OrdersController');
Route::post('orders/{id}','api\OrdersController@update');

Route::post('correios','api\CorreiosController@store');