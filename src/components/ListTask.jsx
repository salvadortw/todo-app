/* eslint-disable no-unused-vars */
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
  ItemDescription,
} from "@/components/ui/item";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "./ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";

import AlertDeleteTask from "./AlertDeleteTask";
import EditTaskDialog from "./EditTaskDialog";
import CategoryBadge from "./CategoryBadge";
import { Calendar } from "lucide-react";

import { isTaskOverdue } from "@/utils/date";

const itemVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 10, scale: 0.9 },
};

function ListTask({
  tasksList,
  onHandleRemoveTask,
  onHandleIsCompleted,
  onHandleEditTask,
}) {
  return (
    <ul className="w-full">
      <AnimatePresence>
        {(tasksList || []).map((t) => (
          <motion.li
            key={t.id}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            layout
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-3 flex justify-center"
          >
            <motion.div
              layout
              animate={{
                opacity: t.isCompleted ? 0.6 : 1,
                scale: t.isCompleted ? 0.98 : 1,
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="w-full"
            >
              <Item
                variant="outline"
                size="sm"
                className={`w-full max-w-2xl transition-all ${
                  t.isCompleted ? "bg-muted/50" : ""
                }`}
              >
                <ItemMedia>
                  <motion.div
                    animate={{ scale: t.isCompleted ? 1.1 : 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Checkbox
                      checked={t.isCompleted}
                      onCheckedChange={() => onHandleIsCompleted(t.id)}
                      aria-label={`Marcar tarea "${t.name}" como completada`}
                    />
                  </motion.div>
                </ItemMedia>

                <ItemContent>
                  <motion.div layout>
                    <ItemTitle
                      className={`transition-colors ${
                        t.isCompleted
                          ? "line-through text-muted-foreground opacity-70"
                          : ""
                      }`}
                    >
                      {t.name}
                    </ItemTitle>
                  </motion.div>

                  <ItemDescription className="flex gap-2 items-center">
                    <CategoryBadge
                      category={t.category}
                      completed={t.isCompleted}
                    />
                    <span>&bull;</span>
                    <span className="flex items-center justify-center gap-1">
                      <Calendar size={14} />
                      {t.dueDate
                        ? format(t.dueDate, "dd-MM-yyyy")
                        : "Sin fecha"}
                    </span>
                    {isTaskOverdue(t) && (
                      <>
                        <span>&bull;</span>
                        <Badge variant="destructive">Atrasada</Badge>
                      </>
                    )}
                  </ItemDescription>
                </ItemContent>

                <ItemActions>
                  <EditTaskDialog
                    disabled={t.isCompleted}
                    task={t}
                    onEdit={onHandleEditTask}
                  />
                  <AlertDeleteTask
                    disabled={t.isCompleted}
                    onConfirm={() => onHandleRemoveTask(t.id)}
                  />
                </ItemActions>
              </Item>
            </motion.div>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}

export default ListTask;
