# Generated by Django 2.2.1 on 2019-05-07 14:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('paint', '0004_auto_20190507_1430'),
    ]

    operations = [
        migrations.AlterField(
            model_name='drawing',
            name='drawing',
            field=models.CharField(max_length=1000),
        ),
    ]
