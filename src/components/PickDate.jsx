import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

function PickDate({ date, onHandleDateChange }) {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="font-normal">
            <CalendarIcon />
            {date ? format(date, "dd-MM-yyyy") : "Elige fecha"}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={onHandleDateChange}
          />
        </PopoverContent>
      </Popover>
    </>
  );
}

export default PickDate;
