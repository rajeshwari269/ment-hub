# Menthub 👥📘

**Menthub** is a full-stack web platform designed to bridge the gap between college students seeking guidance (*mentees*) and those offering support (*mentors*) — all within the same academic environment.

It enables seamless mentor-mentee connections, encourages peer-driven learning, and promotes a culture of collaboration and growth.

–————————————————————————————————————–————————————————————————————————————–————————————————————————————————————–————————————————————————————————————–—————————————

## 🚀 Project Overview

Navigating college life — from academics and internships to placements and time management — can be challenging. **Menthub** was created to:

- Help students get guidance from peers in relevant areas.
- Enable students to **volunteer as mentors** based on their strengths.
- Provide a smart **profile-based matching system** using machine learning.
- Build a positive environment of support and shared growth.

Whether you're a first-year looking for advice or a final-year student ready to guide others — **Menthub** is for you.

–————————————————————————————————————–————————————————————————————————————–————————————————————————————————————–————————————————————————————————————–———————————————

## 🛠 Tech Stack

| Layer          | Technologies Used                              |
|----------------|--------------------------------------------------|
| **Frontend**   | HTML, CSS, JavaScript                           |
| **Backend**    | Python, Flask                                   |
| **Database**   | PostgreSQL, SQLAlchemy ORM                      |
| **ML Matching**| Scikit-learn (Profile-based recommendation)     |
| **Others**     | Git, GitHub, Jinja2 (Templating), Flask-WTF     |

–————————————————————————————————————–————————————————————————————————————–————————————————————————————————————–————————————————————————————————————–—————————————

## 📦 Installation Instructions

### ✅ Prerequisites:
- Python 3.10+
- PostgreSQL
- pip (Python package manager)

### 🛠️ Steps:

# Step 1: Clone the repository
git clone https://github.com/yourusername/menthub.git
cd menthub

# Step 2: Create and activate virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Step 3: Install dependencies
pip install -r requirements.txt

# Step 4: Set up PostgreSQL
# Create a database named 'menthub_db' in PostgreSQL
# Update your .env file with DB connection string
# Example: postgresql://username:password@localhost/menthub_db

# Step 5: Set environment variables
Create a `.env` file in the root directory:
FLASK_APP=app.py  
FLASK_ENV=development  
DATABASE_URL=your_postgres_connection_string  

# Step 6: Run database migrations (if any)
flask db upgrade

# Step 7: Run the Flask app
flask run

