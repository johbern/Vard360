export default function Footer({ t }) {
  return (
    <footer className="px-4 py-6 border-t border-slate-100 mt-auto">
      <p className="text-xs text-slate-400 text-center leading-relaxed max-w-sm mx-auto">
        {t.footer}
      </p>
    </footer>
  )
}
