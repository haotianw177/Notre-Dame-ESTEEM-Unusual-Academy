// haha
Vue.component("headerComponent", {
  template: `
    <div class="header">
    <img src="/images/logo.svg.png" alt="Logo" class="logo">
    <ul class="nav-links">
      <li><a href="#" :class="{ active: $root.currentView === 'home' }" @click.prevent="navigate('home')">Home</a></li>
      <li><a href="#" :class="{ active: $root.currentView === 'applicationProcess' }" @click.prevent="navigate('applicationProcess')">Process</a></li>
      <li><a href="#" :class="{ active: $root.currentView === 'faqs' }" @click.prevent="navigate('faqs')">FAQs</a></li>
    </ul>
    <button onclick="window.location.href='https://frmtb6m2df5.typeform.com/to/d6rSgwRs?typeform-source=esteem-unusualacademy.carrd.co'" class="applyButtonHeader">Apply to EUA</button>
    </div>

  `,
  methods: {
    navigate(view) {
      this.$root.currentView = view;
      window.scrollTo(0, 0); // Scroll to top of the page
    },
  },
});


Vue.component("home", {
  data() {
    return {
      boxes: [
        {
          title: "Seminar 1: Customer Discovery",
          key: "November 15, 2024, Notre Dame Campus, 20-30 hours",
          points: [
            "Building Your Ideal Customer Profile (ICP): Learn how to define and target the right customers for your product",
            "Messaging and Positioning: Develop effective messaging that resonates with your target audience",
            "Customer Outreach: Understand best practices for reaching potential customers efficiently",
            "Real-World Case Studies: AppDynamics, Harness, and Traceable will serve as examples of successful startups’ customer discovery processes",
          ],
        },
        {
          title: "Seminar 2: Design Partners and Fundraising",
          key: "February/March 2025 (During Winter/Spring Break), Silicon Valley, 20-30 hours",
          points: [
            "Engaging Design Partners: Learn how to collaborate with early adopters to refine and validate your product",
            "Fundraising Basics: Gain insights into venture capital, including fundraising strategies, pitch creation, and investor relations",
            "History of Venture Capital: Understand the historical dynamics of the venture capital industry and how they impact founders",
          ],
        },
        {
          title: "Seminar 3: Pitching, Hiring, and Leadership with Integrity",
          key: "April/May 2025, Notre Dame Campus, 2 hours",
          points: [
            "Pitching Your Startup: Teams will present their investor pitch and receive feedback from venture experts",
            "Hiring and Team Building: Learn how to hire and manage the right team for your startup",
            "Leadership with Integrity: Explore leadership challenges while maintaining ethical integrity and strong team dynamics",
          ],
        },
      ],
    };
  },
  template: `
  <div class="homeContainer">

    <div class="introText">
    <h1>Notre Dame ESTEEM Unusual Academy</h1>
    <br>
    <p>
      The Notre Dame ESTEEM Unusual Academy 2024-25 is a hands-on seminar series designed to help entrepreneurial teams build successful technology-oriented startups. Led by John Vrionis, a veteran venture capitalist, and Germán Estrada, Assistant Teaching Professor & Director of ESTEEM, this program will offer a learning-by-doing approach, combining real-world case studies, structured exercises, and expert mentorship. This inaugural seminar will guide participants from idea development to product-market fit, fundraising, and leadership.
    </p>
    </div>

    <div class="flyer"><img src = "images/flyer.png">
    <button class="applyButton" onclick="window.location.href='https://frmtb6m2df5.typeform.com/to/d6rSgwRs?typeform-source=esteem-unusualacademy.carrd.co'">Apply Now</button></div>


    <div class="programOverviewText">
    <h1>Program Overview</h1>
    <br>
    <p>The Unusual Academy consists of three workshops spaced throughout the academic year. Each workshop will focus on a specific aspect of building a successful startup, offering practical learning, mentorship, and team-based exercises. Participants will walk away with the skills necessary to identify customers, build products, and raise funds for their startups. </p>
    </div>

    <div class="programOverview">
    <div
      class="programOverviewBoxes"
      v-for="(box, index) in boxes"
      :key="index"
    > 
      <h2>{{ box.title }}</h2>
      <p class="keyHeading">{{ box.key }}</p>
      <br>
      <ul>
        <li v-for="(point, idx) in box.points" :key="idx">{{ point }}</li>
      </ul>
    </div>
    </div>
    
    <h1>Learning Facilitators</h1>
    <div class="learningFacilitators">
      <div class="mainBlock">
        <h2>John Vrionis</h2>
        <img src= "images/john.jpg" class="facultyImage" width = "100%">
        <p>John Vrionis is a Co-Founder and Partner at Unusual Ventures. A venture capitalist since 2006, he’s been an early investor in over a dozen billion dollar plus companies, including: Affirmed Networks, AppDynamics, Arctic Wolf Networks, Carta, Harness, Liftoff.io, Mulesoft, Nicira, Nimble Storage, Sourcegraph, and DataStax. Originally from Georgia, John attended Harvard where he studied economics, applied math and played soccer. His drive to learn pushed him to earn his master’s degree in computer science from the University of Chicago. Inspired by successful entrepreneurs, John arrived in Silicon Valley in 2002 and worked in product management before completing his MBA at Stanford. John looks to work with entrepreneurs who have the hunger to learn and the drive to overcome difficult obstacles. In John’s words, “I believe that you learn by overcoming adversity. For me, whether it was sports, school, or in my personal and professional life, that’s been the truth. I gravitate to people who have an immense drive and the humility to keep learning.” Prior to founding Unusual Ventures, John was a General Partner at Lightspeed Venture Partners.
        <br><br>Portfolio of investments include: Hallow, Snapchat, Pinterest, MongoDB
        </p>
      
      </div>
      <div class="secondaryBlock">
        <h2>Germán Estrada Mendoza</h2>
        <img src= "images/german.jpg" class="facultyImage" width = "100%">
        <p>Germán Estrada Mendoza is an Assistant Teaching Professor and Director of the ESTEEM Graduate Program at the University of Notre Dame. With over a decade of experience, he specializes in Business Valuation, Mergers & Acquisitions, and Entrepreneurship. Before joining Notre Dame, Germán was a part-time professor at Pontificia Universidad Católica del Perú (PUCP) and has taught corporate finance since 2010.
        In 2017, Germán co-founded 90pct, a tech startup providing financial tools for small businesses in Latin America. Its flagship product, TinkuApp, simplified accounting for entrepreneurs, replacing complex spreadsheets with a streamlined web application. Though the company ceased operations in 2019, it made a significant impact on small business financial management.
        Germán holds a Master of Science in Engineering, Science, and Technology Entrepreneurship from the University of Notre Dame and a Master in Finance from Universidad Peruana de Ciencias Aplicadas (UPC).
        </p>
      </div>
    </div>
    <div class="whoShouldApply">
    <h1>Who Should Apply?</h1>
    <br>
    <p>
      We are seeking high-potential entrepreneurial teams of 2-5 members who are ready to take their startup ideas to the next level. 
      At least one team member must be a software engineer or builder. This seminar is open to students in the ESTEEM program, as well as non-ESTEEM students from other academic disciplines.
    </p>
    </div>

    <div class="fundingOpportunity">
    <h1>Funding Opportunity</h1>
    <br>
    <p>
      Teams that apply with a specific startup idea are eligible to receive up to $25,000 in non-dilutive funding to help accelerate their growth.
      For more information, please contact Germán Estrada, Assistant Teaching Professor & Director @ ESTEEM, at german.estrada@nd.edu.
      We look forward to helping you turn your startup ideas into reality!
    </p>
    </div>
  </div>
    `,
});

Vue.component("applicationProcess", {
  data() {
    return {
      boxes: [
        {
          title: "Seminar 1: Customer Discovery",
          key: "November 15/2024, Notre Dame Campus, 20-30 hours",
          points: [
            "Building Your Ideal Customer Profile (ICP): Learn how to define and target the right customers for your product",
            "Messaging and Positioning: Develop effective messaging that resonates with your target audience  ",
            "Customer Outreach: Understand best practices for reaching potential customers efficiently",
            "Real-World Case Studies: AppDynamics, Harness, and Traceable will serve as examples of successful startups’ customer discovery processes",
          ],
        },
        {
          title: "Seminar 2: Design Partners and Fundraising",
          key: "February/March 2025 (During Winter/Spring Break), Silicon Valley, 20-30 hours",
          points: [
            "Engaging Design Partners: Learn how to collaborate with early adopters to refine and validate your product",
            "Fundraising Basics: Gain insights into venture capital, including fundraising strategies, pitch creation, and investor relations",
            "History of Venture Capital: Understand the historical dynamics of the venture capital industry and how they impact founders",
          ],
        },
        {
          title: "Seminar 3: Pitching, Hiring, and Leadership with Integrity",
          key: "April/May 2025, Notre Dame Campus, 2 hours",
          points: [
            "Pitching Your Startup: Teams will present their investor pitch and receive feedback from venture experts",
            "Hiring and Team Building: Learn how to hire and manage the right team for your startup",
            "Leadership with Integrity: Explore leadership challenges while maintaining ethical integrity and strong team dynamics",
          ],
        },
      ],
    };
  },
  template: `
  <div class="applicationProcessContainer">
    <div class="applicationProcessText">
        <h1>Application Process</h1>
        <br>
        <p>
          Interested teams should apply through the Notre Dame ESTEEM Unusual Academy 2024-25 Application Form. Applications must include details about your team, your startup idea, and your vision for its future.
          <br><br>
          Once applications are reviewed, selected teams will be invited for interviews. Final decisions will be made by November 8, 2024. The first workshop will commence on November 15, 2024, on the Notre Dame campus.
          For more information, please contact Germán Estrada, Assistant Teaching Professor & Director @ ESTEEM, at german.estrada@nd.edu.
        </p>
    </div>
  
    <button class="applicationProcessButton" onclick="window.location.href='https://frmtb6m2df5.typeform.com/to/d6rSgwRs?typeform-source=esteem-unusualacademy.carrd.co'">
        Apply Now
    </button>

    <div class="programOverview">
        <div
            class="programOverviewBoxes"
            v-for="(box, index) in boxes"
            :key="index"
        >
            <h2>{{ box.title }}</h2>
            <p class="keyHeading">{{ box.key }}</p>
            <br>
            <ul>
              <li v-for="(point, idx) in box.points" :key="idx">{{ point }}</li>
            </ul>
        </div>
    </div>
  </div>


    `,
});

// Define the 'faqs' component
Vue.component("faqs", {
  data() {
    return {
      faqList: [
        {
          question: "What is the Notre Dame ESTEEM Unusual Academy?",
          answer:
            "The Unusual Academy is a hands-on seminar series designed to help student teams build and launch successful technology startups. It includes three workshops over the academic year, covering customer discovery, product development, fundraising, and leadership.",
        },
        {
          question: "Who is eligible to apply?",
          answer:
            "The program is open to all Notre Dame students, including those in the ESTEEM program, MBAs, undergraduates, and student entrepreneurs across different disciplines. Teams must consist of 2-5 members, and at least one team member must be a software engineer or builder.",
        },
        {
          question: "Do I need to have a startup idea to apply?",
          answer:
            "Yes, teams should have a startup idea they are actively working on or willing to develop during the program.",
        },
        {
          question: "How many members should be on a team?",
          answer:
            "Teams should have 2-4 members. It’s important that teams have both business and technical expertise, so having at least one software engineer is required.",
        },
        {
          question: "How long is the program?",
          answer: `The program runs for the entire academic year, with three main seminars:
Seminar 1: November 15, 2024 (Notre Dame)
Seminar 2: Spring Break 2025 (Silicon Valley)
Seminar 3: April/May 2025 (Notre Dame)`,
        },
        {
          question: "What will I learn during the program?",
          answer:
            "You will learn critical startup skills like customer discovery, building your ideal customer profile, engaging design partners, creating a fundraising pitch, hiring the right team, and leading with integrity. Each seminar covers key topics that will help you take your startup from idea to execution.",
        },
        {
          question: "Is there funding available?",
          answer:
            "Yes, selected teams with a startup idea are eligible to receive a substantial non-dilutive funding to accelerate their startup’s growth.",
        },
        {
          question: "What is the time commitment?",
          answer:
            "Each seminar requires 20-30 hours of work, including workshops and assignments. Between seminars, you will work on key deliverables like customer outreach, engaging design partners, and preparing your pitch.",
        },
        {
          question: "Where will the seminars take place?",
          answer: `Seminar 1 and Seminar 3 will take place on the Notre Dame campus.
Seminar 2 will take place in Silicon Valley during the winter/spring break.`,
        },
        {
          question: "What kind of support will I receive?",
          answer:
            "You will receive mentorship from industry experts, including John Vrionis, a seasoned venture capitalist, and Germán Estrada, Director of ESTEEM. There will also be structured exercises, case studies, and opportunities to get feedback on your startup.",
        },
        {
          question: "What kind of commitment is required between seminars?",
          answer:
            "Between seminars, teams will be expected to complete key assignments, like engaging with 50 customer prospects, working with design partners, and refining your pitch deck. These assignments are crucial to your progress in the program.",
        },
        {
          question: "How do I apply?",
          answer:
            "You can apply through the Notre Dame ESTEEM Unusual Academy 2024-25 Application Form. You’ll need to provide information about your team, your startup idea, and why you’re interested in the program. Applications are due by October 31, 2024.",
        },
        {
          question: "How are teams selected?",
          answer:
            "Teams are selected based on the quality of their startup idea, the strength of the team, and their readiness to commit to the program. Interviews may be conducted to finalize the selection.",
        },
        {
          question: "Can I apply as an individual?",
          answer:
            "No, the program is team-based. We recommend finding teammates with complementary skills, such as someone with technical expertise (software engineer) and someone with business or product knowledge.",
        },
        {
          question: "Will there be networking opportunities?",
          answer:
            "Yes, throughout the program you will interact with industry leaders, venture capitalists, and other entrepreneurial teams, giving you valuable networking opportunities.",
        },
        {
          question: 'What does "builder" mean in this program?',
          answer:
            'A "builder" refers to anyone involved in the technical side of creating and developing the product or service. This typically includes developers, computer science students, software engineers, or anyone with technical skills crucial to building the startup. Builders are key members who help turn the business idea into a working product.',
        },
        // Add more FAQs as needed
      ],
    };
  },
  template: `
        <div class="faqsContainer">
            <h1>FAQS</h1>
            <br>
            <ul>
                <li v-for="(faq, index) in faqList" :key="index">
                    <h2>{{ faq.question }}</h2>
                    <h3>{{ faq.answer }}</h3>
                    <br>
                </li>
            </ul>
        </div>
    `,
});

Vue.component("infoSection", {
  props: ["section"],
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
    `,
});

Vue.component("footerComponent", {
  template: `
      <footer class="footerContainer">
        <div class="footerContent">
          <p>&copy; 2024 ESTEEM Unusual Academy. All rights reserved.</p>
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
      window.scrollTo(0, 0); // Scroll to the top of the page after changing the view
    },
  },
});

// Initialize Vue instance
new Vue({
  el: "#app",
  data: {
    currentView: "home", // Set default view
  },
});
