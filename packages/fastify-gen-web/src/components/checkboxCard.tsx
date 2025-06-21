import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type CheckboxCardProps = {
  id: string;
  label: string;
  description: string;
  onConfigChange: () => void;
};

export default function CheckboxCard({
  id,
  label,
  description,
  onConfigChange,
}: CheckboxCardProps) {
  return (
    <div className="w-full border-input has-data-[state=checked]:border-primary/50 relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs outline-none">
      <Checkbox
        id={id}
        className="order-1 after:absolute after:inset-0"
        aria-describedby={`${id}-description`}
        onCheckedChange={onConfigChange}
      />
      <div className="grid grow gap-2">
        <Label htmlFor={id}>
          <span className="text-muted-foreground text-xs leading-[inherit] font-normal">
            {label}
          </span>
        </Label>
        <p id={`${id}-description`} className="text-muted-foreground text-xs">
          {description}
        </p>
      </div>
    </div>
  );
}
