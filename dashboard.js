$(function(){
  // Stubbed data below; would come from db in reality
  const user = {
    "id": "theUserId1234",
    "email": "john.smith@email.com",
    "firstAndLastName": "John Smith",
    "courses": [{
      "course01": {
        "name": "Introduction",
        "completed": true,
        "modules": [{
          "module01": {
            "name": "Name of Module 1",
            "completed": true,
            "subtopics": [{
              "subtopic01": {
                "name": "Name of Subtopic 1",
                "completed": true,
                "timeSpent": "00:15:00"
              },
              "subtopic02": {
                "name": "Name of Subtopic 2",
                "completed": true,
                "timeSpent": "00:15:00"
              },
              "subtopic03": {
                "name": "Name of Subtopic 3",
                "completed": true,
                "timeSpent": "00:15:00"
              },
            }]
          }
        }]
      },
      "course02": {
        "name": "A/N/D TPR - The Pre-Adjudication Process (9 Subtopics)",
        "completed": true,
        "modules": [{
          "module01": {
            "name": "Name of Module 1",
            "completed": true,
            "subtopics": [{
              "subtopic01": {
                "name": "Name of Subtopic 1",
                "completed": true,
                "timeSpent": "00:15:00"
              },
              "subtopic02": {
                "name": "Name of Subtopic 2",
                "completed": true,
                "timeSpent": "00:15:00"
              },
              "subtopic03": {
                "name": "Name of Subtopic 3",
                "completed": true,
                "timeSpent": "00:15:00"
              },
            }]
          },
          "module02": {
            "name": "Name of Module 2",
            "completed": true,
            "subtopics": [{
              "subtopic01": {
                "name": "Name of Subtopic 1",
                "completed": true,
                "timeSpent": "00:15:00"
              },
              "subtopic02": {
                "name": "Name of Subtopic 2",
                "completed": true,
                "timeSpent": "00:15:00"
              },
              "subtopic03": {
                "name": "Name of Subtopic 3",
                "completed": true,
                "timeSpent": "00:15:00"
              },
            }]
          },
          "module03": {
            "name": "Name of Module 3",
            "completed": true,
            "subtopics": [{
              "subtopic01": {
                "name": "Name of Subtopic 1",
                "completed": true,
                "timeSpent": "00:15:00"
              },
              "subtopic02": {
                "name": "Name of Subtopic 2",
                "completed": true,
                "timeSpent": "00:15:00"
              },
              "subtopic03": {
                "name": "Name of Subtopic 3",
                "completed": true,
                "timeSpent": "00:15:00"
              },
            }]
          },
        }]
      },
      "course03": {
        "name": "Adjudication Statuatory Framework (9 Subtopics)",
        "completed": false,
        "modules": [{
          "module01": {
            "name": "Name of Module 1",
            "completed": true,
            "subtopics": [{
              "subtopic01": {
                "name": "Name of Subtopic 1",
                "completed": true,
                "timeSpent": "00:15:00"
              },
              "subtopic02": {
                "name": "Name of Subtopic 2",
                "completed": true,
                "timeSpent": "00:15:00"
              },
              "subtopic03": {
                "name": "Name of Subtopic 3",
                "completed": true,
                "timeSpent": "00:15:00"
              },
            }]
          },
          "module02": {
            "name": "Name of Module 2",
            "completed": false,
            "subtopics": [{
              "subtopic01": {
                "name": "Name of Subtopic 1",
                "completed": true,
                "timeSpent": "00:15:00"
              },
              "subtopic02": {
                "name": "Name of Subtopic 2",
                "completed": true,
                "timeSpent": "00:15:00"
              },
              "subtopic03": {
                "name": "Name of Subtopic 3",
                "completed": false,
                "timeSpent": "00:15:00"
              },
            }]
          },
          "module03": {
            "name": "Name of Module 3",
            "completed": false,
            "subtopics": [{
              "subtopic01": {
                "name": "Name of Subtopic 1",
                "completed": false,
                "timeSpent": "00:15:00"
              },
              "subtopic02": {
                "name": "Name of Subtopic 2",
                "completed": false,
                "timeSpent": "00:15:00"
              },
              "subtopic03": {
                "name": "Name of Subtopic 3",
                "completed": false,
                "timeSpent": "00:15:00"
              },
            }]
          },
        }]
      },
      "course04": {
        "name": "Constitutional Framework and Due Process (6 Subtopics)",
        "completed": false,
        "modules": [{
          "module01": {
            "name": "Name of Module 1",
            "completed": false,
            "subtopics": [{
              "subtopic01": {
                "name": "Name of Subtopic 1",
                "completed": false,
                "timeSpent": "00:15:00"
              },
              "subtopic02": {
                "name": "Name of Subtopic 2",
                "completed": false,
                "timeSpent": "00:15:00"
              },
              "subtopic03": {
                "name": "Name of Subtopic 3",
                "completed": false,
                "timeSpent": "00:15:00"
              },
            }]
          },
          "module02": {
            "name": "Name of Module 2",
            "completed": false,
            "subtopics": [{
              "subtopic01": {
                "name": "Name of Subtopic 1",
                "completed": false,
                "timeSpent": "00:15:00"
              },
              "subtopic02": {
                "name": "Name of Subtopic 2",
                "completed": false,
                "timeSpent": "00:15:00"
              },
              "subtopic03": {
                "name": "Name of Subtopic 3",
                "completed": false,
                "timeSpent": "00:15:00"
              },
            }]
          },
        }]
      },
      "course05": {
        "name": "Permanency Planning (9 Subtopics)",
        "completed": false,
        "modules": [{
          "module01": {
            "name": "Name of Module 1",
            "completed": false,
            "subtopics": [{
              "subtopic01": {
                "name": "Name of Subtopic 1",
                "completed": false,
                "timeSpent": "00:15:00"
              },
              "subtopic02": {
                "name": "Name of Subtopic 2",
                "completed": false,
                "timeSpent": "00:15:00"
              },
              "subtopic03": {
                "name": "Name of Subtopic 3",
                "completed": false,
                "timeSpent": "00:15:00"
              },
            }]
          },
          "module02": {
            "name": "Name of Module 2",
            "completed": false,
            "subtopics": [{
              "subtopic01": {
                "name": "Name of Subtopic 1",
                "completed": false,
                "timeSpent": "00:15:00"
              },
              "subtopic02": {
                "name": "Name of Subtopic 2",
                "completed": false,
                "timeSpent": "00:15:00"
              },
              "subtopic03": {
                "name": "Name of Subtopic 3",
                "completed": false,
                "timeSpent": "00:15:00"
              },
            }]
          },
          "module03": {
            "name": "Name of Module 3",
            "completed": false,
            "subtopics": [{
              "subtopic01": {
                "name": "Name of Subtopic 1",
                "completed": false,
                "timeSpent": "00:15:00"
              },
              "subtopic02": {
                "name": "Name of Subtopic 2",
                "completed": false,
                "timeSpent": "00:15:00"
              },
              "subtopic03": {
                "name": "Name of Subtopic 3",
                "completed": false,
                "timeSpent": "00:15:00"
              },
            }]
          },
        }]
      },

    }]
  }

  greeting(user)
  buildCourseMenu(user)
});

function greeting(user) {
  $("#greeting").text(`Welcome ${user.firstAndLastName}!`)
}

function buildCourseMenu(user) {
  const $courseList = $("#course-list")
  const courses = Object.values(user.courses[0])

  courses.forEach(course => {
    const modules = Object.values(course.modules[0])
    let moduleList = ``

    modules.forEach(module => {
      const subtopics = Object.values(module.subtopics[0])
      const subtopicCount = subtopics.length
      const completedSubtopicCount = Object.values(module.subtopics[0]).filter(subtopic => subtopic.completed).length
      const checkmark = completedSubtopicCount == subtopicCount

      moduleList += `
        <li>
          <a href="#">
            ${module.name}
          </a>
          <span class="subtopics-complete">Subtopics Completed (${completedSubtopicCount}/${subtopicCount})</span>
          ${checkmark ? '<span class="module-complete">&#10003;</span>' : ''}
        </li>
      `
    })

    $courseList.append(
      `
        <li>
          <a class="course uk-accordion-title" href="#">
            ${course.name}
            ${course.completed ? '<span class="course-complete">&#10003;</span>' : ''}
          </a>
          <div class="uk-accordion-content">
            <ul class="module-list">
              ${moduleList}
            </ul>
          </div>
        </li>
      `
    )
  })
}
