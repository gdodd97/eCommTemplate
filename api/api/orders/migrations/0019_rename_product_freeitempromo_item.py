# Generated by Django 4.1.7 on 2023-04-05 05:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0018_remove_promo_free_item_freeitempromo_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='freeitempromo',
            old_name='product',
            new_name='item',
        ),
    ]