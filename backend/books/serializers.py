from rest_framework.serializers import ModelSerializer
from books.models import Author, Book, Category


class BookSerializer(ModelSerializer):
    class Meta:
        model = Book
        fields = "__all__"

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['author'] = AuthorSerializer(instance.author).data
        representation['category'] = CategorySerializer(
            instance.category.all(), many=True).data
        print(representation, "representation")
        print(representation["category"], "representation_category")
        return representation


class AuthorSerializer(ModelSerializer):
    class Meta:
        model = Author
        fields = "__all__"


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"
