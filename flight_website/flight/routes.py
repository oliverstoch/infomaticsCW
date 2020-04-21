import os
from flask import render_template, url_for
from flight import app
from heapq import nsmallest
from statistics import mean 
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
	#IF TOO MANY QUOTES SWITCH KEY!!!!
	#e9b2718b05mshcc5900c72ea4c29p1ccf54jsncf4f4e5f093c
    #e9dd7bf803mshdf38afc80a64cfap197f5cjsn980ff6c6c303


    #Query Skyscanner API for Quotes.
	response = requests.request("GET", url, headers=headers, params=querystring)

	#Convert responce to Dictionary.
	responseDictionary = response.json()

	#Get lists, quotes and carriers.(a Quote is an offer or possible route. Carriers is a list of airlines used in the any of the quotes)
	quotes = responseDictionary.get("Quotes")
	carriers = responseDictionary.get("Carriers")

	#Calculate valueForMoney for each quote and append the value to each quote.
	for quote in quotes:
		quote["valueForMoney"] =  valueForMoney(quotes, quote, timeChosen="2020-09-02T00:00:00")

	# Sort list quotes by valueForMoney with the best first
	quotes = sorted(quotes, key=lambda k: k['valueForMoney'],reverse=True) 

	return render_template('home.html', title = 'Home', response = response, quotes = quotes, carriers = carriers)


def valueForMoney(quotes, quote, timeChosen = "2020-09-02T00:00:00" ):
	"""
	This algorithim Classifys or detemines the value for money or "recommentedness" of a given quote.
	The recommentedness of a quote is determined by three factors:

		* Whether the route is direct.
		* Price of the quote relative to the AVG price and Cheapest 3 prices
		* Date of departure is exactly that which was input by the user

	based on these factors, a value is returned indicating the 'class' of the quote.
	A given quote can be attributed to 1 of 6 diffent classes, 5 being the most desirable and 0 being the least desireable

	""" 

	#print(quote.get("Direct") , quote.get("MinPrice") , quote.get("OutboundLeg").get("DepartureDate") )


	#----------------------------------------COMPUTATIONS---------------------------------------------------------#
	
	#Make a list of prices from all the quotes 
	listOfPrices = []
	for qu in quotes:
		listOfPrices.append( qu.get("MinPrice"))

	#the avg price of all flights
	avgPrice = mean(listOfPrices)

	#get avg price of the 3 cheapest flights 
	avgCheapestThree = mean( nsmallest(3, listOfPrices) )

	#is the quote's departure date the same as the one specifide by the user 
	isCorrectDate = quote.get("OutboundLeg").get("DepartureDate") == timeChosen 



	#---------------------------------------CLASSIFING FASE----------------------------------------------------------#

	# flight is direct and costs less then $avgCheapestThree on the prefered date (Very Good Value for money!)
	if quote.get("Direct") and quote.get("MinPrice") < avgCheapestThree and isCorrectDate :       
		return 5

	#flight is direct and costs less then $avgCheapestThree regardless of the date (Pritty Good Value for money. ect..)
	elif quote.get("Direct") and quote.get("MinPrice") < avgCheapestThree :
		return 4

	#flight is direct and is either on the prefferd date or less then $avgPrice
	elif quote.get("Direct") and ( isCorrectDate or quote.get("MinPrice") < avgPrice ) :
		return 3 

	#flight is less then $avgCheapestThree regardless of whether the flight is direct or the date
	#Note if the flight is also direct, Rule2 will have already been triggerd
	elif quote.get("MinPrice") < avgCheapestThree :
		return 2

	#flight is less then $avgPrice dollars regardless of whether the flight is direct or the date
	#Note if the flight is also direct or the date id the prefered one, Rule3 will have already been triggerd
	elif quote.get("MinPrice") < avgPrice:
		return 1

	#If the quote didnt trigger and of the rules 
	else:
		return 0
		
		









