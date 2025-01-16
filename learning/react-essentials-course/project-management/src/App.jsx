import ProjectsSidebar from "./components/ProjectsSideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleStartAddProject() {
    setProjectsState(prevState => {
        return {
          ...prevState,
          selectedProjectId: null
        };
      }
    );
  }

  function handleAddProject(projectdData) {
    const projectId = Math.random();
    const newProject = {
      ...projectdData,
      id: projectId
    };
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      };
    }
  );
  }

  function handleCancelAddProject() {
    setProjectsState(prevState => {
      return {...prevState,
        selectedProjectId: undefined
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(x => x.id !== prevState.selectedProjectId)
      };
    });
  }

  function handleAddTask(task) {
    const taskId = Math.random();
    const newTask = {
      task: task,
      id: taskId,
      //projectId: prevState.selectedProjectId
    };
    setProjectsState(prevState => {
        newTask.projectId = prevState.selectedProjectId;
        return {
          ...prevState,
          tasks: [...prevState.tasks, newTask]
        };
      }
    );
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(x => x.id !== id)
      };
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
  let content = <SelectedProject project={selectedProject} tasks={projectsState.tasks} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask}></SelectedProject>;

  if(projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}></NewProject>;
  }
  else if(projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}></NoProjectSelected>;
  }

  console.log(projectsState);

  return (
    <>
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onSelectProject={handleSelectProject} onStartAddProject={handleStartAddProject} projects={projectsState.projects}></ProjectsSidebar>
      {content}      
    </main>
    </>
  );
}

export default App;
