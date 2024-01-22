import datetime
from pprint import pprint

from django.shortcuts import render
from django.views import View

from common.models import Gallery, Variable
from course.models import Course


class IndexView(View):
    @staticmethod
    def get(request):
        courses = Course.objects.order_by('-active')
        galleries = Gallery.objects.all()
        variables = Variable.objects.all()
        variable_dict = {k.name: k.value for k in variables}
        pprint(variable_dict)

        return render(request, 'index.html', {
            'courses': courses,
            'galleries': galleries,
            'variables': variable_dict,
            'current_year': datetime.datetime.now().year
        })
