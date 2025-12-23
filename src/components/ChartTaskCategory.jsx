import { Pie, PieChart } from "recharts";

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
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

import { getTaskCategory } from "@/utils/taskStats";

const chartConfig = {
  category: {
    label: "Categoría",
  },
  personal: {
    label: "Personal",
    color: "var(--chart-1)",
  },
  trabajo: {
    label: "Trabajo",
    color: "var(--chart-2)",
  },
  estudios: {
    label: "Estudios",
    color: "var(--chart-3)",
  },
  salud: {
    label: "Salud",
    color: "var(--chart-4)",
  },
  hogar: {
    label: "Hogar",
    color: "var(--chart-5)",
  },
  otros: {
    label: "Otros",
    color: "var(--chart-6)",
  },
};

function ChartCategory({ tasks }) {
  const categories = getTaskCategory(tasks);
  const { personal, trabajo, estudios, salud, hogar, otros } = categories;
  const chartData = [
    { categoryName: "personal", number: personal, fill: "var(--chart-1)" },
    { categoryName: "trabajo", number: trabajo, fill: "var(--chart-2)" },
    { categoryName: "estudios", number: estudios, fill: "var(--chart-3)" },
    { categoryName: "salud", number: salud, fill: "var(--chart-4)" },
    { categoryName: "hogar", number: hogar, fill: "var(--chart-5)" },
    { categoryName: "otros", number: otros, fill: "var(--chart-6)" },
  ];
  return (
    <Card className="flex flex-col w-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Tareas por categoría</CardTitle>
        <CardDescription>
          Revisa cuantas tareas tienes por categoría.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-64"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="number"
              nameKey="categoryName"
              innerRadius={60}
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="categoryName" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default ChartCategory;
