from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from models import db, User, MentorshipRequest

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:anusha@localhost/Menthub'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)