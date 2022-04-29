import bloodDonation from "../images/blood-donation.png";
import chatapp from "../images/chat-app.png";
import smartHome from "../images/smart-home.png";
import taskez from "../images/taskez.png";
import weatherApp from "../images/weather-app.png";

export const projectsData = [
  {
    name: "Taskez",
    description:
      "I believe that the key to any successful business is proper management. And for it to be convenient to keep a to-do list, the task manager should be as convenient and functional as possible. That's why all sorts of task managers have a separate place in my heart.",
    image: taskez,
    code: "https://github.com/Davies-K/Taskez",
    deployment:
      "https://play.google.com/store/apps/details?id=com.taskez.io&hl=en_IN&gl=US",
    techStack: ["Flutter", "NodeJS", "MongoDB"],
  },
  {
    name: "Blood Bank",
    description:
      "The Blood Donors App puts the power to save lives in the palm of your hand. Donating blood and platelets is easier than ever with this blood donor app. Find nearby blood banks, create a blood request, find emergency blood donors around you.",
    image: bloodDonation,
    code: "https://github.com/imShakil/BloodBank",
    website: "https://www.redcrossblood.org/blood-donor-app.html",
    deployment:
      "https://play.google.com/store/apps/details?id=com.cube.arc.blood&hl=en_IN&gl=US",
    techStack: ["Flutter", "NodeJS", "MongoDB", "ExpressJS"],
  },
  {
    name: "Chat App",
    description:
      "A room / group chat app that can handle bi-directional conversations. Has a facility to share location. Can handle multiple rooms at a time.",
    image: chatapp,
    code: "https://github.com/navaneethkm004/simple-web-chat",
    deployment: "https://baron-chat-app.herokuapp.com/",
    techStack: ["NodeJS", "ExpressJS", "Socket.io", "HTML", "CSS"],
  },
  {
    name: "Weather Webapp",
    description:
      "Whether you're walking around town or just planning a vacation, you probably want to know what the weather will be like when you get where you're going. Here's a preview of the website I'd been working on that tell provides the best advice and weather warnings",
    image: weatherApp,
    code: "https://github.com/b0oml/WeatherApp",
    deployment: "https://b0oml.github.io/weatherapp/",
    techStack: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
  },
  {
    name: "Smart Home Automation",
    description:
      "Smart home is the next iPhone. Soon, everyone will have one. It's vital to take a stand against possible mistrust towards ultra-modern technologies, and make them look helpful and sympathetic, with a non-formal attitude.",
    image: smartHome,
    code: "https://github.com/abhijain2472/IoT-Smart-Home-Automation",
    website: "https://iottest-7498a.firebaseapp.com/",
    techStack: ["IOT", "ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
  },
];
