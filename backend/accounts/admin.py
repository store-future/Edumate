# app/admin.py
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _
from .models import CustomUser

class UserAdmin(BaseUserAdmin):
    # Display already existed user fields in admin panel 
    fieldsets = (
        (_('Credentials'), {'fields': ('email', 'password')}),
        (_('Personal info'), {'fields': ('first_name', 'last_name', 'mobile')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )
    # Display  new user fields in admin panel 
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'first_name', 'last_name', 'mobile', 'password1', 'password2'),
        }),
    )
    list_display = ('email', 'first_name', 'last_name', 'is_staff', 'mobile')
    search_fields = ('email', 'first_name', 'last_name', 'mobile')
    ordering = ('email',)

admin.site.register(CustomUser, UserAdmin)
