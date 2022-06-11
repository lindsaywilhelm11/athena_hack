from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://tmp/test.db'
db = SQLAlchemy(app)


@app.route('/')
def hello():
    return 'Hey!'


if __name__ == '__main__':
    app.run()
