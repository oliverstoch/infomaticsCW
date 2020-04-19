import os
from flask import render_template, url_for
from flight import app

import requests


@app.route("/")
@app.route("/home")
def home():

 	#These 3 will remain hardcoded i think. no need to request the user to input this info right?
	country = "US"
	currency = "USD"
	locale = "en-US"

	#These will be input from the user (Hardcoded for now)
	originplace = "SFO-sky" 
	destinationplace = "JFK-sky"       
	outboundpatialdate = "2020-09-01"    


	#url = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/{0}/{1}/{2}/{3}/{4}/{5}".format(
	url = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/{0}/{1}/{2}/{3}/{4}/{5}".format(
		country,
		currency,
		locale,
		originplace ,
		destinationplace ,
		outboundpatialdate 
	)

	#optional configurations
	querystring = {
		#i think we can change this one to something else....
		#"inboundpartialdate":"2020-12-01"
		}

	headers = {
	    'x-rapidapi-host': "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
	    'x-rapidapi-key': "e9dd7bf803mshdf38afc80a64cfap197f5cjsn980ff6c6c303"
	    }
	#e9b2718b05mshcc5900c72ea4c29p1ccf54jsncf4f4e5f093c
    #e9dd7bf803mshdf38afc80a64cfap197f5cjsn980ff6c6c303

	response = requests.request("GET", url, headers=headers, params=querystring)

	responseDictionary = response.json()
	quotes = responseDictionary.get("Quotes")

	
	print(type(response))
	return render_template('home.html', title='Home', response=response, quotes = quotes)


