import { Badge } from "@/components/ui/badge";
import { CATEGORIES } from "@/constants/categories";

function CategoryBadge({ category, completed }) {
  const config = CATEGORIES.find((c) => c.value === category);

  if (!config) return null;

  const ariaLabel = `Categoría: ${config.label}. Estado: ${
    completed ? "completada" : "pendiente"
  }`;

  const Icon = config.icon;

  return (
    <Badge
      aria-label={ariaLabel}
      variant={completed ? "outline" : "default"}
      className={!completed && `flex items-center gap-1 ${config.className}`}
    >
      <Icon size={14} aria-hidden="true" />
      {config.label}
    </Badge>
  );
}

export default CategoryBadge;
