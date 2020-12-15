import os

import datetime as dt
import numpy as np
import pandas as pd

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

#################################################
# Database Setup
#################################################

engine = create_engine("sqlite:///db/fifa_players.sqlite")
con = engine.connect()
con.execute("SELECT * FROM player_table")

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(engine, reflect=True)

# Save references to each table
players = Base.classes.player_table

print(players)

# # Create our session (link) from Python to the DB 
# session = Session(engine)

#################################################
# Flask Routes
#################################################

@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

@app.route("/players")
def players():
    """Return the homepage."""
    return "players"

if __name__ == '__main__':
    app.run(debug=True)

