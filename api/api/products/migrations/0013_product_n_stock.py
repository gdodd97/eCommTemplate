# Generated by Django 4.1.7 on 2023-03-11 05:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0012_product_category_product_tags'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='n_stock',
            field=models.PositiveIntegerField(default=1),
            preserve_default=False,
        ),
    ]