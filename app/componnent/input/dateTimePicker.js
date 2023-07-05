import { useCallback } from "react";


const DayTimePicker = ({
  title,
  subtitle,
  days,
  selectedDays,
  setSelectedDays,
  timeRanges,
  selectedTimeRanges,
  setSelectedTimeRanges,
}) => {
  const onToggleDay = useCallback((day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  }, [selectedDays, setSelectedDays]);

  const onToggleTimeRange = useCallback((timeRange) => {
    if (selectedTimeRanges.includes(timeRange)) {
      setSelectedTimeRanges(
        selectedTimeRanges.filter((selectedTimeRange) => selectedTimeRange !== timeRange)
      );
    } else {
      setSelectedTimeRanges([...selectedTimeRanges, timeRange]);
    }
  }, [selectedTimeRanges, setSelectedTimeRanges]);

  return (
    <div className="flex flex-col">
      <div className="font-medium">{title}</div>
      <div className="font-light text-gray-600">{subtitle}</div>
      <div className="grid grid-cols-7 gap-2 mt-2">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => onToggleDay(day)}
            className={`${
              selectedDays.includes(day)
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600"
            } py-2 rounded-md`}
          >
            {day}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 mt-4">
        {timeRanges.map((timeRange) => (
          <button
            key={timeRange}
            onClick={() => onToggleTimeRange(timeRange)}
            className={`${
              selectedTimeRanges.includes(timeRange)
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600"
            } py-2 rounded-md`}
          >
            {timeRange}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DayTimePicker;