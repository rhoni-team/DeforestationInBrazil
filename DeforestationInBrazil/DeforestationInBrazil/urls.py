""" URL configuration for DeforestationInBrazil project """

from django.contrib import admin
from django.urls import include, path, re_path
from core_view.views import IndexTemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('backend.urls')),
    re_path(r'^.*', IndexTemplateView.as_view(), name='entry_point'),
]
