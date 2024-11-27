'use client';

import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/plugins/line-numbers/prism-line-numbers';

interface CodeWindowProps {
  code: string;
  language: string;
  title?: string;
  showLineNumbers?: boolean;
}

export default function CodeWindow({
  code,
  language,
  title,
  showLineNumbers = true,
}: CodeWindowProps) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div className="rounded-lg overflow-hidden mb-6">
      {title && (
        <div className="bg-gray-800 px-4 py-2 text-gray-200 text-sm">
          {title}
        </div>
      )}
      <pre className={`${showLineNumbers ? 'line-numbers' : ''}`}>
        <code className={`language-${language}`}>{code.trim()}</code>
      </pre>
    </div>
  );
}