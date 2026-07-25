import { ReactNode } from 'react';

export interface Column<T> {
  key: Extract<keyof T, string>;
  header: string;
  render?: (value: T[Extract<keyof T, string>], item: T) => ReactNode;
}

export interface DashboardTableProps<T> {
  data: T[];
  columns: Column<T>[];
  caption: string; // Required for a11y
  isLoading?: boolean;
}
