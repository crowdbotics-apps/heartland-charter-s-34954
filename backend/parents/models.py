from django.db import models

from users.models import User

class Parent(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    accepts_terms_conditions = models.BooleanField(default=False)
    accepts_privacy_policy = models.BooleanField(default=False)
