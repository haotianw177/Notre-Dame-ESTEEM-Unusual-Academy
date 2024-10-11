// Define the 'home' component
// Update the 'home' component
Vue.component('home', {
    data() {
      return {
        sections: [
          {
            leftTitle: 'Section 1 Left',
            leftContent: 'Content for the left side of section 1.',
            rightTitle: 'Program Overview',
            rightContent: 'Content for the right side of section 1.'
          },
          {
            leftTitle: 'Section 2 Left',
            leftContent: 'Content for the left side of section 2.',
            rightTitle: 'Section 2 Right',
            rightContent: 'Content for the right side of section 2.'
          },
          {
            leftTitle: 'Section 3 Left',
            leftContent: 'Content for the left side of section 3.',
            rightTitle: 'Section 3 Right',
            rightContent: 'Content for the right side of section 3.'
          },
          {
            leftTitle: 'Section 4 Left',
            leftContent: 'Content for the left side of section 4.',
            rightTitle: 'Section 4 Right',
            rightContent: 'Content for the right side of section 4.'
          }
        ]
      };
    },
    template: `
      <div>
        <info-section
          v-for="(section, index) in sections"
          :key="index"
          :section="section"
        ></info-section>
      </div>
    `
  });
  

// Define the 'applicationProcess' component
Vue.component('applicationProcess', {
    template: `
        <div class="applicationProcessContainer">
            <h1>Application Process</h1>
            <div class="applicationFormContainer">
            <p>Once applications are reviewed, selected teams will be invited for interviews. Final decisions will be made by November 8, 2024. The first workshop will commence on November 15, 2024, on the Notre Dame campus.
            For more information, please contact Germán Estrada, Assistant Teaching Professor & Director @ ESTEEM, at german.estrada@nd.edu.</p>
            <button class = "applicationProcessButton" onclick="window.location.href='https://frmtb6m2df5.typeform.com/to/d6rSgwRs?typeform-source=esteem-unusualacademy.carrd.co'"><h1>Apply Now</h1></button>

        </div>
        </div>
    `
});


// Define the 'applicationForm' component
// Vue.component('applicationForm', {
//     template: `

//     `,
//     data() {
//         return {
//             name: '',
//             email: ''
//         };
//     },
//     methods: {
//         submitForm() {
//             // Handle form submission
//             alert(`Form submitted!\nName: ${this.name}\nEmail: ${this.email}`);
//             // Clear the form
//             this.name = '';
//             this.email = '';
//         }
//     }
// });

// Define the 'faqs' component
Vue.component('faqs', {
    data() {
        return {
            faqList: [
                {
                    question: 'What is the Notre Dame ESTEEM Unusual Academy?',
                    answer: 'The Unusual Academy is a hands-on seminar series designed to help student teams build and launch successful technology startups. It includes three workshops over the academic year, covering customer discovery, product development, fundraising, and leadership.'
                },
                {
                    question: 'Who is eligible to apply?',
                    answer: 'The program is open to all Notre Dame students, including those in the ESTEEM program, MBAs, undergraduates, and student entrepreneurs across different disciplines. Teams must consist of 2-5 members, and at least one team member must be a software engineer or builder.'
                },
                {
                    question: 'Do I need to have a startup idea to apply?',
                    answer: 'Yes, teams should have a startup idea they are actively working on or willing to develop during the program.'
                },
                {
                    question: 'How many members should be on a team?',
                    answer: 'Teams should have 2-4 members. It’s important that teams have both business and technical expertise, so having at least one software engineer is required.'
                },
                {
                    question: 'How long is the program?',
                    answer: `The program runs for the entire academic year, with three main seminars:
Seminar 1: November 15, 2024 (Notre Dame)
Seminar 2: Spring Break 2025 (Silicon Valley)
Seminar 3: April/May 2025 (Notre Dame)`
                },
                {
                    question: 'What will I learn during the program?',
                    answer: 'You will learn critical startup skills like customer discovery, building your ideal customer profile, engaging design partners, creating a fundraising pitch, hiring the right team, and leading with integrity. Each seminar covers key topics that will help you take your startup from idea to execution.'
                },
                {
                    question: 'Is there funding available?',
                    answer: 'Yes, selected teams with a startup idea are eligible to receive a substantial non-dilutive funding to accelerate their startup’s growth.'
                },
                {
                    question: 'What is the time commitment?',
                    answer: 'Each seminar requires 20-30 hours of work, including workshops and assignments. Between seminars, you will work on key deliverables like customer outreach, engaging design partners, and preparing your pitch.'
                },
                {
                    question: 'Where will the seminars take place?',
                    answer: `Seminar 1 and Seminar 3 will take place on the Notre Dame campus.
Seminar 2 will take place in Silicon Valley during the winter/spring break.`
                },
                {
                    question: 'What kind of support will I receive?',
                    answer: 'You will receive mentorship from industry experts, including John Vrionis, a seasoned venture capitalist, and Germán Estrada, Director of ESTEEM. There will also be structured exercises, case studies, and opportunities to get feedback on your startup.'
                },
                {
                    question: 'What kind of commitment is required between seminars?',
                    answer: 'Between seminars, teams will be expected to complete key assignments, like engaging with 50 customer prospects, working with design partners, and refining your pitch deck. These assignments are crucial to your progress in the program.'
                },
                {
                    question: 'How do I apply?',
                    answer: 'You can apply through the Notre Dame ESTEEM Unusual Academy 2024-25 Application Form. You’ll need to provide information about your team, your startup idea, and why you’re interested in the program. Applications are due by October 31, 2024.'
                },
                {
                    question: 'How are teams selected?',
                    answer: 'Teams are selected based on the quality of their startup idea, the strength of the team, and their readiness to commit to the program. Interviews may be conducted to finalize the selection.'
                },
                {
                    question: 'Can I apply as an individual?',
                    answer: 'No, the program is team-based. We recommend finding teammates with complementary skills, such as someone with technical expertise (software engineer) and someone with business or product knowledge.'
                },
                {
                    question: 'Will there be networking opportunities?',
                    answer: 'Yes, throughout the program you will interact with industry leaders, venture capitalists, and other entrepreneurial teams, giving you valuable networking opportunities.'
                },
                {
                    question: 'What does "builder" mean in this program?',
                    answer: 'A "builder" refers to anyone involved in the technical side of creating and developing the product or service. This typically includes developers, computer science students, software engineers, or anyone with technical skills crucial to building the startup. Builders are key members who help turn the business idea into a working product.'
                }
                // Add more FAQs as needed
            ]
        };
    },
    template: `
        <div class="faqsContainer">
            <h1>FAQS</h1>
            <br>
            <ul>
                <li v-for="(faq, index) in faqList" :key="index">
                    <h3>{{ faq.question }}</h3>
                    <p>{{ faq.answer }}</p>
                    <br>
                </li>
            </ul>
        </div>
    `
});


// Define the 'info-section' component
Vue.component('infoSection', {
    props: ['section'],
    template: `
      <div class="infoSection">
        <div class="left">
          <h2>{{ section.leftTitle }}</h2>
          <p>{{ section.leftContent }}</p>
        </div>
        <div class="right">
          <h2>{{ section.rightTitle }}</h2>
          <p>{{ section.rightContent }}</p>
        </div>
      </div>
    `
  });



// Define the 'footer-component'
Vue.component('footerComponent', {
    template: `
      <footer class="footerContainer">
        <div class="footerContent">
          <p>&copy; 2023 Your Company Name. All rights reserved.</p>
          <nav class="footerNav">
            <a href="#" @click.prevent="navigate('home')">Home</a> |
            <a href="#" @click.prevent="navigate('applicationProcess')">Application Process</a> |
            <a href="#" @click.prevent="navigate('faqs')">FAQs</a>
          </nav>
        </div>
      </footer>
    `,
    methods: {
      navigate(view) {
        this.$root.currentView = view;
      }
    }
  });
  
  

// Initialize Vue instance
new Vue({
    el: '#app',
    data: {
        currentView: 'home' // Set default view
    }
});
