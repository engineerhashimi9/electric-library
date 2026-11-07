from django.db import models
from django.contrib.auth.models import (
    BaseUserManager,
    AbstractBaseUser,
    PermissionsMixin,
)
from django.urls import reverse


class UserManager(BaseUserManager):
    def create_customer(self, email, password, **kwargs):
        if not email:
            raise ValueError("email must be set!")
        email = self.normalize_email(email)
        user = self.model(email=email, **kwargs)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **kwargs):
        kwargs.setdefault("is_staff", True)
        kwargs.setdefault("is_superuser", True)
        kwargs.setdefault("is_active", True)
        kwargs.setdefault("is_verified", True)
        if kwargs.get("is_staff") is not True:
            raise ValueError("invalid operation")
        if kwargs.get("is_superuser") is not True:
            raise ValueError("invalid operation")
        return self.create_customer(email, password, **kwargs)


class User(AbstractBaseUser, PermissionsMixin):
    """
    custom customer user model
    """

    id = models.AutoField(unique=True, primary_key=True)
    name = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    birth_date = models.DateField(auto_now=False, auto_now_add=False, null=True)
    email = models.EmailField(unique=True)
    created_date = models.DateField(auto_now_add=True)
    ####
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name", "lastname"]
    is_active = models.BooleanField(default=True)
    is_verified = models.BooleanField(default=False)
    

    objects = UserManager()

    def __str__(self):
        return self.name

