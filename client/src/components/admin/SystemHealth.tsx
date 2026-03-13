'use client';

interface HealthMetric {
    label: string;
    value: string;
    percentage: number;
    barColor: string;
    textColor: string;
}

const metrics: HealthMetric[] = [
    { label: 'Server Load', value: '32%', percentage: 32, barColor: 'bg-green-500', textColor: 'text-green-600' },
    { label: 'Storage Usage', value: '78%', percentage: 78, barColor: 'bg-amber-500', textColor: 'text-amber-600' },
    { label: 'API Latency', value: '24ms', percentage: 15, barColor: 'bg-green-500', textColor: 'text-green-600' },
];

export default function SystemHealth() {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-lg text-text-main mb-4">System Health</h3>
            <div className="space-y-4">
                {metrics.map((metric) => (
                    <div key={metric.label}>
                        <div className="flex justify-between text-xs font-medium mb-1.5">
                            <span className="text-text-main">{metric.label}</span>
                            <span className={metric.textColor}>{metric.value}</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div
                                className={`h-full ${metric.barColor} rounded-full transition-all duration-500`}
                                style={{ width: `${metric.percentage}%` }}
                                role="progressbar"
                                aria-valuenow={metric.percentage}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label={metric.label}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Overall status indicator */}
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-text-muted font-medium">All systems operational</span>
            </div>
        </div>
    );
}
