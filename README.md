# Hack_Society's Athena 2022 project

## How to run

## Frontend
- Ensure `npm i` has been run in `ui`
- Run `npm run build` to create dist directory for Flask to use

### Backend
- Create a .flaskenv file:
```
FLASK_APP=app
FLASK_ENV=development
DATABASE_URI=postgresql://<username>@<host>:<port>/<database_name>
```
- run ```pip install -r requirements.txt``` to install packages
- run flask from the backend directory with ```flask run```
<!-- - FINISH -->
