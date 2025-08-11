type MessageBannerProps = {
  message: string;
};

export default function MessageBanner({ message }: MessageBannerProps) {
  return (
    <p className="text-center mt-2 text-sm text-red-500">{message}</p>
  );
}
