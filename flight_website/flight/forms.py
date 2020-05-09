
from flask_wtf import FlaskForm
import re
from wtforms import StringField, PasswordField, SubmitField, BooleanField, Form, TextField, HiddenField,DateField, validators
from flask_wtf.file import FileField, FileRequired
from wtforms.validators import DataRequired, Length, Email, EqualTo, ValidationError, Regexp, InputRequired
#from models import  *

class SearchForm(FlaskForm):
    departDate = DateField('Date', format="%Y-%m-%d", validators=[InputRequired(),Regexp('^(0[1-9]|[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|[1-9]|1[012])[- /.](19|20)\d\d$', message = 'Please enter the correct date format')])
    origin = TextField('Origin', id='origin_autocomplete', validators=[InputRequired()])
    destination = TextField('Destination', id='dest_autocomplete', validators=[InputRequired()])
    submit = SubmitField("Fetch Quotes")
