const WECHAT_ID = "on request";
const LANGUAGE_STORAGE_KEY = "coc-language";
const FORM_TIMEOUT_MS = 20000;

const translations = {
  en: {
    "page.title": "Community of Community — Make friends and Shared possibilities.",
    "page.description": "Community of Community (CoC) is a public-benefit, non-commercial space connecting independent communities through shared learning and collaboration.",
    skip: "Skip to content",
    "nav.label": "Main navigation",
    "nav.scope": "Our scope",
    "nav.members": "Founding Members",
    "nav.contact": "Get involved ↗",
    "language.label": "Language",
    "hero.eyebrow": "By communities, for communities",
    "hero.titleOne": "Make friends",
    "hero.titleTwo": "and Shared possibilities.",
    "hero.description": "A public-benefit, non-commercial space for community founders, organizers, and builders to connect, share experience, and create something meaningful together.",
    "hero.action": "Introduce your community",
    "hero.discussions": "Join the conversation",
    "hero.note": "Create space. Build connections.",
    "hero.visualLabel": "A shared space, not a single community",
    "hero.imageAlt": "Independent communities connected around a shared campfire",
    "hero.caption": "Different communities. A common ground.",
    "principles.summary": "We connect communities. We do not replace them.",
    "principles.label": "Principles",
    "principles.benefit": "Public benefit",
    "principles.independence": "Independent by design",
    "principles.consent": "Participation by choice",
    "scope.eyebrow": "Purpose & boundaries",
    "scope.title": "Clear purpose. Room to collaborate.",
    "scope.intro": "Less duplicated effort. More thoughtful connections. Practical ways to support one another, with each community's autonomy intact.",
    "scope.inLabel": "In scope",
    "scope.inTitle": "Connections that serve communities.",
    "scope.inOne": "Founder and organizer exchanges; shared learning.",
    "scope.inTwo": "Consent-based introductions and knowledge or resource sharing.",
    "scope.inThree": "Small joint initiatives, mutual support, and opportunities for young builders.",
    "scope.outLabel": "Out of scope",
    "scope.outTitle": "Not a replacement. Not a broker.",
    "scope.outOne": "Running, absorbing, or speaking on behalf of member communities.",
    "scope.outTwo": "Commercial brokerage, paid lead generation, or selling member access.",
    "scope.outThree": "Mandatory commitments, guaranteed funding or reach, or sharing private materials without permission.",
    "approach.eyebrow": "How we collaborate",
    "approach.title": "Start small. Learn together.",
    "approach.intro": "An early-stage, relationship-led start. Begin with trusted introductions, welcome new perspectives, and build confidence through useful work.",
    "approach.oneTitle": "Introduce your work",
    "approach.oneBody": "Share your community, what you can offer, and what you are looking for.",
    "approach.twoTitle": "Find common ground",
    "approach.twoBody": "Explore a relevant connection. Participation is always a choice, never an obligation.",
    "approach.threeTitle": "Agree on one initiative",
    "approach.threeBody": "Clarify roles, time commitments, attribution, and what may be shared before starting.",
    "approach.fourTitle": "Learn and share back",
    "approach.fourBody": "Reflect together. Share useful experience with permission, then consider the next step.",
    "goals.eyebrow": "Looking ahead",
    "goals.title": "Three directions. One shared purpose.",
    "goals.intro": "Support the people who build communities. These are directions we are working toward, not promises of outcomes already delivered.",
    "goals.oneTitle": "Connect founders",
    "goals.oneBody": "Help early-stage community founders exchange experience, receive feedback, and discover collaboration opportunities.",
    "goals.oneTag": "Experience → shared learning",
    "goals.twoTitle": "Amplify with experienced partners",
    "goals.twoBody": "Invite established community partners to share knowledge and extend the reach of worthwhile, public-benefit work.",
    "goals.twoTag": "Experience → wider impact",
    "goals.threeTitle": "Support young builders",
    "goals.threeBody": "Offer emerging builders meaningful roles, mentorship, and opportunities to develop work and visibility through real collaboration.",
    "goals.threeTag": "Opportunity → lasting capability",
    "members.eyebrow": "Creating the space together",
    "members.title": "Founding Members",
    "members.intro": "Our Founding Members help create this space for public-benefit collaboration. Each remains independent; cooperation begins with mutually agreed initiatives.",
    "contact.eyebrow": "Get involved",
    "contact.title": "A connection starts with an introduction.",
    "contact.intro": "Tell us what you are building, what you can share, and where a connection could help. A thoughtful starting point is enough.",
    "contact.issues": "Propose a collaboration",
    "contact.discussions": "Explore an idea together",
    "contact.email": "Contact by email",
    "contact.wechat": "WeChat available on request",
    "contact.wechatId": "WeChat: {id}",
    "contact.boundary": "GitHub Issues and Discussions are public. Prefer email or this form for personal contact details.",
    "form.title": "Collaboration Intro",
    "form.summaryKicker": "Email introduction",
    "form.summaryTitle": "Collaboration Intro",
    "form.summaryHint": "Open the form to share what you build and what you are looking for. It reaches wayneyjin@gmail.com.",
    "form.summaryOpen": "Open form",
    "form.summaryClose": "Close",
    "form.required": "* Required fields",
    "form.name": "Name / preferred name",
    "form.community": "Community or project",
    "form.offer": "What can you offer?",
    "form.offerPlaceholder": "Experience, knowledge, resources, or a shared initiative…",
    "form.seeking": "What are you looking for?",
    "form.seekingPlaceholder": "A conversation, feedback, collaborators, or support…",
    "form.email": "Contact email",
    "form.wechat": "WeChat",
    "form.optional": "(optional)",
    "form.notes": "Additional notes",
    "form.privacy": "Submitting sends these details to CoC via FormSubmit. Please share only information you have permission to share, and do not include confidential material.",
    "form.submit": "Send introduction",
    "form.sending": "Sending introduction…",
    "form.success": "Your introduction has been accepted for processing. Thank you for connecting with CoC.",
    "form.pending": "This form still needs email activation. Your entries are preserved; please contact wayneyjin@gmail.com directly for now.",
    "form.error": "We could not confirm your submission. Your entries are preserved. Please retry or email wayneyjin@gmail.com; avoid repeated retries if delivery is uncertain.",
    "form.invalid": "Please complete all required fields and provide a valid contact email.",
    "form.fieldRequired": "Please complete this field with more than spaces.",
    "footer.note": "Public benefit. Independent communities. Respect for boundaries.",
    "footer.links": "Community links",
    "footer.contact": "Contact ↗"
  },
  zh: {
    "page.title": "Community of Community — 结交朋友，共享可能。",
    "page.description": "Community of Community（CoC）是公益性质、非商业的社区协作空间，支持独立社区之间的交流、共同学习与合作。",
    skip: "跳转至主要内容",
    "nav.label": "主导航",
    "nav.scope": "协作范围",
    "nav.members": "创始成员",
    "nav.contact": "参与协作 ↗",
    "language.label": "语言切换",
    "hero.eyebrow": "由社区共同参与，服务社区",
    "hero.titleOne": "结交朋友，",
    "hero.titleTwo": "共享可能。",
    "hero.description": "一个公益性质、非商业的协作空间，为社区创始人、组织者与建设者创造连接，支持经验交流与有共同价值的合作。",
    "hero.action": "介绍您的社区",
    "hero.discussions": "参与交流讨论",
    "hero.note": "为交流创造空间，为合作建立连接。",
    "hero.visualLabel": "共同的协作空间，而非单一社区",
    "hero.imageAlt": "独立社区围绕共同篝火建立连接",
    "hero.caption": "各自独立的社区，共同交流的空间。",
    "principles.summary": "我们连接社区，不替代各社区自身。",
    "principles.label": "协作原则",
    "principles.benefit": "公益协作",
    "principles.independence": "保持独立",
    "principles.consent": "自愿参与",
    "scope.eyebrow": "使命与边界",
    "scope.title": "明确协作方向，尊重各方边界。",
    "scope.intro": "减少重复探索，促进有意义的连接，推动切实的相互支持，同时尊重各社区的自主权。",
    "scope.inLabel": "参与范围 / In scope",
    "scope.inTitle": "服务社区的连接与合作。",
    "scope.inOne": "社区创始人与组织者交流、共同学习。",
    "scope.inTwo": "经当事方同意的介绍、知识与资源分享。",
    "scope.inThree": "小规模共同项目、相互支持与年轻建设者的发展机会。",
    "scope.outLabel": "不参与范围 / Out of scope",
    "scope.outTitle": "不替代社区，不从事商业中介。",
    "scope.outOne": "代管、整合成员社区，或代表成员社区发言。",
    "scope.outTwo": "商业撮合、付费获客，或出售成员联系渠道。",
    "scope.outThree": "强制参与、承诺资金或传播效果，或未经许可分享非公开材料。",
    "approach.eyebrow": "如何协作",
    "approach.title": "从具体协作起步，共同积累经验。",
    "approach.intro": "目前处于以信任关系为基础的起步阶段。从相互介绍开始，欢迎新的视角，通过切实有益的协作逐步建立信任。",
    "approach.oneTitle": "介绍正在开展的工作",
    "approach.oneBody": "说明社区或项目、能够提供的支持，以及希望寻求的合作。",
    "approach.twoTitle": "寻找共同关注点",
    "approach.twoBody": "探索合适的连接。参与始终出于自主选择，不构成义务。",
    "approach.threeTitle": "明确一次具体协作",
    "approach.threeBody": "在开始前约定角色、时间投入、署名方式与可公开范围。",
    "approach.fourTitle": "共同复盘与分享",
    "approach.fourBody": "总结经验，在获得同意后分享有益成果，再考虑下一步协作。",
    "goals.eyebrow": "未来目标",
    "goals.title": "三个方向，共同服务社区建设。",
    "goals.intro": "为社区建设者提供支持。这些是持续推进的方向，并非已经兑现的成果承诺。",
    "goals.oneTitle": "促进创始人交流",
    "goals.oneBody": "支持初期社区创始人分享经验、获得反馈，并发现合作机会。",
    "goals.oneTag": "经验交流 → 共同学习",
    "goals.twoTitle": "携手资深社区伙伴",
    "goals.twoBody": "邀请有经验的社区伙伴贡献知识，扩大有价值的公益协作的影响力。",
    "goals.twoTag": "经验支持 → 扩大影响",
    "goals.threeTitle": "支持年轻建设者",
    "goals.threeBody": "提供真实协作角色、经验指导与成果展示机会，帮助年轻建设者积累能力与作品。",
    "goals.threeTag": "实践机会 → 持续成长",
    "members.eyebrow": "共同创造协作空间",
    "members.title": "Founding Members / 创始成员",
    "members.intro": "创始成员共同支持公益协作，为各社区创造连接与合作空间。各方保持独立，从经共同确认的具体事项开始合作。",
    "contact.eyebrow": "参与协作",
    "contact.title": "从一份介绍，建立新的连接。",
    "contact.intro": "欢迎说明正在开展的工作、能够分享的经验与资源，以及希望获得的支持。清晰的介绍，是合作的起点。",
    "contact.issues": "提出具体合作建议",
    "contact.discussions": "交流想法与共同关注点",
    "contact.email": "通过邮箱联系",
    "contact.wechat": "微信联系方式可按需提供。",
    "contact.wechatId": "微信：{id}",
    "contact.boundary": "GitHub Issues 与 Discussions 为公开内容。个人联系方式请优先通过邮箱或本表单提供。",
    "form.title": "合作介绍 / Collaboration Intro",
    "form.summaryKicker": "邮件介绍",
    "form.summaryTitle": "合作介绍",
    "form.summaryHint": "点开表单，介绍你在做的事与希望寻求的连接。提交后将发送至 wayneyjin@gmail.com。",
    "form.summaryOpen": "打开表单",
    "form.summaryClose": "收起",
    "form.required": "* 为必填项",
    "form.name": "姓名 / 称呼",
    "form.community": "社区或项目",
    "form.offer": "能够提供的支持",
    "form.offerPlaceholder": "经验、知识、资源，或希望共同推进的事项……",
    "form.seeking": "希望寻求的合作或支持",
    "form.seekingPlaceholder": "交流、反馈、合作伙伴，或其他支持……",
    "form.email": "联系邮箱",
    "form.wechat": "微信",
    "form.optional": "（选填）",
    "form.notes": "备注",
    "form.privacy": "提交后，以上信息将通过 FormSubmit 发送给 CoC。请仅提供您有权分享的信息，请勿包含机密材料。",
    "form.submit": "提交合作介绍",
    "form.sending": "正在提交介绍……",
    "form.success": "您的介绍已被接受处理。感谢您与 CoC 建立联系。",
    "form.pending": "表单尚待完成邮箱激活。已保留您填写的内容，请暂时直接联系 wayneyjin@gmail.com。",
    "form.error": "暂时无法确认提交结果，已保留您填写的内容。请重试或发送邮件至 wayneyjin@gmail.com；如收件情况不确定，请避免反复提交。",
    "form.invalid": "请完整填写必填项，并提供有效的联系邮箱。",
    "form.fieldRequired": "请填写此项，内容不能仅为空格。",
    "footer.note": "坚持公益协作，保持社区独立，尊重参与边界。",
    "footer.links": "社区联系入口",
    "footer.contact": "联系邮箱 ↗"
  }
};

const form = document.getElementById("intro-form");
const formPanel = document.getElementById("collaboration-form");
const statusMessage = document.getElementById("form-status");
const submitButton = form.querySelector('button[type="submit"]');
const submitLabel = document.getElementById("submit-label");
let currentLanguage = "en";
let formState = "idle";

function openCollaborationForm({ focusFirstField = false } = {}) {
  if (!formPanel) return;
  formPanel.open = true;
  if (focusFirstField) {
    window.requestAnimationFrame(() => {
      document.getElementById("intro-name")?.focus({ preventScroll: true });
    });
  }
}

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
      if (targetAttribute === "textContent") {
        element.textContent = text;
      } else {
        element.setAttribute(targetAttribute, text);
      }
    });
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === currentLanguage));
  });

  if (WECHAT_ID && !["TBD", "on request"].includes(WECHAT_ID)) {
    document.querySelector("[data-wechat]").textContent = translate("contact.wechatId").replace("{id}", WECHAT_ID);
  }

  form.querySelectorAll("[required]").forEach((field) => {
    field.setCustomValidity("");
  });
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
const shouldOpenForm = returnUrl.searchParams.get("submitted") === "1" || returnUrl.hash === "#collaboration-form";
if (shouldOpenForm) openCollaborationForm({ focusFirstField: returnUrl.hash === "#collaboration-form" });

if (returnUrl.searchParams.get("submitted") === "1") {
  setFormState("success");
  returnUrl.searchParams.delete("submitted");
  returnUrl.hash = "collaboration-form";
  try {
    window.history.replaceState(null, "", returnUrl.href);
  } catch {}
}

window.addEventListener("hashchange", () => {
  if (window.location.hash === "#collaboration-form") {
    openCollaborationForm({ focusFirstField: true });
  }
});

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

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (formState === "sending") return;

  form.querySelectorAll("[required]").forEach((field) => {
    field.setCustomValidity(field.value.trim() ? "" : translate("form.fieldRequired"));
  });

  if (!form.reportValidity()) {
    setFormState("invalid");
    return;
  }

  if (form.elements.namedItem("_honey").value) return;

  const introduction = Object.fromEntries(new FormData(form).entries());
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), FORM_TIMEOUT_MS);
  const editableFields = form.querySelectorAll(".form-field input, .form-field textarea");
  editableFields.forEach((field) => { field.readOnly = true; });
  setFormState("sending");

  try {
    const endpoint = new URL(form.action);
    endpoint.pathname = `/ajax${endpoint.pathname}`;
    const response = await fetch(endpoint.href, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(introduction),
      credentials: "omit",
      signal: controller.signal
    });
    const result = await response.json();

    if (/activat|confirm.*email|check.*email/i.test(String(result.message || ""))) {
      setFormState("pending");
    } else if (response.ok && [true, "true"].includes(result.success)) {
      form.reset();
      form.querySelectorAll('[aria-invalid="true"]').forEach((field) => field.removeAttribute("aria-invalid"));
      setFormState("success");
    } else {
      throw new Error("Submission was not accepted");
    }
  } catch {
    setFormState("error");
  } finally {
    window.clearTimeout(timeout);
    editableFields.forEach((field) => { field.readOnly = false; });
    renderFormState();
    statusMessage.focus({ preventScroll: true });
  }
});
