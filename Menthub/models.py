
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))
    department = db.Column(db.String(50))
    year = db.Column(db.String(10))
    role = db.Column(db.String(10))
    bio = db.Column(db.Text)
    linkedin = db.Column(db.String(255))
    whatsapp = db.Column(db.String(20))

class MentorshipRequest(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    mentee_id = db.Column(db.Integer)
    mentor_id = db.Column(db.Integer)
    reason = db.Column(db.Text)
    help_types = db.Column(db.Text)
    preferred_time = db.Column(db.String(50))
    status = db.Column(db.String(20))
