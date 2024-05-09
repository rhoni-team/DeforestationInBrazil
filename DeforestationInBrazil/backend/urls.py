""" URL configuration for backend app """

from django.urls import path
from backend.views import HelloRhoniView

urlpatterns = [
    path('', HelloRhoniView.as_view(), name="hello-rhoni"),
]
