import { FC } from "react";
import { CalendarIcon } from "lucide-react";
import { PopoverTrigger } from "@radix-ui/react-popover";

import { cn } from "../../utils/css-utils";

import { Button } from "./button";

const DateInput: FC<{ isEmpty: boolean; label: string }> = ({
  isEmpty,
  label,
}) => {
  return (
    <PopoverTrigger asChild>
      <Button
        variant={"outline"}
        className={cn(
          "w-[240px] justify-start text-left font-normal",
          isEmpty && "text-muted-foreground"
        )}
      >
        <CalendarIcon />
        <span className="truncate text-ellipsis overflow-hidden">{label}</span>
      </Button>
    </PopoverTrigger>
  );
};

export default DateInput;
