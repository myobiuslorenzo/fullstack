from django.contrib import admin
from django.urls import path
from members import views
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^api/members/$', views.members_list),
    url(r'^api/members/(?P<pk>[0-9]+)$', views.members_detail),
]
