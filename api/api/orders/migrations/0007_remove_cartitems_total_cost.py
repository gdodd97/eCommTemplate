# Generated by Django 4.1.7 on 2023-03-27 20:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0006_remove_cartitems_promos'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cartitems',
            name='total_cost',
        ),
    ]
