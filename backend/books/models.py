from django.db import models
from django.contrib.auth import get_user_model
from django.db.models import Model
User = get_user_model()


class Author(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    job = models.CharField(max_length=200, default="")
    description = models.TextField(blank=True, null=True)


class AuthorFa(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    job = models.CharField(max_length=200, default="")
    description = models.TextField(blank=True, null=True)

# multi category for books


class Category(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)


class CategoryFa(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)


class BookFa(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    category = models.ManyToManyField(CategoryFa, related_name="books")
    price = models.DecimalField(max_digits=10, decimal_places=2)
    publication_date = models.DateField(auto_now=False, auto_now_add=False)
    edition = models.IntegerField()
    score = models.DecimalField(max_digits=3, decimal_places=2)
    downloads = models.IntegerField(default=0)
    pages = models.IntegerField()
    description = models.TextField(blank=True, null=True)


class Book(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    category = models.ManyToManyField(Category, related_name="books")
    price = models.DecimalField(max_digits=10, decimal_places=2)
    publication_date = models.DateField(auto_now=False, auto_now_add=False)
    edition = models.IntegerField()
    score = models.DecimalField(max_digits=3, decimal_places=2)
    downloads = models.IntegerField(default=0)
    pages = models.IntegerField()
    description = models.TextField(blank=True, null=True)


class UserBook(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey("books.Book", on_delete=models.CASCADE)
    downloaded_at = models.DateTimeField(auto_now_add=True)
    is_favorite = models.BooleanField(default=False)


class Review(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    review = models.TextField()
    likes = models.IntegerField(default=0)
