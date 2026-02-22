import { useEffect, useRef } from 'react';

interface LinkedInEmbedProps {
  postUrl: string;
}

const LinkedInEmbed = ({ postUrl }: LinkedInEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load LinkedIn embed script if not already loaded
    const scriptId = 'linkedin-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://platform.linkedin.com/in.js';
      script.type = 'text/javascript';
      script.textContent = 'lang: pt_BR';
      document.body.appendChild(script);
    }

    // Re-process embeds when component mounts
    const timer = setTimeout(() => {
      if ((window as any).IN?.parse) {
        (window as any).IN.parse(containerRef.current);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [postUrl]);

  return (
    <div ref={containerRef} className="w-full">
      <iframe
        src={`https://www.linkedin.com/embed/feed/update/${extractUrn(postUrl)}`}
        height="600"
        width="100%"
        frameBorder="0"
        allowFullScreen
        title="LinkedIn Post"
        className="rounded-lg border border-border bg-card"
        style={{ maxWidth: '100%' }}
      />
    </div>
  );
};

/**
 * Extracts the activity URN from a LinkedIn post URL.
 * LinkedIn embed iframe expects the format: urn:li:share:ACTIVITY_ID or urn:li:ugcPost:ACTIVITY_ID
 * But the simplest approach is using the full post URL in the embed src.
 */
function extractUrn(url: string): string {
  // LinkedIn embed URLs work with the activity ID from the URL
  const activityMatch = url.match(/activity-(\d+)/);
  if (activityMatch) {
    return `urn:li:activity:${activityMatch[1]}`;
  }
  // For ugcPost or share URLs
  const shareMatch = url.match(/ugcPost-(\d+)|share-(\d+)/);
  if (shareMatch) {
    const id = shareMatch[1] || shareMatch[2];
    return `urn:li:ugcPost:${id}`;
  }
  // Fallback: return the URL itself
  return url;
}

export default LinkedInEmbed;
