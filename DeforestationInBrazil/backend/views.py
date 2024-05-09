""" View to load hello rhoni testing template """
from django.views.generic.base import TemplateView


class HelloRhoniView(TemplateView):
    """Loads hello rhoni template
    """

    def get_template_names(self):
        template_name = 'hello.html'
        return template_name
