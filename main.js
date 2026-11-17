const LANGUAGE_STORAGE_KEY = "coc-language";

const translations = {
  en: {
    "page.title": "Community of Community — Make friends and Shared possibilities.",
    "page.description": "A public-benefit, non-commercial gathering place for independent communities. Make friends and Shared possibilities.",
    skip: "Skip to content",
    "nav.label": "Main navigation",
    "nav.contact": "Say hello ↗",
    "language.label": "Language",
    "hero.eyebrow": "A little hello. A whole new world.",
    "hero.description": "A public-benefit, non-commercial gathering place for independent communities.",
    "hero.action": "Come sit with us",
    "hero.hello": "hello, friend!",
    "hero.imageAlt": "Little friends share a campfire, surrounded by teal and coral community houses",
    "hero.caption": "Different homes. One warm fire.",
    "story.title": "Good things start with friends.",
    "story.waveAlt": "Six cheerful little friends waving hello",
    "story.circleAlt": "Three friends hold hands in a circle",
    "story.homesAlt": "Independent community houses connected around a shared fire, the CoC logo",
    "story.oneTitle": "Say hello.",
    "story.oneBody": "Bring your own little world.",
    "story.twoTitle": "Share a spark.",
    "story.twoBody": "A story, a skill, an idea.",
    "story.threeTitle": "Make room.",
    "story.threeBody": "Your community stays yours.",
    "members.eyebrow": "The first friends around the fire",
    "members.title": "Founding Members",
    "members.note": "Independent homes. Shared possibilities.",
    "contact.eyebrow": "There’s a seat for you, too",
    "contact.title": "Come say hello.",
    "contact.email": "Email ↗",
    "contact.boundary": "GitHub is public. For personal details, use email or the form.",
    "form.summaryKicker": "Prefer a little note?",
    "form.summaryTitle": "Introduce your community",
    "form.required": "* Required fields",
    "form.name": "Your name",
    "form.community": "Community / project",
    "form.offer": "What can you share?",
    "form.offerPlaceholder": "A skill, a story, an idea…",
    "form.seeking": "What are you looking for?",
    "form.seekingPlaceholder": "Friends, feedback, collaborators…",
    "form.email": "Contact email",
    "form.wechat": "WeChat (optional)",
    "form.notes": "Anything else? (optional)",
    "form.privacy": "Delivered via FormSubmit to wayneyjin@gmail.com. Please don’t send confidential information.",
    "form.submit": "Send your hello",
    "form.mailto": "Use email app",
    "form.sending": "Opening FormSubmit…",
    "form.success": "Thanks for saying hello!",
    "form.invalid": "Please complete the required fields and use a valid email.",
    "form.fieldRequired": "Please fill in this field; spaces alone won’t do.",
    "footer.note": "Little communities. A little closer."
  },
  zh: {
    "page.title": "Community of Community — Make friends and Shared possibilities.",
    "page.description": "独立社区的公益、非商业相聚空间。Make friends and Shared possibilities.",
    skip: "跳到主要内容",
    "nav.label": "主导航",
    "nav.contact": "打个招呼 ↗",
    "language.label": "语言",
    "hero.eyebrow": "一声你好，一个新世界。",
    "hero.description": "独立社区的公益、非商业相聚空间。",
    "hero.action": "来，一起围炉坐坐",
    "hero.hello": "你好呀，朋友！",
    "hero.imageAlt": "小伙伴围炉而坐，周围是青绿与珊瑚色的社区小房子",
    "hero.caption": "各有小家，共享温暖。",
    "story.title": "好事情，从交朋友开始。",
    "story.waveAlt": "六位可爱的小伙伴挥手打招呼",
    "story.circleAlt": "三位朋友手拉手围成一圈",
    "story.homesAlt": "独立社区的小房子围绕篝火相连，组成 CoC 标志",
    "story.oneTitle": "打个招呼。",
    "story.oneBody": "带上你的小小世界。",
    "story.twoTitle": "分享火花。",
    "story.twoBody": "一个故事，一项技能，一个点子。",
    "story.threeTitle": "留个位置。",
    "story.threeBody": "你的社区，依然是你的。",
    "members.eyebrow": "最先围炉而坐的朋友们",
    "members.title": "创始成员",
    "members.note": "各自独立，一起探索可能。",
    "contact.eyebrow": "也为你留了一个位置",
    "contact.title": "来打个招呼吧。",
    "contact.email": "联系邮箱 ↗",
    "contact.boundary": "GitHub 内容公开；个人联系方式请用邮件或表单。",
    "form.summaryKicker": "想留个小纸条？",
    "form.summaryTitle": "介绍一下你的社区",
    "form.required": "* 为必填项",
    "form.name": "你的称呼",
    "form.community": "社区 / 项目",
    "form.offer": "你想分享什么？",
    "form.offerPlaceholder": "一项技能，一个故事，一个点子……",
    "form.seeking": "你在寻找什么？",
    "form.seekingPlaceholder": "朋友、建议、协作伙伴……",
    "form.email": "联系邮箱",
    "form.wechat": "微信（选填）",
    "form.notes": "还有什么想说的？（选填）",
    "form.privacy": "通过 FormSubmit 发送至 wayneyjin@gmail.com，请勿填写机密信息。",
    "form.submit": "送出这声你好",
    "form.mailto": "用邮箱客户端发送",
    "form.sending": "正在打开 FormSubmit……",
    "form.success": "谢谢你的这声你好！",
    "form.invalid": "请填写必填项，并提供有效邮箱。",
    "form.fieldRequired": "请填写此项，不能只有空格。",
    "footer.note": "小小的社区，更近了一点。"
  }
};

const form = document.getElementById("intro-form");
const formPanel = document.getElementById("collaboration-form");
const statusMessage = document.getElementById("form-status");
const submitButton = form.querySelector('button[type="submit"]');
const submitLabel = document.getElementById("submit-label");
let currentLanguage = "en";
let formState = "idle";

function translate(key) {
  return translations[currentLanguage][key] ?? translations.en[key] ?? key;
}

function renderFormState() {
  const sending = formState === "sending";
  submitButton.disabled = sending;
  form.setAttribute("aria-busy", String(sending));
  statusMessage.dataset.state = formState;
  submitLabel.textContent = translate(sending ? "form.sending" : "form.submit");
  statusMessage.textContent = formState === "idle" ? "" : translate(`form.${formState}`);
}

function setFormState(state) {
  formState = state;
  renderFormState();
}

function openCollaborationForm({ focusFirstField = false } = {}) {
  formPanel.open = true;
  if (focusFirstField) {
    window.requestAnimationFrame(() => document.getElementById("intro-name").focus({ preventScroll: true }));
  }
}

function applyLanguage(language) {
  currentLanguage = Object.hasOwn(translations, language) ? language : "en";
  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";
  document.title = translate("page.title");
  document.querySelector('meta[name="description"]').content = translate("page.description");
  const translatedAttributes = {
    "data-i18n": "textContent",
    "data-i18n-placeholder": "placeholder",
    "data-i18n-alt": "alt",
    "data-i18n-aria": "aria-label"
  };
  Object.entries(translatedAttributes).forEach(([dataAttribute, targetAttribute]) => {
    document.querySelectorAll(`[${dataAttribute}]`).forEach((element) => {
      const text = translate(element.getAttribute(dataAttribute));
      if (targetAttribute === "textContent") element.textContent = text;
      else element.setAttribute(targetAttribute, text);
    });
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === currentLanguage));
  });
  form.querySelectorAll("[required]").forEach((field) => field.setCustomValidity(""));
  renderFormState();
}

let savedLanguage = "en";
try {
  savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) || "en";
} catch {}
applyLanguage(savedLanguage);
document.querySelector(".language-switch").hidden = false;
document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.language);
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
    } catch {}
  });
});

if (["http:", "https:"].includes(window.location.protocol)) {
  const nextUrl = new URL(window.location.href);
  nextUrl.search = "";
  nextUrl.searchParams.set("submitted", "1");
  nextUrl.hash = "collaboration-form";
  form.elements.namedItem("_next").value = nextUrl.href;
}

const returnUrl = new URL(window.location.href);
if (returnUrl.searchParams.get("submitted") === "1" || returnUrl.hash === "#collaboration-form") {
  openCollaborationForm({ focusFirstField: returnUrl.hash === "#collaboration-form" });
}
if (returnUrl.searchParams.get("submitted") === "1") {
  setFormState("success");
  returnUrl.searchParams.delete("submitted");
  returnUrl.hash = "collaboration-form";
  try {
    window.history.replaceState(null, "", returnUrl.href);
  } catch {}
}
window.addEventListener("hashchange", () => {
  if (window.location.hash === "#collaboration-form") openCollaborationForm({ focusFirstField: true });
});

function buildMailtoHref() {
  const value = (name) => (form.elements.namedItem(name)?.value || "").trim();
  const body = [
    `Name: ${value("name")}`, `Community / project: ${value("community")}`, "",
    "What I can offer:", value("offer"), "", "What I am looking for:", value("seeking"), "",
    `Contact email: ${value("email")}`,
    value("wechat") ? `WeChat: ${value("wechat")}` : "",
    value("notes") ? `Notes: ${value("notes")}` : ""
  ].filter(Boolean).join("\n");
  return `mailto:wayneyjin@gmail.com?subject=${encodeURIComponent("CoC — Collaboration Intro")}&body=${encodeURIComponent(body)}`;
}

function validateIntroduction() {
  form.querySelectorAll("[required]").forEach((field) => {
    field.setCustomValidity(field.value.trim() ? "" : translate("form.fieldRequired"));
  });
  if (form.reportValidity()) return true;
  setFormState("invalid");
  return false;
}

form.addEventListener("invalid", (event) => {
  event.target.setAttribute("aria-invalid", "true");
  setFormState("invalid");
}, true);
form.addEventListener("input", (event) => {
  if (!(event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement)) return;
  event.target.setCustomValidity("");
  event.target.removeAttribute("aria-invalid");
  if (["invalid", "success"].includes(formState)) setFormState("idle");
});
form.addEventListener("submit", (event) => {
  if (formState === "sending" || !validateIntroduction() || form.elements.namedItem("_honey").value) {
    event.preventDefault();
    return;
  }
  setFormState("sending");
});
document.getElementById("mailto-fallback").addEventListener("click", () => {
  if (validateIntroduction()) window.location.href = buildMailtoHref();
});
