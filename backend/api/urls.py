from django.urls import path
from .views.auth_views import *
from .views.feature_info_views import *
from .views.feature_intersection_views import *
from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path('api/', apiView, name="api"),
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/featureInfo/<sendInfo>/', featureInfoView, name='featureInfo'),
    path('api/intersectionInfo/<sendInfo>/',
         intersectionInfoView, name="intersectionInfo"),
]
