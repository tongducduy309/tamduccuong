export default function Loading() {
  return (
    <main
      className="flex min-h-[60vh] items-center justify-center px-6 py-20"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-6 flex h-16 w-16 items-center justify-center">
          <span className="absolute inset-0 rounded-full border-4 border-amber-100" />
          <span className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-amber-600" />
          <span className="text-xl font-extrabold text-amber-700">TĐC</span>
        </div>

        <p className="text-base font-bold tracking-wide text-zinc-800">
          TÂM ĐỨC CƯỜNG
        </p>
        <p className="mt-1 text-sm text-zinc-500">
          Đang chuẩn bị nội dung cho bạn...
        </p>
        <div className="mt-5 h-1 w-40 overflow-hidden rounded-full bg-amber-100">
          <div className="h-full w-2/5 animate-pulse rounded-full bg-amber-600" />
        </div>
      </div>
    </main>
  );
}
