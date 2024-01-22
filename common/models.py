from django.db import models


class Gallery(models.Model):
    image = models.ImageField(upload_to='gallery')


class Variable(models.Model):
    name = models.CharField(max_length=50)
    value = models.TextField()
    comment = models.TextField(default='')

    def __str__(self):
        return self.name
