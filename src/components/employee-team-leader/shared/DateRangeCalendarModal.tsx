'use client';

import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar as CalendarIcon, RotateCcw } from 'lucide-react';

export interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

interface DateRangeCalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRange?: DateRange;
  onApplyRange: (range: DateRange) => void;
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function DateRangeCalendarModal({
  isOpen,
  onClose,
  initialRange = { startDate: null, endDate: null },
  onApplyRange
}: DateRangeCalendarModalProps) {
  const [currentMonthDate, setCurrentMonthDate] = useState(() => {
    return initialRange.startDate ? new Date(initialRange.startDate) : new Date(2026, 6, 1); // July 2026 default
  });

  const [startDate, setStartDate] = useState<Date | null>(initialRange.startDate);
  const [endDate, setEndDate] = useState<Date | null>(initialRange.endDate);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);

  if (!isOpen) return null;

  const year = currentMonthDate.getFullYear();
  const month = currentMonthDate.getMonth();

  // First day of current month & total days
  const firstDayIndex = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Previous month days for padding
  const prevMonthDays = new Date(year, month, 0).getDate();

  const handlePrevMonth = () => {
    setCurrentMonthDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonthDate(new Date(year, month + 1, 1));
  };

  const isSameDay = (d1: Date | null, d2: Date | null) => {
    if (!d1 || !d2) return false;
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  };

  const isBetween = (date: Date, start: Date | null, end: Date | null) => {
    if (!start || !end) return false;
    const time = date.getTime();
    const startTime = new Date(start.getFullYear(), start.getMonth(), start.getDate()).getTime();
    const endTime = new Date(end.getFullYear(), end.getMonth(), end.getDate()).getTime();
    return time > startTime && time < endTime;
  };

  const handleDateClick = (dayDate: Date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(dayDate);
      setEndDate(null);
    } else if (startDate && !endDate) {
      if (dayDate.getTime() < startDate.getTime()) {
        setStartDate(dayDate);
        setEndDate(null);
      } else {
        setEndDate(dayDate);
      }
    }
  };

  const handleApply = () => {
    onApplyRange({ startDate, endDate: endDate || startDate });
    onClose();
  };

  const handleReset = () => {
    setStartDate(null);
    setEndDate(null);
    onApplyRange({ startDate: null, endDate: null });
    onClose();
  };

  // Quick preset ranges
  const setPreset = (preset: 'today' | 'yesterday' | 'last7' | 'last30' | 'thisMonth') => {
    const today = new Date(2026, 6, 25); // Current simulated app date July 25, 2026
    let start: Date;
    let end: Date = new Date(today);

    if (preset === 'today') {
      start = new Date(today);
    } else if (preset === 'yesterday') {
      start = new Date(today);
      start.setDate(today.getDate() - 1);
      end = new Date(start);
    } else if (preset === 'last7') {
      start = new Date(today);
      start.setDate(today.getDate() - 6);
    } else if (preset === 'last30') {
      start = new Date(today);
      start.setDate(today.getDate() - 29);
    } else {
      // thisMonth
      start = new Date(today.getFullYear(), today.getMonth(), 1);
      end = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    }

    setStartDate(start);
    setEndDate(end);
    setCurrentMonthDate(new Date(start.getFullYear(), start.getMonth(), 1));
  };

  const formatDateDisplay = (date: Date | null) => {
    if (!date) return 'Select Date';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-[24px] shadow-2xl border border-[#eaecf0] w-full max-w-[540px] overflow-hidden animate-in zoom-in-95 duration-200">

        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#eaecf0] flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-2.5">
            <div className="size-9 rounded-xl bg-[#06530b]/10 text-[#06530b] flex items-center justify-center">
              <CalendarIcon className="size-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-[#101828]">Select Date Range</h2>
              <p className="text-xs text-gray-500 font-medium">Filter dashboard data by custom dates</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="size-8 rounded-full hover:bg-gray-200/70 text-gray-400 hover:text-gray-600 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Preset Range Shortcuts */}
        <div className="px-6 pt-4 pb-2 flex flex-wrap items-center gap-1.5 border-b border-[#eaecf0]/60 bg-white">
          <span className="text-xs font-semibold text-gray-400 mr-1">Presets:</span>
          {[
            { label: 'Today', key: 'today' },
            { label: 'Yesterday', key: 'yesterday' },
            { label: 'Last 7 Days', key: 'last7' },
            { label: 'Last 30 Days', key: 'last30' },
            { label: 'This Month', key: 'thisMonth' },
          ].map((p) => (
            <button
              key={p.key}
              onClick={() => setPreset(p.key as any)}
              className="px-2.5 py-1 text-xs font-medium bg-[#f3f3f5] hover:bg-[#06530b] hover:text-white text-[#434343] rounded-lg transition-colors cursor-pointer"
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Calendar Grid Section */}
        <div className="p-6">
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handlePrevMonth}
              className="size-8 rounded-lg border border-[#eaecf0] flex items-center justify-center hover:bg-gray-100 text-gray-600 transition-colors cursor-pointer"
            >
              <ChevronLeft className="size-4" />
            </button>

            <span className="text-base font-bold text-[#101828]">
              {MONTH_NAMES[month]} {year}
            </span>

            <button
              onClick={handleNextMonth}
              className="size-8 rounded-lg border border-[#eaecf0] flex items-center justify-center hover:bg-gray-100 text-gray-600 transition-colors cursor-pointer"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>

          {/* Days of Week Header */}
          <div className="grid grid-cols-7 mb-2 text-center">
            {DAYS_OF_WEEK.map((d) => (
              <span key={d} className="text-xs font-semibold text-gray-400 py-1">
                {d}
              </span>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-y-1 text-center">
            {/* Prev Month Padding Days */}
            {Array.from({ length: firstDayIndex }).map((_, i) => {
              const dayNum = prevMonthDays - firstDayIndex + i + 1;
              return (
                <div key={`prev-${i}`} className="py-2 text-xs text-gray-300 pointer-events-none select-none">
                  {dayNum}
                </div>
              );
            })}

            {/* Current Month Days */}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const dayNum = i + 1;
              const dayDate = new Date(year, month, dayNum);

              const isStart = isSameDay(dayDate, startDate);
              const isEnd = isSameDay(dayDate, endDate);
              const inRange = isBetween(dayDate, startDate, endDate || hoverDate);

              let buttonStyle = 'text-gray-700 hover:bg-gray-100 hover:text-black rounded-lg';

              if (isStart && isEnd) {
                buttonStyle = 'bg-[#06530b] text-white font-bold rounded-lg shadow-sm';
              } else if (isStart) {
                buttonStyle = 'bg-[#06530b] text-white font-bold rounded-l-lg rounded-r-none shadow-sm';
              } else if (isEnd) {
                buttonStyle = 'bg-[#06530b] text-white font-bold rounded-r-lg rounded-l-none shadow-sm';
              } else if (inRange) {
                buttonStyle = 'bg-[#06530B]/15 text-[#06530b] font-semibold rounded-none';
              }

              return (
                <div
                  key={`curr-${dayNum}`}
                  className="py-0.5"
                  onMouseEnter={() => startDate && !endDate && setHoverDate(dayDate)}
                >
                  <button
                    onClick={() => handleDateClick(dayDate)}
                    className={`w-full h-9 flex items-center justify-center text-xs transition-colors cursor-pointer ${buttonStyle}`}
                  >
                    {dayNum}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Range Display & Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-[#eaecf0] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-gray-600 font-medium self-start sm:self-auto">
            <span className="text-gray-400 font-normal">Range: </span>
            <span className="font-semibold text-[#101828]">{formatDateDisplay(startDate)}</span>
            {' → '}
            <span className="font-semibold text-[#101828]">{formatDateDisplay(endDate || startDate)}</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            {(startDate || endDate) && (
              <button
                onClick={handleReset}
                className="px-3 py-2 text-xs font-semibold text-gray-600 hover:text-red-600 flex items-center gap-1 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
              >
                <RotateCcw className="size-3.5" />
                <span>Reset</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-800 bg-white border border-[#eaecf0] hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleApply}
              className="px-5 py-2 text-xs font-bold text-white bg-[#06530b] hover:bg-[#05290b] rounded-xl transition-all shadow-sm cursor-pointer"
            >
              Apply Filter
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
