import xml.etree.ElementTree as ET
from lxml import etree
import lxml.etree as ET


xml = '<places><country name="Canada"><province name="Ontario"><city name="London"><airport name="London International Airport" place_id="YXU" /></city></province></country><country name="United Kingdom"><province name="England"><city name="London"><airport name="London Heathrow" place_id="LHR" /><airport name="London Gatwick Airport" place_id="LGW" /><airport name="London Stansted Airport" place_id="STN" /></city></province><province name="Wales"><city name="Cardiff"><airport name="Cardiff Airport" place_id="CWL" /></city></province></country><country name="France"><province name="Île-de-France"><city name="Paris"><airport name="Charles de Gaulle Airport" place_id="CDG" /><airport name="Orly Airport" place_id="ORY" /></city></province></country><country name="Spain"><province name="Barcelona"><city name="Barcelona"><airport name="Barcelona Airport-El Prat" place_id="BCN" /></city></province></country><country name="United States"><province name="California"><city name="Los Angeles"><airport name="Los Angeles International Airport" place_id="LAX" /></city></province><province name="New York"><city name="New York City"><airport name="John F. Kennedy International Airport" place_id="JFK" /></city></province></country><country name="Japan"><province name="Tokyo"><city name="Chiba"><airport name="Narita International Airport" place_id="NRT" /></city><city name="Ōta"><airport name="Haneda Airport" place_id="HND" /></city></province></country></places>'
places = []
queries = dict()
def setupCV():
        #tree = etree.parse("cv.xml")
        root = etree.fromstring(xml)
        for airport in root.iter('airport'):
                airportname = airport.attrib.get("name")
                abb = airport.attrib.get("place_id")
                parent = airport.getparent()
                parentname = parent.get("name")
                province = parent.getparent()
                provincename = province.get("name")
                country = province.getparent()
                countryname = country.get("name")
                name = airportname + "(" + abb +")"+", " + parentname + ", " + provincename  + ", " + countryname 
                places.append(name)
                place_id = airport.attrib.get("place_id")
                queries[name]=place_id
