'use client';

interface YouTubeEmbedProps {
    videoId: string;
}

export default function YouTubeEmbed({ videoId }: YouTubeEmbedProps) {
    return (
        <div className="aspect-video w-full">
            <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
} 