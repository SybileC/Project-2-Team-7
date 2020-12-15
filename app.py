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

# print(players)

# Create our session (link) from Python to the DB
session = Session(engine)

#################################################
# Flask Routes
#################################################

@app.route("/")
def index():
    """Return the homepage."""
    return (
        f"Available Routes:<br/>"
        f"/players"
    )

@app.route("/players")
def stats():
    """Return a list player data"""
    # Query all players
    sel = [
        players.short_name,
        players.age,
        players.club,
        # players.AGE,
        # players.LOCATION,
        # players.BBTYPE,
        # players.WFREQ,
    ]
    results = session.query(*sel).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    all_players = []
    import base64
    for short_name, age, club in results:
        encoded = base64.b64encode(b'{}'.format(short_name)) 
        player_dict = {}
        player_dict["short_name"] = encoded.decode('ascii') 
        player_dict["age"] = age
        player_dict["club"] = club
        all_players.append(player_dict)
    
    return jsonify(all_players)


if __name__ == '__main__':
    app.run(debug=True)

