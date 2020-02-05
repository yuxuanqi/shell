# -*- encoding: utf-8 -*-
"""
Flask Boilerplate
Author: AppSeed.us - App Generator 
"""

from flask            import Flask
from flask_bootstrap  import Bootstrap
from flask_sqlalchemy import SQLAlchemy
from flask_login      import LoginManager
from flask_bcrypt     import Bcrypt
from flask_mail       import Mail
import os

# load RES
from . import assets  
basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)

#Configuration of application, see configuration.py, choose one and uncomment.
#app.config.from_object('app.configuration.ProductionConfig')
app.config.from_object('app.configuration.Config')

# Expose globals to Jinja2 templates
app.add_template_global(assets     , 'assets')
app.add_template_global(app.config , 'cfg'   )

db   = SQLAlchemy  (app) #flask-sqlalchemy
lm   = LoginManager(   ) #flask-loginmanager
bc   = Bcrypt      (app) #flask-bcrypt

lm.init_app(app) # init the login manager

from app import views, models
