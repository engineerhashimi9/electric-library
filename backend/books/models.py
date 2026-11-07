from django.db import models
from django.db.models import get_user_model 
    
User = get_user_model()


class UserBook(models.Model):
    id = models.AutoField(unique=True, primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey("books.Book", on_delete=models.CASCADE)
    downloaded_at = models.DateTimeField(auto_now_add=True)

class Author(models.Model):
    id=models.AutoField(unique=True, primary_key=True)
    name=models.CharField(max_length=100)
    last_name=models.CharField(max_length=100)
    email=models.EmailField(unique=True)
    description=models.TextField()
    
class Category(models.Model)  :
    id=models.AutoField(primary_key=True, unique=True)
    name=models.CharField(max_length=100)
    description=models.TextField()
    
class Book(models.Model):
    id=models.AutoField(unique=True, primary_key=True)
    title=models.CharField(max_length=100)
    author=models.ForeignKey(Author, on_delete=models.CASCADE)
    category=models.ForeignKey(Category, on_delete=models.CASCADE)
    price=models.DecimalField(max_digits=10, decimal_places=2)
    publication_date=models.DateField(auto_now=False, auto_now_add=False)
    edition=models.IntegerField()
    score=models.DecimalField(max_digits=3, decimal_places=2)
    downloads=models.IntegerField(default=0)
    pages=models.IntegerField()
    