'use client';

import React from 'react';
import { DashboardTableProps } from './DashboardTable.types';

export function DashboardTable<T extends { id?: string | number }>(
  props: DashboardTableProps<T>
) {
  const { data, columns, caption, isLoading } = props;

  return (
    <div className="w-full overflow-x-auto rounded-[15px] border border-[#eaecf0] bg-white">
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-[#f9fafb] border-b border-[#eaecf0]">
          <tr>
            {columns.map((column) => (
              <th 
                key={column.key} 
                scope="col" 
                className="h-[44px] px-[24px] py-[12px] text-[14px] font-medium text-[#282828] font-['Roboto'] tracking-normal whitespace-nowrap"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#eaecf0]">
          {isLoading ? (
            <tr>
              <td colSpan={columns.length} className="h-[72px] px-[24px] text-center text-gray-500 font-['Inter']">
                <div className="flex items-center justify-center gap-2">
                  <span className="size-4 border-2 border-[#06530b] border-t-transparent rounded-full animate-spin" />
                  Loading data...
                </div>
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="h-[72px] px-[24px] text-center text-gray-500 font-['Inter']">
                No orders found.
              </td>
            </tr>
          ) : (
            data.map((item, index) => {
              const rowKey = item.id ? String(item.id) : String(index);
              return (
                <tr 
                  key={rowKey} 
                  className="bg-white hover:bg-slate-50/50 transition-colors duration-150"
                >
                  {columns.map((column) => (
                    <td 
                      key={column.key} 
                      className="h-[72px] px-[24px] py-[16px] text-[14px] font-['Inter'] text-[#101828] align-middle whitespace-nowrap"
                    >
                      {column.render
                        ? column.render(item[column.key], item)
                        : (item[column.key] as React.ReactNode)}
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
