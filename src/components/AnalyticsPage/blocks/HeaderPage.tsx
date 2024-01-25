import { DateRange } from 'react-day-picker';
import { CiCalendar } from 'react-icons/ci';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';

import { Title } from '@/components/core';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Props = {
  date: DateRange | undefined;
  setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
};

export default function HeaderPage({ date, setDate }: Props) {
  return (
    <section className="flex flex-row justify-between items-center">
      <Title text="Analytics" />
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              'max-w-sm font-normal justify-start text-left',
              !date && 'text-muted-foreground',
            )}
          >
            <CiCalendar className="mr-2 w-4 h-4" />

            {
              // eslint-disable-next-line no-nested-ternary
              date?.from ? (
                date?.to ? (
                  <>
                    {format(date.from, 'LLL dd, y')} -{' '}
                    {format(date.to, 'LLL dd, y')}
                  </>
                ) : (
                  format(date.from, 'LLL dd, y')
                )
              ) : (
                <span>Pick a Date</span>
              )
            }
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </section>
  );
}
