
from flask_wtf import FlaskForm
import re
from wtforms import StringField, PasswordField, SubmitField, BooleanField, Form, SelectField, HiddenField,DateField, validators
from flask_wtf.file import FileField, FileRequired
from wtforms.validators import DataRequired, Length, Email, EqualTo, ValidationError, Regexp
#from models import  *

class SearchForm(FlaskForm):
    departDate = DateField('Date of Departure'  ,[validators.Length(min=4, max=25)] )
    origin = StringField('Origin',  [validators.Length(min=4, max=25)])
    destination = StringField("Destination",  [validators.Length(min=4, max=25)])
    submit = SubmitField("Fetch Quotes")
