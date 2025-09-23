export type ListingLocation = {
  displayName: string;
  city: string;
  id: string;
  key: string;
  schedule: {
    hours: string;
    label: string;
    weekDay: string;
    weekIndex: number;
  };
  nextDate: string | null;
  address?: string;
  observations?: string;
};
