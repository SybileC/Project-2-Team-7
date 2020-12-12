#importing the necessary libraries 
import os
import pandas as pd
import numpy as np
from flask import Flask, render_template, request
import sqlite3
from flask_sqlalchemy import SQLAlchemy 


con = sqlite3.connect('db/master.sqlite')
master = pd.read_sql("SELECT * FROM master", con)


#creating an instrance of the flask app
app = Flask(__ name__)


#rendering the html template
@app.route("/")
def index():
    return render_template("index.html")












if __name__ == "__main__":
    app.run(debug=True)