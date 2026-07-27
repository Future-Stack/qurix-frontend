'use client';

import React from 'react';
import { DashboardTableProps } from './DashboardTable.types';
import { formatCellValue } from '@/lib/utils';

export function DashboardTable<T>(props: DashboardTableProps<T>) {
  const { data, columns, caption, isLoading, emptyMessage = 'No records found.', getRowKey } = props;

  return (
    <div className="w-full overflow-x-auto rounded-2xl bg-white shadow-2xs">
      <table className="w-full border-collapse text-left min-w-max">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
            {columns.map((column) => (
              <th
                key={column.header}
                scope="col"
                className="px-6 py-4 text-[12px] font-bold text-[#64748B] uppercase tracking-wider whitespace-nowrap"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody aria-live="polite" aria-busy={isLoading}>
          {isLoading ? (
            <tr>
              <td colSpan={columns.length} className="px-6 py-8 text-center text-gray-500">
                <div role="status" className="flex items-center justify-center gap-2">
                  <span
                    aria-hidden="true"
                    className="size-4 border-2 border-[#06530b] border-t-transparent rounded-full animate-spin"
                  />
                  Loading data...
                </div>
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-6 py-8 text-center text-gray-500 text-sm">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((item, index) => {
              const rawKey = getRowKey ? getRowKey(item, index) : (item as any).id || (item as any).orderId || index;
              const rowKey = `${rawKey}-${index}`;
              return (
                <tr
                  key={rowKey}
                  className="border-b border-[#E2E8F0] last:border-b-0 hover:bg-gray-50/80 transition-colors"
                >
                  {columns.map((column) => (
                    <td
                      key={column.header}
                      className="px-6 py-4 text-[13px] font-medium text-[#0F172A] align-middle whitespace-nowrap"
                    >
                      {column.render
                        ? column.render(item[column.key], item)
                        : formatCellValue(item[column.key])}
                    </td>
                  ))}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}