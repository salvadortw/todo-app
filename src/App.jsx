import { useState } from "react";

import { ThemeProvider } from "./components/ui/theme-provider";
import { toast } from "sonner";
import { Toaster } from "./components/ui/sonner";
import useLocalStorageState from "./hooks/useLocalStorageState";
import { getFilteredTasks } from "@/utils/taskFilters";

import NavBar from "./components/NavBar";
import AddTask from "./components/AddTask";
import TabsTask from "./components/TabsTask";
import WelcomeUser from "./components/WelcomeUser";

function App() {
  const [tasks, setTasks] = useLocalStorageState("task", []);
  const [userName, setUserName] = useLocalStorageState("userName", "");
  const [taskName, setTaskName] = useState("");
  const [filter, setFilter] = useState("all");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const filteredTasks = getFilteredTasks(tasks, filter);

  function handleDate(date) {
    if (date < new Date()) {
      toast.info("No puedes elegir una fecha anterior a la actual.");
      return;
    }
    setDate(date);
  }

  function handleSelectCategory(value) {
    setCategory(value);
  }

  function handleTaskName(text) {
    setTaskName(text);
  }

  function handleIsCompleted(taskId) {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === taskId
          ? { ...t, isCompleted: !t.isCompleted, completedAt: new Date() }
          : t
      )
    );
  }

  function handleEditTask(taskId, text, category) {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === taskId ? { ...t, name: text, category: category } : t
      )
    );

    toast.success("Tarea editada correctamente.");
  }

  function handleAddTask() {
    if (taskName.trim() === "") {
      toast.info("El nombre de la tarea no puede estar vacío.");
      return;
    }

    if (taskName.length > 30) {
      toast.info("El nombre de la tarea no puede tener más de 30 caracteres.");
      return;
    }

    const newTask = {
      id: crypto.randomUUID(),
      name: taskName.trim(),
      category: category || "otros",
      isCompleted: false,
      creationDate: Date.now(),
      dueDate: date || null,
      completedAt: null,
    };

    setTasks((prevTaks) => [newTask, ...prevTaks]);
    setTaskName("");
  }

  function handleRemoveTask(taskId) {
    const remainingTask = tasks.filter((t) => t.id !== taskId);

    setTasks(remainingTask);

    toast.success("Tarea eliminada.");
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-svh">
        {!userName && <WelcomeUser onSave={setUserName} />}

        <NavBar tasks={tasks} />

        <main className="flex flex-col justify-center items-center gap-5 m-auto w-2xl">
          <h2 className="text-4xl font-medium mb-8">
            ¡Hola y bienvenid@,{" "}
            <span className="text-rose-500 dark:text-rose-400">{userName}</span>
            !
          </h2>
          <AddTask
            onHandleTaskName={handleTaskName}
            taskName={taskName}
            onHandleAddTask={handleAddTask}
            onHandleRemoveTask={handleRemoveTask}
            onHandleSelectCategory={handleSelectCategory}
            date={date}
            onHandleDateChange={handleDate}
          />
          <TabsTask
            tasksList={filteredTasks}
            filter={filter}
            onFilterChange={setFilter}
            onHandleRemoveTask={handleRemoveTask}
            onHandleIsCompleted={handleIsCompleted}
            onHandleEditTask={handleEditTask}
            tasks={tasks}
          />
          <Toaster richColors />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
