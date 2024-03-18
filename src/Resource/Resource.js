import {phaseOneQuestion,phaseTwoQuestion,phaseThreeQuestion} from '../QuestionCollection/Question'
import {phaseOneAnswers,phaseTwoAnswers,phaseThreeAnswers} from '../AnswerCollection/Answer'
import RevisionClassQuestion from '../RevissionDocuments/PDF/Revision Question.pdf'
import RevisionClassQuestionAnswer from '../RevissionDocuments/PDF/Revision Question Answers.pdf'
export let Data = [
  // phase one 
        {   phase:'Phase One',
            Title: "Week 1: Basic Computer Skill",
            questionDir:phaseOneQuestion[0],
            answerDir:phaseOneAnswers[0]
          },
          {
            Title: "Week 2: HTML Week",
            questionDir:phaseOneQuestion[1],
            answerDir:phaseOneAnswers[1]
          },
          {
            Title: "Week 3: CSS Week",
            questionDir:phaseOneQuestion[2],
            answerDir:phaseOneAnswers[2]
          },
          {
            Title: "Week 4: Rebuilding Apple Page",
            questionDir:phaseOneQuestion[3],
            answerDir:phaseOneAnswers[3]
          },
          {
            Title: "Week 5: Responsive Website Development Week-(Media Queries)",
            questionDir:phaseOneQuestion[4],
            answerDir:phaseOneAnswers[4]
          },
          {
            Title: "Week 6: Bootstrap Week",
            questionDir:phaseOneQuestion[5],
            answerDir:phaseOneAnswers[5]
          },
          {
            Title: "Week 7: Project Week (Building and launching your own website)",
            questionDir:phaseOneQuestion[5],
            answerDir:phaseOneAnswers[5]
          },
          //  phase two 
        {   phase:'Phase Two',
            Title: "Week 1: Introduction To Programming Basics",
            questionDir:phaseTwoQuestion[0],
            answerDir:phaseTwoAnswers[0]
          },
          {
            Title: "Week 2: Functions and Algorithmic thinking",
            questionDir:phaseTwoQuestion[1],
            answerDir:phaseTwoAnswers[1]
          },
          {
            Title: "Week 3: Decision loops and Object Oriented Programming",
            questionDir:phaseTwoQuestion[2],
            answerDir:phaseTwoAnswers[2]
          },
          {
            Title: "Week 4: Algorithm writing",
            questionDir:phaseTwoQuestion[3],
            answerDir:phaseTwoAnswers[3]
          },
          {
            Title: "Week 5: JavaScript DOM manipulation and JS Events",
            questionDir:phaseTwoQuestion[4],
            answerDir:phaseTwoAnswers[4]
          },
          {
            Title: "Week 6: jQuery and Asynchronous JavaScript",
            questionDir:phaseTwoQuestion[5],
            answerDir:phaseTwoAnswers[5]
          },
          //  revision Doc
          {
            phase:'Revision Class Questions And Answer key for Instructors',
            Title: "javaScript Revision Class",
            questionDir:RevisionClassQuestion,
            answerDir:RevisionClassQuestionAnswer
          },
    //    phase three
    {   phase:'Phase Three',
            Title: "Week 1: Git Bash And NodeJs Week",
            questionDir:phaseThreeQuestion[0],
            answerDir:phaseThreeAnswers[0]
          },
          {
            Title: "Week 2: Node Modules And Web Server Week",
            questionDir:phaseThreeQuestion[1],
            answerDir:phaseThreeAnswers[1]
          },
          {
            Title: "Week 3: Database Week",
            questionDir:phaseThreeQuestion[2],
            answerDir:phaseThreeAnswers[2]
          },
          {
            Title: "Week 4: Introduction To React And Functional Component Week",
            questionDir:phaseThreeQuestion[3],
            answerDir:phaseThreeAnswers[3]
          },
          {
            Title: "Week 5: React Class Component And Props Week",
            questionDir:phaseThreeQuestion[4],
            answerDir:phaseThreeAnswers[4]
          },
          {
            Title: "Week 6: React State and React Hook week",
            questionDir:phaseThreeQuestion[5],
            answerDir:phaseThreeAnswers[5]
          },
          {
            Title: "Week 7: Api and React routing week",
            questionDir:phaseThreeQuestion[6],
            answerDir:phaseThreeAnswers[6]
          }

];
console.log(phaseOneQuestion)