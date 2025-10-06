import type { Task } from '../types';

interface CostSummaryProps {
  tasks: Task[];
  totalBudget?: number;
}

export default function CostSummary({ tasks, totalBudget }: CostSummaryProps) {
  const totalEstimated = tasks.reduce((sum, task) => sum + (task.estimatedCost || 0), 0);
  const totalActual = tasks.reduce((sum, task) => sum + (task.actualCost || 0), 0);
  const totalEstimatedMaterial = tasks.reduce((sum, task) => sum + (task.estimatedMaterialCost || 0), 0);
  const totalActualMaterial = tasks.reduce((sum, task) => sum + (task.actualMaterialCost || 0), 0);
  const totalEstimatedLabor = tasks.reduce((sum, task) => sum + (task.estimatedLaborCost || 0), 0);
  const totalActualLabor = tasks.reduce((sum, task) => sum + (task.actualLaborCost || 0), 0);
  const remainingBudget = totalBudget ? totalBudget - totalActual : null;
  const savingsAmount = totalEstimated - totalActual;

  return (
    <div className="bg-white border border-gray-300 p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">비용 현황</h2>

      {/* 요약 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {totalBudget && (
          <div className="border border-gray-300 p-3">
            <div className="text-xs text-gray-600 mb-1">총 예산</div>
            <div className="text-lg font-bold text-gray-900">
              {totalBudget.toLocaleString()}
            </div>
          </div>
        )}
        <div className="border border-gray-300 p-3">
          <div className="text-xs text-gray-600 mb-1">예상 비용</div>
          <div className="text-lg font-bold text-gray-900">
            {totalEstimated.toLocaleString()}
          </div>
        </div>
        <div className="border border-gray-300 p-3">
          <div className="text-xs text-gray-600 mb-1">실제 비용</div>
          <div className="text-lg font-bold text-gray-900">
            {totalActual.toLocaleString()}
          </div>
        </div>
        {remainingBudget !== null && (
          <div className="border border-gray-300 p-3">
            <div className="text-xs text-gray-600 mb-1">남은 예산</div>
            <div className={`text-lg font-bold ${remainingBudget >= 0 ? 'text-gray-900' : 'text-gray-900'}`}>
              {remainingBudget.toLocaleString()}
            </div>
          </div>
        )}
        {remainingBudget === null && savingsAmount !== 0 && (
          <div className="border border-gray-300 p-3">
            <div className="text-xs text-gray-600 mb-1">{savingsAmount >= 0 ? '절감액' : '초과액'}</div>
            <div className="text-lg font-bold text-gray-900">
              {Math.abs(savingsAmount).toLocaleString()}
            </div>
          </div>
        )}
      </div>

      {/* 예상 비용 테이블 */}
      <div className="mb-6">
        <h3 className="text-base font-bold text-gray-900 mb-3">예상 비용</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-2 px-2 font-semibold text-gray-700">작업</th>
                <th className="text-right py-2 px-2 font-semibold text-gray-700">자재비</th>
                <th className="text-right py-2 px-2 font-semibold text-gray-700">시공비</th>
                <th className="text-right py-2 px-2 font-semibold text-gray-700">합계</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => {
                const estimatedMaterial = task.estimatedMaterialCost || 0;
                const estimatedLabor = task.estimatedLaborCost || 0;
                const estimatedTotal = estimatedMaterial + estimatedLabor;

                return (
                  <tr key={task.id} className="border-b border-gray-200">
                    <td className="py-2 px-2 text-gray-800">{task.title}</td>
                    <td className="py-2 px-2 text-right text-gray-600">
                      {estimatedMaterial > 0 ? `${estimatedMaterial.toLocaleString()}` : '-'}
                    </td>
                    <td className="py-2 px-2 text-right text-gray-600">
                      {estimatedLabor > 0 ? `${estimatedLabor.toLocaleString()}` : '-'}
                    </td>
                    <td className="py-2 px-2 text-right text-gray-900 font-bold">
                      {estimatedTotal > 0 ? `${estimatedTotal.toLocaleString()}` : '-'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-gray-400 font-bold">
                <td className="py-2 px-2 text-gray-900">합계</td>
                <td className="py-2 px-2 text-right text-gray-900">{totalEstimatedMaterial.toLocaleString()}</td>
                <td className="py-2 px-2 text-right text-gray-900">{totalEstimatedLabor.toLocaleString()}</td>
                <td className="py-2 px-2 text-right text-gray-900">{totalEstimated.toLocaleString()}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* 실제 비용 테이블 */}
      <div>
        <h3 className="text-base font-bold text-gray-900 mb-3">실제 비용</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-2 px-2 font-semibold text-gray-700">작업</th>
                <th className="text-right py-2 px-2 font-semibold text-gray-700">자재비</th>
                <th className="text-right py-2 px-2 font-semibold text-gray-700">시공비</th>
                <th className="text-right py-2 px-2 font-semibold text-gray-700">합계</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => {
                const actualMaterial = task.actualMaterialCost || 0;
                const actualLabor = task.actualLaborCost || 0;
                const actualTotal = actualMaterial + actualLabor;

                return (
                  <tr key={task.id} className="border-b border-gray-200">
                    <td className="py-2 px-2 text-gray-800">{task.title}</td>
                    <td className="py-2 px-2 text-right text-gray-600">
                      {actualMaterial > 0 ? `${actualMaterial.toLocaleString()}` : '-'}
                    </td>
                    <td className="py-2 px-2 text-right text-gray-600">
                      {actualLabor > 0 ? `${actualLabor.toLocaleString()}` : '-'}
                    </td>
                    <td className="py-2 px-2 text-right text-gray-900 font-bold">
                      {actualTotal > 0 ? `${actualTotal.toLocaleString()}` : '-'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-gray-400 font-bold">
                <td className="py-2 px-2 text-gray-900">합계</td>
                <td className="py-2 px-2 text-right text-gray-900">{totalActualMaterial.toLocaleString()}</td>
                <td className="py-2 px-2 text-right text-gray-900">{totalActualLabor.toLocaleString()}</td>
                <td className="py-2 px-2 text-right text-gray-900">{totalActual.toLocaleString()}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
