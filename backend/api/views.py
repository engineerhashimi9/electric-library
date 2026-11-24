from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from books.models import Author, Book,Category
from books.serializers import BookSerializer, AuthorSerializer,CategorySerializer
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
from django.shortcuts import get_object_or_404
from .permissons import CustomPermisson
from rest_framework.decorators import action

# create the user and return the user token


class RegisterView(APIView):
    serializer_class = UserRegistrationSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            refresh = RefreshToken.for_user(user)
            return Response(
                {
                    "user": UserSerializer(user).data,
                    "refresh": str(refresh),
                    "access": str(refresh.access_token),
                },
                status=status.HTTP_201_CREATED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    serializer_class = UserLoginSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data["email"]
            password = serializer.validated_data["password"]
            user = User.objects.filter(email=email).first()
            if user and user.check_password(password):
                refresh = RefreshToken.for_user(user)
                return Response(
                    {
                        "user": UserSerializer(user).data,
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
    permission_classes = [CustomPermisson]
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = {
        "title": ["exact", "in"],
        "category": ["exact", "in"],
        "author": ["exact", "in"],
        "price": ["exact", "lt", "gt"],
        "publication_date": ["exact", "lt", "gt"],
        "edition": ["exact", "lt", "gt"],
        "score": ["exact", "lt", "gt"],
        "downloads": ["exact", "lt", "gt"],
        "pages": ["exact", "lt", "gt"],
    }
    search_fields = ["title", "description"]
    ordering_fields = ["id", "title", "price", "publication_date"]
    @action(detail=False,methods=['get'])
    def get_best_20_books(self,request) :
        books=Book.objects.all().order_by("-downloads")[:20]
        serializer=self.serializer_class(books,many=True)
        return Response(serializer.data,status=200)
    @action(detail=False,methods=['get'])
    def get_best_book(self,request) :
        books=Book.objects.all().order_by("-score").first()
        serializer=self.serializer_class(books)
        return Response(serializer.data,status=200)
        


class AuthorViewset(viewsets.ModelViewSet):
    permission_classes = [CustomPermisson]
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = {
        "name": ["exact", "in"],
        "last_name": ["exact", "in"],
        "email": ["exact", "in"],
    }
    search_fields = ["name", "last_name"]
    ordering_fields = ["id"]


class BookApiView(APIView):
    permission_classes = [CustomPermisson]
    serializer_class = BookSerializer

    def get(self, request):
        books = Book.objects.all()
        serializer = self.serializer_class(books, many=True)
        return Response(serializer.data, status=200)

    def get(self, request, id):
        book = get_object_or_404(Book, pk=id, status=True)
        serializer = self.serializer_class(book)
        return Response(serializer.data, status=200)

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"detial": "object saved!"})
        else:
            return Response(serializer.errors)

    def put(self, request, id):
        book = get_object_or_404(Book, pk=id, status=True)
        serializer = self.serializer_class(book, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"detail": "object saved !"}, status=200)
        else:
            return Response(serializer.errors)

    def delete(self, request, id):
        book = get_object_or_404(Book, pk=id, status=True)
        book.delete()
        return Response({"detail": "object deleted!"})


class AuthorApiView(APIView):
    permission_classes = [CustomPermisson]
    serializer_class = AuthorSerializer

    def get(self, request):
        authors = Author.objects.all()
        serializer = self.serializer_class(authors, many=True)
        return Response(serializer.data, status=200)

    def get(self, request, id):
        author = get_object_or_404(Author, pk=id, status=True)
        serializer = self.serializer_class(author)
        return Response(serializer.data, status=200)

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"detial": "object saved!"})
        else:
            return Response(serializer.errors)

    def put(self, request, id):
        book = get_object_or_404(Book, pk=id, status=True)
        serializer = self.serializer_class(book, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"detail": "object saved !"}, status=200)
        else:
            return Response(serializer.errors)

    def delete(self, request, id):
        book = get_object_or_404(Book, pk=id, status=True)
        book.delete()
        return Response({"detail": "object deleted!"})


class CategoryViewSet(viewsets.ModelViewSet):
    permission_classes = [CustomPermisson]
    queryset = Category.objects.all()
    serializer_class = CategorySerializer