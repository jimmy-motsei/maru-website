import { ReactNode } from 'react';
import { AlertCircle, CheckCircle, Info, Lightbulb } from 'lucide-react';

interface CalloutProps {
  type: 'info' | 'warning' | 'success' | 'tip';
  title?: string;
  children: ReactNode;
}

export function Callout({ type, title, children }: CalloutProps) {
  const styles = {
    info: {
      container: 'bg-blue-50 border-blue-200 text-blue-800',
      icon: Info,
      iconColor: 'text-blue-600',
    },
    warning: {
      container: 'bg-amber-50 border-amber-200 text-amber-800',
      icon: AlertCircle,
      iconColor: 'text-amber-600',
    },
    success: {
      container: 'bg-green-50 border-green-200 text-green-800',
      icon: CheckCircle,
      iconColor: 'text-green-600',
    },
    tip: {
      container: 'bg-purple-50 border-purple-200 text-purple-800',
      icon: Lightbulb,
      iconColor: 'text-purple-600',
    },
  };

  const style = styles[type];
  const IconComponent = style.icon;

  return (
    <div className={`border rounded-lg p-4 my-6 ${style.container}`}>
      <div className="flex items-start">
        <IconComponent className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${style.iconColor}`} />
        <div className="flex-1">
          {title && (
            <h4 className="font-semibold mb-2">{title}</h4>
          )}
          <div className="text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

interface CodeBlockProps {
  children: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ children, language = 'bash', title }: CodeBlockProps) {
  return (
    <div className="my-6">
      {title && (
        <div className="bg-slate-800 text-slate-200 px-4 py-2 text-sm font-medium rounded-t-lg">
          {title}
        </div>
      )}
      <pre className={`bg-slate-900 text-slate-100 p-4 overflow-x-auto ${title ? 'rounded-b-lg' : 'rounded-lg'}`}>
        <code className={`language-${language}`}>{children}</code>
      </pre>
    </div>
  );
}

interface StepProps {
  number: number;
  title: string;
  children: ReactNode;
}

export function Step({ number, title, children }: StepProps) {
  return (
    <div className="flex mb-8">
      <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-semibold text-sm mr-4 mt-1">
        {number}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-slate-900 mb-3">{title}</h3>
        <div className="text-slate-700 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

interface TabsProps {
  tabs: Array<{ id: string; label: string; content: ReactNode }>;
}

export function Tabs({ tabs }: TabsProps) {
  return (
    <div className="my-6">
      <div className="border-b border-slate-200">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className="py-2 px-1 border-b-2 border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 font-medium text-sm"
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-4">
        {tabs[0].content}
      </div>
    </div>
  );
}

interface TableOfContentsProps {
  items: Array<{ id: string; title: string; level: number }>;
}

export function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <div className="bg-slate-50 rounded-lg p-6 my-8">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">Table of Contents</h3>
      <nav>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id} className={`${item.level > 1 ? 'ml-4' : ''}`}>
              <a
                href={`#${item.id}`}
                className="text-slate-600 hover:text-accent text-sm leading-relaxed"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}