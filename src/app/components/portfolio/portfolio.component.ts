import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projectName: string;
  age: number;
  email: string;
  displayedContent: project;
  projects: project[];
  constructor() { }

  ngOnInit() {
    var x = 0;
    console.log('ngOnIt ran');

    this.displayedContent = 
      {
        name: "My Portfolio",
        problem: "I needed a place to store and display my work. I wanted something a little more sophisticated and custom than my previous portfolio that I built using a template from Materialize framework.",
        solution: "Decided that learning Angular and practicing SASS while making my portfolio would be a great combo. I was able to knock out two goals at once.",
        techs: ["Angular", "Angular Material", "Flex Layout for Angular", "SASS", "Node", "Heroku Deployment"],
        livelink: "inserturl",
        repolink: "inserturl"
      }
    
    this.projects = [
      {
        name: "ConTECH",
        problem: "The inspiration behind this project came from our experience when beginning UNCC’s Coding Bootcamp. If we searched for an unfamiliar term online, we could easily find ourselves inundated with vast amounts of information. We found that it wasn’t just developers that ran into this issue, but also those that worked with developers.",
        solution: "The app is a quick reference tool that provides simplified definitions to these complex terms. The target audience is for developers, those that work with developers, or anyone that is new to the industry.",
        techs: ["React", "JSX", "Flex Box", "Custom CSS", "MongoDB", "Heroku Deployment", "Node"],
        livelink: "https://contech-app.herokuapp.com",
        repolink: "https://github.com/dbdoyle182/Contech"
      },
      {
        name: "Crown Town Crafts",
        problem: "With so many local breweries all with their own unique tap list, when you're ready to try something new, it's hard to find the perfect place.",
        solution: "With this app, we wanted users to be able to cut down on the time it look to find this information online and after sourcing the data by hand, we allow users to sort by brewery, neighborhood, or beer type to narrow down what they're looking for.",
        techs: ["Responsive CSS", "Custom API Development", "AJAX", "Node"],
        livelink: "https://crown-town-crafts.herokuapp.com",
        repolink: "https://github.com/bradleyaw/Crown-Town-Crafts"
      },
      {
        name: "Data Tree",
        problem: "Data in the database is changing in realtime among users, and users are having to perform a refresh of the page to see changes made by others.",
        solution: "Create a view of the current state of our database, that can be modified by any user, at which point all users will be able to see any changes made.",
        techs: ["Web Sockets", "Node", "MongoDB", "Bootstrap"],
        livelink: "https://datatreesockets.herokuapp.com",
        repolink: "https://github.com/bradleyaw/SocketTree"
      },
      {
        name: "My Portfolio",
        problem: "I needed a place to store and display my work. I wanted something a little more sophisticated and custom than my previous portfolio that I built using a template from Materialize framework.",
        solution: "Decided that learning Angular and practicing SASS while making my portfolio would be a great combo. I was able to knock out two goals at once.",
        techs: ["Angular", "Angular Material", "Flex Layout for Angular", "SASS", "Node", "Heroku Deployment"],
        livelink: "/",
        repolink: "/"
      }
    ]
  }
  onClick(projectName) {
    switch(projectName) {
      case "conTECH":
        this.replaceContent(0);
        break;
      case "Crown Town Crafts":
        this.replaceContent(1);
        break;
      case "Data Tree":
        this.replaceContent(2);
        break;
      case "My Portfolio":
        this.replaceContent(3);
        break;
    }
  }
  
  replaceContent(num) {
    this.displayedContent.name = this.projects[num].name;
    this.displayedContent.problem = this.projects[num].problem;
    this.displayedContent.solution = this.projects[num].solution;
    this.displayedContent.techs = this.projects[num].techs;
    this.displayedContent.livelink = this.projects[num].livelink;
    this.displayedContent.repolink = this.projects[num].repolink;
  }
}

interface project {
  name: string;
  problem: string;
  solution: string;
  techs: string[];
  livelink: string;
  repolink: string;
}