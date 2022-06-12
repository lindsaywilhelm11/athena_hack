from flask import Flask, send_from_directory
from flask_sqlalchemy import SQLAlchemy

from datetime import datetime
from os import environ

app = Flask(__name__, static_folder='../ui/dist', static_url_path='')
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get("DATABASE_URI")
db = SQLAlchemy(app)


class PayGapReport(db.Model):
    __tablename__ = "pay_gap_data"
    id = db.Column(db.Integer, primary_key=True)
    employer_name = db.Column(db.String(255), nullable=False)
    employer_id = db.Column(db.Integer, nullable=False)
    address = db.Column(db.String(255), nullable=False)
    post_code = db.Column(db.String(255), nullable=False)
    company_number = db.Column(db.String(255))
    sic_code = db.Column(db.String(255))
    diff_mean_hourly_percent = db.Column(db.Numeric)
    diff_median_hourly_percent = db.Column(db.Numeric)
    diff_mean_bonus_percent = db.Column(db.Numeric)
    diff_median_bonus_percent = db.Column(db.Numeric)
    male_bonus_percent = db.Column(db.Numeric)
    female_bonus_percent = db.Column(db.Numeric)
    male_lower_quartile = db.Column(db.Numeric)
    female_lower_quartile = db.Column(db.Numeric)
    male_lower_middle_quartile = db.Column(db.Numeric)
    female_lower_middle_quartile = db.Column(db.Numeric)
    male_upper_middle_quartile = db.Column(db.Numeric)
    female_upper_middle_quartile = db.Column(db.Numeric)
    male_top_quartile = db.Column(db.Numeric)
    female_top_quartile = db.Column(db.Numeric)
    company_link = db.Column(db.String(255))
    responsible_person = db.Column(db.String(255))
    employer_size = db.Column(db.String(255))
    current_company_name = db.Column(db.String(255))
    submitted_after_deadline = db.Column(db.String(255))
    due_date = db.Column(db.Date)
    date_submitted = db.Column(db.DateTime)

    def __repr__(self):
        return f"PayGapReport: {self.employer_name}"

    def __init__(self, employer_name):
        self.employer_name = employer_name


def format_report(report):
    return {
        "employer_name": report.employer_name,
        "diff_median_hourly_percent": report.diff_median_hourly_percent,
        "company_link": report.company_link,
        "date_submitted": report.date_submitted
    }


@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/all-reports')
def get_data():
    reports = PayGapReport.query.order_by(PayGapReport.id.asc()).all()
    report_list = []
    for report in reports:
        report_list.append(format_report(report))
    return {"reports": report_list}


if __name__ == '__main__':
    app.run()
