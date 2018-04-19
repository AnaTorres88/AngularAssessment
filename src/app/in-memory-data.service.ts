import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const quiz = [
     {
  "assessmentIntro": {
    "introTitle": "This is the title of this assessment",
    "introSubtitle": "How developed is your Customer Experience strategy",
    "introParagraph": "Five questions is all it takes to assess your organization's customer experience maturity. From reactor to market leader, see where Lorem ipsum, sit ame.",
    "bullets": [
      "textdsds1",
      "text2"
  ],
    "singleAssessmentButton": "START ASSESSMENT"
  },
  "mediaIntro": {
    "mediaType": "image",
    "imageSrc": "http://www.carvemypumpkin.com/wp-content/uploads/2014/09/ppci1.jpg",
    "imageAlt": "this is the alt for image"
  },
  "Quiz": {
      "Id": 1,
      "max":62,
      "min":14,
      "title": "What's your perfect animal companion?",
      "paragraph": "Find out what could be the perfect animal companion for your adventures",
      "theQuestions": [
        {
          "id": 5,
          "question": "Find balance",
          "instructions": "Distribute 100% between sliders",
          "inputType": "multislider",
          "required": true,
          "questionValue": 10,
          "max": 100,
          "min": 0,
          "tooltip": false,
          "sliderInfo": [
            {
              "title": "Vivamus",
              "tooltip": "info1",
              "color": "#CE056A"
            },
            {
              "title": "Muramus",
              "tooltip": "info2",
              "color": "#FF5800"
            },
            {
              "title": "Aliquam",
              "tooltip": "info3",
              "color": "#FFB414"
            }
              ],
          "options": [
            {
              "initial": 0,
              "value": 10
                },
            {
              "initial": 0,
              "value": 5
                },
            {
              "initial": 0,
              "value": 3
                }
              ],
          "selectedAnswer": []
          },
        {
          "id": 6,
          "question": "Favorite Overwatch Hero?",
          "instructions": "",
          "dropdownTitle": "Choose one",
          "inputType": "dropdown",
          "required": true,
          "questionValue": 10,
          "options": [
            {
              "option": "Tracer",
              "value": 10
            },
            {
              "option": "Genji",
              "value": 8
            },
            {
              "option": "Mercy",
              "value": 7
            },
            {
              "option": "Moira",
              "value": 7
            },
            {
              "option": "Pharah",
              "value": 7
            },
              {
              "option": "Reinhardt",
              "value": 5
            },
              {
              "option": "Orisa",
              "value": 2
            },
              {
              "option": "McCree",
              "value": 2
            }
          ],
          "selectedAnswer":""},
        {
          "id": 1,
          "question": "what's your favorite pet?",
          "instructions": "",
          "inputType": "checkbox",
          "required": false,
          "questionValue": 10,
          "options": [
            {
              "1": "dog",
              "tooltip": true,
              "value": 5,
              "tooltipTxt": "a good boy. It will never abandon you. For Centuries has ben a loyal companion of humans."
                  },
            {
              "2": "cat",
              "img": "https://pbs.twimg.com/media/B6uQAuPIgAA9O_4.jpg",
              "tooltip": false,
              "value": 3
            },
            {
              "3": "rats",
              "img": "https://mymodernmet.com/wp/wp-content/uploads/2017/07/pet-rat-photography-diane-ozdamar-12.jpg",
              "tooltip": false,
              "value": 2
                  }
                ],
          "selectedAnswer": []
          },
        {
          "id": 2,
          "question": "Are you a dog person or a cat person?",
          "instructions": "",
          "inputType": "radio",
          "required": true,
          "questionValue": 10,
          "options": [
            {
              "1": "dog person",
              "value": 10,
              "tooltip": true,
              "tooltipTxt": "man's best friend"
            },
            {
              "2": "cat person",
              "value": 5,
              "tooltip": false
            },
            {
              "3": "more like a bird person",
              "value": 1,
              "tooltip": false
                  }
                ],
          "selectedAnswer": ""
          }, 
          {
          "id": 3,
          "question": "What's your favorite PvP game?",
          "instructions": "Select the option you prefer",
          "inputType": "slider",
          "required": true,
          "questionValue": 10,
          "selectedAnswer": "",
          "selectedIndex": 0,
          "options": [
            {
              "option": "Call of Duty",
              "value": 2
                  },
            {
              "option": "Splatoon",
              "value": 4
                  },
            {
              "option": "Paladins",
              "value": 6
            },
            {
              "option": "Overwatch",
              "value": 8
                  },
            {
              "option": "Skull and Bones",
              "value": 10
                  }
              ],
          "labels": [
            {
              "title": "Title 1",
              "content": "MEH"
                  },
            {
              "title": "Title 2",
              "content": "Nice Game"
                  },
            {
              "title": "Title 3",
              "content": "Cool Game"
                  },
            {
              "title": "Title 4",
              "content": "Awesome Game"
                  },
            {
              "title": "Title5",
              "content": "BEST GAME"
                  }
              ]
          },
                {
          "id": 5,
          "question": "Pineapple on pizza?",
          "instructions": "",
          "title": "Choose one",
          "inputType": "yesNo",
          "required": true,
          "questionValue": 10,
          "options": [
            {
              "status": true,
              "text": "Yes",
              "value": 10
              },
            {
              "status": false,
              "text": "No",
              "value": 4
              }
            ],
          "selectedAnswer": ""

          },
        {
          "id": 4,
          "question": "What do you think of superheroe movies?",
          "instructions": "",
          "inputType": "openQuestion",
          "required": false,
          "questionValue": 2,
          "selectedAnswer": ""
          }
      ]
    },
  "resultsPage": {
    "resultsTitle": "Your Results",
    "resultsSubtitle": "100% - You're a Market Leader",
    "contactButton": "contact us",
    "contactUrl": "https://prelaunch.avanade.com/en/contact",
    "retakeButton": "Retake Assessment",
    "retakeIcon": "https://prelaunch.avanade.com/images/assessment/retake.svg",
    "finalResult": "",
    "possibleResults": [
      {
        "score": 62,
        "id": "Maket Leader",
        "img": "https://www.apnphotographyschool.com/wp-content/uploads/2010/10/bokeh3.jpg",
        "alt": "Market leader image",
        "roleDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed tempor odio. Nulla egestas ultrices pharetra. Donec et venenatis augue. Suspendisse dignissim sem leo",
        "roleDescription2": "Etiam et libero nulla. Vivamus in ante vel sapien sagittis ultricies. Integer a quam ante. Morbi eget faucibus augue. Integer egestas ut augue quis euismod"
                },
      {
        "score": 52,
        "id": "Market Challenger",
        "img": "https://s.thestreet.com/files/tsc/v2008/photos/contrib/uploads/gummybears_600x400.jpg",
        "alt": "Market challenger image",
        "roleDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed tempor odio. Nulla egestas ultrices pharetra. Donec et venenatis augue. Suspendisse dignissim sem leo",
        "roleDescription2": "Etiam et libero nulla. Vivamus in ante vel sapien sagittis ultricies. Integer a quam ante. Morbi eget faucibus augue. Integer egestas ut augue quis euismod"
                },
      {
        "score": 42,
        "id": "Strong Performer",
        "img": "https://www.ohmy-creative.com/wp-content/uploads/2015/08/Ice-Cream-Decorated-Sugar-Cookies.jpg",
        "alt": "Strong performer image",
        "roleDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed tempor odio. Nulla egestas ultrices pharetra. Donec et venenatis augue. Suspendisse dignissim sem leo",
        "roleDescription2": "Etiam et libero nulla. Vivamus in ante vel sapien sagittis ultricies. Integer a quam ante. Morbi eget faucibus augue. Integer egestas ut augue quis euismod"
                },
      {
        "score": 30,
        "id": "Opportunistic",
        "img": "https://i.pinimg.com/736x/86/2d/68/862d682389db134cefc35a8bd9e0c1cb--japanese-decoration-kustom.jpg",
        "alt": "Opportunistic image",
        "roleDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed tempor odio. Nulla egestas ultrices pharetra. Donec et venenatis augue. Suspendisse dignissim sem leo",
        "roleDescription2": "Etiam et libero nulla. Vivamus in ante vel sapien sagittis ultricies. Integer a quam ante. Morbi eget faucibus augue. Integer egestas ut augue quis euismod"
                },
      {
        "score": 14,
        "id": "Reactive",
        "img": "https://1835441770.rsc.cdn77.org/splitsider.com/wp-content/uploads/sites/2/2016/03/Marbles.jpg",
        "alt": "Reactive image",
        "roleDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed tempor odio. Nulla egestas ultrices pharetra. Donec et venenatis augue. Suspendisse dignissim sem leo",
        "roleDescription2": "Etiam et libero nulla. Vivamus in ante vel sapien sagittis ultricies. Integer a quam ante. Morbi eget faucibus augue. Integer egestas ut augue quis euismod"
                }
            ]
  }
}
    ];
    return {quiz};
  }
}