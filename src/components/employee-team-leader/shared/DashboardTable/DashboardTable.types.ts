// import { ReactNode } from 'react';

// export interface Column<T> {
//   key: Extract<keyof T, string> | (string & {});
//   header: string;
//   render?: (value: any, item: T) => ReactNode;
// }

// export interface DashboardTableProps<T> {
//   data: T[];
//   columns: Column<T>[];
//   caption: string; // Required for a11y
//   isLoading?: boolean;
// }
// export interface Column<T> {
//   key: Extract<keyof T, string> | (string & {});
//   header: string;
//   render?: (value: any, row: T) => React.ReactNode;
// }

// export interface DashboardTableProps<T> {
//   data: T[];
//   columns: Column<T>[];
//   caption: string;
//   isLoading?: boolean;
//   emptyMessage?: string;
//   getRowKey?: (row: T, index: number) => string | number;
// }

// DashboardTable.types.ts
export type Column<T> = {
  [K in keyof T]: {
    key: K;
    header: string;
    render?: (value: T[K], row: T) => React.ReactNode;
  };
}[keyof T];

export interface DashboardTableProps<T> {
  data: T[];
  columns: Column<T>[];
  caption: string;
  isLoading?: boolean;
  emptyMessage?: string;
  getRowKey: (row: T, index: number) => string | number; // required, no fallback
  
}