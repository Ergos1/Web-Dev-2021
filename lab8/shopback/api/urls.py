from django.contrib import admin
from django.urls import path, include
from .views import get_products, get_product_by_id, get_categories, get_category_by_id
urlpatterns = [
    path('products/', get_products),
    path('products/<int:id>/', get_product_by_id),
    path('categories/', get_categories),
    path('categories/<int:id>/', get_category_by_id)
]