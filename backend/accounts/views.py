# accounts/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import CustomUserSerializer

@api_view(['POST'])
def Signup(request):
    serializer = CustomUserSerializer(data=request.data)
    if serializer.is_valid():
        print(f"data received from react {request.data}")
        user = serializer.save()
        return Response({'id': user.id, 'email': user.email}, status=status.HTTP_201_CREATED)
    else:
        print("no data found")
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
