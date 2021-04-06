from django.http.response import HttpResponse, JsonResponse
from django.http.request import HttpRequest
from .models import Product
def product_list(request):
    #SELECT * FROM core_product
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    print(products_json)
    return JsonResponse(products_json, safe = False)

def product_detail(request, product_id):
    try:
        product = Product.objects.get(id = product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'message': str(e)})
    return JsonResponse(product.to_json())