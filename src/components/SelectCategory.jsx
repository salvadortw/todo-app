/* eslint-disable no-unused-vars */
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CATEGORIES } from "@/constants/categories";

function SelectCategory({ onSelect }) {
  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger className="w-45" aria-label="Seleccionar categoría">
        <SelectValue placeholder="Elige una..." />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categorias</SelectLabel>

          {CATEGORIES.map(({ value, label, icon: Icon }) => (
            <SelectItem key={value} value={value}>
              <span className="flex items-center gap-2">
                <Icon size={16} />
                {label}
              </span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default SelectCategory;
