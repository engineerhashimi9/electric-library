from django.urls import path, include
from . import views
from users.views import RegisterView,LoginView,LogoutView,ProfileView
from books.views import BookViewset,AuthorViewset,CategoryViewSet,AuthorViewsetFa,BookViewsetFa,CategoryViewSetFa
urlpatterns = [
   # user section
   path("register/",  RegisterView.as_view(), name="register"),
   path("login/",  LoginView.as_view(), name="login"),
   path("logout/",  LogoutView.as_view(), name="logout"),
   path("profile/",  ProfileView.as_view(), name="profile"),
   # book section
]
# using router for book section
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
# En section
router.register(r"en/books",  BookViewset, basename="en-book")
router.register(r"en/authors",  AuthorViewset, basename="en-author")
router.register(r"en/categories",  CategoryViewSet, basename="en-category")
# Fa section
router.register(r"fa/books",  BookViewsetFa, basename="fa-book")
router.register(r"fa/authors",  AuthorViewsetFa, basename="fa-author")
router.register(r"fa/categories",  CategoryViewSetFa, basename="fa-category")
urlpatterns += router.urls