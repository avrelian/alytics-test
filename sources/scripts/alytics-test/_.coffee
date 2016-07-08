window.AlyticsTest =

  # данные
  Campaign: {}
  Goal: {}

  # представления
  Views: {
    Campaign: {}
    Goal: {}
  }

window.localStorage.clear()

$( ->
  window.alyticsTestDB = {}
  window.alyticsTest = new AlyticsTest.App
)

