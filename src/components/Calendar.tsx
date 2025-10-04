import type { Task } from '../types';

interface CalendarProps {
  tasks: Task[];
  year: number;
  month: number;
}

export default function Calendar({ tasks, year, month }: CalendarProps) {
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);
  let daysInMonth = lastDay.getDate();

  // 11월은 29일까지만 표시
  if (month === 11) {
    daysInMonth = 29;
  }

  const startDayOfWeek = firstDay.getDay();

  // 날짜별 작업 매핑
  const tasksByDate: { [key: string]: Task[] } = {};

  tasks.forEach(task => {
    if (!task.startDate) return;

    const start = new Date(task.startDate);
    const end = task.endDate ? new Date(task.endDate) : start;

    // 작업 기간의 모든 날짜에 작업 추가
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      if (d.getFullYear() === year && d.getMonth() === month - 1) {
        const dateKey = d.getDate().toString();
        if (!tasksByDate[dateKey]) {
          tasksByDate[dateKey] = [];
        }
        tasksByDate[dateKey].push(task);
      }
    }
  });

  const weeks: (number | null)[][] = [];
  let week: (number | null)[] = new Array(startDayOfWeek).fill(null);

  for (let day = 1; day <= daysInMonth; day++) {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }

  if (week.length > 0) {
    while (week.length < 7) {
      week.push(null);
    }
    weeks.push(week);
  }

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-700';
      case 'in_progress':
        return 'bg-blue-600';
      case 'pending':
        return 'bg-gray-400';
    }
  };

  return (
    <div className="bg-white border border-gray-300 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
        {year}년 {month}월
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse table-fixed">
          <thead>
            <tr>
              {['일', '월', '화', '수', '목', '금', '토'].map((day, idx) => (
                <th key={day} className={`border border-gray-300 p-2 text-center text-sm font-semibold ${idx === 0 || idx === 6 ? 'text-red-600 bg-red-50' : 'text-gray-700 bg-gray-50'} w-[14.28%]`}>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weeks.map((week, weekIndex) => (
              <tr key={weekIndex}>
                {week.map((day, dayIndex) => {
                  const isWeekend = dayIndex === 0 || dayIndex === 6;
                  const dayTasks = day ? tasksByDate[day.toString()] || [] : [];

                  return (
                    <td
                      key={dayIndex}
                      className={`border border-gray-300 p-1 align-top ${isWeekend ? 'bg-gray-50' : 'bg-white'} w-[14.28%] relative`}
                      style={{ height: '120px' }}
                    >
                      {day && (
                        <>
                          <div className={`text-sm font-semibold mb-1 ${isWeekend ? 'text-red-600' : 'text-gray-900'}`}>
                            {day}
                          </div>
                          <div className="space-y-0.5">
                            {dayTasks.map((task, idx) => (
                              <div
                                key={idx}
                                className={`text-xs px-1 py-0.5 ${getStatusColor(task.status)} text-white rounded leading-tight break-words`}
                                title={task.title}
                              >
                                {task.title}
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 범례 */}
      <div className="mt-4 flex gap-4 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-green-700 border border-gray-300"></div>
          <span className="text-gray-700">완료</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-blue-600 border border-gray-300"></div>
          <span className="text-gray-700">진행중</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-gray-400 border border-gray-300"></div>
          <span className="text-gray-700">예정</span>
        </div>
      </div>
    </div>
  );
}
