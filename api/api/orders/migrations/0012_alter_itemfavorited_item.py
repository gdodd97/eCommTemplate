# Generated by Django 4.1.7 on 2023-03-31 20:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0025_product_category'),
        ('orders', '0011_rename_items_itemfavorited_item'),
    ]

    operations = [
        migrations.AlterField(
            model_name='itemfavorited',
            name='item',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='favorited_items', to='products.product'),
        ),
    ]
