from django.urls import path
from .views import *


urlpatterns = [
    path("signup/" , Signup ),
    path('login/' , login)

]

