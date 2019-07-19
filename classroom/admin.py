from django.contrib import admin

from .models import User
from .models import Subject
from .models import Quiz
from .models import Question
from .models import Answer
from .models import Student
from .models import TakenQuiz
from .models import StudentAnswer


admin.site.register(User)
admin.site.register(Subject)
admin.site.register(Quiz)
admin.site.register(Question)
admin.site.register(Answer)
admin.site.register(Student)
admin.site.register(TakenQuiz)
admin.site.register(StudentAnswer)


