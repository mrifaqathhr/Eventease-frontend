export default function ProTipCard() {
    return (
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-transparent rounded-2xl p-6 border border-primary/10">
            <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1 flex-shrink-0" aria-hidden="true">
                    lightbulb
                </span>
                <div>
                    <h4 className="font-bold text-text-main dark:text-white text-lg mb-1 font-serif">Pro Tip</h4>
                    <p className="text-sm text-text-main dark:text-slate-300 leading-relaxed">
                        Profiles with at least 10 high-quality photos get{' '}
                        <strong>3× more inquiries</strong>. Make sure your gallery is up to date!
                    </p>
                </div>
            </div>
        </div>
    );
}
