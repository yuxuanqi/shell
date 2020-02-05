# -*- encoding: utf-8 -*-
"""
Flask Boilerplate
Author: AppSeed.us - App Generator 
"""

from app         import db
from flask_login import UserMixin

from . common    import COMMON, STATUS, DATATYPE

class User(UserMixin, db.Model):

    id          = db.Column(db.Integer,     primary_key=True)
    user        = db.Column(db.String(64),  unique = True)
    email       = db.Column(db.String(120), unique = True)
    name        = db.Column(db.String(500))
    role        = db.Column(db.Integer)
    password    = db.Column(db.String(500))
    password_q  = db.Column(db.Integer)

    def __init__(self, user, password, name, email):
        self.user       = user
        self.password   = password
        self.password_q = DATATYPE.CRYPTED
        self.name       = name
        self.email      = email

        self.group_id = None
        self.role     = None

    def __repr__(self):
        return '<User %r>' % (self.id)

    def save(self):

        # inject self into db session    
        db.session.add ( self )

        # commit change and save the object
        db.session.commit( )

        return self 
class gs_top_30_asin_count(db.Model):
    day          = db.Column(db.String(45), primary_key=True)
    buyable_asin_count        = db.Column(db.String(45))
    total_asin_count       = db.Column(db.String(45))
    buyable_percentage        = db.Column(db.String(45))
    buyable_asin_goal        = db.Column(db.String(45))

    def __init__(self, day, buyable_asin_count, total_asin_count, buyable_percentage,buyable_asin_goal):
        self.day       = day
        self.buyable_asin_count   = buyable_asin_count
        self.total_asin_count = total_asin_count
        self.buyable_percentage       = buyable_percentage
        self.buyable_asin_goal      = buyable_asin_goal


    def save(self):

        # inject self into db session
        db.session.add ( self )

        # commit change and save the object
        db.session.commit( )

class gs_top_30_asin_gms(db.Model):
    day          = db.Column(db.String(45), primary_key=True)
    buyable_asin_gms        = db.Column(db.String(45))
    total_gms       = db.Column(db.String(45))
    buyable_asin_gms_percent        = db.Column(db.String(45))
    gms_total        = db.Column(db.String(45))

    def __init__(self, day, buyable_asin_gms, total_gms, buyable_asin_gms_percent,gms_total):
        self.day       = day
        self.buyable_asin_gms   = buyable_asin_gms
        self.total_gms = total_gms
        self.buyable_asin_gms_percent       = buyable_asin_gms_percent
        self.gms_total      = gms_total


    def save(self):

        # inject self into db session
        db.session.add ( self )

        # commit change and save the object
        db.session.commit( )

class overall_table_gv_weight_buyability(db.Model):
    month          = db.Column(db.String(45), primary_key=True)
    buyable_gv        = db.Column(db.String(45))
    total_gv       = db.Column(db.String(45))
    gv_weighted_persentage        = db.Column(db.String(45))
    gv_weighted_goal        = db.Column(db.String(45))

    def __init__(self, month, buyable_gv, total_gv, gv_weighted_persentage,gv_weighted_goal):
        self.month       = month
        self.buyable_gv   = buyable_gv
        self.total_gv = total_gv
        self.gv_weighted_persentage       = gv_weighted_persentage
        self.gv_weighted_goal      = gv_weighted_goal


    def save(self):

        # inject self into db session
        db.session.add ( self )

        # commit change and save the object
        db.session.commit( )

class gs_weekly_none_buyable_top_asin_count(db.Model):
    week          = db.Column(db.String(45), primary_key=True)
    buyable_asin_count        = db.Column(db.String(45))
    total_asin_count       = db.Column(db.String(45))
    asin_count_percentage        = db.Column(db.String(45))
    asin_count_goal        = db.Column(db.String(45))

    def __init__(self, week, buyable_asin_count, total_asin_count, asin_count_percentage,asin_count_goal):
        self.week       = week
        self.buyable_asin_count   = buyable_asin_count
        self.total_asin_count = total_asin_count
        self.asin_count_percentage       = asin_count_percentage
        self.asin_count_goal      = asin_count_goal


    def save(self):

        # inject self into db session
        db.session.add ( self )

        # commit change and save the object
        db.session.commit( )

class gs_weekly_none_buyable_top_asin_gms(db.Model):
    week          = db.Column(db.String(45), primary_key=True)
    buyable_asin_gms        = db.Column(db.String(45))
    total_asin_gms       = db.Column(db.String(45))
    asin_gms_percentage        = db.Column(db.String(45))
    asin_gms_goal        = db.Column(db.String(45))

    def __init__(self, week, buyable_asin_gms, total_asin_gms, asin_gms_percentage,asin_gms_goal):
        self.week       = week
        self.buyable_asin_gms   = buyable_asin_gms
        self.total_asin_gms = total_asin_gms
        self.asin_gms_percentage       = asin_gms_percentage
        self.asin_gms_goal      = asin_gms_goal


    def save(self):

        # inject self into db session
        db.session.add ( self )

        # commit change and save the object
        db.session.commit( )