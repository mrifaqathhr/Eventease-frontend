'use client';

interface AlertItem {
    id: string;
    icon: string;
    iconBg: string;
    iconColor: string;
    title: string;
    description: string;
    action: string;
}

const alerts: AlertItem[] = [
    {
        id: '1',
        icon: 'report',
        iconBg: 'bg-red-100',
        iconColor: 'text-red-600',
        title: 'High Volume of Reports for "WeddingBliss Photography"',
        description: '5 user reports received in the last hour regarding cancellation policy.',
        action: 'Investigate',
    },
    {
        id: '2',
        icon: 'verified_user',
        iconBg: 'bg-amber-100',
        iconColor: 'text-amber-600',
        title: 'Vendor Verification Pending (> 48hrs)',
        description: 'Floral Fantasy Inc. submitted documents 3 days ago.',
        action: 'Review',
    },
    {
        id: '3',
        icon: 'dns',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        title: 'Database Maintenance Scheduled',
        description: 'Scheduled for tonight at 02:00 AM EST. Notify active users.',
        action: 'Details',
    },
];

export default function UrgentAlerts() {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-bold text-lg text-text-main flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[22px]">warning</span>
                    Urgent System Alerts
                </h3>
                <button
                    type="button"
                    className="text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                >
                    View All
                </button>
            </div>

            <div>
                {alerts.map((alert, i) => (
                    <div
                        key={alert.id}
                        className={`p-4 ${i < alerts.length - 1 ? 'border-b border-gray-50' : ''} hover:bg-gray-50 transition-colors flex items-center gap-4 group cursor-pointer`}
                    >
                        <div className={`h-10 w-10 rounded-full ${alert.iconBg} ${alert.iconColor} flex items-center justify-center flex-shrink-0`}>
                            <span className="material-symbols-outlined text-[20px]">{alert.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-text-main">{alert.title}</h4>
                            <p className="text-xs text-text-muted mt-0.5">{alert.description}</p>
                        </div>
                        <button
                            type="button"
                            className="flex-shrink-0 px-3 py-1.5 text-xs font-bold bg-white border border-gray-200 rounded-lg text-text-main hover:border-primary hover:text-primary transition-colors"
                        >
                            {alert.action}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
