
export default async function handler(request, res) {

    const badgelist = 
    [
      {
        "creatorName": "Robert Borysiewicz",
        "courseName": "IST 256 - Badge Card",
        "courseCategory": "Information Science and Technology",
        "courseIcon": "social:school",
        "course-color": "blue",
      },
      {
        "creatorName": "Aaron Lobitana",
        "courseName": "IST 256 - Filter",
        "courseCategory": "Information Science and Technology",
        "courseIcon": "places:all-inclusive",
        "course-color": "green",
      },
      {
        "creatorName": "Robert Borysiewicz",
        "courseName": "Wooo! Earth Day!",
        "courseCategory": "Agriculture & Natural Resources",
        "courseIcon": "places:spa",
        "course-color": "pink",
      },
      {
        "creatorName": "Bob Ross",
        "courseName": "Hmmm, Artistic!",
        "courseCategory": "Soft Skills",
        "courseIcon": "image:brush",
        "course-color": "black",
      },
      {
        "creatorName": "Bill Gates",
        "courseName": "Work, work, work",
        "courseCategory": "Technical Skills",
        "courseIcon": "work",
        "course-color": "black",
      },
      {
        "creatorName": "Nikola Tesla",
        "courseName": "I made a thing?",
        "courseCategory": "Engineering",
        "courseIcon": "image:adjust",
        "course-color": "black",
      },
      {
        "creatorName": "Neil Armstrong",
        "courseName": "Nice, Stargazer!",
        "courseCategory": "Astrology",
        "courseIcon": "image:brightness-3",
        "course-color": "black",
      },
      {
        "creatorName": "Max Verstappen",
        "courseName": "Passed, First Try!",
        "courseCategory": "Driver's Education",
        "courseIcon": "maps:directions-car",
        "course-color": "black",
      },
      {
        "creatorName": "Devin Booker",
        "courseName": "Woo! Beach Day!",
        "courseCategory": "Physical Health",
        "courseIcon": "places:beach-access",
        "course-color": "black",
      },
      {
        "creatorName": "Bob Marley",
        "courseName": "Don't worry be happy!",
        "courseCategory": "Mental Wellness",
        "courseIcon": "social:mood",
        "course-color": "black",
      },
    ];
  
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(badgelist);
  }