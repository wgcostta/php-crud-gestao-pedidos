<?php

Route::apiResource('product','api\ProductController');
Route::post('product/{id}/update','api\ProductController@update');
Route::apiResource('quotations','api\QuotationsController');
Route::apiResource('orders','api\OrdersController');