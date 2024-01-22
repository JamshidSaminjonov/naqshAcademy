from django.db import models


class Course(models.Model):
    title = models.CharField(max_length=50, unique=True)
    about = models.TextField()
    duration = models.IntegerField(default=0)
    price = models.PositiveIntegerField(default=0)
    active = models.BooleanField(default=False)

    def __str__(self):
        return self.title
