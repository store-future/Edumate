# app/models.py
from django.contrib.auth.models import AbstractUser, PermissionsMixin
from django.db import models
from .manager import CustomUserManager  # Ensure this is correctly imported
from django.utils.translation import gettext_lazy as _

class CustomUser(AbstractUser, PermissionsMixin):
    # Remove username field as we're using email to log in
    username = None
    first_name = models.CharField(_('first name'), max_length=50)
    last_name = models.CharField(_('last name'), max_length=30)
    mobile = models.CharField(_('mobile'), max_length=15, unique=True)
    email = models.EmailField(_('email address'), max_length=255, unique=True)

    # Default Boolean fields
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    # Assigning the custom manager
    objects = CustomUserManager()

    USERNAME_FIELD = 'email'  # Use email to log in
    REQUIRED_FIELDS = ['first_name', 'last_name', 'mobile']  # Fields required for superuser creation

    def __str__(self):
        return self.email
