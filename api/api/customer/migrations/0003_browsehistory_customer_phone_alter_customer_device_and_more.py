# Generated by Django 4.1.7 on 2023-03-22 21:51

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0025_product_category'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('customer', '0002_rename_browsesession_browserhistory'),
    ]

    operations = [
        migrations.CreateModel(
            name='BrowseHistory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timestamp', models.DateTimeField(default=django.utils.timezone.now)),
            ],
            options={
                'ordering': ['-timestamp'],
            },
        ),
        migrations.AddField(
            model_name='customer',
            name='phone',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='customer',
            name='device',
            field=models.UUIDField(blank=True, default=uuid.uuid4, null=True, unique=True),
        ),
        migrations.DeleteModel(
            name='BrowserHistory',
        ),
        migrations.AddField(
            model_name='browsehistory',
            name='customer',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='customer.customer'),
        ),
        migrations.AddField(
            model_name='browsehistory',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.product'),
        ),
        migrations.AddField(
            model_name='browsehistory',
            name='user',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
