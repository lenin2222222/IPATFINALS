# Generated by Django 5.0.6 on 2024-07-04 04:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_item_birthplace_item_blood_type_item_citizenship_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='address',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='item',
            name='birthday',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='item',
            name='birthplace',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='item',
            name='blood_type',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='item',
            name='citizenship',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='item',
            name='civil_status',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='item',
            name='contact_no',
            field=models.TextField(max_length=11),
        ),
        migrations.AlterField(
            model_name='item',
            name='email',
            field=models.EmailField(max_length=100),
        ),
        migrations.AlterField(
            model_name='item',
            name='father_firstname',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='item',
            name='father_lastname',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='item',
            name='father_middlename',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='item',
            name='father_occupation',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='item',
            name='first_name',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='item',
            name='gender',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='item',
            name='height',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='item',
            name='last_name',
            field=models.TextField(max_length=100),
        ),
        migrations.AlterField(
            model_name='item',
            name='middle_name',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='item',
            name='mother_firstname',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='item',
            name='mother_lastname',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='item',
            name='mother_middlename',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='item',
            name='mother_no',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='item',
            name='mother_occupation',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='item',
            name='permanent_address',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='item',
            name='residential_address',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='item',
            name='weight',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='item',
            name='zipcode',
            field=models.CharField(max_length=100),
        ),
    ]
