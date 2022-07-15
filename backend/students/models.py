from django.db import models

from users.models import User

class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
