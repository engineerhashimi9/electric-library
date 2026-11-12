from django.shortcuts import render
from rest_framework.views import APIView
from users.models import User
from users.serializers import UserSerializer,UserRegistrationSerializer, UserLoginSerializer
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