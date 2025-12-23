import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { ListTodo } from "lucide-react";

function EmptyBg() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <ListTodo />
        </EmptyMedia>
        <EmptyTitle>No hay tareas</EmptyTitle>
        <EmptyDescription>
          No has creado ninguna tarea; puedes empezar ahora ya creando una.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}

export default EmptyBg;
