from flask import Flask, render_template

import json

app = Flask(__name__)

@app.route('/')
def homepage():
	return render_template('home.html')

@app.route('/people')
def people():
	members = json.load(open('members.json', 'r'))
	return render_template('team.html', members = members['data'])

@app.route('/aircrafts')
def aircrafts():
	return render_template('aircrafts.html')

if __name__ == '__main__':
	app.run(debug=True)