
from flask_wtf import FlaskForm
import re
from wtforms import StringField, PasswordField, SubmitField, BooleanField, Form, SelectField, HiddenField
from flask_wtf.file import FileField, FileRequired
from wtforms.validators import DataRequired, Length, Email, EqualTo, ValidationError, Regexp
#from models import  *

class LoginForm(FlaskForm):
    departDate = date('Username')
    origin = PasswordField('Password')
    destination = SubmitField("Password")
    submit = SubmitField("Login")
