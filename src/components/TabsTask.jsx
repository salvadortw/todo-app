import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ListTask from "./ListTask";
import EmptyBg from "./Empty";

import { getTaskStats } from "@/utils/taskStats";

function TabsTask({
  tasksList,
  filter,
  onFilterChange,
  onHandleRemoveTask,
  onHandleIsCompleted,
  onHandleEditTask,
  tasks,
}) {
  const filters = getTaskStats(tasks);
  const { total, completed, overdue, pending } = filters;
  const active = pending + overdue;

  return (
    <div className="w-full flex items-center justify-center">
      {total <= 0 ? (
        <EmptyBg />
      ) : (
        <Tabs value={filter} onValueChange={onFilterChange} className="w-2xl">
          <TabsList>
            <TabsTrigger value="all">Activas ({active})</TabsTrigger>
            <TabsTrigger value="pending">Pendientes ({pending})</TabsTrigger>
            <TabsTrigger value="completed">Completas ({completed})</TabsTrigger>
            <TabsTrigger value="overdue">Atrasadas ({overdue})</TabsTrigger>
          </TabsList>

          <TabsContent value={filter}>
            <ListTask
              tasksList={tasksList}
              onHandleRemoveTask={onHandleRemoveTask}
              onHandleIsCompleted={onHandleIsCompleted}
              onHandleEditTask={onHandleEditTask}
            />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}

export default TabsTask;
