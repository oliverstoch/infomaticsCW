import requests

url = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2020-09-01"

querystring = {"inboundpartialdate":"2020-12-01"}

headers = {
    'x-rapidapi-host': "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    'x-rapidapi-key': "e9b2718b05mshcc5900c72ea4c29p1ccf54jsncf4f4e5f093c"
    }

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)
