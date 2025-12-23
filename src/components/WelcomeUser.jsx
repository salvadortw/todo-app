import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function WelcomeUser({ onSave }) {
  const [open, setOpen] = useState(true);
  const [name, setName] = useState("");

  function handleName() {
    onSave(name);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>¡Hola, bienvenid@!</DialogTitle>
          <DialogDescription>
            Realice los cambios que desee en su perfil aquí. Haga clic en
            Guardar cuando haya terminado.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="name-1">Nombre</Label>
            <Input
              id="name-1"
              name="name"
              defaultValue="Poe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button aria-label="Cancelar" name="accion" variant="outline">
              Cancelar
            </Button>
          </DialogClose>
          <Button
            aria-label="Guardar"
            name="accion"
            type="submit"
            onClick={handleName}
          >
            Guardar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default WelcomeUser;
