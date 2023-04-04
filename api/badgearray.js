
export default async function handler(request, res) {

    const badgelist = 
    [
      {
        "creatorName": "Robert Borysiewicz",
        "courseName": "IST 256",
        "courseCategory": "Information Science and Technology",
        "courseIcon": "search",
        "courseColor": "red",
      },
      {
        "creatorName": "Robert Borysiewicz",
        "courseName": "IST 256",
        "courseCategory": "Information Science and Technology",
        "courseIcon": "search",
        "courseColor": "red",
      },
      {
        "creatorName": "Robert Borysiewicz",
        "courseName": "IST 256",
        "courseCategory": "Information Science and Technology",
        "courseIcon": "search",
        "courseColor": "red",
      },
      {
        "creatorName": "Robert Borysiewicz",
        "courseName": "IST 256",
        "courseCategory": "Information Science and Technology",
        "courseIcon": "search",
        "courseColor": "red",
      }
    ];
  
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(badgelist);
  }