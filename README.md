# A project made for the Volta interview

The aim of the project is to display a Clock.

## Running the project in development mode:

Run the following commands. By default the page will be visible at localhost:3000

### Front-end:

from the root folder:

```bash
cd web
npm install
npm start
```

### Server:

from the root folder:

```bash
cd server
pip3 install -r requirements.txt
uvicorn main:app --reload
```

## Feature overview

The clock will display a time provided by the server every second via a Websocket.  
A list of timezones is provided via a GET api call to the server. The front-end will fetch those in order to allow the user to select his desired timezone.  
An alarm is present, handled by the front-end.

## Shortcomings and desirable features

Unfortunately, time constraints prevented from complying to some best practices:

- The project does not include tests
- The project does not include data validation
- There is no websocket disconnection handling on the front-end

In addition, some architectural changes would allow for functionality improvements:

- Having a database would allow to keep several alarms and retrieve them
- Alternatively this could be done with cookies... But that would mean having to be GDPR compliant on a clock!
