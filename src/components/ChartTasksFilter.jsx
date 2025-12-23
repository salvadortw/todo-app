import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Pie, PieChart } from "recharts";

import EmptyBg from "./Empty";

import { getTaskStats } from "@/utils/taskStats";

const chartConfig = {
  tasks: {
    label: "Tareas",
  },
  completed: {
    label: "Completadas",
    color: "var(--chart-3)",
  },
  pending: {
    label: "Pendientes",
    color: "var(--chart-4)",
  },
};

function ChartTasks({ tasks }) {
  const stats = getTaskStats(tasks);
  const { total, completed, overdue, pending } = stats;

  const chartData = [
    {
      tasks: "Completadas",
      number: completed,
      fill: "var(--chart-3)",
    },
    { tasks: "Pendientes", number: pending, fill: "var(--chart-4)" },
    { tasks: "Atrasadas", number: overdue, fill: "var(--chart-5)" },
  ];

  return (
    <>
      <Card className="flex flex-col w-full">
        <CardHeader className="items-center pb-0">
          <CardTitle>Estado de las tareas</CardTitle>
          <CardDescription>
            Distribución de tareas completadas, pendientes y atrasadas.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-60"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="number"
                nameKey="tasks"
                stroke="0"
              />
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 leading-none font-medium">
            Sigue completando tareas 💪
          </div>
          <div className="text-muted-foreground leading-none">
            Resumen basado en el total ({total}) de tareas registradas
          </div>
        </CardFooter>
      </Card>
    </>
  );
}

export default ChartTasks;
