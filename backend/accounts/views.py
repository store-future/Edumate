# accounts/views.py
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegistrationUserSerializer , LoginSerializer

@api_view(['POST'])
def Signup(request):
    serializer = RegistrationUserSerializer(data=request.data)
    if serializer.is_valid():
        print(f"After validating data received from react {request.data}")
        user = serializer.save()
        return Response({'id': user.id, 'email': user.email}, status=status.HTTP_201_CREATED)
    else:
        print("After not validating serializer.is_valid - return response Searilizer.erros")
        return Response({"User already exists"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def login(request):
    serializer = LoginSerializer(data = request.data)       # deserializing json data(request.data) into python obj
    if serializer.is_valid():
        #print(f"After validating data received from react {request.data}")
        email = serializer.validated_data['email']
        password = serializer.validated_data['password']


        # Authenticate the user
        user = authenticate(request , username = email , password = password)

        if user is not None:
            print(user)
            return Response({'Message' : 'user logged in successfully'}, status = status.HTTP_200_OK)
        else :
            return Response({"Invalid email or password"} , status =status.HTTP_400_BAD_REQUEST )

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
