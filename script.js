const courseSelect = document.getElementById("course");
const sessionSelect = document.getElementById("session");
const semesterSelect = document.getElementById("semester");
const hubResult = document.getElementById("hubResult");


const semesterNames = {

    1: "1st Semester",
    2: "2nd Semester",
    3: "3rd Semester",
    4: "4th Semester",
    5: "5th Semester",
    6: "6th Semester",
    7: "7th Semester",
    8: "8th Semester"

};

const studentData = {
    
    globalNotices: [
        {
            title: "College Holiday Notice",
            date: "2 October 2026",
            category: "Academic",
            description: "College will remain closed on 2 October 2026.",
            status: "New",
            file: "notices/holiday-notice.jpeg",

            audience: {
                course: "all",
                session: "all",
                semester: "all"
            }
        }
    ],


    "BCom": {

    "2024-2028": {

        1: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },

        2: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },

        3: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },

        4: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },

        5: {
            notices: [
                {
                    title: "Mid-Sem Test / CIA & Practical Examination Notice",
                    date: "21 September 2026",
                    category: "Examination",
                    description: "Mid-Sem Test/CIA and practical examinations for UG 1st, 3rd, 5th and 7th semesters are to be completed by 30 September 2026.",
                    status: "New",
                    file: "notices for sem 1,3,5,7/mid-sem-test-notice.jpeg",

                    audience: {
                        course: "BCom",
                        session: "2024-2028",
                        semester: 5
                    }
                },
            ],
            forms: [
                {
                    title: "Internship Registration Form",
                    date: "Check official portal",
                    description: "Online internship registration form for 5th semester students.",
                    fee: 50,
                    link: "https://internship.camsedu.com/login/studentregistration",
                    type: "online"
                }
            ],
            documents: [],
            certificates: [],
            downloads: []
        },

        6: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },

        7: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },

        8: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        }

    },


    "2025-2029": {

        1: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },

        2: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },

        3: {
            notices: [
                {
                    title: "Mid-Sem Test / CIA & Practical Examination Notice",
                    date: "21 September 2026",
                    category: "Examination",
                    description: "Mid-Sem Test/CIA and practical examinations for UG 1st, 3rd, 5th and 7th semesters are to be completed by 30 September 2026.",
                    status: "New",
                    file: "notices for sem 1,3,5,7/mid-sem-test-notice.jpeg",

                    audience: {
                        course: "BCom",
                        session: "2025-2029",
                        semester: 3
                    }
                },
            ],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },

        4: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },

        5: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },

        6: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },

        7: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },

        8: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        }

    },


    "2026-2030": {

        1: {
            notices: [
                {
                    title: "Mid-Sem Test / CIA & Practical Examination Notice",
                    date: "21 September 2026",
                    category: "Examination",
                    description: "Mid-Sem Test/CIA and practical examinations for UG 1st, 3rd, 5th and 7th semesters are to be completed by 30 September 2026.",
                    status: "New",
                    file: "notices for sem 1,3,5,7/mid-sem-test-notice.jpeg",

                    audience: {
                        course: "BCom",
                        session: "2026-2030",
                        semester: 1
                    }
                },
            ],
            forms: [],
            documents: [],
            certificates: [],
            downloads: [
                {
                    title: "Semester 1 Syllabus",
                    description: "Official syllabus for 1st semester students.",
                    file: "#"
                }
            ]
        },

        2: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },

        3: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },

        4: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },

        5: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },

        6: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },

        7: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },

        8: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        }

    }

    },

    "BA": {

    "2024-2028": {
        1: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        2: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        3: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        4: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        5: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        6: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        7: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        8: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        }
    },

    "2025-2029": {
        1: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        2: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        3: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        4: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        5: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        6: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        7: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        8: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        }
    },

    "2026-2030": {
        1: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        2: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        3: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        4: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        5: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        6: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        7: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        8: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        }
    }
},

    "BSc": {
    "2024-2028": {
        1: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        2: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        3: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        4: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        5: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        6: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        7: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        8: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        }
    },

    "2025-2029": {
        1: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        2: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        3: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        4: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        5: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        6: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        7: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        8: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        }
    },

    "2026-2030": {
        1: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        2: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        3: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        4: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        5: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        6: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        7: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        },
        8: {
            notices: [],
            forms: [],
            documents: [],
            certificates: [],
            downloads: []
        }
    }
}
};

let activeHubService = null;

function showHubServices() {
    updateStudentHub();
}


function updateStudentHub() {

    const course = courseSelect.value;
    const session = sessionSelect.value;
    const semester = semesterSelect.value;
    
    let semesterData =
       studentData[course]?.[session]?.[semester];

if (!semesterData) {
    semesterData = {
        notices: [],
        forms: [],        
        documents: [],
        certificates: [],
        downloads: []
    };
}

    if (!course || !session || !semester) {

        hubResult.innerHTML = `

            <div class="result-header">

                <div class="calendar-icon">
                    ▣
                </div>

                <div>

                    <h3>
                        Choose your course, session and semester
                    </h3>

                    <p>
                        Your student services will appear here.
                    </p>

                </div>

            </div>

        `;

        return;
    }


    hubResult.innerHTML = `

        <div class="result-header">

            <div class="calendar-icon">
                ▣
            </div>

            <div>

                <h3>
                    ${semesterNames[semester]} • ${session}
                </h3>

                <p>
                    Select what you need.
                </p>

            </div>

        </div>


        <div class="hub-services">


            <a href="#" class="hub-service-card" id="noticesCard">

                <div class="card-icon"
                     style="background:#dcecff;color:#2563eb;">
                    📢
                </div>

                <div class="card-text">

                    <h4>Notices</h4>

                    <p>
                        ${semesterData.notices.length > 0
                            ? `${semesterData.notices.length} notice(s) available.`
                            : "No notices available yet."
                        }
                    </p>

                </div>

                <div class="card-arrow">
                    →
                </div>

            </a>



            <a href="#" class="hub-service-card" id="formsCard">

                <div class="card-icon"
                     style="background:#d8f6ea;color:#159570;">
                    ▣
                </div>

                <div class="card-text">

                    <h4>Forms</h4>

                    <p>
                        Find available forms and applications.
                    </p>

                </div>

                <div class="card-arrow">
                    →
                </div>

            </a>



            <a href="#" class="hub-service-card" id="documentsCard">

                <div class="card-icon"
                     style="background:#e9ddff;color:#7138d9;">
                    📄
                </div>

                <div class="card-text">

                    <h4>Documents</h4>

                    <p>
                        View and download documents.
                    </p>

                </div>

                <div class="card-arrow">
                    →
                </div>

            </a>



            <a href="#" class="hub-service-card" id="certificatesCard">

                <div class="card-icon"
                     style="background:#ffedbf;color:#e99a00;">
                    🎓
                </div>

                <div class="card-text">
                    <h4>Certificates</h4>
                    <p>
                        Access certificate-related services.
                    </p>
                </div>

                <div class="card-arrow">
                    →
                </div>

            </a>



            <a href="#" class="hub-service-card" id="downloadsCard">

                <div class="card-icon"
                     style="background:#ffdfe1;color:#ef4444;">
                    ↓
                </div>

                <div class="card-text">

                    <h4>Downloads</h4>

                    <p>
                        Get useful files and resources.
                    </p>

                </div>

                <div class="card-arrow">
                    →
                </div>

            </a>



            <a href="https://wa.me/YOURNUMBER"
               class="hub-service-card"
               target="_blank"
               rel="noopener noreferrer">

                <div class="card-icon"
                     style="background:#d8f3f0;color:#159a91;">
                    🎧
                </div>

                <div class="card-text">

                    <h4>Get Help</h4>

                    <p>
                        Request assistance from StudentEase.
                    </p>

                </div>

                <div class="card-arrow">
                    →
                </div>

            </a>


        </div>

    `;

}


sessionSelect.addEventListener(
    "change",
    updateStudentHub
);

document.addEventListener("click", function(event) {

    const noticesCard = event.target.closest("#noticesCard");
    const formsCard = event.target.closest("#formsCard");
    const documentsCard =event.target.closest("#documentsCard");
    const certificatesCard = event.target.closest("#certificatesCard");
    const downloadsCard = event.target.closest("#downloadsCard");

    if (!noticesCard && !formsCard && !documentsCard && !certificatesCard && !downloadsCard) return;

    event.preventDefault();
    const course = courseSelect.value;
    const session = sessionSelect.value;
    const semester = semesterSelect.value;

    const semesterData =
        studentData[course]?.[session]?.[semester];

    if (!semesterData) return;

    // =========================
// FORMS
// =========================

if (formsCard) {

    const forms = semesterData.forms;

    if (!forms.length) {

        hubResult.innerHTML = `
            
            <button type="button"
                    class="hub-back-btn"
                    onclick="showHubServices()">
                ← Back to Services
            </button>

            <div class="notice-archive">
                <h3>No forms available</h3>
                <p>There are currently no forms for this semester.</p>
            </div>
        `;

        return;
    }

    hubResult.innerHTML = `

        <button type="button"
                class="hub-back-btn"
                onclick="showHubServices()">
            ← Back to Services
        </button>

        <div class="notice-archive">

            <div class="archive-header">

                <div>
                    <h3>
                        ${semesterNames[semester]} Forms
                    </h3>

                    <p>
                        ${session} • ${forms.length} form(s)
                    </p>
                </div>

            </div>

            <div class="notice-list">

                ${forms.map(form => `

                    <div class="notice-item">

                        <h4>
                            ${form.title}
                        </h4>

                        <div class="notice-date">
                            📅 Deadline: ${form.date}
                        </div>

                        <p>
                            ${form.description}
                        </p>

                        <div class="form-actions">

                            <a
                                href="${form.link}"
                                class="form-btn form-btn-free"
                                target="_blank"
                                rel="noopener"
                            >
                                Fill Yourself
                            </a>

                            <a
                                href="https://wa.me/?text=${encodeURIComponent(
                                    `Hi StudentEase, I want help filling the ${form.title}.`
                                )}"
                                class="form-btn form-btn-paid"
                                target="_blank"
                                rel="noopener"
                            >
                                Get It Done — ₹50
                            </a>

                        </div>
                        
                        <p class="form-fee-note">
                            StudentEase assistance fee: ₹50.
                            Official university fees, if applicable, are separate.
                        </p>

                    </div>

                `).join("")}

            </div>

        </div>

    `;

    return;
}


// =========================
// DOCUMENTS
// =========================

if (documentsCard) {

    hubResult.innerHTML = `

        <button type="button"
                class="hub-back-btn"
                onclick="showHubServices()">
            ← Back to Services
        </button>

        <div class="document-section">

            <div class="archive-header">

                <h3>
                    ${semesterNames[semester]} Documents
                </h3>

                <p>
                    ${session} • Important student documents
                </p>

            </div>


            <div class="document-list">


                <!-- MARKSHEET -->
                <div class="document-item">

                    <div class="document-item-main">

                        <div class="document-icon document-purple">
                            📄
                        </div>

                        <div class="document-item-content">

                            <h4>Marksheet</h4>

                            <p>
                                View or download your semester marksheet.
                            </p>

                        </div>

                    </div>

                    <div class="document-item-actions">

                        <a href="https://lu.indiaexaminfo.co.in/result_patliputra.aspx"
                           class="document-action-btn document-free-btn">
                            View / Download
                        </a>

                        <a href="https://wa.me/?text=${encodeURIComponent(
                            `Hi StudentEase, I need help downloading my semester marksheet.`
                        )}"
                           class="document-action-btn document-paid-btn"
                           target="_blank"
                           rel="noopener">
                            Get It Done — ₹50
                        </a>

                    </div>

                </div>


                <!-- ADMIT CARD -->
                <div class="document-item">

                    <div class="document-item-main">

                        <div class="document-icon document-green">
                            🎫
                        </div>

                        <div class="document-item-content">

                            <h4>Admit Card</h4>

                            <p>
                                View or download your examination admit card.
                            </p>

                        </div>

                    </div>

                    <div class="document-item-actions">

                        <a href="#"
                           class="document-action-btn document-free-btn">
                            View / Download
                        </a>

                        <a href="https://wa.me/?text=${encodeURIComponent(
                            `Hi StudentEase, I need help getting my examination admit card.`
                        )}"
                           class="document-action-btn document-paid-btn"
                           target="_blank"
                           rel="noopener">
                            Get It Done — ₹50
                        </a>

                    </div>

                </div>


                <!-- FEE RECEIPT -->
                <div class="document-item">

                    <div class="document-item-main">

                        <div class="document-icon document-yellow">
                            🧾
                        </div>

                        <div class="document-item-content">

                            <h4>Fee / Payment Receipt</h4>

                            <p>
                                View or download your semester payment receipt.
                            </p>

                        </div>

                    </div>

                    <div class="document-item-actions">

                        <a href="#"
                           class="document-action-btn document-free-btn">
                            Login & Download
                        </a>

                        <a href="https://wa.me/?text=${encodeURIComponent(
                            `Hi StudentEase, I need help downloading my semester payment receipt.`
                        )}"
                           class="document-action-btn document-paid-btn"
                           target="_blank"
                           rel="noopener">
                            Get It Done — ₹50
                        </a>

                    </div>

                </div>


                <!-- REGISTRATION -->
                <div class="document-item">

                    <div class="document-item-main">

                        <div class="document-icon document-pink">
                            📑
                        </div>

                        <div class="document-item-content">

                            <h4>Registration / Enrollment</h4>

                            <p>
                                Access your registration or enrollment documents.
                            </p>

                        </div>

                    </div>

                    <div class="document-item-actions">

                        <a href="#"
                           class="document-action-btn document-free-btn">
                            Login & Download
                        </a>

                        <a href="https://wa.me/?text=${encodeURIComponent(
                            `Hi StudentEase, I need help with my registration or enrollment document.`
                        )}"
                           class="document-action-btn document-paid-btn"
                           target="_blank"
                           rel="noopener">
                            Get It Done — ₹50
                        </a>

                    </div>

                </div>


                <!-- OTHER DOCUMENTS -->
                <div class="document-item">

                    <div class="document-item-main">

                        <div class="document-icon document-indigo">
                            📁
                        </div>

                        <div class="document-item-content">

                            <h4>Other Documents</h4>

                            <p>
                                Access other important student documents.
                            </p>

                        </div>

                    </div>

                    <div class="document-item-actions">

                        <a href="#"
                           class="document-action-btn document-free-btn">
                            View Documents
                        </a>

                        <a href="https://wa.me/?text=${encodeURIComponent(
                            `Hi StudentEase, I need help getting another student document.`
                        )}"
                           class="document-action-btn document-paid-btn"
                           target="_blank"
                           rel="noopener">
                            Get It Done — ₹50
                        </a>

                    </div>

                </div>


            </div>

        </div>

    `;

    return;
}


// =========================
// CERTIFICATES
// =========================

if (certificatesCard) {

    hubResult.innerHTML = `

        <button type="button"
                class="hub-back-btn"
                onclick="showHubServices()">
            ← Back to Services
        </button>

        <div class="document-section">

            <div class="archive-header">

                <h3>
                    ${semesterNames[semester]} Certificates
                </h3>

                <p>
                    ${session} • Certificate-related services
                </p>

            </div>


            <div class="document-list">


                <!-- INTERNSHIP -->
                <div class="document-item">

                    <div class="document-item-main">

                        <div class="document-icon document-blue">
                            🎓
                        </div>

                        <div class="document-item-content">

                            <h4>Internship Certificate</h4>

                            <p>
                                View or download your internship certificate.
                            </p>

                        </div>

                    </div>

                    <div class="document-item-actions">

                        <a href="#"
                           class="document-action-btn document-free-btn">
                            View / Download
                        </a>

                        <a href="https://wa.me/?text=${encodeURIComponent(
                            `Hi StudentEase, I need help with my internship certificate.`
                        )}"
                           class="document-action-btn document-paid-btn"
                           target="_blank"
                           rel="noopener">
                            Get It Done — ₹50
                        </a>

                    </div>

                </div>


                <!-- COURSE COMPLETION -->
                <div class="document-item">

                    <div class="document-item-main">

                        <div class="document-icon document-purple">
                            📜
                        </div>

                        <div class="document-item-content">

                            <h4>Course Completion</h4>

                            <p>
                                Access your course completion certificate.
                            </p>

                        </div>

                    </div>

                    <div class="document-item-actions">

                        <a href="#"
                           class="document-action-btn document-free-btn">
                            View / Download
                        </a>

                        <a href="https://wa.me/?text=${encodeURIComponent(
                            `Hi StudentEase, I need help with my course completion certificate.`
                        )}"
                           class="document-action-btn document-paid-btn"
                           target="_blank"
                           rel="noopener">
                            Get It Done — ₹50
                        </a>

                    </div>

                </div>


                <!-- TRAINING -->
                <div class="document-item">

                    <div class="document-item-main">

                        <div class="document-icon document-green">
                            🏅
                        </div>

                        <div class="document-item-content">

                            <h4>Training Certificate</h4>

                            <p>
                                View or download your training certificate.
                            </p>

                        </div>

                    </div>

                    <div class="document-item-actions">

                        <a href="#"
                           class="document-action-btn document-free-btn">
                            View / Download
                        </a>

                        <a href="https://wa.me/?text=${encodeURIComponent(
                            `Hi StudentEase, I need help with my training certificate.`
                        )}"
                           class="document-action-btn document-paid-btn"
                           target="_blank"
                           rel="noopener">
                            Get It Done — ₹50
                        </a>

                    </div>

                </div>


                <!-- WORKSHOP -->
                <div class="document-item">

                    <div class="document-item-main">

                        <div class="document-icon document-yellow">
                            🏆
                        </div>

                        <div class="document-item-content">

                            <h4>Workshop Certificate</h4>

                            <p>
                                Access certificates received for workshops.
                            </p>

                        </div>

                    </div>

                    <div class="document-item-actions">

                        <a href="#"
                           class="document-action-btn document-free-btn">
                            View / Download
                        </a>

                        <a href="https://wa.me/?text=${encodeURIComponent(
                            `Hi StudentEase, I need help with my workshop certificate.`
                        )}"
                           class="document-action-btn document-paid-btn"
                           target="_blank"
                           rel="noopener">
                            Get It Done — ₹50
                        </a>

                    </div>

                </div>


                <!-- NSS / NCC -->
                <div class="document-item">

                    <div class="document-item-main">

                        <div class="document-icon document-pink">
                            ⭐
                        </div>

                        <div class="document-item-content">

                            <h4>NSS / NCC Certificate</h4>

                            <p>
                                Access your NSS or NCC related certificate.
                            </p>

                        </div>

                    </div>

                    <div class="document-item-actions">

                        <a href="#"
                           class="document-action-btn document-free-btn">
                            View / Download
                        </a>

                        <a href="https://wa.me/?text=${encodeURIComponent(
                            `Hi StudentEase, I need help with my NSS or NCC certificate.`
                        )}"
                           class="document-action-btn document-paid-btn"
                           target="_blank"
                           rel="noopener">
                            Get It Done — ₹50
                        </a>

                    </div>

                </div>


                <!-- PARTICIPATION / ACHIEVEMENT -->
                <div class="document-item">

                    <div class="document-item-main">

                        <div class="document-icon document-indigo">
                            📋
                        </div>

                        <div class="document-item-content">

                            <h4>Participation / Achievement</h4>

                            <p>
                                Access participation and achievement certificates.
                            </p>

                        </div>

                    </div>

                    <div class="document-item-actions">

                        <a href="#"
                           class="document-action-btn document-free-btn">
                            View / Download
                        </a>

                        <a href="https://wa.me/?text=${encodeURIComponent(
                            `Hi StudentEase, I need help with my participation or achievement certificate.`
                        )}"
                           class="document-action-btn document-paid-btn"
                           target="_blank"
                           rel="noopener">
                            Get It Done — ₹50
                        </a>

                    </div>

                </div>


            </div>

        </div>

    `;

    return;
}


// =========================
// DOWNLOADS
// =========================

if (downloadsCard) {

    const downloads = semesterData.downloads;

    if (!downloads.length) {

        hubResult.innerHTML = `

            <button type="button"
                    class="hub-back-btn"
                    onclick="showHubServices()">
                ← Back to Services
            </button>

            <div class="notice-archive">

                <h3>No downloads available</h3>

                <p>
                    There are currently no downloadable resources
                    for this semester.
                </p>

            </div>

        `;

        return;
    }


    hubResult.innerHTML = `

        <button type="button"
                class="hub-back-btn"
                onclick="showHubServices()">
            ← Back to Services
        </button>


        <div class="document-section">

            <div class="archive-header">

                <div>

                    <h3>
                        ${semesterNames[semester]} Downloads
                    </h3>

                    <p>
                        ${session} • Useful academic resources
                    </p>

                </div>

            </div>


            <div class="document-grid">

                ${downloads.map(download => `

                    <div class="document-box">

                        <div class="document-box-top">

                            <div class="document-icon document-blue">
                                ↓
                            </div>

                        </div>


                        <div class="document-box-content">

                            <h4>
                                ${download.title}
                            </h4>

                            <p>
                                ${download.description}
                            </p>

                        </div>


                        <div class="document-box-action">

                            <a
                                href="${download.file}"
                                class="document-action-btn document-free-btn"
                                target="_blank"
                                rel="noopener"
                            >
                                View / Download
                            </a>

                        </div>

                    </div>

                `).join("")}

            </div>

        </div>

    `;

    return;
}

// =========================
// NOTICES
// =========================

if (!noticesCard) return;

const notices = [
    ...studentData.globalNotices.filter(notice => {

        const target = notice.audience;

        const courseMatch =
            target.course === "all" ||
            target.course === course;

        const sessionMatch =
            target.session === "all" ||
            target.session === session;

        const semesterMatch =
            target.semester === "all" ||
            Number(target.semester) === Number(semester);

        return courseMatch && sessionMatch && semesterMatch;

    }),

    ...semesterData.notices.filter(notice => {

        if (!notice.audience) {
            return true;
        }

        const target = notice.audience;

        const courseMatch =
            target.course === "all" ||
            target.course === course;

        const sessionMatch =
            target.session === "all" ||
            target.session === session;

        const semesterMatch =
            target.semester === "all" ||
            Number(target.semester) === Number(semester);

        return courseMatch && sessionMatch && semesterMatch;

    })
];

    if (!notices.length) {

        hubResult.innerHTML = `

            <button type="button"
                    class="hub-back-btn"
                    onclick="showHubServices()">
                ← Back to Services
            </button>

            <div class="notice-archive">
                <h3>No notices available</h3>
                <p>There are currently no notices for this semester.</p>
            </div>
        `;

        return;
    }

    hubResult.innerHTML = `

        <button type="button"
                class="hub-back-btn"
                onclick="showHubServices()">
            ← Back to Services
        </button>

        <div class="notice-archive">

            <div class="archive-header">

                <div>
                    <h3>
                        ${semesterNames[semester]} Notices
                    </h3>

                    <p>
                        ${session} • ${notices.length} notices
                    </p>
                </div>

            </div>


            <div class="notice-list">

                ${notices.map((notice, index) => `

                    <div class="notice-item">

                        ${index === 0
                            ? `<span class="new-badge">NEW</span>`
                            : ""
                        }

                        <h4>
                            ${notice.title}
                        </h4>

                        <div class="notice-date">
                            📅 ${notice.date}
                        </div>

                        <p>
                            ${notice.description}
                        </p>

                        <a
                            href="${notice.file}"
                            class="notice-view"
                        >
                            View Notice →
                        </a>

                    </div>

                `).join("")}

            </div>

        </div>

    `;

});

courseSelect.addEventListener(
    "change",
    updateStudentHub
);

sessionSelect.addEventListener(
    "change",
    updateStudentHub
);

semesterSelect.addEventListener(
    "change",
    updateStudentHub
);


/* =========================================
   NAVIGATION + SCROLL SPY
   ========================================= */

const navLinks = document.querySelectorAll(".nav-link");

const sections = Array.from(navLinks)
    .map(link => document.querySelector(link.getAttribute("href")))
    .filter(section => section);


/* -----------------------------------------
   CLICK NAVIGATION
   ----------------------------------------- */

navLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (!target) return;

        const headerHeight =
            document.querySelector(".site-header").offsetHeight;

        const startPosition = window.pageYOffset;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight -
            10;

        const distance = targetPosition - startPosition;

        // Scroll speed
        const duration = 450;

        let startTime = null;

        function smoothScroll(currentTime) {

            if (!startTime) {
                startTime = currentTime;
            }

            const elapsed = currentTime - startTime;

            const progress =
                Math.min(elapsed / duration, 1);

            // Smooth ease-in-out
            const eased =
                progress < 0.5
                    ? 2 * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            window.scrollTo(
                0,
                startPosition + distance * eased
            );

            if (progress < 1) {
                requestAnimationFrame(smoothScroll);
            }

        }

        requestAnimationFrame(smoothScroll);

    });

});


/* -----------------------------------------
   CHANGE ACTIVE BUTTON WHILE SCROLLING
   ----------------------------------------- */

function updateActiveNav() {

    const headerHeight =
        document.querySelector(".site-header").offsetHeight;

    const scrollPosition =
        window.pageYOffset + headerHeight + 80;

    let currentSection = sections[0];


    /* -----------------------------------------
       IF WE ARE AT THE BOTTOM OF THE PAGE
       ACTIVATE THE LAST SECTION
       ----------------------------------------- */

    const atBottom =
        window.innerHeight + window.pageYOffset >=
        document.documentElement.scrollHeight - 20;

    if (atBottom) {

        currentSection = sections[sections.length - 1];

    } else {

        sections.forEach(section => {

            if (section.offsetTop <= scrollPosition) {
                currentSection = section;
            }

        });

    }


    /* -----------------------------------------
       UPDATE ACTIVE NAVIGATION
       ----------------------------------------- */

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection.id
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener("scroll", updateActiveNav);

window.addEventListener("load", updateActiveNav);


// =========================================
// HOMEPAGE NOTICE BOARD
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    const homepageNoticeList =
        document.getElementById("homepageNoticeList");

    const noticeFilters =
        document.querySelectorAll(".notice-filter");

    if (!homepageNoticeList) return;


    // =========================
    // COLLECT ALL NOTICES
    // =========================

    const allNotices = [];

    studentData.globalNotices.forEach(notice => {
    allNotices.push(notice);
    });

    Object.entries(studentData).forEach(([key, course]) => {

        if (key === "globalNotices") return;

        Object.values(course).forEach(session => {

            Object.values(session).forEach(semester => {

                if (!semester.notices) return;

                semester.notices.forEach(notice => {

                    allNotices.push(notice);

                });

            });

        });

    });


    // =========================
    // REMOVE DUPLICATE NOTICES
    // =========================

    const uniqueNotices = [];

    const noticeKeys = new Set();

    allNotices.forEach(notice => {

        const key =
            `${notice.title}|${notice.date}|${notice.category}|${notice.file}`;

        if (!noticeKeys.has(key)) {

            noticeKeys.add(key);

            uniqueNotices.push(notice);

        }

    });


    // =========================
    // DISPLAY NOTICES
    // =========================

    let visibleNoticeCount = 5;

    function displayNotices(category = "all") {

        homepageNoticeList.innerHTML = "";

        visibleNoticeCount = 5;

        const filteredNotices =
            category === "all"

                ? uniqueNotices

                : uniqueNotices.filter(notice =>
                    notice.category &&
                    notice.category.toLowerCase() === category
                );


        if (filteredNotices.length === 0) {

            homepageNoticeList.innerHTML = `
                <div class="notice-empty">
                    No notices available in this category.
                </div>
            `;

            return;
        }


        filteredNotices.slice(0, visibleNoticeCount).forEach(notice => {

            const noticeCard =
                document.createElement("div");

            noticeCard.className = "notice-card";

            noticeCard.dataset.category =
                notice.category
                    ? notice.category.toLowerCase()
                    : "";


            noticeCard.innerHTML = `

                <div class="notice-card-top">

                    <span class="notice-category ${notice.category
                        ? notice.category.toLowerCase()
                        : ""}">
                        ${notice.category || "General"}
                    </span>

                    <span class="notice-date">
                        ${notice.date || ""}
                    </span>

                    ${
                        notice.status
                        ? `
                            <span class="notice-status">
                                ${notice.status}
                            </span>
                          `
                        : ""
                    }

                </div>


                <h3>
                    ${notice.title}
                </h3>


                <p>
                    ${notice.description || ""}
                </p>


                <a
                    href="${notice.file}"
                    class="notice-view"
                    target="_blank"
                >
                    View Notice →
                </a>

            `;


            homepageNoticeList.appendChild(noticeCard);

        });

        if (visibleNoticeCount < filteredNotices.length) {

            const loadMoreButton =
                document.createElement("button");

            loadMoreButton.className = "notice-load-more";
            loadMoreButton.type = "button";
            loadMoreButton.textContent = "Load More ↓";

            loadMoreButton.addEventListener("click", function () {

                visibleNoticeCount += 5;

                displayNotices(category);

            });

            homepageNoticeList.appendChild(loadMoreButton);

        }


    }


    // =========================
    // FILTER BUTTONS
    // =========================

    noticeFilters.forEach(button => {

        button.addEventListener("click", function () {

            noticeFilters.forEach(filter => {
                filter.classList.remove("active");
            });

            this.classList.add("active");


            const category =
                this.dataset.category;

            displayNotices(category);

        });

    });


    // =========================
    // INITIAL LOAD
    // =========================

    displayNotices("all");

});