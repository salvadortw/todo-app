import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";

import SelectCategory from "./SelectCategory";
import PickDate from "./PickDate";

function AddTask({
  onHandleTaskName,
  taskName,
  onHandleAddTask,
  onHandleSelectCategory,
  date,
  onHandleDateChange,
}) {
  return (
    <div className="flex flex-row w-full gap-3 justify-start items-center">
      <Input
        type="text"
        placeholder="ej: Pasear al perro, comprar leche, estudiar, etc..."
        name="add-task-input"
        className="w-full"
        value={taskName}
        onChange={(e) => onHandleTaskName(e.target.value)}
      />
      <Button
        variant="outline"
        aria-label="Agregar tarea"
        onClick={onHandleAddTask}
        className="bg-rose-500 hover:bg-rose-400 hover:text-white text-white dark:bg-rose-400 hover:dark:bg-rose-300"
      >
        <Plus />
      </Button>

      <PickDate date={date} onHandleDateChange={onHandleDateChange} />

      <SelectCategory onSelect={onHandleSelectCategory} />
    </div>
  );
}

export default AddTask;
