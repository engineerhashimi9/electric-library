from rest_framework import serializers
from books.models import Author, Book, Category,AuthorFa,BookFa,CategoryFa

# En sectoin
class BookSerializer(serializers.ModelSerializer):
    cover_image_url=serializers.SerializerMethodField()
    class Meta:
        model = Book
        fields = "__all__"

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['author'] = AuthorSerializer(instance.author).data
        representation['category'] = CategorySerializer(
            instance.category.all(), many=True).data
        return representation
    def get_cover_image_url(self,obj) :
        if not obj.cover_image :
            return None 
        request=self.context.get('request')
        url=obj.cover_image.url 
        return request.build_absolute_uri(url) if request else url 


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"
        
# Fa section
class BookSerializerFa(serializers.ModelSerializer):
    cover_image_url=serializers.SerializerMethodField()
    class Meta:
        model = BookFa
        fields = "__all__"

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['author'] = AuthorSerializerFa(instance.author).data
        representation['category'] = CategorySerializerFa(
            instance.category.all(), many=True).data
        return representation
    def get_cover_image_url(self,obj) :
        if not obj.cover_image :
            return None 
        request=self.context.get('request')
        url=obj.cover_image.url 
        return request.build_absolute_uri(url) if request else url 


class AuthorSerializerFa(serializers.ModelSerializer):
    class Meta:
        model = AuthorFa
        fields = "__all__"


class CategorySerializerFa(serializers.ModelSerializer):
    class Meta:
        model = CategoryFa
        fields = "__all__"
