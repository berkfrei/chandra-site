import Button from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-serif text-5xl text-brown-deep">404</h1>
      <p className="mt-4 font-serif text-xl italic text-brown-warm">
        This page doesn&rsquo;t exist yet.
      </p>
      <div className="mt-8">
        <Button href="/" variant="ghost">
          Return home
        </Button>
      </div>
    </section>
  );
}
