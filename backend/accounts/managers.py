'''
created a custom user manager to handle user creation and superuser creation
'''

from django.contrib.auth.base_user import BaseUserManager




# using default functionality by inheriting base user manager for 
class CustomUserManager(BaseUserManager):
    # for normal user
    def create_user(self, email, mobile, first_name, last_name, password, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, mobile=mobile, first_name=first_name, last_name=last_name, **extra_fields)
        user.set_password(password)
        user.save(using = self._db)         # user.save(using=self._db)
        return user

    # for admin user
    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        user = self.create_user(email, password, **extra_fields)
        return user