from django.db import migrations

def create_data(apps, schema_editor):
    Member = apps.get_model('members', 'Member')
    Member(name="Myobius", email="shpuntenko.oa@phystech.edu", document="hello", phone="666").save()

class Migration(migrations.Migration):

    dependencies = [
        ('members', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]