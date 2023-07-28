const tasksDOM = document.querySelector('.tasks');
const loadingDOM = document.querySelector('.loading-text');
const formDOM = document.querySelector('.task-form');
const taskInputDOM = document.querySelector('.task-input');
const formAlertDOM = document.querySelector('.form-alert');

// Charge les tâches depuis /api/tasks
const showTasks = async () => {
  loadingDOM.style.visibility = 'visible';

  try {
    const { data } = await axios.get('/api/v1/tasks');

    if (data.length < 1) {
      tasksDOM.innerHTML =
        '<h5 class="empty-list">Pas de tâches dans la liste</h5>';
      loadingDOM.style.visibility = 'hidden';
      return;
    }

    const allTasks = data.tasks
      .map((task) => {
        const { completed, task_id: taskID, name } = task;
        return `<div class="single-task ${completed && 'task-completed'}">
                  <h5><span><i class="far fa-check-circle"></i></span>${name}</h5>
                  <div class="task-links">
                    <!-- edit link -->
                    <a href="task.html?id=${taskID}"  class="edit-link">
                      <i class="fas fa-edit"></i>
                    </a>
                    <!-- delete btn -->
                    <button type="button" class="delete-btn" data-id="${taskID}">
                      <i class="fas fa-trash"></i>
                    </button>
                  </div>
                </div>`;
      })
      .join('');

    tasksDOM.innerHTML = allTasks;
  } catch (error) {
    tasksDOM.innerHTML =
      "<h5 class='empty-list'>Une erreur s'est produite, veuillez réessayer plus tard...</h5>";
  }

  loadingDOM.style.visibility = 'hidden';
};

showTasks();

// Supprime une tâche /api/tasks/:id
tasksDOM.addEventListener('click', async (e) => {
  const el = e.target;

  if (el.parentElement.classList.contains('delete-btn')) {
    loadingDOM.style.visibility = 'visible';
    const id = el.parentElement.dataset.id;

    try {
      await axios.delete(`/api/v1/tasks/${id}`);
      showTasks();
    } catch (error) {
      console.log(error.message);
    }
  }

  loadingDOM.style.visibility = 'hidden';
});

// Formulaire
formDOM.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = taskInputDOM.value;

  try {
    await axios.post('/api/v1/tasks', { name });
    showTasks();
    taskInputDOM.value = '';
    formAlertDOM.style.display = 'block';
    formAlertDOM.textContent = `tâche ajoutée`;
    formAlertDOM.classList.add('text-success');
  } catch (error) {
    formAlertDOM.style.display = 'block';
    formAlertDOM.innerHTML = `erreur, veuillez réessayer`;
  }

  setTimeout(() => {
    formAlertDOM.style.display = 'none';
    formAlertDOM.classList.remove('text-success');
  }, 3000);
});
