const d = document;
const $form = d.getElementById("form");
const $ip = d.getElementById("ip");
const $location = d.getElementById("location");
const $timezone = d.getElementById("timezone");
const $isp = d.getElementById("isp");

export default function getLocation() {
  $form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const ip = Object.fromEntries(new FormData(e.target)).ip;
    let json;
    // ipify to get info about location address
    try {
      let res = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_nEz5ZDkZ7y61Qf7YYQvkOOLskP0ci&ipAddress=${ip}`
      );
      json = await res.json();
      console.log(res);
      console.log(json);
      $ip.textContent = json.ip;
      $location.textContent = `${json.location.country}, ${json.location.region}`;
      $timezone.textContent = `UTC ${json.location.timezone}`;
      $isp.textContent = json.isp;
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
    } catch (error) {
      let message =
        `${error.statusText}` ||
        `Something went wrong with API. Error: ${error.status}`;
      console.log(message);
    }
    // leafletjs to get map view
    let map = L.map("map").setView([json.location.lat, json.location.lng], 13);
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoiZ2FiYWt0ZWNoIiwiYSI6ImNsMmNtdDY5eDAxeDkzYnJxNTRrNGNvdGYifQ.6GtRs6OgcCAFoP4wQCrRiQ",
      }
    ).addTo(map);
  });
}
