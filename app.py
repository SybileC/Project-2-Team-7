import os

import datetime as dt
import numpy as np
import pandas as pd
import json 

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template
# from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

#################################################
# Database Setup
#################################################

engine = create_engine("sqlite:///db/fifa_players.sqlite")
con = engine.connect()
players_df = pd.read_sql("SELECT * FROM player_table", con)

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
        players.sofifa_id,
        players.short_name,
        players.age,
        players.nationality,
        players.overall,
        players.club,
        players.value_eur,
        players.wage_eur,
        players.preferred_foot,
        players.team_position,
        players.bmi,
        players.height_in,
        players.weight_lbs
    ]
    results = session.query(*sel).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    all_players = []
    # import base64
    for sofifa_id, short_name, age, nationality, overall, club, value_eur, wage_eur, preferred_foot, team_position, bmi, height_in, weight_lbs in results:
        # encoded = base64.b64encode(b'{}'.format(short_name)) 
        player_dict = {}
        player_dict["sofifa_id"] = sofifa_id
        player_dict["short_name"] = short_name
        # player_dict["short_name"] = encoded.decode('ascii') 
        player_dict["age"] = age
        player_dict["nationality"] = nationality
        player_dict["overall"] = overall
        player_dict["club"] = club
        player_dict["value_eur"] = value_eur
        player_dict["wage_eur"] = wage_eur
        player_dict["preferred_foot"] = preferred_foot
        player_dict["team_position"] = team_position
        player_dict["bmi"] = bmi
        player_dict["height_in"] = height_in
        player_dict["weight_lbs"] = weight_lbs
        all_players.append(player_dict)

    print(all_players)
    with open("top_players.json", "w") as outfile: 
        json.dump(all_players, outfile)


    return jsonify(all_players)


if __name__ == '__main__':
    
    # Writing to data.json 
    # with open("top_players.json", "w") as outfile: 
    #     outfile.write(jsonify(all_players))

    # with open("top_players.json", "w") as outfile: 
    #     outfile.write(stats())

    app.run(debug=True)
 
  
# # Data to be written 
# dictionary ={ 
#     "name" : "sathiyajith", 
#     "rollno" : 56, 
#     "cgpa" : 8.6, 
#     "phonenumber" : "9976770500"
# } 
  
# # Serializing json  
# json_object = json.dumps(dictionary, indent = 4) 
  
# # Writing to sample.json 
# with open("sample.json", "w") as outfile: 
#     outfile.write(json_object)