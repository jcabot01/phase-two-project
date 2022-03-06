# Phase 2 Project:  "Teacher Findr"


## Introduction

Imagine you are a recruiter looking to hire more teachers for your school district.  LinkedIn can be a bit cumbersome, so you decide to create a database of potential candidates that contains the infomation you want quick access to right away.    

## Demo

![](https://media.giphy.com/media/6XjnBPd4LvT64CWMoh/giphy.gif)


### Open the App
Upon opening the web application, you are greeted with the current rendering of your database.  Each candidate has a "card"; including their name, image, instrument, years of experience, and two buttons.  One button has a star toggle, so you can "favorite" that candidate.  Also, maybe one of the candidate isn't what you want, so you can delete them using the trash-can button. 

### Additional functionality
- **Search Bar:**  The Homepage feature a search bar, so you can easily whitle down your search the candidates for the **instrument** you want, so you will only look at the candidate with Percussion expertise.    

- **Profile Page:**   If you click on the image of a candidate on the Homepage, you will be directed to a new URL, containing more infomation about the candidate, including: contact info & a brief description of their teaching career thus far.
- **Add New Teacher Form:**  From anywhere on the webpage, you can click on the **+ Add New** navigation link, and you will be redirected to the webform, which upon submit, you can add a new teacher to the database. 
- **Home:** Of course if you ever get lost, the Home button will take you back to the gallery of candidates.

## Tech
The application was created in React.js :
- **"react": "^17.0.2"**,
- **"react-dom": "^17.0.2"**,
- **"react-router-dom": "^6.2.1"**,
- **"uuid": "^8.3.2"**,


## Installation
The public repository can be found [here](https://github.com/jcabot01/phase-two-project) on GitHub.
In your terminal:
    - `$ git clone git@github.com:jcabot01/phase-two-project.git` to clone the git repo
    - `$ npm install` to install the dependencies associated with this project.
    - `$ code .` to run VS Code
    - `$ json-server --watch db.json` to run mock-server first
    - `$ npm start` to React development environment.  You might be prompted to switch ports because they might be running on the same one, so say "yes" to have the App pick a separate port.

We are still working on the deployment process.

## License

MIT