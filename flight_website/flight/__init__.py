from flask import Flask

app = Flask(__name__)
app.config['SECRET_KEY'] = 'fb7472a8616b5fcbd598e96b873a60fd9b4ac2b7a402c039'

from flight import routes

