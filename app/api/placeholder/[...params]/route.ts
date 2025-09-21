import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ params: string[] }> }
) {
  const resolvedParams = await params;
  const [width, height] = resolvedParams.params;
  
  // Create a simple SVG placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <circle cx="50%" cy="40%" r="20%" fill="#e5e7eb"/>
      <circle cx="45%" cy="35%" r="3%" fill="#374151"/>
      <circle cx="55%" cy="35%" r="3%" fill="#374151"/>
      <path d="M 40% 50% Q 50% 60% 60% 50%" stroke="#374151" stroke-width="2" fill="none"/>
      <text x="50%" y="80%" text-anchor="middle" fill="#6b7280" font-family="Arial" font-size="12">
        ${width}x${height}
      </text>
    </svg>
  `;

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000',
    },
  });
}
