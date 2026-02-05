const BackgroundGlow = () => (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-[128px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[30rem] h-[30rem] bg-purple-900/20 rounded-full blur-[128px] animate-blob animation-delay-2000" />
    </div>
);

export default BackgroundGlow;
