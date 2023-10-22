import requests
import json
from deep_translator import GoogleTranslator

arquivo = open('usina.json')
dados = json.load(arquivo)

api_key = "574c53b37ce9a2286082e4e49e379694"
lat = -23.305373
lon = -51.1615515

url = f'http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={api_key}'

response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    tempK = data['main']['temp']
    umidade = data['main']['humidity']
    tempC = float(tempK) - 273.15 #converte Kelvin
    desc = data['weather'][0]['description']
    desc = GoogleTranslator(source='auto', target='pt').translate(desc)

    x = {
    	"temperatura" : tempC,
    	"umidade" : umidade,
    	"descricao" : desc
    }

    print(f'Umidade: {umidade} %')
    print(f'Umidade: {umidade} %')
    print(f'Descrição: {desc}')

    response = json.dumps(x)

else:
    print('Error fetching data')