Rails.application.routes.draw do
  #pages Controller with the Method/Action "home"
  root 'pages#home'

  #A GET Request to the "About" page
    #Sending the request to the Pages Controller
  get 'about', to: 'pages#about'
end
