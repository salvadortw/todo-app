import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ChartTasks from "./ChartTasksFilter";
import ChartCategory from "./ChartTaskCategory";
import ChartTaskPerDay from "./ChartTaskPerDay";
import EmptyBg from "./Empty";

import { ChartPie } from "lucide-react";

function DialogStats({ tasks }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          name="accion"
          aria-label="Abrir panel"
          className="w-full justify-start"
        >
          <ChartPie /> Estadísticas
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-5xl max-h-[80vh] flex flex-col">
        <DialogHeader className="shrink-0">
          <DialogTitle>Estadísticas</DialogTitle>
          <DialogDescription>
            Ve el progreso de tus tareas y más métricas interesantes.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto pr-2">
          {tasks.length <= 0 ? (
            <EmptyBg />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ChartTasks tasks={tasks} />
              <ChartCategory tasks={tasks} />

              <div className="md:col-span-2">
                <ChartTaskPerDay tasks={tasks} />
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DialogStats;
