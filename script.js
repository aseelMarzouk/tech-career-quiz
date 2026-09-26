/* ===================================== بيانات المجالات ===================================== */
const fields = {
cs: {
    title: "علوم الحاسب",
    icon: "💻",
    description:
        "مجال يهتم بالبرمجة وحل المشكلات وبناء الأنظمة والتطبيقات باستخدام التفكير المنطقي والتقنيات الحديثة.",

    why:
        "لأنك تميلين إلى التفكير المنطقي، حل المشكلات، وفهم كيفية عمل البرامج والتقنيات.",

    skills:
        "البرمجة، التفكير المنطقي، حل المشكلات، الخوارزميات، تطوير البرمجيات.",

    jobs:
        "مطور برمجيات، مطور تطبيقات، مطور مواقع، محلل نظم، مهندس برمجيات."
},

cybersecurity: {
    title: "الأمن السيبراني",
    icon: "🔐",
    description:
        "مجال يهتم بحماية الأنظمة والشبكات والبيانات من الهجمات والاختراقات والتهديدات الرقمية.",

    why:
        "لأنك تستمتعين باكتشاف المخاطر، التفكير التحليلي، وحماية المعلومات والأنظمة.",

    skills:
        "تحليل المخاطر، الشبكات، اختبار الاختراق، حماية الأنظمة، الاستجابة للحوادث.",

    jobs:
        "محللة أمن سيبراني، مختبرة اختراق، محللة تهديدات، مهندسة أمن معلومات."
},

ai: {
    title: "الذكاء الاصطناعي",
    icon: "🤖",
    description:
        "مجال يهتم بتطوير أنظمة قادرة على التعلم والتحليل واتخاذ القرارات باستخدام البيانات والخوارزميات.",

    why:
        "لأنك مهتمة بالتقنيات المستقبلية، تحليل المعلومات، والأنظمة الذكية.",

    skills:
        "البرمجة، الرياضيات، تحليل البيانات، تعلم الآلة، بناء النماذج الذكية.",

    jobs:
        "مهندسة ذكاء اصطناعي، مهندسة تعلم آلة، مطورة أنظمة ذكية، باحثة في الذكاء الاصطناعي."
},

software: {
    title: "هندسة البرمجيات",
    icon: "⚙️",
    description:
        "مجال يركز على تصميم وتطوير واختبار وإدارة البرمجيات بطريقة منظمة لبناء أنظمة عالية الجودة.",

    why:
        "لأنك تحبين بناء المشاريع البرمجية وتنظيمها والعمل على تطوير حلول تقنية متكاملة.",

    skills:
        "تحليل المتطلبات، البرمجة، الاختبار، إدارة المشاريع، تصميم الأنظمة.",

    jobs:
        "مهندسة برمجيات، محللة نظم، مهندسة اختبار، مديرة مشاريع تقنية."
},

uiux: {
    title: "تصميم UI/UX",
    icon: "🎨",
    description:
        "مجال يجمع بين التقنية والتصميم بهدف إنشاء واجهات وتجارب استخدام سهلة وجذابة.",

    why:
        "لأن لديك ميولًا إبداعية وتهتمين بطريقة ظهور التطبيقات وسهولة استخدامها.",

    skills:
        "التصميم، البحث عن المستخدم، تصميم الواجهات، تجربة المستخدم، النمذجة.",

    jobs:
        "مصممة UI، مصممة UX، مصممة منتجات رقمية، باحثة تجربة مستخدم."
},

data: {
    title: "علم البيانات",
    icon: "📊",
    description:
        "مجال يهتم بجمع البيانات وتحليلها واستخراج المعلومات والأنماط التي تساعد على اتخاذ القرارات.",

    why:
        "لأنك تميلين إلى الأرقام والتحليل واكتشاف الأنماط والمعلومات المخفية داخل البيانات.",

    skills:
        "الإحصاء، البرمجة، تحليل البيانات، تصور البيانات، قواعد البيانات.",

    jobs:
        "عالمة بيانات، محللة بيانات، محللة أعمال، مهندسة بيانات."
},

web: {
    title: "تطوير الويب",
    icon: "🌐",
    description:
        "مجال يهتم ببناء المواقع والتطبيقات التي تعمل عبر الإنترنت، من الواجهات إلى الأنظمة الخلفية.",

    why:
        "لأنك تحبين بناء المواقع، رؤية النتيجة بشكل مباشر، والجمع بين البرمجة والتصميم.",

    skills:
        "HTML، CSS، JavaScript، قواعد البيانات، تطوير الواجهات والأنظمة الخلفية.",

    jobs:
        "مطور مواقع، مطور Front-End، مطور Back-End، مطور Full-Stack."
}
};
/* ===================================== الأسئلة ===================================== */
const questions = [
{
    question: "أي شيء يجذبك أكثر؟",

    answers: [
        {
            text: "حل المشكلات وكتابة الأكواد",
            field: "cs"
        },
        {
            text: "حماية الحسابات والأنظمة من الاختراق",
            field: "cybersecurity"
        },
        {
            text: "الذكاء الاصطناعي والروبوتات",
            field: "ai"
        },
        {
            text: "تصميم التطبيقات وتجربة المستخدم",
            field: "uiux"
        }
    ]
},

{
    question: "لو واجهتِ مشكلة تقنية، ماذا تفعلين؟",

    answers: [
        {
            text: "أحلل المشكلة وأجرب حلولًا برمجية",
            field: "cs"
        },
        {
            text: "أبحث عن سبب المشكلة والثغرات المحتملة",
            field: "cybersecurity"
        },
        {
            text: "أبحث عن البيانات والأنماط المرتبطة بها",
            field: "data"
        },
        {
            text: "أفكر في طريقة تجعل الاستخدام أسهل",
            field: "uiux"
        }
    ]
},

{
    question: "أي مشروع تتمنين أن تنفذيه؟",

    answers: [
        {
            text: "تطبيق أو برنامج جديد",
            field: "software"
        },
        {
            text: "نظام يحمي المستخدمين من الهجمات",
            field: "cybersecurity"
        },
        {
            text: "نظام ذكي يتعلم من البيانات",
            field: "ai"
        },
        {
            text: "موقع إلكتروني جميل وتفاعلي",
            field: "web"
        }
    ]
},

{
    question: "أي نوع من المهام تستمتعين به أكثر؟",

    answers: [
        {
            text: "التفكير المنطقي وحل الألغاز",
            field: "cs"
        },
        {
            text: "التحليل والبحث عن الأخطاء",
            field: "cybersecurity"
        },
        {
            text: "التعامل مع الأرقام والبيانات",
            field: "data"
        },
        {
            text: "الإبداع والتصميم",
            field: "uiux"
        }
    ]
},

{
    question: "أي مادة دراسية قد تكون الأقرب لك؟",

    answers: [
        {
            text: "الرياضيات والمنطق",
            field: "cs"
        },
        {
            text: "الحاسب والتقنية",
            field: "software"
        },
        {
            text: "الإحصاء وتحليل البيانات",
            field: "data"
        },
        {
            text: "الفن والتصميم",
            field: "uiux"
        }
    ]
},

{
    question: "أي وصف يشبهك أكثر؟",

    answers: [
        {
            text: "أحب معرفة كيف تعمل الأشياء",
            field: "cs"
        },
        {
            text: "أنتبه للتفاصيل والمخاطر",
            field: "cybersecurity"
        },
        {
            text: "أحب التجربة والتقنيات الجديدة",
            field: "ai"
        },
        {
            text: "أهتم بالشكل والتفاصيل البصرية",
            field: "uiux"
        }
    ]
},

{
    question: "لو أردتِ إنشاء مشروع تقني، ماذا تختارين؟",

    answers: [
        {
            text: "تطبيق جوال",
            field: "software"
        },
        {
            text: "منصة إلكترونية",
            field: "web"
        },
        {
            text: "نظام ذكاء اصطناعي",
            field: "ai"
        },
        {
            text: "نظام حماية إلكتروني",
            field: "cybersecurity"
        }
    ]
},

{
    question: "أي مشكلة تثير فضولك أكثر؟",

    answers: [
        {
            text: "كيف أجعل البرنامج يعمل بطريقة أفضل؟",
            field: "software"
        },
        {
            text: "كيف يمكن اختراق النظام وكيف نحميه؟",
            field: "cybersecurity"
        },
        {
            text: "كيف يمكن للآلة أن تتعلم؟",
            field: "ai"
        },
        {
            text: "كيف أجعل التطبيق أسهل للمستخدم؟",
            field: "uiux"
        }
    ]
},

{
    question: "كيف تفضلين العمل؟",

    answers: [
        {
            text: "كتابة الأكواد وبناء الحلول",
            field: "cs"
        },
        {
            text: "التحليل والتحقيق",
            field: "cybersecurity"
        },
        {
            text: "تحليل الأرقام والبيانات",
            field: "data"
        },
        {
            text: "التصميم والإبداع",
            field: "uiux"
        }
    ]
},

{
    question: "أي نتيجة ستشعرك بالفخر أكثر؟",

    answers: [
        {
            text: "برنامج يعمل من البداية للنهاية",
            field: "software"
        },
        {
            text: "اكتشاف ثغرة وحماية النظام منها",
            field: "cybersecurity"
        },
        {
            text: "نظام ذكي يتعلم ويتطور",
            field: "ai"
        },
        {
            text: "تصميم يستخدمه الناس بسهولة",
            field: "uiux"
        }
    ]
},

{
    question: "ما الذي تستمتعين به أكثر؟",

    answers: [
        {
            text: "البرمجة والتجربة",
            field: "cs"
        },
        {
            text: "البحث والتحليل",
            field: "data"
        },
        {
            text: "التقنيات المستقبلية",
            field: "ai"
        },
        {
            text: "التصميم والأفكار الجديدة",
            field: "uiux"
        }
    ]
},

{
    question: "أي وظيفة تبدو مثيرة لاهتمامك؟",

    answers: [
        {
            text: "مطور برمجيات",
            field: "software"
        },
        {
            text: "مختبر اختراق",
            field: "cybersecurity"
        },
        {
            text: "مهندسة ذكاء اصطناعي",
            field: "ai"
        },
        {
            text: "مصممة تجربة مستخدم",
            field: "uiux"
        }
    ]
}
];
/* ===================================== المتغيرات ===================================== */
let currentQuestion = 0; let selectedAnswer = null;
let scores = { cs: 0, cybersecurity: 0, ai: 0, software: 0, uiux: 0, data: 0, web: 0 };
/* ===================================== تغيير الصفحات ===================================== */
function showPage(pageId) {
document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
});

document.getElementById(pageId).classList.add("active");

window.scrollTo({
    top: 0,
    behavior: "smooth"
});
}
/* ===================================== بدء الاختبار ===================================== */
function startQuiz() {
currentQuestion = 0;
selectedAnswer = null;

scores = {
    cs: 0,
    cybersecurity: 0,
    ai: 0,
    software: 0,
    uiux: 0,
    data: 0,
    web: 0
};

showPage("quizPage");

loadQuestion();
}
/* =====================================

   تحميل السؤال

===================================== */
function loadQuestion() {
const question = questions[currentQuestion];

selectedAnswer = null;

document.getElementById("nextButton").disabled = true;

// نص السؤال
document.getElementById("questionText").textContent =
    question.question;

// رقم السؤال
document.getElementById("questionNumber").textContent =
    "السؤال " + (currentQuestion + 1) + " من " + questions.length;

// النسبة
const percentage =
    Math.round(
        ((currentQuestion + 1) / questions.length) * 100
    );

document.getElementById("progressPercent").textContent =
    percentage + "%";

document.getElementById("progress").style.width =
    percentage + "%";


// رقم السؤال داخل الدائرة
const questionIcon =
    document.getElementById("questionIcon");

if (questionIcon) {
    questionIcon.textContent =
        currentQuestion + 1;
}


// الإجابات
const container =
    document.getElementById("answersContainer");

container.innerHTML = "";


question.answers.forEach((answer, index) => {

    const button = document.createElement("button");

    button.className = "answer";

    button.innerHTML = `
        <span class="answer-number">
            ${index + 1}
        </span>

        <span>
            ${answer.text}
        </span>
    `;

    button.onclick = function () {
        selectAnswer(button, answer);
    };

    container.appendChild(button);

});
}
/* =====================================

   اختيار الإجابة

===================================== */

function selectAnswer(button, answer) {

    document.querySelectorAll(".answer").forEach(item => {

        item.classList.remove("selected");

    });

    button.classList.add("selected");

    selectedAnswer = answer;

    document.getElementById("nextButton").disabled = false;

}

/* =====================================

   السؤال التالي

===================================== */

function nextQuestion() {

    if (!selectedAnswer) return;

    scores[selectedAnswer.field]++;

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        calculateResult();

    }

}

/* =====================================

   حساب النتيجة

===================================== */

function calculateResult() {

    let highestScore = 0;

    let resultField = "cs";

    for (const field in scores) {

        if (scores[field] > highestScore) {

            highestScore = scores[field];

            resultField = field;

        }

    }

    showResult(resultField);

}

/*=====================================

   عرض النتيجة

===================================== */

function showResult(field) {

    const result = fields[field];

    document.getElementById("resultIcon").textContent =

        result.icon;

    document.getElementById("resultTitle").textContent =

        result.title;

    document.getElementById("resultDescription").textContent =

        result.description;

    document.getElementById("resultWhy").textContent =

        result.why;

    document.getElementById("resultSkills").textContent =

        result.skills;

    document.getElementById("resultJobs").textContent =

        result.jobs;

    showPage("resultPage");

}

/* =====================================

   إعادة الاختبار

===================================== */

function restartQuiz() {

    startQuiz();

}

/* =====================================

   العودة للرئيسية

===================================== */

function goHome() {

    showPage("homePage");

}

/* =====================================

   عرض المجالات

===================================== */

function showAllFields() {

    const grid = document.getElementById("fieldsGrid");

    grid.innerHTML = "";

    Object.values(fields).forEach(field => {

        const card = document.createElement("div");

        card.className = "field-card";

        card.innerHTML = `

            <div class="field-icon">

                ${field.icon}

            </div>

            <h3>

                ${field.title}

            </h3>

            <p>

                ${field.description}

            </p>

        `;

        grid.appendChild(card);

    });

    showPage("fieldsPage");

}