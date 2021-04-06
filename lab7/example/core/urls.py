from django.urls import path, re_path
import core.views

urlpatterns = [
    path('products/', core.views.product_list),
    path('products/<int:product_id>/', core.views.product_detail),
]