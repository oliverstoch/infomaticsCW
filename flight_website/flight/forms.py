
from flask_wtf import FlaskForm
import re
from wtforms import StringField, PasswordField, SubmitField, BooleanField, Form, TextField, HiddenField,DateField, validators
from flask_wtf.file import FileField, FileRequired
from wtforms.validators import DataRequired, Length, Email, EqualTo, ValidationError, Regexp
#from models import  *

class SearchForm(FlaskForm):
    departDate = DateField('Date', format="%Y-%m-%d")
    origin = TextField('Origin', id='origin_autocomplete')
    destination = TextField('Destination', id='dest_autocomplete')
    submit = SubmitField("Fetch Quotes")
