import os
from flask import render_template, url_for
from flight import app
from heapq import nsmallest
from statistics import mean 
from operator import itemgetter 
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
	destinationplace = "LAX-sky"       
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
	quotes = getQuotes(responseDictionary)
	carriers = responseDictionary.get("Carriers")
	return render_template('home.html', title = 'Home', response = response, quotes = quotes, carriers = carriers)



def getQuotes(responseDictionary):
	"""
	#---------------------------------------DESCRIPTION--------------------------------------------------------------#
	The purpuse of this function is to retrive the Quotes from the responce object, append a 'valueForMoney'
	and an 'airlineName' value to each quote object, to return the quotes sorted by the value for money and price.
	"""
	#Get lists, quotes and carriers.(a Quote is an offer or possible route. Carriers is a list of airlines used in the any of the quotes)
	quotes = responseDictionary.get("Quotes")

	#Make a list of prices from all the quotes 
	listOfPrices = []
	for quote in quotes:
		listOfPrices.append( quote.get("MinPrice") )

	#the avg price of all flights in quotes
	avgPrice = mean(listOfPrices)

	#Get avg price of the 4 cheapest flights 
	avgCheapestFour= mean( nsmallest(4, listOfPrices) )

	#Get all carriers(Airlines) from responce object
	#carriers contails a list of airlineIds and Ariline name
	#eg.   carriers =  [ {Airlineid : 420, AirlineName : "FlyHigh Airlines"}, {Airlineid : 69, AirlineName : "Miles above Airlines"} ] 
	carriers = responseDictionary.get("Carriers")
	#Get places from responce objcet
	#places contains a list of airports, there Id and country ex...
	#eg. places = [{Id : 1492, Airportname : heathrow, city : london ect...}] 
	places = responseDictionary.get("Places")

	#Calculate valueForMoney for each quote and append the value to each quote.
	for quote in quotes:
		quote["valueForMoney"] = getValueForMoney(quote, avgPrice, avgCheapestFour, timeChosen="2020-09-02T00:00:00")
		quote["airlineName"] = getAirlineName(quote, carriers)
		quote["originName"] = GetOriginName(quote, places)
		quote["destinationName"] = GetDestinationName(quote, places)


	#Sort list quotes by valueForMoney first, and cheapest seconed
	quotes = sorted(quotes, key=lambda d: (-d['valueForMoney'], d['MinPrice']))
	return quotes


def GetOriginName(quote, places):
	"""
	#---------------------------------------DESCRIPTION--------------------------------------------------------------#
	This function takes a quotes OriginID, searches for that id in places, and returns the orginName corispondiong to that OriginID 
	"""
	originID=quote.get("OutboundLeg").get("OriginId")
	for place in places:
		if place.get("PlaceId") == originID:
			return place.get("Name")


def GetDestinationName(quote, places):
	"""
	#---------------------------------------DESCRIPTION--------------------------------------------------------------#
	This function takes a quotes  DestinationId, searches for that id in places, and returns the 
	destinationName corrisponding to that DestinationId.
	"""
	destinationID = quote.get("OutboundLeg").get("DestinationId")
	for place in places:
		if place.get("PlaceId") == destinationID:
			return place.get("Name")


def getAirlineName(quote, carriers):
	"""
	#---------------------------------------DESCRIPTION--------------------------------------------------------------#
	This function takes a quote's Id, seaches for that id in carriers, and returns the airlineName corrisponding to that id.
	"""
	#get quotes airlineID, airlineId
	airlineId = quote.get("OutboundLeg").get("CarrierIds")[0]
	#Find and return the AirlineName corrisponding to the airlineId and  
	for carriersIdAndName in carriers:
		if carriersIdAndName.get("CarrierId") == airlineId:
			return carriersIdAndName.get("Name")
				



def getValueForMoney(quote, avgPrice, avgCheapestFour, timeChosen = "2020-09-02T00:00:00" ):
	"""
	#---------------------------------------DESCRIPTION--------------------------------------------------------------#

	This algorithim Classifys or detemines the value for money or "recommentedness" of a given quote.
	The recommentedness of a quote is determined by three factors:

		* Whether the route is direct.
		* Price of the quote relative to the AVG price and Cheapest 3 prices
		* Date of departure is exactly that which was input by the user

	Based on these factors, a value is returned indicating the 'class' of the quote.
	A given quote can be attributed to 1 of 6 diffent classes, 5 being the most desirable and 0 being the least desireable.

	""" 
	#---------------------------------------VARIABLES--------------------------------------------------------------#

	#is the quote's departure date the same as the one specifide by the user 
	isCorrectDate = quote.get("OutboundLeg").get("DepartureDate") == timeChosen 

	#get the price of quote
	price=quote.get("MinPrice")

	#---------------------------------------CLASSIFING FASE----------------------------------------------------------#

	# flight is direct and costs less then $avgCheapestFour on the prefered date (Very Good Value for money!)
	if quote.get("Direct") and quote.get("MinPrice") < avgCheapestFour and isCorrectDate :       
		return 5

	#flight is direct and costs less then $avgCheapestFour regardless of the date (Pritty Good Value for money. ect..)
	elif quote.get("Direct") and quote.get("MinPrice") < avgCheapestFour :
		return 4

	#flight is direct and is either on the prefferd date or less then $avgPrice - 50
	elif quote.get("Direct") and ( isCorrectDate or quote.get("MinPrice") < avgPrice-50) :
		return 3 

	#flight is less then $avgCheapestFour regardless of whether the flight is direct or the date
	#Note if the flight is also direct, Rule2 will have already been triggerd
	elif quote.get("MinPrice") < avgCheapestFour:  
		return 2

	#flight is less then $avgPrice dollars regardless of whether the flight is direct or the date
	#Note if the flight is also direct or the date is the prefered one, Rule3 will have already been triggerd
	elif quote.get("MinPrice") < avgPrice:
		return 1
 
	#If the quote didnt trigger and of the rules 
	else:
		return 0
		
		









