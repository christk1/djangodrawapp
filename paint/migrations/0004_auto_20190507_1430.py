# Generated by Django 2.2.1 on 2019-05-07 14:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('paint', '0003_drawing_pub_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='drawing',
            name='drawing',
            field=models.CharField(max_length=400),
        ),
    ]
