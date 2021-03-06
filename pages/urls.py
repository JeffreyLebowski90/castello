from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('categories', views.categories, name='categories'),
    path('product', views.product, name='product'),
    path('cart', views.cart, name='cart'),
]
