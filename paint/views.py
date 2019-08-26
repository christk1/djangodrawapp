from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .models import Drawing
# Create your views here.

def index(request):
    drawing = Drawing.objects.all()
    return render(request, 'paint/index.html', {'drawing': drawing})

def editor(request):
    return render(request, 'paint/editor.html')

def postpic(request):
    if request.method == 'POST':
        pic = request.POST['image']

        Drawing.objects.create(
            drawing = pic
        )

        return HttpResponse('')
