import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { getTasksCompletedPerDay } from "@/utils/taskStats";

const chartConfig = {
  days: {
    label: "Días de la semana",
    color: "var(--chart-1)",
  },
};

function ChartTaskPerDay({ tasks }) {
  const days = getTasksCompletedPerDay(tasks);

  // Suma todos los días
  const totalTasksCompleted = Object.values(days).reduce(
    (sum, value) => sum + value,
    0
  );

  // Si no hay tareas completadas, no mostramos nada
  if (totalTasksCompleted === 0) return null;

  const chartData = [
    { day: "Lunes", Tareas: days.mon },
    { day: "Martes", Tareas: days.tue },
    { day: "Miércoles", Tareas: days.wed },
    { day: "Jueves", Tareas: days.thu },
    { day: "Viernes", Tareas: days.fri },
    { day: "Sábado", Tareas: days.sat },
    { day: "Domingo", Tareas: days.sun },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tareas por día</CardTitle>
        <CardDescription>
          Descubre la cantidad de tareas que haces por día.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar dataKey="Tareas" fill="var(--chart-1)" radius={8}>
              <LabelList position="top" offset={12} fontSize={10} />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default ChartTaskPerDay;
