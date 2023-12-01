'use client';

import * as z from 'zod';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon } from '@radix-ui/react-icons';
import { Input } from '@/components/ui/input';
import React from 'react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { toast } from '@/components/ui/use-toast';
import { useForm } from 'react-hook-form';
import validator from 'validator';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  name_first: z.string().min(1, 'What is your full name?'),
  name_last: z.string().min(1, 'What is your full name?'),
  phone: z
    .string()
    .min(1, 'What is your phone number?')
    .refine(validator.isMobilePhone, 'Please enter a valid phone number.'),
  email: z
    .string()
    .min(1, 'What is your email address?')
    .refine(validator.isEmail, 'Please enter a valid email address.'),
  church: z.string().min(1, 'What is the name of your church?'),
  position: z.string().optional(),
  church_city: z.string().min(1, 'What city is your church in?'),
  church_state: z.string().min(1, 'What state is your church in?'),
  attendance: z
    .string()
    .min(1, 'What is the average attendance at your church?'),
  church_website: z
    .string()
    .min(1, "What is your church's website address?")
    .refine(validator.isURL, 'Please enter a valid website address.'),
  event_date: z.date({
    required_error: 'What is the planned event date?',
  }),
});

export const HSHRegistrationForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name_first: '',
      name_last: '',
      phone: '',
      email: '',
      church: '',
      position: '',
      church_city: '',
      church_state: '',
      attendance: '',
      church_website: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-row gap-3">
          <div className="basis-1/2">
            <FormField
              control={form.control}
              name="name_first"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input autoComplete="given-name" {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="basis-1/2">
            <FormField
              control={form.control}
              name="name_last"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input autoComplete="family-name" {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input autoComplete="tel" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input autoComplete="email" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="church"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Church Name</FormLabel>
              <FormControl>
                <Input autoComplete="organization" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Leadership position at the church (if any)</FormLabel>
              <FormControl>
                <Input autoComplete="organization-title" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row gap-3">
          <div className="basis-1/2">
            <FormField
              control={form.control}
              name="church_city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Church Location - City</FormLabel>
                  <FormControl>
                    <Input autoComplete="address-level2" {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="basis-1/2">
            <FormField
              control={form.control}
              name="church_state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <Select
                    autoComplete="address-level1"
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select State" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="CA">CA - California</SelectItem>
                      <SelectItem value="WA">WA - Washington</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name="attendance"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Average Attendance</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Average Attendance" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="xs">&lt; 100</SelectItem>
                  <SelectItem value="s">100 - 500</SelectItem>
                  <SelectItem value="m">500 - 1000</SelectItem>
                  <SelectItem value="l">1000 - 5000</SelectItem>
                  <SelectItem value="xl">&gt; 5000</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="church_website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Church Website</FormLabel>
              <FormControl>
                <Input autoComplete="url" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="event_date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Planned Event Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-[240px] pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Host an Event</Button>
      </form>
    </Form>
  );
};
