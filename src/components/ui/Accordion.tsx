import { useState, useCallback, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItemProps {
  id: string;
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({
  id,
  title,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  const headingId = `accordion-heading-${id}`;
  const panelId = `accordion-panel-${id}`;

  return (
    <div className="border-b border-[var(--color-border)] last:border-b-0">
      <h3>
        <button
          id={headingId}
          type="button"
          onClick={toggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full items-center justify-between py-4 px-1 text-left font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors cursor-pointer"
        >
          <span className="text-base">{title}</span>
          <ChevronDown
            className={cn(
              'h-5 w-5 shrink-0 text-[var(--color-muted)] transition-transform duration-200',
              isOpen && 'rotate-180',
            )}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={headingId}
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-[500px] opacity-100 pb-4' : 'max-h-0 opacity-0',
        )}
      >
        <div className="px-1 text-[var(--color-muted)] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: { id: string; title: string; content: string }[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  return (
    <div
      className={cn(
        'rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-5',
        className,
      )}
    >
      {items.map((item) => (
        <AccordionItem key={item.id} id={item.id} title={item.title}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
