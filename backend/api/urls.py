from django.urls import path, include
from . import views
urlpatterns = [
   # user section
   path("register/", views.RegisterView.as_view(), name="register"),
   path("login/", views.LoginView.as_view(), name="login"),
   path("logout/", views.LogoutView.as_view(), name="logout"),
   path("profile/", views.ProfileView.as_view(), name="profile"),
   # book section
]
# using router for book section
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r"books", views.BookViewset, basename="book")
router.register(r"authors", views.AuthorViewset, basename="author")
urlpatterns += router.urls