
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CodePreviewProps {
  content: string;
  fileName: string;
}

export const CodePreview: React.FC<CodePreviewProps> = ({ content, fileName }) => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const getFileExtension = (fileName: string) => {
    const parts = fileName.split('.');
    return parts.length > 1 ? parts[parts.length - 1] : '';
  };

  const getLanguageFromExtension = (extension: string) => {
    const langMap: { [key: string]: string } = {
      js: 'javascript',
      json: 'json',
      md: 'markdown',
      yml: 'yaml',
      yaml: 'yaml',
      dockerfile: 'dockerfile',
      prisma: 'prisma'
    };
    return langMap[extension.toLowerCase()] || 'text';
  };

  const extension = getFileExtension(fileName);
  const language = getLanguageFromExtension(extension);

  return (
    <Card className="bg-slate-900 border-slate-700 h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-slate-100 flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            Preview do Arquivo
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="text-slate-400 hover:text-slate-200 hover:bg-slate-800"
          >
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-300 text-sm">{fileName}</span>
          {extension && (
            <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
              {language}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="bg-slate-950 rounded-b-lg overflow-hidden">
          <pre className="p-4 text-sm text-slate-300 overflow-x-auto max-h-96 overflow-y-auto">
            <code className={`language-${language}`}>
              {content}
            </code>
          </pre>
        </div>
      </CardContent>
    </Card>
  );
};
