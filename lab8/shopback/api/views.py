from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse
from .models import Product, Category

def get_products(request):
    products = Product.objects.all()
    return JsonResponse([product.to_json() for product in products], safe = False)

def get_product_by_id(request, product_id):
    try:
        product = Product.objects.get(id = product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'message':str(e)})
    return JsonResponse(product.to_json())

def get_categories(request):
    categories = Category.objects.all()
    return JsonResponse([category.to_json() for category in categories], safe = False)

def get_category_by_id(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'message': str(e)})
    return JsonResponse(category.to_json())