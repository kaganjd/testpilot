# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('experiments', '0016_auto_20160512_1704'),
    ]

    operations = [
        migrations.AlterField(
            model_name='featurecondition',
            name='comment',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='featurecondition',
            name='operator',
            field=models.CharField(max_length=256, choices=[('', 'None')]),
        ),
    ]
