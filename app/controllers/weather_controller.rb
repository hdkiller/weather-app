require "net/http"

class WeatherController < ApplicationController
  def index
	url = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=#{params[:q]}&appid=#{ENV.fetch('OWM_API_KEY')}"

	resp = Net::HTTP.get_response(URI.parse(url))
	data = JSON.parse(resp.body)
	
	if data.has_key? 'main'
		resp = {
			'temperature' => data['main']['temp'],
			'condition' => data['weather'][0]['main'],
			'description'=> data['weather'][0]['description'],
			'humidity'=> data['main']['humidity'],
			'wind'=> data['wind']['speed'],
			'clouds'=> data['clouds']['all'],

			'data' => data
		}
	else
		resp = {
				'error' => 'No data'
		}
	end

	render json: resp
  end
end
