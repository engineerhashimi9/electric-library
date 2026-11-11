from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "name", "lastname",
                  "birth_date", "email", "created_date"]
class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["id", "name", "lastname", "birth_date", "email", "password"]

    def create(self, validated_data):
        user = User.objects.create_customer(
            email=validated_data["email"],
            password=validated_data["password"],
            name=validated_data["name"],
            lastname=validated_data["lastname"],
            birth_date=validated_data.get("birth_date"),
        )
        return user
class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    