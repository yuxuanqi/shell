# -*- encoding: utf-8 -*-
"""
Light Bootstrap Dashboard - coded in Flask

Author  : AppSeed App Generator
Design  : Creative-Tim.com
License : MIT
Support : https://appseed.us/support
"""

import os

# Grabs the folder where the script runs.
basedir = os.path.abspath(os.path.dirname(__file__))


class Config():
    CSRF_ENABLED = True
    SECRET_KEY = "77tgFCdrEEdv77554##@3"

    SQLALCHEMY_TRACK_MODIFICATIONS = False

    SQLALCHEMY_DATABASE_URI = 'mysql://root:ws8dr8as3@localhost:3306/selection_health_cn?charset=utf8mb4'



