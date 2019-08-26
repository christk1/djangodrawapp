from django.db import models
from datetime import datetime

# Create your models here.
class Drawing(models.Model):
    drawing = models.TextField()
    pub_date = models.DateTimeField(default=datetime.now, blank=True)
