from django.contrib import admin
from .models import Author, Book,Category, AuthorFa, BookFa, CategoryFa
# Register your models here.

admin.site.register(Author)
admin.site.register(Book)
admin.site.register(Category)
admin.site.register(AuthorFa)
admin.site.register(BookFa)
admin.site.register(CategoryFa)
