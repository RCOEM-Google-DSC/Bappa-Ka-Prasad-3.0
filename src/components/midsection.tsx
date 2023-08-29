export default function MiddleSection({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
}
