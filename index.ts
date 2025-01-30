const alertBox: HTMLElement = document.getElementById(
  "alertBox"
) as HTMLElement;

const alertMessage: HTMLElement = document.getElementById(
  "alertMessage"
) as HTMLElement;

const alertBoxCloser: HTMLButtonElement = document.getElementById(
  "alertBoxCloser"
) as HTMLButtonElement;

const services: HTMLElement[] = Array.from(
  document.getElementsByClassName("services__item")
) as HTMLElement[];

const team: HTMLElement = document.getElementById("team") as HTMLElement;

const reqBtn: HTMLButtonElement = document.getElementById(
  "requestAQuote"
) as HTMLButtonElement;

const heroBtn: HTMLButtonElement = document.getElementById(
  "heroButton"
) as HTMLButtonElement;

const callToActionBtn1: HTMLButtonElement = document.getElementsByClassName(
  "call-to-action__button"
)[0] as HTMLButtonElement;

const callToActionBtn2: HTMLButtonElement = document.getElementsByClassName(
  "call-to-action__button"
)[1] as HTMLButtonElement;

const form: HTMLFormElement = document.getElementById(
  "contactUsForm"
) as HTMLFormElement;

function alertShow(value: string): void {
  alertBox.style.display = "flex";
  alertMessage.innerHTML = `${value}`;
  document.body.classList.add("no__scroll");
  
  alertBox.onclick = (event) => {
    alertBox.style.display = "none";
    document.body.classList.remove("no__scroll");
  }
  Array.from(alertBox.children).forEach((element) => {
    element.onclick = (event: { stopPropagation: () => void; }) => {
      event.stopPropagation();
    }
  });

  alertBoxCloser.addEventListener("click", () => {
    alertBox.style.display = "none";
    document.body.classList.remove("no__scroll");
  });
}

services.forEach((element) => {
  element.addEventListener("click", () => {
    const info = {
      img: element.querySelector("svg") as SVGElement,
      title: element.querySelector("h4") as HTMLHeadingElement,
      link: element.querySelector("a") as HTMLAnchorElement,
    };
    alertShow(`  
            <div class="serviceItem--card">
            ${info.img.outerHTML}
            <h4>${info.title.textContent}</h4>
            <a href="${info.link.href}">Learn More</a>
            </div>
        `);
  });
});

const teamMember: string = `
                    <div class="team__member-container">
                        <div class="team__member-header">
                            <img src="./media/image6.png" alt="" class="team__member-photo">
                        </div>
                        <div class="team__member-info">
                            <span class="team__member-name">Sarah Kim</span>
                            <span class="team__member-job">Content Creator</span>
                        </div>
                        <div class="team__member-linkdin">
                            <a href="#">
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="17" cy="17" r="17" fill="black" />
                                    <path d="M9.31776 25H12.8131V13.6844H9.31776V25Z" fill="#B9FF66" />
                                    <path
                                        d="M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z"
                                        fill="#B9FF66" />
                                    <path
                                        d="M22.4517 25H26V18.7844C26 15.7562 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z"
                                        fill="#B9FF66" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="team__member-bio">
                        <p>
                            2+ years of experience in writing and editing<br>
                            Skilled in creating compelling, SEO-optimized content for various industries
                        </p>
                    </div>
                    `;

// With type Assertion there is no need to make a condition, but I did it to make it more secure.
if (reqBtn) {
  reqBtn.addEventListener("click", (event) => {
    alertShow("Your Request Sent.");
  });
} else {
  console.error("Request Button not Found.");
}

// With type Assertion there is no need to make a condition, but I did it to make it more secure.
if (heroBtn) {
  heroBtn.addEventListener("click", (event) => {
    // alert("You are Booking a Consulation.")
    alertShow("You are Booking a Consulation.");
  });
} else {
  console.error("Hero Button not Found.");
}

// With type Assertion there is no need to make a condition, but I did it to make it more secure.
if (callToActionBtn1) {
  callToActionBtn1.addEventListener("click", (event) => {
    // alert("Your Free Propal is Ready")
    alertShow("Your Free Propal is Ready");
  });
} else {
  console.error("callToActionBtn not Found.");
}

function registerCardClickEvents(): void {
  const teamMembers = Array.from(
    document.getElementsByClassName("team__member") as HTMLCollection
  );

  teamMembers.forEach((element) => {
    const info: HTMLElement = document.getElementsByClassName(
      "team__member-info"
    )[0] as HTMLElement;
    const member: {
      img: HTMLImageElement;
      memberName: HTMLSpanElement;
      memberJob: HTMLSpanElement;
      memberBio: HTMLParagraphElement;
    } = {
      img: element.querySelector("img") as HTMLImageElement,
      memberName: info.querySelector(
        "span.team__member-name"
      ) as HTMLSpanElement,
      memberJob: info.querySelector("span.team__member-job") as HTMLSpanElement,
      memberBio: element.querySelector(
        "div.team__member-bio p"
      ) as HTMLParagraphElement,
    };

    element.addEventListener("click", () => {
      alertShow(
        `
              <div>
                  <div style="text-align: center;">
                      <img src="${member.img.src}">
                  </div>
                  <p style="font-size: 1.5rem; padding: 1rem 0">${member.memberName.outerHTML}<p>
                  <p style="font-size: 0.85rem; color: darkgray;">${member.memberJob.outerHTML}<p>
                  <p style="font-size: 0.95rem; padding: 1rem 0; line-height: 1.5; word-spacing: 2px;">${member.memberBio.outerHTML}<p>  
              </div>
          `
      );
    });

    const links = Array.from(
      element.querySelectorAll(".team__member-linkdin a")
    );
    links.map((link) => {
      link.addEventListener("click", (event) => {
        event.stopPropagation();
      });
    });
  });
}

registerCardClickEvents();

// With type Assertion there is no need to make a condition, but I did it to make it more secure.
if (callToActionBtn2) {
  callToActionBtn2.addEventListener("click", (event) => {
    // یک عنصر موقت ایجاد کنید
    const tempArticle = document.createElement("article");

    // رشته HTML را به innerHTML آن اضافه کنید
    tempArticle.innerHTML = teamMember;

    // اولین عنصر فرزند(مورد نظر) را بدست آورید
    const newTeamMember = tempArticle as HTMLElement;

    // عنصر واقعی را اضافه کنید
    team.insertAdjacentElement("beforeend", newTeamMember);
    newTeamMember.classList.add("team__member");

    registerCardClickEvents();
  });
} else {
  console.log("callToActionBtn not Found.");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const Message: {
    name: HTMLInputElement;
    email: HTMLInputElement;
    msg: HTMLTextAreaElement;
    sayHi?: HTMLInputElement;
    getACode?: HTMLInputElement;
  } = {
    name: form.querySelector("input#userName") as HTMLInputElement,
    email: form.querySelector("input#userEmail") as HTMLInputElement,
    msg: form.querySelector("textarea#userMessage") as HTMLTextAreaElement,
    sayHi: form.querySelector("input#sayHi") as HTMLInputElement,
    getACode: form.querySelector("input#getACode") as HTMLInputElement,
  };

  alertShow(
    `
            <div>
                <p>${Message.name.value}</p>
                <p>${Message.email.value}</p>
                <p>${Message.sayHi || Message.getACode}</p>
                <p>${Message.msg.value}</p>
            </div>  
        `
  );
});


const circles: HTMLElement[] = Array.from(document.getElementsByClassName("card__item-action")) as HTMLElement[];
let negativeCircle = `
                        <svg width="58" height="59" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23" />
                            <path d="M20 32.14V26.5H37.76V32.14H20Z" fill="black" />
                        </svg>
                        `;
let positiveCircle = `
                        <svg width="58" height="59" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23" />
                            <path d="M25.6 41.58V31.86H16V26.22H25.6V16.5H31.48V26.22H41.08V31.86H31.48V41.58H25.6Z"
                                fill="#191A23" />
                        </svg>
                        `;
circles.forEach(element => {
  let flag = true;
  element.addEventListener("click",() => {
    flag = !flag;
    (flag)? element.innerHTML = positiveCircle: element.innerHTML = negativeCircle;
  })
})