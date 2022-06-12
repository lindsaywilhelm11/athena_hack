from flask import Flask, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__, static_folder='../ui/dist', static_url_path='')
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://tmp/test.db'
db = SQLAlchemy(app)


@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run()
