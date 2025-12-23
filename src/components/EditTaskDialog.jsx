import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SelectCategory from "./SelectCategory";

import { SquarePen } from "lucide-react";

function EditTaskDialog({ disabled, task, onEdit }) {
  const [name, setName] = useState(task.name);
  const [category, setCategory] = useState(task.category);

  function handleSave() {
    onEdit(task.id, name, category);
  }

  return (
    <Dialog>
      <DialogTrigger asChild disabled={disabled}>
        <Button
          variant="outline"
          name="accion"
          aria-label="Editar tarea"
          disabled={disabled}
        >
          <SquarePen />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>Editar tarea</DialogTitle>
          <DialogDescription>
            Edita tu tarea y guarda los cambios.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label>Nombre tarea</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
            <Label>Categoría</Label>
            <SelectCategory onSelect={setCategory} />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" aria-label="Cancelar" name="accion">
              Cancelar
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              type="submit"
              aria-label="Guardar"
              name="accion"
              onClick={handleSave}
            >
              Guardar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditTaskDialog;
