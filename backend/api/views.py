from django.shortcuts import render
from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from backend.books.models import Author, Book
from backend.books.serializers import BookSerializer, AuthorSerializer
from rest_framework import viewsets
from users.models import User
from users.serializers import UserSerializer, UserRegistrationSerializer, UserLoginSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

# create the user and return the user token


class RegisterView(APIView):
    serializer_class = UserRegistrationSerializer

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            token = TokenObtainPairView(serializer.instance)
            return Response({**serializer.data, "refresh": str(token), "access": str(token.access_token)}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    serializer_class = UserLoginSerializer

    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data["email"]
            password = serializer.validated_data["password"]
            user = User.objects.filter(email=email).first()
            if user and user.check_password(password):
                refresh = RefreshToken.for_user(user)
                return Response(
                    {
                        "refresh": str(refresh),
                        "access": str(refresh.access_token),
                    }
                )
        return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)


class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()  # Blacklist the refresh token
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class ProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data)


class BookViewset(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = {"title": ["exact", "in"], "category": ["exact", "in"], "author": ["exact", "in"], "price": ["exact", "lt", "gt"], "publication_date": [
        "exact", "lt", "gt"], "edition": ["exact", "lt", "gt"], "score": ["exact", "lt", "gt"], "downloads": ["exact", "lt", "gt"], "pages": ["exact", "lt", "gt"]}
    # filterset_fields=["author","category"]
    search_fields = ["content", "title"]
    ordering_fields = ["id"]


class AuthorViewset(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = {"name": ["exact", "in"], "last_name": [
        "exact", "in"], "email": ["exact", "in"]}
    search_fields = ["name", "last_name"]
    ordering_fields = ["id"]
