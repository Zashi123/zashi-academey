const revealItems = document.querySelectorAll(".reveal");
const serviceTabs = document.querySelectorAll(".service-tab");
const serviceDetailLabel = document.querySelector("#service-detail-label");
const serviceDetailTitle = document.querySelector("#service-detail-title");
const serviceDetailPrice = document.querySelector("#service-detail-price");
const serviceDetailText = document.querySelector("#service-detail-text");

const serviceContent = {
  zoom: {
    label: "Online Learning",
    title: "Zoom Classes",
    price: "$200",
    text: "Live online forex classes with direct guidance and structured lessons.",
  },
  physical: {
    label: "On-Site Training",
    title: "Physical Classes",
    price: "$250",
    text: "In-person forex classes with practical support and live teaching.",
  },
  crypto: {
    label: "Digital Markets",
    title: "Cryptocurrency",
    price: "Ask for price",
    text: "Learn cryptocurrency trading, market basics, and digital asset analysis.",
  },
  coaching: {
    label: "Guided Growth",
    title: "Coaching",
    price: "$400",
    text: "Personal coaching to improve strategy, execution, and consistency.",
  },
  mentorship: {
    label: "Private Support",
    title: "1vs1 Mentorship",
    price: "$300",
    text: "One-on-one mentorship focused on your learning and progress.",
  },
  management: {
    label: "Managed Option",
    title: "Account Management",
    price: "1k to 100k",
    text: "A managed service for clients who want structured trading support.",
  },
  vip: {
    label: "Premium Access",
    title: "VIP Signal",
    price: "$150",
    text: "Premium signals and market updates for serious traders.",
  },
  public: {
    label: "Open Access",
    title: "Free Public Signal",
    price: "Free",
    text: "Free signal updates for the public and new learners.",
  },
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealItems.forEach((item) => observer.observe(item));

serviceTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const key = tab.dataset.service;
    const content = serviceContent[key];

    if (!content) {
      return;
    }

    serviceTabs.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-pressed", "false");
    });

    tab.classList.add("is-active");
    tab.setAttribute("aria-pressed", "true");
    serviceDetailLabel.textContent = content.label;
    serviceDetailTitle.textContent = content.title;
    serviceDetailPrice.textContent = content.price;
    serviceDetailText.textContent = content.text;
  });
});
