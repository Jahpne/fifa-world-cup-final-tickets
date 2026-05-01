import { ChevronLeft } from 'lucide-react';

interface HeaderProps {
  onHome(): void;
}

export function Header({ onHome }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-4 py-4 flex items-center">
      <div onClick={onHome} className="cursor-pointer">
        <span className="font-black text-2xl tracking-tighter text-gray-900">
          TICKETS
        </span>
      </div>
    </header>
  );
}
