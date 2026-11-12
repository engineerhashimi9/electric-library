from django.serializers import ModelSerializer
from books.models import Book



class BookSerializer(ModelSerializer):
    class Meta:
        model = Book
        fields = "__all__"