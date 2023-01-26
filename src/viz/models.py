from django.db import models


# Create your models here.
class Values(models.Model):
    valueList = models.TextField(null=True)

    def __str__(self):
        return str(self.id)
