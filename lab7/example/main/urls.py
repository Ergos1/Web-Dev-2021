from django.urls import path, re_path
import main.views

urlpatterns = [
    path('hi/', main.views.hello),
    re_path('time/plus/(\d{2})/', main.views.show_time),
    path('products/', main.views.product_list),
    path('products/<int:product_id>/', main.views.product_detail),
]