from flask import Flask, send_from_directory, abort
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

from datetime import datetime
from os import environ

app = Flask(__name__, static_folder='../ui/dist', static_url_path='')
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get("DATABASE_URI")
db = SQLAlchemy(app)
CORS(app)


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


def format_simple_report(report):
    return {
        "employer_name": report.employer_name,
        "diff_median_hourly_percent": report.diff_median_hourly_percent,
        "company_link": report.company_link,
        "date_submitted": report.date_submitted,
        "post_code": report.post_code
    }


@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/all-reports')
def get_data():
    reports = PayGapReport.query.order_by(PayGapReport.id.asc()).all()
    report_list = []
    for report in reports:
        report_list.append(format_simple_report(report))
    try:
        return {"reports": report_list}
    except Exception as e:
        # Can be replaced with rendering a 500 status code page template
        return (str(e))


@app.route('/company/<string:company>')
def get_company_data(company):
    company = PayGapReport.query.filter_by(
        employer_name=company).one()
    formatted_report = format_simple_report(company)
    try:
        return {"company": formatted_report}
    except Exception as e:
        # Can be replaced with rendering a 500 status code page template
        return (str(e))


if __name__ == '__main__':
    app.run()
