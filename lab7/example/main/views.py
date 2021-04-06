from django.http.response import HttpResponse, JsonResponse
from django.http.request import HttpRequest
from datetime import datetime, timedelta
def hello(request):
    return HttpResponse('<h3>Hello</h3>')

def show_time(request, hours):
    current_time = datetime.now() + timedelta(hours=int(hours))
    return HttpResponse(f'<h1>Time:{current_time}</h1>')

# def product_list(request):
#     return HttpResponse('<h1>List of products</h1>')
#
# def product_detail(request, product_id):
#     return HttpResponse('<h1>Detail of products</h1>' + str(product_id + 1))

products = [
    {
        'id':i,
        'name':'cola',
        'price':i *1000
    }
    for i in range(10)
]


def product_list(request):
    return JsonResponse(products, safe = False)

def product_detail(request, product_id):
    for product in products:
        if(product['id'] == product_id):
            return JsonResponse(product)
    return JsonResponse({'message':"Not found"})